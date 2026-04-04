"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Marquee from "react-fast-marquee";

const trustLogos = [
  {
    name: "Cámara de Comercio de Guatemala",
    src: "/assets/camara-comercio-logo.png",
    width: 320,
  },
  { name: "USAC", src: "/assets/usac-logo.png", width: 260 },
  { name: "Guateplast", src: "/assets/guateplast-logo.png", width: 240 },
  { name: "Combexim", src: "/assets/combexim-logo.png", width: 340 },
  { name: "Autollantas", src: "/assets/autollantas-logo.png", width: 280 },
  { name: "Unisuper", src: "/assets/unisuper-logo.png", width: 160 },
];

export default function Hero() {
  return (
    <section
      className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[70vh] flex flex-col justify-between pt-[160px] md:pt-[220px] lg:pt-[250px] pb-16"
      aria-label="Sección principal"
    >
      {/* Background image */}
      <Image
        src="/assets/ffci-bg-hero.png"
        alt=""
        fill
        className="object-cover object-center pointer-events-none"
        aria-hidden="true"
        priority
      />

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
              Donde hay propósito,{" "}
              <Image
                src="/assets/Group 8.png"
                alt=""
                width={72}
                height={72}
                className="inline-block align-middle mb-2"
                aria-hidden="true"
              />
            </span>
            <span className="block">
              tus finanzas tienen{" "}
              <Image
                src="/assets/Group 13.png"
                alt=""
                width={72}
                height={72}
                className="inline-block align-middle mb-2"
                aria-hidden="true"
              />{" "}
              dirección
            </span>
          </motion.h1>

          {/* Subtext — 2 líneas, blanco puro */}
          <motion.p
            variants={fadeUp}
            className="mt-8 pt-[30px] md:pt-[60px] font-body text-[18px] leading-relaxed md:text-[26px] lg:text-[35px] lg:leading-[41px] text-white text-center w-full max-w-[1130px]"
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
            <p className="font-body font-normal text-[22px] text-white mb-8 tracking-wide">
              Con la confianza de líderes de la industria
            </p>
            <Marquee speed={30} gradient={false} className="pt-[18px]">
              {trustLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative h-20 flex items-center justify-center flex-shrink-0 mx-4"
                  style={{ width: logo.width }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
