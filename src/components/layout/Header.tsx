'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/casos-exito', label: 'Casos de éxito' },
  { href: '/cursos', label: 'Cursos' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-[25px] mt-[22px]">
      {/* Desktop nav pill */}
      <div className="w-full max-w-container h-[115px] bg-white rounded-b-[58px] shadow-soft flex items-center justify-between px-10 lg:px-14">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Inicio"
        >
          <div className="h-36 w-80 relative">
            <Image
              src="/assets/logo-ffci.png"
              alt="FFCI Guatemala"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <nav
          className="hidden md:flex items-center gap-10"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[22px] font-medium text-navy hover:text-sky transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agenda"
            className="font-body text-[22px] font-bold text-navy hover:text-sky transition-colors duration-200"
          >
            Agenda una cita
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-[25px] right-[25px] mt-3 bg-white rounded-card shadow-card p-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[18px] font-medium text-navy hover:text-sky transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/agenda"
            className="font-body text-[18px] font-bold text-navy hover:text-sky transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Agenda una cita
          </Link>
        </div>
      )}
    </header>
  );
}
