import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import PagoCurso from '@/emails/PagoCurso';

const LOGO_ATTACHMENT = {
  filename: 'logo-ffci.png',
  path: path.join(process.cwd(), 'public/assets/logo-ffci.png'),
  cid: 'logo-ffci',
};

export async function POST(req: NextRequest) {
  try {
    const { email, nombre, curso } = await req.json();

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

    const paymentUrl = process.env.PAYMENT_URL ?? 'https://ffci-guatemala.org';
    const html = await render(PagoCurso({ nombre, curso, paymentUrl, logoSrc: 'cid:logo-ffci' }));

    await transporter.sendMail({
      from: `"FFCI Guatemala" <${process.env.FFCI_EMAIL}>`,
      to: email,
      subject: 'Completa tu compra 🎓',
      html,
      attachments: [LOGO_ATTACHMENT],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error en /api/pago:', err);
    return NextResponse.json({ error: 'No se pudo enviar el correo. Intenta de nuevo.' }, { status: 500 });
  }
}
