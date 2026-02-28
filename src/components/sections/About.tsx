'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SquareCheckBig } from 'lucide-react';
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from '@/lib/motion';

const checkItems = [
  'Énfasis en servicio—no sólo éxito económico—más en legado y visión generacional.',
  'Acompañamiento práctico, espiritual y profesional. No es solo escuchar o leer, sino hay comunidad.',
  'Formación de ejecutivos, dueños de empresas, líderes de equipos, con desafíos empresariales reales. No solo talleres para individuos que quieren manejar mejor sus finanzas.',
];

const stats = [
  { value: '20', label: 'Años de experiencia' },
  { value: '25', label: 'Casos de éxito' },
  { value: '80', label: 'Deudas resueltas' },
  { value: '03', label: 'Libros escritos' },
];

export default function About() {
  return (
    <section className="section-padding bg-white" aria-label="Sobre nosotros">
      <div className="container-ffci">
        {/* Two-column layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start"
        >
          {/* Left: Image */}
          <motion.div variants={slideInLeft}>
            <div className="relative w-full aspect-[3/3] rounded-card overflow-hidden">
              <Image
                src="/assets/about-1.png"
                alt="Equipo FFCI Guatemala"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={slideInRight} className="flex flex-col">
            {/* Badge */}
            <span className="inline-flex self-start items-center px-5 py-2 rounded-full bg-[#F0E6D3] font-body text-[14px] font-semibold text-[#CBAC58] tracking-[0.15em] uppercase mb-6">
              Sobre Nosotros
            </span>

            {/* Heading */}
            <h2 className="section-heading leading-[1.1] text-navy mb-8">
              Cada enseñanza se basa
              <br />
              en 2,350 pasajes bíblicos
            </h2>

            {/* Checklist */}
            <ul className="flex flex-col gap-6">
              {checkItems.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <SquareCheckBig
                    size={28}
                    className="text-sky shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span className="font-body text-[16px] leading-relaxed md:text-[22px] lg:text-[24px] lg:leading-[32px] xl:text-[35px] xl:leading-[42px] text-navy">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-20 flex flex-wrap items-center border border-[#4A90E2] rounded-[40px]"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center flex-1">
              <motion.div
                variants={fadeUp}
                className="flex-1 min-w-[130px] flex flex-col items-center justify-center py-6 lg:py-10 px-4 lg:px-6 text-center"
              >
                <p className="font-heading text-[36px] md:text-[52px] lg:text-[52px] xl:text-[72px] text-navy font-normal leading-none">
                  {stat.value}
                </p>
                <p className="font-body text-[13px] md:text-[20px] lg:text-[22px] xl:text-[35px] text-grayblue mt-2 lg:mt-3">
                  {stat.label}
                </p>
              </motion.div>

              {/* Partial divider — 60% height, centered */}
              {i < stats.length - 1 && (
                <div className="w-px h-20 bg-[#4A90E2] shrink-0 opacity-40 hidden lg:block" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
