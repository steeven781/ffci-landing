import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cases } from '../data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.company} – Caso de Éxito FFCI Guatemala`,
    description: c.description,
  };
}

export default function CasoDetailPage({ params }: Props) {
  const c = cases.find((x) => x.slug === params.slug);
  if (!c) notFound();

  return (
    <>
      <Header />
      <main>
        {/* ── Section 1: Overview ── */}
        <section className="pt-[150px] pb-20 bg-white">
          <div className="container-ffci">
            {/* Back link */}
            <Link
              href="/casos-exito"
              className="inline-flex items-center gap-2 font-body text-[16px] text-navy/60 hover:text-navy transition-colors mb-10"
            >
              <ArrowLeft size={16} />
              Regresar
            </Link>

            {/* Two-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left: content */}
              <div className="flex flex-col">
                <span
                  className="inline-block self-start font-body font-semibold uppercase tracking-wide text-[#4A90E2] bg-[#4A90E2]/20 px-4 py-1.5 rounded-[4px] mb-6"
                  style={{ fontSize: '15px' }}
                >
                  Caso de estudio
                </span>

                <h1
                  className="font-heading text-navy leading-[1.05] mb-6"
                  style={{ fontSize: 'clamp(56px, 6vw, 90px)' }}
                >
                  {c.company}
                </h1>

                <p className="font-body text-[18px] text-navy/60 leading-relaxed mb-10">
                  {c.description}
                </p>

                <hr className="border-navy/10 mb-8" />

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-body text-[13px] font-semibold uppercase tracking-widest text-navy/40 mb-2">
                      Categoría
                    </p>
                    <p className="font-body text-[18px] font-bold text-navy">
                      {c.category}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[13px] font-semibold uppercase tracking-widest text-navy/40 mb-2">
                      Atendimos
                    </p>
                    <p className="font-body text-[18px] font-bold text-navy">
                      {c.atendimos}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative w-full aspect-[4/3] rounded-[35px] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.company}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container-ffci">
          <hr className="border-navy/50" />
        </div>

        {/* ── Section 2: Objetivo, Metas, Resultados ── */}
        <section className="py-20 bg-white">
          <div className="container-ffci">
            <div className="max-w-[750px] mx-auto">
              <h2
                className="font-heading text-navy mb-6"
                style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
              >
                El objetivo
              </h2>
              <p className="font-body text-[22px] text-[#003366] leading-relaxed mb-14">
                {c.objetivo}
              </p>

              {/* Metas cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                <div className="bg-[#e8ebef] rounded-2xl p-8">
                  <p className="font-body font-extrabold text-[#003366] text-[24px] mb-3">
                    {c.metas[0].title}
                  </p>
                  <p className="font-body text-[16px] text-[#08284F] leading-relaxed">
                    {c.metas[0].text}
                  </p>
                </div>
                <div className="bg-[#4A90E2] rounded-2xl p-8">
                  <p className="font-body font-extrabold text-white text-[24px] mb-3">
                    {c.metas[1].title}
                  </p>
                  <p className="font-body text-[16px] text-white leading-relaxed">
                    {c.metas[1].text}
                  </p>
                </div>
              </div>

              {/* Resultados */}
              <h3 className="font-body font-bold text-navy text-[22px] mb-6">
                Resultados
              </h3>
              <ul className="flex flex-col gap-4">
                {c.resultados.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Image
                      src="/assets/comenta-alt-check@2x.png"
                      alt=""
                      width={20}
                      height={20}
                      className="shrink-0 mt-0.5"
                    />
                    <span className="font-body text-[16px] text-navy/70">
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container-ffci">
          <hr className="border-navy/10" />
        </div>

        {/* ── Section 3: CTA ── */}
        <section className="py-24 bg-white text-center">
          <div className="container-ffci flex flex-col items-center gap-8">
            <h2
              className="font-body font-semibold text-navy leading-tight"
              style={{ fontSize: 'clamp(20px, 2vw, 28px)' }}
            >
              ¿Listo para construir tu Caso de éxito?
            </h2>
            <Link
              href="/agenda"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-[#4A90E2] text-white font-body font-extrabold text-[14px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200"
            >
              Agenda una cita
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
