import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Clock, Users, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos y Capacitación – FFCI Guatemala",
  description:
    "Programas de formación ejecutiva y técnica para profesionales y empresas en Guatemala. Liderazgo, gestión de proyectos, finanzas y más.",
};

const courses = [
  {
    category: "Liderazgo",
    title: "Liderazgo de Alto Impacto",
    description:
      "Desarrolla las habilidades esenciales del líder moderno: comunicación estratégica, toma de decisiones bajo presión e inteligencia emocional.",
    duration: "24 horas",
    modality: "Presencial / Virtual",
    level: "Ejecutivo",
    badge: "Más popular",
  },
  {
    category: "Gestión",
    title: "Project Management Profesional",
    description:
      "Domina las metodologías PMBOK y Agile para gestionar proyectos complejos con equipos multidisciplinarios y alcanzar resultados consistentes.",
    duration: "40 horas",
    modality: "Presencial / Virtual",
    level: "Gerencial",
    badge: null,
  },
  {
    category: "Finanzas",
    title: "Finanzas para No Financieros",
    description:
      "Aprende a leer estados financieros, interpretar métricas de negocio y tomar decisiones estratégicas con base en datos financieros reales.",
    duration: "16 horas",
    modality: "Presencial / Virtual",
    level: "Profesional",
    badge: null,
  },
  {
    category: "Ventas",
    title: "Ventas Estratégicas B2B",
    description:
      "Técnicas avanzadas de venta consultiva para cerrar negocios complejos, gestionar cuentas clave y construir relaciones comerciales duraderas.",
    duration: "20 horas",
    modality: "Presencial",
    level: "Profesional",
    badge: "Nuevo",
  },
  {
    category: "RRHH",
    title: "Gestión del Talento Humano",
    description:
      "Estrategias modernas para atraer, desarrollar y retener talento en entornos competitivos. Employer branding, onboarding y cultura organizacional.",
    duration: "24 horas",
    modality: "Presencial / Virtual",
    level: "Gerencial",
    badge: null,
  },
  {
    category: "Digital",
    title: "Transformación Digital para Líderes",
    description:
      "Entiende el impacto de las tecnologías emergentes en tu industria y lidera procesos de cambio digital efectivos en tu organización.",
    duration: "16 horas",
    modality: "Virtual",
    level: "Ejecutivo",
    badge: null,
  },
];

export default function CursosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy2 pt-[200px] pb-[100px]">
          <div className="container-ffci text-center">
            <span className="inline-block font-body text-body-md text-gold font-semibold uppercase tracking-widest mb-6">
              Cursos y programas
            </span>
            <h1 className="font-heading text-[clamp(48px,6vw,93px)] text-white leading-tight max-w-4xl mx-auto">
              Formación que impulsa carreras y organizaciones
            </h1>
            <p className="mt-6 font-body text-body-lg text-grayblue max-w-2xl mx-auto">
              Más de 40 programas diseñados por expertos y orientados a
              resultados prácticos desde el primer día.
            </p>
          </div>
        </section>

        {/* Courses grid */}
        <section className="section-padding bg-white">
          <div className="container-ffci">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <article
                  key={course.title}
                  className="border border-navy/10 rounded-card overflow-hidden hover:shadow-card transition-shadow duration-300 group flex flex-col"
                >
                  {/* Card header */}
                  <div className="bg-navy2 p-6 flex justify-between items-start">
                    <span className="font-body text-[14px] text-gold font-semibold uppercase tracking-widest">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="bg-gold text-navy text-[13px] font-bold px-3 py-1 rounded-full">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="font-heading text-[clamp(20px,1.8vw,26px)] text-navy mb-4">
                      {course.title}
                    </h2>
                    <p className="font-body text-body-md text-grayblue leading-relaxed mb-6 flex-1">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 text-navy/60">
                        <Clock size={16} aria-hidden="true" />
                        <span className="font-body text-[15px]">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-navy/60">
                        <Users size={16} aria-hidden="true" />
                        <span className="font-body text-[15px]">{course.modality}</span>
                      </div>
                      <div className="flex items-center gap-2 text-navy/60">
                        <Award size={16} aria-hidden="true" />
                        <span className="font-body text-[15px]">{course.level}</span>
                      </div>
                    </div>

                    <Link
                      href="/agenda"
                      className="inline-flex items-center justify-center h-12 px-6 bg-sky text-white font-body font-bold text-body-md rounded-full hover:bg-navy2 transition-colors duration-200"
                    >
                      Solicitar información
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
