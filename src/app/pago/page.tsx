'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const MAX_RETRIES = 5;
const RESEND_COOLDOWN_MS = 30_000;

export default function PagoPage() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [curso, setCurso] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [cooldownLeft, setCooldownLeft] = useState(0);

  useEffect(() => {
    setEmail(sessionStorage.getItem('pago_email') ?? '');
    setNombre(sessionStorage.getItem('pago_nombre') ?? '');
    setWhatsapp(sessionStorage.getItem('pago_whatsapp') ?? '');
    setCurso(sessionStorage.getItem('pago_curso') ?? '');

    const saved = parseInt(sessionStorage.getItem('pago_retries') ?? '0', 10);
    setRetryCount(saved);
    if (saved > 0) setEmailSent(true);

    const lastSent = parseInt(
      sessionStorage.getItem('pago_last_sent') ?? '0',
      10
    );
    if (lastSent) {
      const remaining = RESEND_COOLDOWN_MS - (Date.now() - lastSent);
      if (remaining > 0) setCooldownLeft(Math.ceil(remaining / 1000));
    }
  }, []);

  useEffect(() => {
    if (cooldownLeft <= 0) return;
    const timer = setTimeout(() => setCooldownLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldownLeft]);

  async function sendEmail() {
    setEmailLoading(true);
    setEmailError(null);
    try {
      const res = await fetch('/api/pago', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, nombre, whatsapp, curso }),
      });
      const data = await res.json();
      if (!res.ok) {
        setEmailError(data.error ?? 'Ocurrió un error. Intenta de nuevo.');
      } else {
        const next = retryCount + 1;
        setRetryCount(next);
        setEmailSent(true);
        setCooldownLeft(RESEND_COOLDOWN_MS / 1000);
        sessionStorage.setItem('pago_retries', String(next));
        sessionStorage.setItem('pago_last_sent', String(Date.now()));
      }
    } catch {
      setEmailError('No se pudo conectar con el servidor. Intenta de nuevo.');
    } finally {
      setEmailLoading(false);
    }
  }

  const retriesLeft = MAX_RETRIES - retryCount;
  const canResend =
    emailSent && retriesLeft > 0 && cooldownLeft === 0 && !emailLoading;
  const limitReached = emailSent && retriesLeft <= 0;

  function handleWhatsApp() {
    const cursoText = curso || 'el curso';
    const msg = encodeURIComponent(
      `Hola 👋\nEstoy interesado/a en el curso ${cursoText}.\n\n¿Podrías enviarme el link de pago para poder adquirirlo?\n\nGracias 🙌`
    );
    window.open(`https://wa.me/50259749230?text=${msg}`, '_blank');
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden px-6 py-[80px] md:py-[120px]">
          <h1
            className="font-heading text-white text-center mb-14 md:mb-20 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Elige como deseas pagar
          </h1>

          <div className="max-w-[860px] mx-auto flex flex-col gap-5">
            {/* Option 1 — Email */}
            <div className="bg-white rounded-[24px] px-8 py-8 md:px-12 md:py-10 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h2
                    className="font-body text-[#003366] text-[22px] md:text-[26px] leading-snug"
                    style={{ fontWeight: 600 }}
                  >
                    Recibir link de pago por Email
                  </h2>
                  <p className="font-body font-normal text-[#4A90E2] text-[15px] md:text-[17px] leading-snug max-w-[420px]">
                    Te enviamos el link directo para pagar y así tienes más
                    seguridad
                  </p>
                  {emailError && (
                    <p className="font-body text-[13px] text-red-500">
                      {emailError}
                    </p>
                  )}
                  {emailSent && !emailError && (
                    <p className="font-body text-[13px] text-green-600">
                      ¡Correo enviado! Revisa tu bandeja de entrada.
                    </p>
                  )}
                </div>
                <button
                  onClick={sendEmail}
                  disabled={emailLoading || emailSent}
                  className="shrink-0 h-[52px] px-8 text-white font-body font-extrabold text-[14px] tracking-widest uppercase hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#4A90E2', borderRadius: '38px' }}
                >
                  {emailLoading
                    ? 'Enviando...'
                    : emailSent
                      ? 'Enviado ✓'
                      : 'Enviar a mi correo'}
                </button>
              </div>

              {/* Resend row */}
              {emailSent && (
                <div className="flex items-center gap-2 pt-1">
                  <span className="font-body text-[13px] text-[#6B7280]">
                    ¿No recibiste el correo?
                  </span>
                  {limitReached ? (
                    <span className="font-body text-[13px] text-[#9CA3AF]">
                      Límite de reenvíos alcanzado — usa WhatsApp si necesitas
                      ayuda.
                    </span>
                  ) : cooldownLeft > 0 ? (
                    <span className="font-body text-[13px] text-[#9CA3AF]">
                      Reenviar en {cooldownLeft}s ({retriesLeft}{' '}
                      {retriesLeft === 1 ? 'intento' : 'intentos'} restante
                      {retriesLeft === 1 ? '' : 's'})
                    </span>
                  ) : (
                    <button
                      onClick={sendEmail}
                      disabled={emailLoading}
                      className="font-body font-bold text-[13px] text-[#4A90E2] underline underline-offset-2 hover:opacity-70 transition-opacity disabled:opacity-40"
                    >
                      {emailLoading
                        ? 'Reenviando...'
                        : `Reenviar (${retriesLeft} ${retriesLeft === 1 ? 'intento' : 'intentos'} restante${retriesLeft === 1 ? '' : 's'})`}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Option 2 — WhatsApp */}
            <div className="px-8 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h2
                  className="font-body text-white text-[22px] md:text-[26px] leading-snug"
                  style={{ fontWeight: 600 }}
                >
                  Recibir link de pago por WhatsApp
                </h2>
                <p className="font-body font-normal text-white/70 text-[15px] md:text-[17px] leading-snug max-w-[420px]">
                  Habla directo con nosotros y recibes tu link de pago
                </p>
              </div>
              <button
                onClick={handleWhatsApp}
                className="shrink-0 h-[52px] px-8 bg-white text-[#08284F] font-body font-extrabold text-[14px] tracking-widest uppercase hover:brightness-95 transition-all duration-200"
                style={{ borderRadius: '38px' }}
              >
                Ir a WhatsApp
              </button>
            </div>

            {/* Divider + trust badges */}
            <div className="border-t border-white/20 pt-6 flex justify-end">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-3">
                  <Image
                    src="/assets/pago-seguro.png"
                    alt="Pago seguro"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-body font-extrabold text-white text-[17px] md:text-[20px]">
                    Pago seguro
                  </span>
                </span>
                <span className="font-body font-extrabold text-white/40 text-[20px]">
                  |
                </span>
                <span className="flex items-center gap-3">
                  <Image
                    src="/assets/acceso-inmediato.png"
                    alt="Acceso inmediato"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-body font-extrabold text-white text-[17px] md:text-[20px]">
                    Acceso inmediato
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
