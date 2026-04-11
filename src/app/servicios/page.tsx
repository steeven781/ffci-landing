import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoursesFilter from '@/components/sections/CoursesFilter';
import Image from 'next/image';
import { courses } from '@/data/courses';

export const metadata: Metadata = {
  title: 'Cursos y Capacitación – FFCI Guatemala',
  description:
    'Programas de formación ejecutiva y técnica para profesionales y empresas en Guatemala. Liderazgo, gestión de proyectos, finanzas y más.',
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[55vh] flex flex-col items-center justify-center text-center pt-[112px] md:pt-[154px] pb-[70px] md:pb-[98px]"
          aria-label="Sección de cursos"
        >
          <Image
            src="/assets/ffci-bg-hero.png"
            alt=""
            fill
            className="object-cover object-center pointer-events-none"
            aria-hidden="true"
            priority
          />

          <div className="container-ffci relative z-10">
            <h1 className="font-heading text-[clamp(29px,4.5vw,92px)] text-white leading-[1.1]">
              <span className="block">Soluciones formativas</span>
              <span className="block">que transforman vidas</span>
            </h1>

            <p className="mt-14 pt-[21px] md:pt-[28px] font-body text-[13px] leading-relaxed md:text-[18px] lg:text-[30px] lg:leading-[34px] text-white text-center w-full max-w-[1130px] mx-auto">
              Brindamos herramientas prácticas y acompañamiento cercano para
              integrar fe, finanzas y liderazgo, generando impacto real en la
              vida y los negocios.
            </p>

            <div className="mt-10 pt-[21px] flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center w-[222px] h-[52px] bg-[#4A90E2] text-white font-body font-extrabold text-[17px] tracking-normal uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
              >
                Adquirir un curso
              </Link>
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center w-[222px] h-[52px] bg-white text-[#4A90E2] font-body font-extrabold text-[17px] tracking-normal uppercase rounded-full hover:bg-white/90 transition-all duration-200 shadow-card"
              >
                Tomar asesoría
              </Link>
            </div>
          </div>
        </section>

        {/* Filter pills + Courses grid */}
        <div id="cursos">
          <CoursesFilter courses={courses} />
        </div>
      </main>
      <Footer />
    </>
  );
}
