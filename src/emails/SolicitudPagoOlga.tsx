import {
  Body,
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

interface SolicitudPagoOlgaProps {
  nombre: string;
  whatsapp: string;
  email: string;
  curso: string;
  logoSrc?: string;
}

const NAVY = '#003366';

export default function SolicitudPagoOlga({
  nombre,
  whatsapp,
  email,
  curso,
  logoSrc,
}: SolicitudPagoOlgaProps) {
  const logo = logoSrc ?? `${BASE_URL}/assets/logo-ffci.png`;

  return (
    <Html lang="es">
      <Head />
      <Preview>Solicitud para generar enlace de pago — {nombre}</Preview>
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
              Solicitud para generar enlace de pago
            </Heading>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Hola, <strong>Olga</strong>:
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Hemos recibido una nueva solicitud de una persona interesada en adquirir un curso en línea.
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              ¿Podrías apoyarnos generando y enviando el enlace de pago correspondiente? A continuación, te comparto los datos de la persona solicitante:
            </Text>

            {/* Details card */}
            <Section style={{ backgroundColor: '#f4f6f9', borderRadius: '8px', padding: '24px', margin: '24px 0' }}>
              <Text style={{ margin: '0 0 12px', fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Nombre completo:</strong>&nbsp;
                {nombre}
              </Text>
              <Text style={{ margin: '0 0 12px', fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Teléfono:</strong>&nbsp;
                {whatsapp || '—'}
              </Text>
              <Text style={{ margin: '0 0 12px', fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Correo electrónico:</strong>&nbsp;
                {email}
              </Text>
              <Text style={{ margin: 0, fontSize: '15px', color: '#333' }}>
                <strong style={{ color: NAVY }}>Curso solicitado:</strong>&nbsp;
                {curso}
              </Text>
            </Section>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Muchas gracias por tu apoyo.
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6', marginBottom: 0 }}>
              Saludos cordiales.
            </Text>

            <Hr style={{ borderColor: '#e8e8e8', margin: '32px 0' }} />

            <Text style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              Este correo fue generado automáticamente, por favor no respondas a este mensaje.
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
