import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "@/components/providers/RecaptchaProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FFCI Guatemala – Formación y Consultoría Empresarial",
  description:
    "FFCI Guatemala ofrece servicios de consultoría empresarial, capacitación profesional y gestión de proyectos para impulsar el crecimiento de tu empresa.",
  keywords: ["consultoría", "capacitación", "Guatemala", "FFCI", "empresarial"],
  openGraph: {
    title: "FFCI Guatemala – Formación y Consultoría Empresarial",
    description:
      "Servicios de consultoría empresarial, capacitación profesional y gestión de proyectos.",
    locale: "es_GT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="font-body text-navy bg-white antialiased">
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
