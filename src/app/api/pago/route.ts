import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import PagoCurso from '@/emails/PagoCurso';
import SolicitudPagoOlga from '@/emails/SolicitudPagoOlga';

const OLGA_EMAIL = 'olga.orozco@ffci-guatemala.org';

const LOGO_ATTACHMENT = {
  filename: 'logo-ffci.png',
  path: path.join(process.cwd(), 'public/assets/logo-ffci.png'),
  cid: 'logo-ffci',
};

export async function POST(req: NextRequest) {
  try {
    const { email, nombre, whatsapp, curso } = await req.json();

    if (!email || !nombre || !curso) {
      return NextResponse.json({ error: 'Datos incompletos.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.ffci-guatemala.org',
      port: 465,
      secure: true,
      auth: {
        user: process.env.FFCI_EMAIL,
        pass: process.env.FFCI_PASSWORD,
      },
    });

    const html = await render(PagoCurso({ nombre, curso, logoSrc: 'cid:logo-ffci' }));

    await transporter.sendMail({
      from: `"FFCI Guatemala" <${process.env.FFCI_EMAIL}>`,
      to: email,
      subject: 'Solicitud de pago recibida 🎓',
      html,
      attachments: [LOGO_ATTACHMENT],
    });

    // Notification email to Olga
    const htmlOlga = await render(
      SolicitudPagoOlga({ nombre, whatsapp: whatsapp ?? '', email, curso, logoSrc: 'cid:logo-ffci' })
    );

    await transporter.sendMail({
      from: `"FFCI Guatemala" <${process.env.FFCI_EMAIL}>`,
      to: OLGA_EMAIL,
      subject: 'Solicitud para generar enlace de pago',
      html: htmlOlga,
      attachments: [LOGO_ATTACHMENT],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error en /api/pago:', err);
    return NextResponse.json({ error: 'No se pudo enviar el correo. Intenta de nuevo.' }, { status: 500 });
  }
}
