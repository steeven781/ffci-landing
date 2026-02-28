'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Landmark, BarChart2, Wallet } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const trustLogos = [
  'Empresa A',
  'Empresa B',
  'Empresa C',
  'Empresa D',
  'Empresa E',
];

export default function Hero() {
  return (
    <section
      className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[70vh] flex flex-col justify-between pt-[250px] pb-16"
      aria-label="Sección principal"
    >
      {/* Watermark background icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Landmark
          size={340}
          strokeWidth={0.6}
          className="absolute -top-10 -right-16 text-white opacity-[0.05]"
        />
        <BarChart2
          size={260}
          strokeWidth={0.6}
          className="absolute bottom-20 -left-10 text-white opacity-[0.05]"
        />
        <Wallet
          size={200}
          strokeWidth={0.6}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.03]"
        />
      </div>

      <div className="container-ffci relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          {/* Heading — 2 líneas fijas */}
          <motion.h1
            variants={fadeUp}
            className="font-heading text-[clamp(42px,6.5vw,90px)] text-white leading-[1.1] "
          >
            <span className="block">
              Donde hay propósito,{' '}
              <Coins
                className="inline-block text-gold align-middle mb-2"
                size="0.8em"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
            <span className="block">
              tus finanzas tienen{' '}
              <TrendingUp
                className="inline-block text-gold align-middle mb-2"
                size="0.75em"
                strokeWidth={1.5}
                aria-hidden="true"
              />{' '}
              dirección
            </span>
          </motion.h1>

          {/* Subtext — 2 líneas, blanco puro */}
          <motion.p
            variants={fadeUp}
            className="mt-8 pt-[60px] font-body text-[35px] leading-[41px] text-white text-center w-full max-w-[1130px]"
          >
            Equipamos a líderes, ejecutivos y empresarios para administrar
            <br />
            sus finanzas y negocios con principios bíblicos, excelencia y
            propósito.
          </motion.p>

          {/* Single CTA */}
          <motion.div variants={fadeUp} className="mt-14 pt-[30px]">
            <Link
              href="/agenda"
              className="inline-flex items-center justify-center h-[60px] px-14 bg-[#4A90E2] text-white font-body font-extrabold text-[18px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
            >
              Agenda una cita
            </Link>
          </motion.div>

          {/* Trust logos */}
          <motion.div variants={fadeUp} className="mt-28 w-full pt-[30px]">
            <p className="font-body text-[15px] text-white mb-8 tracking-wide">
              Con la confianza de líderes de la industria
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center pt-[18px]">
              {trustLogos.map((name) => (
                <div
                  key={name}
                  className="h-12 px-6 rounded-lg border border-white/15 flex items-center justify-center"
                  aria-label={`Logo de ${name}`}
                >
                  <span className="font-body text-[15px] font-semibold text-white/35 tracking-wide">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
