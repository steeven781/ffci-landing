'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ open, onClose }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [errors, setErrors] = useState<{ email?: string; nombre?: string }>({});

  if (!open) return null;

  function validate() {
    const e: { email?: string; nombre?: string } = {};
    if (!email.trim()) {
      e.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = 'Ingresa un email válido';
    }
    if (!nombre.trim()) e.nombre = 'El nombre es obligatorio';
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    sessionStorage.setItem('pago_email', email);
    sessionStorage.setItem('pago_nombre', nombre);
    sessionStorage.setItem('pago_whatsapp', whatsapp);
    router.push('/pago');
  }

  function handleWhatsapp(ev: React.ChangeEvent<HTMLInputElement>) {
    setWhatsapp(ev.target.value.replace(/\D/g, ''));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* panel */}
      <div
        className="relative z-10 w-full max-w-[1100px] md:max-w-[1350px] bg-white rounded-[28px] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#08284F] hover:opacity-60 transition-opacity z-10"
          aria-label="Cerrar"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* layout: stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col justify-between gap-10 px-8 pt-12 pb-8 sm:px-12 sm:pt-16 sm:pb-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-28">
            <h2 className="font-heading text-[#08284F] leading-[1.1] text-left text-[38px] sm:text-[40px] lg:text-[44px] xl:text-[55px]">
              Estás a un paso de
              <br />
              comenzar tu curso
            </h2>
            {/* hide icon on mobile to save space */}
            <div className="hidden sm:block relative w-[130px] h-[130px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
              <Image
                src="/assets/Group 79@2x.png"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center px-8 pb-12 sm:px-12 sm:pb-14 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-28">
            <p className="font-body text-[#4A90E2] text-[16px] sm:text-[18px] lg:text-[20px] mb-7 leading-snug">
              Completa los siguientes datos para completar tu compra:
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className="w-full h-[56px] sm:h-[62px] lg:h-[70px] rounded-[14px] bg-[#F2F4F7] px-5 font-body text-[16px] sm:text-[17px] lg:text-[19px] text-[#08284F] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
                {errors.email && (
                  <span className="font-body text-[13px] text-red-500">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Nombre + WhatsApp — stacked on phone, side-by-side on sm+ */}
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-3">
                <div className="flex flex-col gap-1.5">
                  <input
                    type="text"
                    placeholder="Nombre completo*"
                    value={nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      setErrors((prev) => ({ ...prev, nombre: undefined }));
                    }}
                    className="w-full h-[56px] sm:h-[62px] lg:h-[70px] rounded-[14px] bg-[#F2F4F7] px-5 font-body text-[16px] sm:text-[17px] lg:text-[19px] text-[#08284F] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[#4A90E2]"
                  />
                  {errors.nombre && (
                    <span className="font-body text-[13px] text-red-500">
                      {errors.nombre}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="WhatsApp (4141 4141)"
                  value={whatsapp}
                  onChange={handleWhatsapp}
                  className="w-full h-[56px] sm:h-[62px] lg:h-[70px] rounded-[14px] bg-[#F2F4F7] px-5 font-body text-[16px] sm:text-[17px] lg:text-[19px] text-[#08284F] placeholder:text-[#9CA3AF] outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
              </div>

              <p className="font-body text-[13px] sm:text-[14px] text-[#6B7280] leading-relaxed">
                Al ingresar su información, usted acepta que sus datos se
                guarden de acuerdo con nuestros términos y política de
                privacidad.
              </p>

              <button
                type="submit"
                className="w-full h-[58px] sm:h-[64px] lg:h-[72px] bg-[#4A90E2] text-white font-body font-extrabold text-[16px] sm:text-[18px] lg:text-[20px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200 mt-1"
              >
                Continuar con el pago
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
