'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/motion';

const milestones = [
  {
    title: 'El origen de la visión',
    content: [
      'En 2010 inició un curso intensivo de diez semanas en educación financiera personal dirigido a empresarios que buscaban mejorar el control de sus finanzas. A través de principios bíblicos que se brindaron herramientas para ordenar sus recursos con propósito.',
      'Con el tiempo, se evidenció que la capacitación por sí sola no era suficiente para enfrentar problemas de endeudamiento y mala gestión. Así nació Fraternidad de Formadores con Carácter Integral (FFCI), con el propósito de acompañar y fortalecer a empresarios, líderes y emprendedores para que administren sabiamente sus finanzas y vivan su llamado con coherencia.',
      'Hoy, FFCI forma parte de un movimiento de transformación basado en relaciones cercanas y un liderazgo con impacto.',
    ],
  },
  {
    title: 'Visión y misión',
    content: [
      'Ser el referente de formación con carácter integral para líderes y empresarios en Latinoamérica, guiados por principios bíblicos y valores de excelencia.',
    ],
  },
  {
    title: 'Fundadores',
    content: [
      'FFCI fue fundada por un equipo de líderes comprometidos con la transformación financiera y espiritual de empresarios y emprendedores en Guatemala.',
    ],
  },
];

export default function History() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      style={{ background: 'linear-gradient(to bottom, #003366, #051D3B)' }}
      aria-label="Nuestra historia"
      className="mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden py-[120px] mb-16"
    >
      <div className="container-ffci">
        {/* Badge + Heading — full width */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex self-start items-center px-6 py-2 bg-white/10 font-body text-[20px] font-semibold text-white tracking-[0.12em] uppercase mb-10"
            style={{ borderRadius: '20px' }}
          >
            Nuestra trayectoria
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-[70px] text-white leading-tight"
          >
            Los que dieron inicio a la organización
          </motion.h2>
        </motion.div>

        {/* 2 columns: Accordion (left) | Image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col"
          >
            {milestones.map((item, i) => (
              <div
                key={item.title}
                className="border-t border-white/15 last:border-b last:border-white/15"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between py-7 text-left"
                >
                  <span className="font-body font-semibold text-[45px] leading-tight text-white">
                    {item.title}
                  </span>
                  <div className="shrink-0 ml-6 text-white">
                    {openIndex === i ? (
                      <ChevronUp size={30} />
                    ) : (
                      <ChevronDown size={30} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="relative mb-8">
                        {/* Blue overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: '#4A90E2',
                            mixBlendMode: 'difference',
                            borderRadius: '0 40px 40px 0',
                            opacity: 0.5,
                          }}
                        />
                        <div className="relative px-8 py-8 flex flex-col gap-5">
                          {item.content.map((para, pi) => (
                            <p
                              key={pi}
                              className="font-body"
                              style={{
                                color: '#8D99AE',
                                fontSize: '30px',
                                lineHeight: '35px',
                              }}
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Right: Image */}
          <div className="relative min-h-[500px] rounded-card overflow-hidden">
            <Image
              src="/assets/history-1.png"
              alt="Historia de FFCI Guatemala"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
