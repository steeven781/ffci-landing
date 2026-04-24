'use client';

import { useState, useEffect } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '14:30', '15:00', '15:30',
];

function isWeekend(dateStr: string): boolean {
  const day = new Date(`${dateStr}T12:00:00`).getDay();
  return day === 0 || day === 6;
}

export default function AgendaPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fecha, setFecha] = useState('');
  const [ocupados, setOcupados] = useState<string[]>([]);
  const [loadingFecha, setLoadingFecha] = useState(false);
  const [fechaEsFinde, setFechaEsFinde] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const { executeRecaptcha } = useGoogleReCaptcha();

  function resetForm() {
    setSuccess(false);
    setFecha('');
    setOcupados([]);
    setFechaEsFinde(false);
    setError(null);
    setFormKey((k) => k + 1);
  }

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(resetForm, 20_000);
    return () => clearTimeout(timer);
  }, [success]);

  const today = new Date().toISOString().split('T')[0];

  async function handleFechaChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setFecha(val);
    setOcupados([]);
    if (!val) { setFechaEsFinde(false); return; }
    if (isWeekend(val)) { setFechaEsFinde(true); return; }
    setFechaEsFinde(false);
    setLoadingFecha(true);
    try {
      const res = await fetch(`/api/agenda/disponibilidad?fecha=${val}`);
      const data = await res.json();
      if (res.ok) setOcupados(data.ocupados ?? []);
    } catch {
      // si falla silenciosamente, todos los slots quedan disponibles
    } finally {
      setLoadingFecha(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!executeRecaptcha) {
      setError('Error de seguridad. Por favor recarga la página.');
      setLoading(false);
      return;
    }

    const form = e.currentTarget;
    const recaptchaToken = await executeRecaptcha('agenda_submit');

    const formData = new FormData(form);
    const payload = {
      email: formData.get('email'),
      nombre: formData.get('nombre'),
      apellido: formData.get('apellido'),
      fecha: formData.get('fecha'),
      hora: formData.get('hora'),
      recaptchaToken,
    };

    try {
      const res = await fetch('/api/agenda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Ocurrió un error. Intenta de nuevo.');
      } else {
        setSuccess(true);
      }
    } catch {
      setError('No se pudo conectar con el servidor. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <section
          className="mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] overflow-hidden flex items-center pt-[160px] md:pt-[200px] pb-20"
          style={{
            background: 'linear-gradient(180deg, #003366 0%, #051D3B 100%)',
            borderRadius: '65px',
          }}
          aria-label="Agenda una cita"
        >
          <div className="container-ffci relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
              {/* Left: Text */}
              <div className="flex flex-col">
                <h1 className="font-heading text-[clamp(38px,5vw,105px)] text-white leading-[1.05]">
                  Da el siguiente
                  <br />
                  paso para una
                  <br />
                  transformación
                </h1>
                <p className="mt-10 font-body text-[clamp(14px,1.5vw,32px)] text-white leading-relaxed">
                  Queremos acompañarte. Escríbenos y
                  <br />
                  comienza tu camino hacia una vida financiera
                  <br />y un liderazgo con propósito.
                </p>
              </div>

              {/* Right: Form card */}
              <div className="bg-white rounded-[40px] p-10 xl:p-14 w-full max-w-[840px] ml-auto">
                <h2 className="font-heading text-[clamp(28px,2.5vw,42px)] text-navy mb-3">
                  Agenda una cita
                </h2>
                <p className="font-body text-[clamp(14px,1.1vw,18px)] text-sky mb-8 leading-relaxed">
                  Agenda una sesión gratuita de 30 minutos y descubre cómo
                  transformar tu manera de administrar y liderar.
                </p>

                {success ? (
                  <div className="flex flex-col items-center text-center gap-4 py-8">
                    <p className="font-heading text-[28px] text-navy">
                      ¡Cita agendada!
                    </p>
                    <p className="font-body text-[16px] text-sky">
                      Revisa tu correo electrónico para confirmar los detalles.
                    </p>
                  </div>
                ) : (
                  <form key={formKey} className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email*"
                      className="h-14 px-5 rounded-2xl bg-[#F2F4F7] font-body text-body-md text-navy placeholder:text-navy/50 focus:outline-none focus:ring-2 focus:ring-sky/30 transition-all border-none"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Nombre*"
                        className="h-14 px-5 rounded-2xl bg-[#F2F4F7] font-body text-body-md text-navy placeholder:text-navy/50 focus:outline-none focus:ring-2 focus:ring-sky/30 transition-all border-none"
                      />
                      <input
                        type="text"
                        name="apellido"
                        required
                        placeholder="Apellido*"
                        className="h-14 px-5 rounded-2xl bg-[#F2F4F7] font-body text-body-md text-navy placeholder:text-navy/50 focus:outline-none focus:ring-2 focus:ring-sky/30 transition-all border-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="date"
                        name="fecha"
                        lang="es-GT"
                        required
                        min={today}
                        value={fecha}
                        onChange={handleFechaChange}
                        className="h-14 px-5 rounded-2xl bg-[#F2F4F7] font-body text-body-md text-navy focus:outline-none focus:ring-2 focus:ring-sky/30 transition-all border-none"
                      />
                      <select
                        name="hora"
                        required
                        defaultValue=""
                        disabled={!fecha || fechaEsFinde || loadingFecha || (!!fecha && !loadingFecha && ocupados.length === timeSlots.length)}
                        className="h-14 px-5 rounded-2xl bg-[#F2F4F7] font-body text-body-md text-navy focus:outline-none focus:ring-2 focus:ring-sky/30 transition-all border-none disabled:opacity-50"
                      >
                        <option value="" disabled>
                          {fechaEsFinde
                            ? 'Solo días hábiles'
                            : loadingFecha
                            ? 'Cargando Disponibilidad...'
                            : fecha && !loadingFecha && ocupados.length === timeSlots.length
                            ? 'No hay horarios disponibles'
                            : 'Hora*'}
                        </option>
                        {timeSlots
                          .filter((slot) => !ocupados.includes(slot))
                          .map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                      </select>
                    </div>

                    {fechaEsFinde && (
                      <p className="font-body text-[13px] text-amber-600 -mt-2">
                        Las citas son de lunes a viernes. Por favor selecciona un día hábil.
                      </p>
                    )}
                    {!fechaEsFinde && fecha && !loadingFecha && ocupados.length === timeSlots.length && (
                      <p className="font-body text-[13px] text-amber-600 -mt-2">
                        No hay horarios disponibles para este día. Por favor selecciona otra fecha.
                      </p>
                    )}

                    <p className="font-body text-[14px] text-navy/70 leading-relaxed">
                      Al ingresar su información, usted acepta que sus datos se
                      guarden de acuerdo con nuestros términos y política de
                      privacidad.
                    </p>

                    {error && (
                      <p className="font-body text-[14px] text-red-500 text-center">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="h-16 w-full bg-sky text-white font-body font-extrabold text-[16px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Enviando...' : 'CONTINUAR'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
