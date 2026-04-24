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

interface PagoCursoProps {
  nombre: string;
  curso: string;
  paymentUrl: string;
  logoSrc?: string;
}

const NAVY = '#003366';
const SKY = '#4A90E2';

export default function PagoCurso({ nombre, curso, paymentUrl, logoSrc }: PagoCursoProps) {
  const logo = logoSrc ?? `${BASE_URL}/assets/logo-ffci.png`;
  return (
    <Html lang="es">
      <Head />
      <Preview>Completa tu compra 🎓 — {curso}</Preview>
      <Body style={{ backgroundColor: '#f4f6f9', fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', marginTop: '32px', marginBottom: '32px' }}>

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

          <Section style={{ padding: '40px' }}>
            <Heading style={{ color: NAVY, fontSize: '22px', marginTop: 0 }}>
              Completa tu compra 🎓
            </Heading>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Hola <strong>{nombre}</strong>,
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Estás a un paso de acceder a tu curso:
            </Text>

            <Section style={{ backgroundColor: '#f4f6f9', borderRadius: '8px', padding: '20px 24px', margin: '8px 0 28px' }}>
              <Text style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: NAVY }}>
                {curso}
              </Text>
            </Section>

            <Button
              href={paymentUrl}
              style={{
                backgroundColor: SKY,
                color: '#ffffff',
                borderRadius: '50px',
                padding: '14px 32px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              PAGAR AHORA
            </Button>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6', marginTop: '28px' }}>
              Una vez completes el pago, recibirás acceso inmediato.
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
              Si tienes dudas, puedes responder este correo.
            </Text>

            <Text style={{ color: '#444', fontSize: '16px', lineHeight: '1.6', fontWeight: 700 }}>
              ¡Nos vemos dentro!
            </Text>

            <Hr style={{ borderColor: '#e8e8e8', margin: '32px 0' }} />

            <Text style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
              Este correo fue generado automáticamente. Si no solicitaste esta información, puedes ignorarlo.
            </Text>
          </Section>

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
