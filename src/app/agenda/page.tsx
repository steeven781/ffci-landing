import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Agenda una Cita – FFCI Guatemala",
  description:
    "Programa una consulta gratuita con nuestros expertos. Cuéntanos sobre tu empresa y te ayudaremos a encontrar la mejor solución.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+502 1234 5678",
    href: "tel:+50212345678",
  },
  {
    icon: Mail,
    label: "Correo electrónico",
    value: "info@ffci.gt",
    href: "mailto:info@ffci.gt",
  },
  {
    icon: MapPin,
    label: "Oficinas",
    value: "Zona 10, Ciudad de Guatemala",
    href: null,
  },
  {
    icon: Clock,
    label: "Horario de atención",
    value: "Lun – Vie: 8:00 am – 6:00 pm",
    href: null,
  },
];

const services = [
  "Consultoría Estratégica",
  "Capacitación y Formación",
  "Gestión de Proyectos",
  "Finanzas y Rentabilidad",
  "Gestión del Talento",
  "Transformación Digital",
  "Otro / No lo sé aún",
];

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy2 pt-[200px] pb-[100px]">
          <div className="container-ffci text-center">
            <span className="inline-block font-body text-body-md text-gold font-semibold uppercase tracking-widest mb-6">
              Contáctanos
            </span>
            <h1 className="font-heading text-[clamp(48px,6vw,93px)] text-white leading-tight max-w-4xl mx-auto">
              Agenda tu consulta gratuita
            </h1>
            <p className="mt-6 font-body text-body-lg text-grayblue max-w-2xl mx-auto">
              Cuéntanos sobre tu empresa y los retos que enfrentas. En 30
              minutos te mostraremos cómo podemos ayudarte.
            </p>
          </div>
        </section>

        {/* Form + Contact */}
        <section className="section-padding bg-white">
          <div className="container-ffci">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
              {/* Form */}
              <div className="lg:col-span-3">
                <form
                  className="flex flex-col gap-6"
                  action="#"
                  method="POST"
                  aria-label="Formulario de contacto"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="nombre"
                        className="font-body text-body-md font-semibold text-navy"
                      >
                        Nombre completo <span className="text-sky">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Tu nombre"
                        className="h-14 px-5 rounded-2xl border border-navy/20 font-body text-body-md text-navy placeholder:text-grayblue focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="empresa"
                        className="font-body text-body-md font-semibold text-navy"
                      >
                        Empresa <span className="text-sky">*</span>
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        required
                        placeholder="Nombre de tu empresa"
                        className="h-14 px-5 rounded-2xl border border-navy/20 font-body text-body-md text-navy placeholder:text-grayblue focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-body text-body-md font-semibold text-navy"
                      >
                        Correo electrónico <span className="text-sky">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="tu@empresa.com"
                        className="h-14 px-5 rounded-2xl border border-navy/20 font-body text-body-md text-navy placeholder:text-grayblue focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="telefono"
                        className="font-body text-body-md font-semibold text-navy"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="+502 0000 0000"
                        className="h-14 px-5 rounded-2xl border border-navy/20 font-body text-body-md text-navy placeholder:text-grayblue focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="servicio"
                      className="font-body text-body-md font-semibold text-navy"
                    >
                      Servicio de interés <span className="text-sky">*</span>
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      defaultValue=""
                      className="h-14 px-5 rounded-2xl border border-navy/20 font-body text-body-md text-navy focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all appearance-none bg-white"
                    >
                      <option value="" disabled>
                        Selecciona un servicio
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="mensaje"
                      className="font-body text-body-md font-semibold text-navy"
                    >
                      Cuéntanos sobre tu empresa y el reto que enfrentas{" "}
                      <span className="text-sky">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      placeholder="Describe brevemente tu situación actual y qué esperas lograr con nuestra ayuda..."
                      className="px-5 py-4 rounded-2xl border border-navy/20 font-body text-body-md text-navy placeholder:text-grayblue focus:outline-none focus:border-sky focus:ring-2 focus:ring-sky/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-16 px-10 bg-sky text-white font-body font-bold text-body-md rounded-full hover:bg-navy2 transition-colors duration-200 self-start"
                  >
                    Enviar solicitud
                  </button>

                  <p className="font-body text-[15px] text-grayblue">
                    Al enviar este formulario aceptas que nos comuniquemos
                    contigo para coordinar tu consulta. No compartimos tu
                    información con terceros.
                  </p>
                </form>
              </div>

              {/* Contact info */}
              <aside className="lg:col-span-2 flex flex-col gap-8">
                <div className="bg-off rounded-card p-8">
                  <h2 className="font-heading text-[clamp(24px,2.5vw,38px)] text-navy mb-8">
                    Información de contacto
                  </h2>
                  <ul className="flex flex-col gap-6">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.label} className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-sky/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon size={18} className="text-sky" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="font-body text-[15px] text-grayblue mb-1">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="font-body text-body-md text-navy font-semibold hover:text-sky transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="font-body text-body-md text-navy font-semibold">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="bg-navy rounded-card p-8">
                  <h3 className="font-heading text-[clamp(20px,2vw,28px)] text-white mb-4">
                    ¿Qué esperar de tu consulta?
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {[
                      "Sesión de 30-45 minutos sin costo",
                      "Análisis inicial de tu situación",
                      "Recomendaciones accionables",
                      "Propuesta personalizada de servicios",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2" />
                        <span className="font-body text-body-md text-grayblue">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
