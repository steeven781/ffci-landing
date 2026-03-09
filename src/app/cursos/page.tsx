import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoursesFilter from '@/components/sections/CoursesFilter';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cursos y Capacitación – FFCI Guatemala',
  description:
    'Programas de formación ejecutiva y técnica para profesionales y empresas en Guatemala. Liderazgo, gestión de proyectos, finanzas y más.',
};

const courses = [
  {
    category: 'Educación Financiera',
    title: 'Libertad Financiera',
    description: 'Seminario-taller de admin.\nfinanciera a la luz de la biblia',
    imagePath: '/assets/manos-usd@2x.png',
    badge: null,
    longDescription:
      'El Seminario Libertad Financiera nace del llamado a vivir la verdadera libertad que Dios nos dio, aprendiendo a administrar con fidelidad los recursos que Él nos confía. Ante la falta de enseñanza sobre el Señorío y la mayordomía, este seminario ofrece principios bíblicos prácticos para ordenar las finanzas a la luz de la Palabra, integrando el Ser, el Hacer y el Tener.',
    contentItems: [
      'Principios del Ser (ahorro, integridad, administración, contentamiento, trabajo, generosidad entre otros)',
      'El dinero y los temperamentos',
      'Principios del hacer',
      'Las 5 C del control de gastos',
      'Ajuste de presupuesto',
      'Diferenciar entre N-G-D',
      'Actitudes frente al dinero',
      'Cómo salir de las deudas-proceso de asesoría',
      'La importancia de tener sabiduría para generar dinero, gastarlo, multiplicarlo y conservarlo.',
    ],
  },
  {
    category: 'Asesoría Financiera',
    title: 'Asesoría Financiera',
    description: 'Programa y resolución\nde deudas',
    imagePath: '/assets/finacial.png',
    badge: null,
    longDescription:
      'El programa de Asesoría Financiera está diseñado para acompañar a personas y familias en el proceso de ordenar sus finanzas personales, salir de las deudas y construir bases sólidas para una vida financiera saludable y sostenible.',
    contentItems: [
      'Diagnóstico financiero personal',
      'Análisis de ingresos y gastos',
      'Elaboración de plan de pago de deudas',
      'Estrategias para reducir cargas financieras',
      'Herramientas de presupuesto familiar',
      'Seguimiento y acompañamiento personalizado',
    ],
  },
  {
    category: 'Liderazgo',
    title: '7 leyes del aprendizaje',
    description: 'Seminario-taller de admin.\nfinanciera a la luz de la biblia',
    imagePath: '/assets/bible.png',
    badge: null,
    longDescription:
      'Este seminario-taller explora las siete leyes fundamentales del aprendizaje efectivo que transforman la manera en que líderes y educadores transmiten conocimiento, desarrollan habilidades y generan cambios duraderos en las personas y organizaciones.',
    contentItems: [
      'La ley del maestro',
      'La ley de la educación',
      'La ley de la actividad',
      'La ley de la comunicación',
      'La ley del corazón',
      'La ley del aliento',
      'La ley de la necesidad',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Experiencia con Dios',
    description:
      'Estudio semanal para desarrollar\nuna verdadera relación con el Creador',
    imagePath: '/assets/hands.png',
    badge: null,
    longDescription:
      'Estudio semanal basado en el clásico estudio de Henry Blackaby, diseñado para ayudarte a reconocer dónde y cómo Dios está obrando a tu alrededor e invitarte a unirte a Él en esa obra. Una experiencia transformadora que profundiza tu relación personal con el Creador.',
    contentItems: [
      'Cómo experimentar a Dios en tu vida diaria',
      'Reconocer la voz de Dios',
      'Las invitaciones de Dios a unirte a Él',
      'Ajustes de fe para seguir a Dios',
      'Obedecer y experimentar a Dios',
      'El papel de la iglesia en tu relación con Dios',
      'Transformación personal y espiritual',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Fitness espiritual',
    description: 'Taller para evaluar su estado actual\nde fitness espiritual',
    imagePath: '/assets/fitness.png',
    badge: null,
    longDescription:
      'Taller intensivo para evaluar el estado actual de tu vida espiritual e identificar áreas de crecimiento. Basado en principios prácticos y bíblicos, este taller brinda herramientas concretas para fortalecer la vida interior y mantener una salud espiritual duradera.',
    contentItems: [
      'Evaluación del estado espiritual actual',
      'Las disciplinas espirituales fundamentales',
      'Oración y comunión con Dios',
      'Estudio y meditación de la Palabra',
      'Ayuno y servicio',
      'Plan personal de crecimiento espiritual',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Relaciones sanas',
    description:
      'Taller para ganar una mayor\ncompresión sobre las herramientas\npara construir relaciones',
    imagePath: '/assets/relations.png',
    badge: null,
    longDescription:
      'Taller diseñado para equipar a personas con las herramientas necesarias para construir, restaurar y mantener relaciones saludables en todos los ámbitos de la vida: familia, trabajo, ministerio y comunidad. Basado en principios bíblicos y psicológicos comprobados.',
    contentItems: [
      'Fundamentos de las relaciones saludables',
      'Comunicación efectiva y asertiva',
      'Gestión de conflictos y reconciliación',
      'Límites sanos en las relaciones',
      'Perdón como herramienta de sanidad',
      'Construcción de confianza y conexión profunda',
      'Relaciones en el contexto familiar y laboral',
    ],
  },
];

export default function CursosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — same floating card style as main Hero */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[70vh] flex flex-col items-center justify-center text-center pt-[160px] md:pt-[220px] pb-[100px] md:pb-[140px]"
          aria-label="Sección de cursos"
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
            <h1 className="font-heading text-[clamp(42px,6.5vw,90px)] text-white leading-[1.1]">
              <span className="block">Soluciones formativas</span>
              <span className="block">que transforman vidas</span>
            </h1>

            <p className="mt-8 pt-[30px] md:pt-[40px] font-body text-[18px] leading-relaxed md:text-[26px] lg:text-[35px] lg:leading-[44px] text-white text-center w-full max-w-[1130px] mx-auto">
              Brindamos herramientas prácticas y acompañamiento cercano para
              integrar fe, finanzas y liderazgo, generando impacto real en la
              vida y los negocios.
            </p>

            <div className="mt-14 pt-[30px]">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center w-[317px] h-[75px] bg-[#4A90E2] text-white font-body font-extrabold text-[24px] tracking-normal uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
              >
                Adquirir un curso
              </Link>
            </div>
          </div>
        </section>

        {/* Filter pills + Courses grid */}
        <div id="cursos">
          <CoursesFilter courses={courses} />
        </div>

        {/* In-company CTA */}
        <section className="bg-off section-padding rounded-t-xl2">
          <div className="container-ffci">
            <div className="bg-navy rounded-card p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-10 justify-between">
              <div>
                <h2 className="font-heading text-[clamp(32px,3.5vw,60px)] text-white leading-tight max-w-xl">
                  ¿Necesitas formación para todo tu equipo?
                </h2>
                <p className="mt-4 font-body text-body-lg text-grayblue max-w-lg">
                  Diseñamos programas in-company completamente personalizados
                  para tu cultura, industria y objetivos específicos.
                </p>
              </div>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-2 h-16 px-10 bg-gold text-navy font-body font-bold text-body-md rounded-full hover:bg-white transition-colors duration-200 shrink-0 whitespace-nowrap"
              >
                Solicitar propuesta
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
