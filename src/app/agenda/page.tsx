import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Agenda una Cita – FFCI Guatemala',
  description:
    'Programa una consulta gratuita con nuestros expertos. Cuéntanos sobre tu empresa y te ayudaremos a encontrar la mejor solución.',
};

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className="mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] overflow-hidden flex items-center pt-[160px] md:pt-[200px] pb-20"
          style={{ background: 'linear-gradient(180deg, #003366 0%, #051D3B 100%)', borderRadius: '65px' }}
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

                <form className="flex flex-col gap-5" action="#" method="POST">
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

                  <p className="font-body text-[14px] text-navy/70 leading-relaxed">
                    Al ingresar su información, usted acepta que sus datos se
                    guarden de acuerdo con nuestros términos y política de
                    privacidad.
                  </p>

                  <button
                    type="submit"
                    className="h-16 w-full bg-sky text-white font-body font-extrabold text-[16px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200"
                  >
                    CONTINUAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
