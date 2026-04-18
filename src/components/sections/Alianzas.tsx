'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

export default function Alianzas() {
  return (
    <section aria-label="Nuestras alianzas" className="bg-white py-20">
      <div className="container-ffci">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Left — heading */}
          <div className="flex flex-col">
            <motion.span
              variants={fadeUp}
              className="inline-flex self-start items-center px-8 py-3 font-body text-[14px] font-semibold text-[#CBAC58] tracking-[0.12em] uppercase mb-10 rounded-[20px]"
              style={{ backgroundColor: 'rgba(203, 172, 88, 0.2)' }}
            >
              Nuestras Alianzas
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-heading text-navy">
              Con quienes hacemos partnership
            </motion.h2>
          </div>

          {/* Right — logos */}
          <motion.div
            variants={fadeUp}
            className="flex flex-row flex-nowrap items-center gap-12 lg:gap-16"
          >
            <Image
              src="/assets/fccihispano.png"
              alt="FCCI – Fraternidad de Compañías de Cristo Internacional"
              width={346}
              height={346}
              style={{ width: '346px', height: '346px', objectFit: 'contain' }}
            />
            <Image
              src="/assets/3060100org.png"
              alt="30 60 100 Ministries, Inc."
              width={443}
              height={114}
              style={{ width: '443px', height: 'auto', objectFit: 'contain' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
