'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const teamMembers = [
  { image: 'president', role: 'Presidente Fundador', name: 'Danilo de León' },
  { image: 'director', role: 'Directora regional', name: 'Melvy de León' },
  { image: 'project', role: 'Gestora de proyectos', name: 'Olga Orozco' },
  {
    image: 'designer',
    role: 'Facilitadora y Diseñadora gráfica',
    name: 'Andrea de León',
  },
  {
    image: 'comunicator',
    role: 'Facilitadora y Comunicadora',
    name: 'Melissa de León',
  },
  { image: 'engineer', role: 'Facilitador e Ingeniero', name: 'Victor López' },
  { image: 'lawyer', role: 'Abogado y Asesor Legal', name: 'Alberto Orozco' },
  { image: 'new-person', ext: 'jpeg', role: 'Sin Puesto', name: 'Sin Nombre' },
];

function MemberCard({ member }: { member: (typeof teamMembers)[0] }) {
  return (
    <div className="flex flex-col">
      <div
        className="relative w-full overflow-hidden mb-10"
        style={{ borderRadius: '45px', aspectRatio: '533 / 458' }}
      >
        <Image
          src={`/assets/${member.image}.${member.ext ?? 'png'}`}
          alt={member.name}
          fill
          className="object-cover object-top pt-[18px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <p className="font-body pt-[16px] text-[#003366] text-[13px] leading-snug md:text-[18px] lg:text-[18px] xl:text-[25px] xl:leading-[30px]">
        {member.role}
      </p>
      <p className="font-body font-extrabold pt-[20px] text-[#003366] text-[16px] leading-snug md:text-[22px] lg:text-[24px] lg:leading-[30px] xl:text-[35px] xl:leading-[42px]">
        {member.name}
      </p>
    </div>
  );
}

export default function Team() {
  const mainMembers = teamMembers.slice(0, 6);
  const lastMembers = teamMembers.slice(6);

  return (
    <section className="bg-white py-[120px]" aria-label="Nuestro equipo">
      <div className="container-ffci">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center px-12 py-3 bg-[#F0E6D3] font-body text-[20px] font-semibold text-gold tracking-[0.12em] uppercase mb-8 rounded-[20px]"
          >
            Nuestro equipo
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="section-heading text-navy mb-8"
          >
            Conoce al Equipo Directivo y Formador
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body w-full text-center text-grayblue text-[15px] leading-relaxed md:text-[22px] lg:text-[22px] xl:text-[30px] xl:leading-[38px]"
          >
            Conformado por profesionales y líderes comprometidos con formar
            carácter, fortalecer la
            <br />
            administración financiera y acompañar a empresarios y emprendedores
            a vivir su propósito con
            <br />
            integridad y excelencia
          </motion.p>
        </motion.div>

        {/* First 6 members — 3 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {mainMembers.map((member) => (
            <motion.div key={member.image} variants={fadeUp}>
              <MemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Remaining members — centered row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center gap-10 mt-10"
        >
          {lastMembers.map((member) => (
            <motion.div key={member.image} variants={fadeUp} className="w-full max-w-[533px]">
              <MemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
