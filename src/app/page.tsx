import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import History from "@/components/sections/History";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "FFCI Guatemala – Consultoría Empresarial y Capacitación Profesional",
  description:
    "Impulsamos el crecimiento de tu empresa con consultoría estratégica, capacitación profesional y gestión de proyectos. 15+ años transformando organizaciones en Guatemala.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <History />
        <Team />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
