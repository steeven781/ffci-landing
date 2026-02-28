'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HandCoins, BadgeDollarSign, Trophy } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

const services = [
  {
    icon: HandCoins,
    title: 'Libertad Financiera',
    description: 'Seminario-taller de admin. financiera a la luz de la biblia',
  },
  {
    icon: BadgeDollarSign,
    title: 'Asesoría Financiera',
    description: 'Programa y resolución de deudas',
  },
  {
    icon: Trophy,
    title: 'Liderazgo Auténtico',
    description: '10 principios que optimizan tu verdadero potencial',
  },
];

export default function Services() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="bg-white" aria-label="Nuestros servicios">
      {/* Blue top area */}
      <div className="bg-[#4A90E2] rounded-t-xl2 pt-20 pb-[320px]">
        <div className="container-ffci">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col items-center text-center"
          >
            {/* Badge */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center px-6 py-2 bg-[#F6F7F3]/20 font-body text-[20px] font-semibold text-white tracking-[0.12em] uppercase mb-16"
              style={{ borderRadius: '20px' }}
            >
              Lineas de acción
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="font-heading text-[70px] text-white leading-tight"
            >
              Servicios que transforman vidas
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Cards — overlap blue section */}
      <div className="container-ffci -mt-[240px] relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="bg-white flex flex-col p-10 hover:-translate-y-2 transition-transform duration-300"
                style={{
                  borderRadius: '45px',
                  boxShadow: '0px 3px 30px #0000000D',
                  minHeight: '554px',
                }}
              >
                {/* Icon */}
                <div className="mb-auto">
                  <Icon
                    size={64}
                    className="text-sky"
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="font-body font-semibold text-[45px] leading-[1.15] text-navy mt-16 mb-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[30px] leading-[42px] text-[#8D99AE]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Carousel dots */}
        <div className="flex justify-center gap-3 mt-12">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-200 ${
                activeDot === i ? 'w-4 h-4 bg-navy' : 'w-4 h-4 bg-navy/20'
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 pb-20">
          <Link
            href="/agenda"
            className="inline-flex items-center justify-center h-[60px] px-12 bg-[#4A90E2] text-white font-body font-extrabold text-[18px] tracking-widest uppercase hover:brightness-110 transition-all duration-200"
            style={{ borderRadius: '38px' }}
          >
            Agenda una cita
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center h-[60px] px-12 border-2 border-[#4A90E2] text-[#4A90E2] font-body font-extrabold text-[18px] tracking-widest uppercase hover:bg-[#4A90E2] hover:text-white transition-all duration-200"
            style={{ borderRadius: '38px' }}
          >
            Explorar más
          </Link>
        </div>
      </div>
    </section>
  );
}
