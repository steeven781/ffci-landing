import Link from 'next/link';
import Image from 'next/image';

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos-exito', label: 'Casos de éxito' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/libros', label: 'Libros' },
  { href: '/agenda', label: 'Agenda una cita' },
];

const socialLinks = [
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Spotify' },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-ffci py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left — Brand */}
          <div className="flex flex-col gap-8">
            <div className="h-12 w-40 relative">
              <Image
                src="/assets/logo-ffci.png"
                alt="FFCI Guatemala"
                fill
                className="object-contain object-left"
              />
            </div>

            <p
              className="font-body font-extrabold"
              style={{ color: '#08284F', fontSize: '22px', lineHeight: '28px' }}
            >
              Impulsando liderazgo con impacto generacional
            </p>

            <Link
              href="/agenda"
              className="inline-flex self-start items-center justify-center h-[64px] px-10 bg-[#003366] text-white font-body font-extrabold text-[20px] tracking-widest uppercase hover:brightness-110 transition-all duration-200"
              style={{ borderRadius: '38px' }}
            >
              Agenda una cita
            </Link>

            <p
              className="font-body"
              style={{ color: '#8D99AE', fontSize: '20px', lineHeight: '26px' }}
            >
              6ta av. 17-31 zona 11, Cdad. Guatemala
            </p>
          </div>

          {/* Middle — Explora */}
          <div className="flex flex-col gap-8">
            <h3
              className="font-body font-extrabold"
              style={{ color: '#08284F', fontSize: '25px', lineHeight: '30px' }}
            >
              Explora
            </h3>
            <ul className="flex flex-col gap-5">
              {exploreLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body hover:text-[#003366] transition-colors"
                    style={{ color: '#08284F', fontSize: '22px', lineHeight: '27px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Síguenos */}
          <div className="flex flex-col gap-8">
            <h3
              className="font-body font-extrabold"
              style={{ color: '#08284F', fontSize: '25px', lineHeight: '30px' }}
            >
              Síguenos
            </h3>
            <ul className="flex flex-col gap-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body hover:text-[#003366] transition-colors"
                    style={{ color: '#08284F', fontSize: '22px', lineHeight: '27px' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4"
          style={{ borderTop: '1px solid #E2E8F0' }}
        >
          <p
            className="font-body"
            style={{ color: '#8D99AE', fontSize: '20px', lineHeight: '26px' }}
          >
            © {new Date().getFullYear()} FFCI Guatemala. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacidad"
              className="font-body hover:text-[#003366] transition-colors"
              style={{ color: '#8D99AE', fontSize: '20px', lineHeight: '26px' }}
            >
              Politicas de privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-body hover:text-[#003366] transition-colors"
              style={{ color: '#8D99AE', fontSize: '20px', lineHeight: '26px' }}
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
