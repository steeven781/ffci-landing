'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const testimonials = [
  {
    quote:
      'Aprendí que administrar bien es un tema de carácter. FFCI transformó mi forma de liderar y manejar mis finanzas.',
    author: 'Sandra Solares',
    company: 'Unisuper',
  },
  {
    quote:
      'FFCI me dio las herramientas para tomar decisiones financieras con claridad y propósito. Mi empresa hoy es más sólida y sostenible.',
    author: 'Carlos Méndez',
    company: 'Grupo Empresarial CM',
  },
  {
    quote:
      'La formación con carácter integral cambió mi perspectiva como líder. Aprendí a integrar mis valores con la gestión de mi negocio.',
    author: 'María Fernanda Ruiz',
    company: 'Inversiones MFR',
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section
      aria-label="Testimonios de clientes"
      className="bg-[#4A90E2] rounded-t-xl2 pt-20 pb-20"
    >
      <div className="container-ffci">
        {/* Top: 2 columns — Heading (left) | Subtitle + Buttons (right) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16"
        >
          {/* Left */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex self-start items-center px-8 md:px-16 lg:px-28 py-3 bg-white/30 font-body text-[20px] font-semibold text-white tracking-[0.12em] uppercase mb-10 rounded-[20px]"
            >
              Testimonios
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="section-heading text-white"
            >
              Lo que opinan los que han confiado en nosotros
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div variants={fadeUp} className="flex flex-col gap-10">
            <p
              className="font-body text-white text-[16px] leading-relaxed md:text-[22px] lg:text-[22px] xl:text-[30px] xl:leading-[38px]"
            >
              Experiencias comprobadas del impacto de nuestra formación y
              asesoría.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center h-[56px] md:h-[72px] lg:h-[72px] xl:h-[84px] px-8 md:px-10 bg-[#003366] text-white font-body font-extrabold text-[16px] md:text-[20px] lg:text-[20px] xl:text-[25px] tracking-widest uppercase hover:brightness-110 transition-all duration-200 rounded-[38px]"
              >
                Agenda una cita
              </Link>
              <Link
                href="/casos-exito"
                className="inline-flex items-center justify-center h-[56px] md:h-[72px] lg:h-[72px] xl:h-[84px] px-8 md:px-10 bg-[#003366]/50 text-white font-body font-extrabold text-[16px] md:text-[20px] lg:text-[20px] xl:text-[25px] tracking-widest uppercase hover:bg-[#003366] transition-all duration-200 rounded-[38px]"
              >
                Casos de éxito
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="bg-white flex flex-col p-7 md:p-10 lg:p-10 xl:p-14 md:min-h-[554px]"
              style={{
                borderRadius: '45px',
                boxShadow: '0px 3px 30px #0000000D',
              }}
            >
              {/* Quote */}
              <p
                className="font-body flex-1 mb-8 text-grayblue text-[16px] leading-relaxed md:text-[22px] lg:text-[24px] lg:leading-[32px] xl:text-[35px] xl:leading-[43px]"
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Separator */}
              <div className="w-full h-px bg-gray-800 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center bg-[#003366]"
                >
                  <span
                    className="font-body font-semibold text-white"
                    style={{ fontSize: '18px' }}
                  >
                    {getInitials(t.author)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-navy text-[16px] leading-snug md:text-[22px] lg:text-[20px] xl:text-[30px] xl:leading-[36px]">
                    {t.author}
                  </p>
                  <p className="font-body text-navy text-[16px] leading-snug md:text-[22px] lg:text-[20px] xl:text-[30px] xl:leading-[36px]">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
