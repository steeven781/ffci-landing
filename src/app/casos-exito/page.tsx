import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { cases } from "./data";

export const metadata: Metadata = {
  title: "Casos de Éxito – FFCI Guatemala",
  description:
    "Conoce las historias de líderes y empresarios que han transformado su manera de administrar, liderar y vivir su propósito.",
};

export default function CasosExitoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — same visual style as Hero.tsx */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[55vh] flex flex-col justify-center items-center text-center pt-60 pb-12"
          aria-label="Casos de éxito"
        >
          <Image
            src="/assets/ffci-bg-hero.png"
            alt=""
            fill
            className="object-cover object-center pointer-events-none"
            aria-hidden="true"
            priority
          />
          <div className="container-ffci relative z-10 flex flex-col items-center text-center">
            <h1 className="font-heading text-[clamp(42px,6.5vw,90px)] text-white leading-[1.1]">
              Historias de transformación
              <br />
              que trascienden
            </h1>
            <p className="mt-20 font-body text-[16px] leading-relaxed md:text-[18px] lg:text-[28px] text-white max-w-[1050px]">
              Conoce las historias de líderes y empresarios que han transformado
              su manera
              <br />
              de administrar, liderar y vivir su propósito a través de nuestra
              formación y
              <br />
              acompañamiento
            </p>
            <div className="mt-10">
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center h-[60px] px-14 bg-[#4A90E2] text-white font-body font-extrabold text-[18px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
              >
                Agendar Asesoría
              </Link>
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className="section-padding bg-white">
          <div className="container-ffci">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {cases.map((c, i) => (
                <article
                  key={`${c.slug}-${i}`}
                  className="flex flex-col overflow-hidden"
                  style={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    boxShadow: "0px 3px 30px #0000000F",
                    borderRadius: "45px 45px 0px 0px",
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] shrink-0 bg-[#F5F5F5] flex items-center justify-center p-4">
                    <Image
                      src={c.image}
                      alt={c.company}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-8 pt-8 pb-10 gap-3">
                    <h2
                      className="font-body font-semibold text-navy leading-tight"
                      style={{ fontSize: "45px" }}
                    >
                      {c.company}
                    </h2>
                    <p
                      className="font-body text-[#08284F] leading-snug"
                      style={{ fontSize: "25px" }}
                    >
                      {c.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6">
                      <span
                        className="font-body font-semibold uppercase tracking-wide text-[#4A90E2] bg-[#4A90E2]/20 px-4 py-1.5 rounded-[4px]"
                        style={{ fontSize: "15px" }}
                      >
                        {c.category}
                      </span>
                      <Link
                        href={`/casos-exito/${c.slug}`}
                        className="inline-flex items-center gap-2 font-body font-semibold text-navy hover:text-[#4A90E2] transition-colors text-[18px]"
                      >
                        Ver caso <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
