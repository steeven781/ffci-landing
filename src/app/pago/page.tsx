'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PagoPage() {
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  useEffect(() => {
    setEmail(sessionStorage.getItem('pago_email') ?? '');
    setWhatsapp(sessionStorage.getItem('pago_whatsapp') ?? '');
  }, []);

  function handleEmail() {
    // TODO: trigger email send with payment link
    alert(`Se enviará el link de pago a: ${email}`);
  }

  function handleWhatsApp() {
    const msg = encodeURIComponent(
      `Hola, quiero recibir mi link de pago. Mi WhatsApp es ${whatsapp}.`
    );
    window.open(`https://wa.me/50200000000?text=${msg}`, '_blank');
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden px-6 py-[80px] md:py-[120px]">
          {/* Title */}
          <h1
            className="font-heading text-white text-center mb-14 md:mb-20 leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            Elige como deseas pagar
          </h1>

          <div className="max-w-[860px] mx-auto flex flex-col gap-5">
            {/* Option 1 — Email */}
            <div className="bg-white rounded-[24px] px-8 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h2
                  className="font-body text-[#003366] text-[22px] md:text-[26px] leading-snug"
                  style={{ fontWeight: 600 }}
                >
                  Recibir link de pago por Email
                </h2>
                <p className="font-body font-normal text-[#4A90E2] text-[15px] md:text-[17px] leading-snug max-w-[420px]">
                  Te enviamos el link directo para pagar y así tienes más seguridad
                </p>
              </div>
              <button
                onClick={handleEmail}
                className="shrink-0 h-[52px] px-8 text-white font-body font-extrabold text-[14px] tracking-widest uppercase hover:brightness-110 transition-all duration-200"
                style={{
                  background: '#4A90E2',
                  borderRadius: '38px',
                }}
              >
                Enviar a mi correo
              </button>
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
                <span className="font-body font-extrabold text-white/40 text-[20px]">|</span>
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
