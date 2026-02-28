import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Briefcase, BookOpen, Target, BarChart2, Users, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios – FFCI Guatemala",
  description:
    "Descubre nuestros servicios de consultoría empresarial, capacitación profesional, gestión de proyectos y más. Soluciones a medida para el crecimiento de tu organización.",
};

const services = [
  {
    icon: Briefcase,
    title: "Consultoría Estratégica",
    description:
      "Analizamos tu organización en profundidad para diseñar una hoja de ruta clara hacia tus objetivos de crecimiento. Identificamos oportunidades, eliminamos cuellos de botella y alineamos a todo el equipo en torno a la estrategia.",
    deliverables: [
      "Diagnóstico organizacional completo",
      "Plan estratégico 3-5 años",
      "Diseño de KPIs y tablero de control",
      "Workshops de alineación ejecutiva",
    ],
  },
  {
    icon: BookOpen,
    title: "Capacitación y Formación",
    description:
      "Desarrollamos las competencias de tu equipo con programas diseñados por expertos y basados en metodologías internacionales. Formación práctica, medible y alineada a los objetivos del negocio.",
    deliverables: [
      "Diagnóstico de brechas de competencia",
      "Diseño curricular personalizado",
      "Facilitación presencial o virtual",
      "Evaluación de aprendizaje y ROI",
    ],
  },
  {
    icon: Target,
    title: "Gestión de Proyectos",
    description:
      "Implementamos metodologías probadas para garantizar que tus proyectos críticos lleguen a la meta en tiempo, forma y presupuesto. Desde la planificación hasta el cierre.",
    deliverables: [
      "Configuración de PMO",
      "Gestión de riesgos",
      "Metodologías Agile y PMBOK",
      "Reportes ejecutivos periódicos",
    ],
  },
  {
    icon: BarChart2,
    title: "Finanzas y Rentabilidad",
    description:
      "Optimizamos la estructura financiera de tu empresa para maximizar la rentabilidad y asegurar la sostenibilidad a largo plazo. Análisis profundo y recomendaciones accionables.",
    deliverables: [
      "Análisis financiero integral",
      "Estructuración de costos",
      "Presupuestación estratégica",
      "Planificación de inversiones",
    ],
  },
  {
    icon: Users,
    title: "Gestión del Talento",
    description:
      "Atraemos, desarrollamos y retenemos al talento que tu organización necesita para crecer. Diseñamos estructuras organizacionales eficientes y culturas de alto desempeño.",
    deliverables: [
      "Diseño organizacional",
      "Evaluación de desempeño",
      "Planes de carrera y sucesión",
      "Cultura y clima organizacional",
    ],
  },
  {
    icon: Lightbulb,
    title: "Transformación Digital",
    description:
      "Acompañamos a tu empresa en la adopción de tecnologías y procesos digitales que aumentan la eficiencia operativa y crean nuevas ventajas competitivas en el mercado.",
    deliverables: [
      "Diagnóstico de madurez digital",
      "Hoja de ruta de transformación",
      "Selección e implementación de herramientas",
      "Gestión del cambio digital",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy2 pt-[200px] pb-[100px]">
          <div className="container-ffci text-center">
            <span className="inline-block font-body text-body-md text-gold font-semibold uppercase tracking-widest mb-6">
              Nuestros servicios
            </span>
            <h1 className="font-heading text-[clamp(48px,6vw,93px)] text-white leading-tight max-w-4xl mx-auto">
              Soluciones integrales para cada etapa de tu negocio
            </h1>
            <p className="mt-6 font-body text-body-lg text-grayblue max-w-2xl mx-auto">
              Cada servicio está diseñado para generar resultados reales y
              medibles en el menor tiempo posible.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="section-padding bg-white">
          <div className="container-ffci">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article
                    key={service.title}
                    className="border border-navy/10 rounded-card p-8 flex flex-col hover:border-sky hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky/10 flex items-center justify-center mb-6">
                      <Icon size={28} className="text-sky" aria-hidden="true" />
                    </div>
                    <h2 className="font-heading text-[clamp(22px,2vw,28px)] text-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="font-body text-body-md text-grayblue leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2 mb-8">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex gap-2 items-center font-body text-body-md text-navy/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-sky section-padding">
          <div className="container-ffci text-center">
            <h2 className="font-heading text-[clamp(36px,4vw,70px)] text-white leading-tight max-w-3xl mx-auto mb-8">
              ¿No sabes por dónde empezar? Hablemos.
            </h2>
            <p className="font-body text-body-lg text-white/80 max-w-xl mx-auto mb-10">
              En una sesión gratuita de diagnóstico te ayudamos a identificar
              qué servicio se adapta mejor a tu situación actual.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 h-16 px-12 bg-white text-navy font-body font-bold text-body-md rounded-full hover:bg-navy hover:text-white transition-colors duration-200"
            >
              Agenda tu diagnóstico gratuito
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
