'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const services = [
  {
    imageSrc: '/assets/manos-usd@2x.png',
    title: 'Libertad Financiera',
    description: 'Seminario-taller de admin. financiera a la luz de la biblia',
  },
  {
    imageSrc: '/assets/finanzas-personales@2x.png',
    title: 'Asesoría Financiera',
    description: 'Programa y resolución de deudas',
  },
  {
    imageSrc: '/assets/lider-de-inspiracion-de-la-antorcha@2x.png',
    title: 'Liderazgo Auténtico',
    description: '10 principios que optimizan tu verdadero potencial',
  },
];

export default function Services() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="bg-white" aria-label="Nuestros servicios">
      {/* Blue top area */}
      <div className="bg-[#4A90E2] rounded-t-xl2 pt-20 pb-20 md:pb-[320px]">
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
            <motion.h2 variants={fadeUp} className="section-heading text-white">
              Servicios que transforman vidas
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Cards — overlap blue section */}
      <div className="container-ffci mt-0 md:-mt-[240px] relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-white flex flex-col p-10 hover:-translate-y-2 transition-transform duration-300"
              style={{
                borderRadius: '45px',
                boxShadow: '0px 3px 30px #0000000D',
              }}
            >
              {/* Icon */}
              <div>
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={96}
                  height={96}
                  aria-hidden="true"
                />
              </div>

              {/* Title + Description */}
              <div className="mt-20">
                <h3 className="font-body font-semibold text-[22px] md:text-[32px] lg:text-[34px] xl:text-[45px] leading-[1.15] text-navy mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-[15px] leading-relaxed md:text-[22px] lg:text-[22px] xl:text-[30px] xl:leading-[42px] text-grayblue">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
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
