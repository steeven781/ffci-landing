import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ConfirmacionCita from '@/emails/ConfirmacionCita';


export async function POST(req: NextRequest) {
  try {
    const { email, nombre, apellido, fecha, hora, recaptchaToken } = await req.json();

    if (!recaptchaToken) {
      return NextResponse.json({ error: 'Verificación de seguridad requerida.' }, { status: 400 });
    }

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: recaptchaToken,
      }),
    });
    const recaptchaData = await recaptchaRes.json();
    console.log('reCAPTCHA result:', recaptchaData);

    const isDev = process.env.NODE_ENV !== 'production';
    if (!isDev && (!recaptchaData.success || recaptchaData.score < 0.5)) {
      return NextResponse.json({ error: 'No se pudo verificar tu solicitud. Intenta de nuevo.' }, { status: 400 });
    }

    if (!email || !nombre || !apellido || !fecha || !hora) {
      return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
    }

    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const calendarId = process.env.GOOGLE_CALENDAR_ID;

    if (!privateKey || !clientEmail || !calendarId) {
      return NextResponse.json({ error: 'Configuración del servidor incompleta.' }, { status: 500 });
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const startDateTime = new Date(`${fecha}T${hora}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 30 * 60 * 1000);

    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: `Consulta gratuita — ${nombre} ${apellido}`,
        description: `Solicitado por: ${email}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'America/Guatemala',
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'America/Guatemala',
        },
      },
    });

    const meetUrl = event.data.hangoutLink ?? '';

    console.log('Evento creado, meetUrl:', meetUrl);

    // Send confirmation email
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.ffci-guatemala.org',
        port: 465,
        secure: true,
        auth: {
          user: process.env.FFCI_EMAIL,
          pass: process.env.FFCI_PASSWORD,
        },
      });

      const html = await render(
        ConfirmacionCita({ nombre, apellido, fecha, hora, meetUrl })
      );

      await transporter.sendMail({
        from: `"FFCI Guatemala" <${process.env.FFCI_EMAIL}>`,
        to: email,
        subject: `Tu cita con FFCI Guatemala — ${fecha.split('-').reverse().join('/')} a las ${hora}`,
        html,
      });

      console.log('Email enviado a:', email);
    } catch (emailErr) {
      console.error('Error enviando email:', emailErr);
      // No bloqueamos la respuesta si el email falla
    }

    return NextResponse.json({ success: true, eventId: event.data.id });
  } catch (err) {
    console.error('Error en /api/agenda:', err);
    return NextResponse.json({ error: 'No se pudo agendar la cita. Intenta de nuevo.' }, { status: 500 });
  }
}
