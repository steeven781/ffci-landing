import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import CursosGrid from "@/components/sections/CursosGrid";
import { courses } from "./data";

export const metadata: Metadata = {
  title: "Cursos y Capacitación – FFCI Guatemala",
  description:
    "Programas de formación ejecutiva y técnica para profesionales y empresas en Guatemala. Liderazgo, gestión de proyectos, finanzas y más.",
};

export default function CursosPage() {
  const activeCourses = courses.filter((course) => course.status === "active");

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[55vh] flex flex-col items-center justify-center text-center pt-[160px] md:pt-[220px] pb-[100px] md:pb-[140px]"
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
            <h1 className="font-heading text-[clamp(42px,6.5vw,90px)] text-white leading-[1.1]">
              <span className="block">Educate con propósito</span>
              <span className="block">y aprende a tu ritmo</span>
            </h1>

            <p className="mt-8 pt-[30px] md:pt-[40px] font-body text-[18px] leading-relaxed md:text-[26px] lg:text-[35px] lg:leading-[44px] text-white text-center w-full max-w-[1130px] mx-auto">
              Aprende, aplica y crece con formación digital diseñada para
              generar impacto real en tu liderazgo y finanzas.
            </p>

            <div className="mt-14 pt-[30px]">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center w-[317px] h-[75px] bg-[#4A90E2] text-white font-body font-extrabold text-[24px] tracking-normal uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
              >
                Tomar asesoría
              </Link>
            </div>
          </div>
        </section>

        {/* Courses grid — 4 per row */}
        <section id="cursos" className="section-padding bg-white">
          <div className="container-ffci">
            <CursosGrid courses={activeCourses} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
