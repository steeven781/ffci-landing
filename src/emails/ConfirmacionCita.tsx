import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://ffci-guatemala.org';

interface ConfirmacionCitaProps {
  nombre: string;
  apellido: string;
  fecha: string;   // "2026-04-15"
  hora: string;    // "10:00"
  meetUrl: string;
  logoSrc?: string;
}

const NAVY = '#003366';
const SKY  = '#0099CC';

export default function ConfirmacionCita({
  nombre,
  apellido,
  fecha,
  hora,
  meetUrl,
  logoSrc,
}: ConfirmacionCitaProps) {
  const logo = logoSrc ?? `${BASE_URL}/assets/logo-ffci.png`;
  const fechaFormateada = new Date(`${fecha}T12:00:00`).toLocaleDateString('es-GT', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const fechaDDMMYYYY = fecha.split('-').reverse().join('/');

  return (
    <Html lang="es">
      <Head />
      <Preview>Tu cita con FFCI Guatemala está confirmada — {fechaFormateada} a las {hora}</Preview>
      <Body style={{ backgroundColor: '#f4f6f9', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', marginTop: '32px', marginBottom: '32px' }}>

          {/* Header */}
          <Section style={{ backgroundColor: NAVY, padding: '28px 40px' }}>
            <Row>
              <Column>
                <Heading style={{ color: '#ffffff', fontSize: '24px', margin: 0, fontWeight: 700 }}>
                  FFCI Guatemala
                </Heading>
                <Text style={{ color: '#ffffff', opacity: 0.8, margin: '8px 0 0', fontSize: '14px' }}>
                  Finanzas · Liderazgo · Propósito
                </Text>
              </Column>
              <Column style={{ textAlign: 'right', verticalAlign: 'middle' }}>
                <Img
                  src={logo}
                  alt="FFCI Guatemala"
                  width={200}
                  height={36}
                  style={{ borderRadius: '6px', background: '#ffffff', padding: '6px 10px' }}
                />
              </Column>
            </Row>
          </Section>

          {/* Body */}
          <Section style={{ padding: '40px' }}>
            <Heading style={{ color: NAVY, fontSize: '22px', marginTop: 0 }}>
              ¡Tu cita está confirmada, {nombre}!
            </Heading>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Hola <strong>{nombre} {apellido}</strong>, hemos agendado tu consulta gratuita de 30 minutos con uno de nuestros expertos. Aquí están los detalles:
            </Text>

            {/* Details card */}
            <Section style={{ backgroundColor: '#f4f6f9', borderRadius: '8px', padding: '24px', margin: '24px 0' }}>
              <Text style={{ margin: '0 0 12px', fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Fecha:</strong>&nbsp;
                {fechaDDMMYYYY} — {fechaFormateada}
              </Text>
              <Text style={{ margin: '0 0 12px', fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Hora:</strong>&nbsp;
                {hora} (hora Guatemala)
              </Text>
              <Text style={{ margin: 0, fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Duración:</strong>&nbsp;
                30 minutos
              </Text>
            </Section>

            {meetUrl ? (
              <>
                <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
                  La reunión se realizará por Google Meet. Únete usando el siguiente enlace:
                </Text>

                <Button
                  href={meetUrl}
                  style={{
                    backgroundColor: SKY,
                    color: '#ffffff',
                    borderRadius: '50px',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginTop: '8px',
                  }}
                >
                  Unirse a Google Meet
                </Button>

                <Text style={{ color: '#888', fontSize: '13px', marginTop: '16px' }}>
                  O copia este enlace en tu navegador:<br />
                  <span style={{ color: SKY }}>{meetUrl}</span>
                </Text>
              </>
            ) : (
              <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
                Recibirás el enlace de la reunión en el evento de tu Google Calendar.
              </Text>
            )}

            <Hr style={{ borderColor: '#e8e8e8', margin: '32px 0' }} />

            <Text style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              Si no puedes asistir, por favor contáctanos con anticipación. Este correo fue generado automáticamente, por favor no respondas a este mensaje.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ backgroundColor: NAVY, padding: '20px 40px' }}>
            <Text style={{ color: '#ffffff', opacity: 0.7, fontSize: '12px', margin: 0, textAlign: 'center' }}>
              © {new Date().getFullYear()} FFCI Guatemala. Todos los derechos reservados.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
