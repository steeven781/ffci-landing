import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Éxito – FFCI Guatemala",
  description:
    "Descubre cómo hemos ayudado a empresas guatemaltecas a transformarse y crecer. Resultados reales, medibles y sostenibles.",
};

const cases = [
  {
    category: "Consultoría Estratégica",
    company: "Distribuidora Nacional S.A.",
    industry: "Distribución y Logística",
    challenge:
      "La empresa enfrentaba márgenes de rentabilidad decrecientes y una estructura de costos poco eficiente, con procesos operativos que no habían sido revisados en más de 8 años.",
    solution:
      "Implementamos un diagnóstico integral de procesos, rediseñamos la cadena de suministro y establecimos un sistema de control de gestión con KPIs semanales para la dirección.",
    results: [
      { metric: "30%", label: "Reducción de costos operativos" },
      { metric: "45%", label: "Mejora en rentabilidad neta" },
      { metric: "6 meses", label: "Tiempo de implementación" },
    ],
    quote:
      "FFCI no solo nos dio un diagnóstico, nos acompañó en cada paso de la transformación.",
    author: "María García, Directora General",
  },
  {
    category: "Capacitación",
    company: "Grupo Industrial Central",
    industry: "Manufactura",
    challenge:
      "Alta rotación de personal en posiciones clave, bajos índices de compromiso y equipos de trabajo con poca cohesión entre áreas, afectando la productividad general.",
    solution:
      "Diseñamos e implementamos un programa integral de liderazgo para 45 mandos medios, combinando talleres presenciales, coaching grupal y evaluaciones 360°.",
    results: [
      { metric: "60%", label: "Reducción en rotación de personal" },
      { metric: "35%", label: "Aumento en productividad" },
      { metric: "92%", label: "Índice de satisfacción del equipo" },
    ],
    quote:
      "El programa cambió completamente la dinámica de liderazgo en nuestra organización.",
    author: "Carlos Méndez, VP de RRHH",
  },
  {
    category: "Transformación Digital",
    company: "Tech Solutions Guatemala",
    industry: "Tecnología",
    challenge:
      "Empresa de tecnología que quería expandirse a nuevos mercados centroamericanos pero carecía de una estrategia comercial estructurada y procesos de venta escalables.",
    solution:
      "Desarrollamos la estrategia de expansión regional, implementamos un CRM empresarial y capacitamos al equipo comercial en metodologías de venta consultiva B2B.",
    results: [
      { metric: "3", label: "Nuevos mercados en 12 meses" },
      { metric: "120%", label: "Crecimiento en ventas" },
      { metric: "15", label: "Nuevos clientes enterprise" },
    ],
    quote:
      "En un año logramos lo que habíamos planeado para tres. FFCI fue el catalizador.",
    author: "Ana Rodríguez, CEO & Fundadora",
  },
];

export default function CasosExitoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy2 pt-[200px] pb-[100px]">
          <div className="container-ffci text-center">
            <span className="inline-block font-body text-body-md text-gold font-semibold uppercase tracking-widest mb-6">
              Casos de éxito
            </span>
            <h1 className="font-heading text-[clamp(48px,6vw,93px)] text-white leading-tight max-w-4xl mx-auto">
              Resultados reales de empresas reales
            </h1>
            <p className="mt-6 font-body text-body-lg text-grayblue max-w-2xl mx-auto">
              Cada caso es la historia de una organización que decidió
              transformarse y los números que lo demuestran.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="section-padding bg-white">
          <div className="container-ffci flex flex-col gap-24">
            {cases.map((c, i) => (
              <article
                key={c.company}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Content */}
                <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
                  <span className="inline-block font-body text-[14px] text-sky font-bold uppercase tracking-widest mb-3">
                    {c.category}
                  </span>
                  <h2 className="font-heading text-[clamp(28px,3vw,50px)] text-navy leading-tight mb-2">
                    {c.company}
                  </h2>
                  <p className="font-body text-body-md text-grayblue mb-8">
                    {c.industry}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-body text-body-md font-bold text-navy mb-2">
                      El desafío
                    </h3>
                    <p className="font-body text-body-md text-navy/70 leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div className="mb-8">
                    <h3 className="font-body text-body-md font-bold text-navy mb-2">
                      La solución
                    </h3>
                    <p className="font-body text-body-md text-navy/70 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-gold pl-6 py-2">
                    <p className="font-body text-body-md text-navy italic mb-2">
                      "{c.quote}"
                    </p>
                    <cite className="font-body text-[15px] text-grayblue not-italic">
                      — {c.author}
                    </cite>
                  </blockquote>
                </div>

                {/* Results card */}
                <div className={i % 2 !== 0 ? "[direction:ltr]" : ""}>
                  <div className="bg-navy rounded-card p-10 flex flex-col gap-8">
                    <h3 className="font-heading text-[clamp(22px,2vw,30px)] text-white">
                      Resultados obtenidos
                    </h3>
                    <div className="flex flex-col gap-6">
                      {c.results.map((r) => (
                        <div
                          key={r.label}
                          className="flex items-center gap-6 border-b border-white/10 pb-6 last:border-0 last:pb-0"
                        >
                          <p className="font-heading text-[clamp(36px,4vw,56px)] text-gold font-bold leading-none shrink-0 min-w-[100px]">
                            {r.metric}
                          </p>
                          <p className="font-body text-body-md text-grayblue">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sky section-padding">
          <div className="container-ffci text-center">
            <h2 className="font-heading text-[clamp(36px,4.5vw,70px)] text-white leading-tight max-w-3xl mx-auto mb-8">
              Tu empresa puede ser el próximo caso de éxito
            </h2>
            <p className="font-body text-body-lg text-white/80 max-w-xl mx-auto mb-10">
              Comienza con una sesión gratuita de diagnóstico y descubramos
              juntos el potencial de tu organización.
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center gap-2 h-16 px-12 bg-white text-navy font-body font-bold text-body-md rounded-full hover:bg-navy hover:text-white transition-colors duration-200"
            >
              Comienza hoy
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
