import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { courses } from '../data';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const c = courses.find((x) => x.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.title} – FFCI Guatemala`,
    description: c.longDescription.slice(0, 160),
  };
}

export default function CourseDetailPage({ params }: Props) {
  const c = courses.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const [classesText, hoursText] = c.meta.split(' | ');

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden"
          aria-label={c.title}
        >
          <Image
            src="/assets/ffci-bg-hero.png"
            alt=""
            fill
            className="object-cover object-center pointer-events-none"
            aria-hidden="true"
            priority
          />

          <div className="container-ffci relative z-10 py-[100px] md:py-[140px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: text */}
              <div>
                <h1
                  className="font-heading text-white leading-[1.05] mb-6"
                  style={{ fontSize: 'clamp(48px, 5.5vw, 90px)' }}
                >
                  {c.title}
                </h1>

                <p className="font-body text-white/75 text-[24px] md:text-[30px] leading-relaxed mb-10 mt-12 whitespace-pre-line">
                  {c.description}
                </p>

                <div className="flex items-center gap-6 mb-10 font-body font-bold text-[24px] text-[#4A90E2]">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/assets/libro-alternativo@2x.png"
                      alt=""
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                    {classesText}
                  </span>
                  <span className="text-[#4A90E2]/40">|</span>
                  <span className="flex items-center gap-2">
                    <Image
                      src="/assets/escritorio-de-reloj@2x.png"
                      alt=""
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                    {hoursText}
                  </span>
                </div>

                <Link
                  href="/agenda"
                  className="inline-flex items-center justify-center h-[58px] px-10 bg-[#4A90E2] text-white font-body font-extrabold text-[18px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200"
                >
                  Comienza el curso
                </Link>
              </div>

              {/* Right: image */}
              <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden">
                <Image
                  src={c.imagePath}
                  alt={c.title}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Acerca del curso ── */}
        <section className="py-36 bg-white">
          <div className="container-ffci">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <span
                  className="inline-block font-body font-semibold uppercase text-[20px] text-[#CBAC58] px-12 rounded-[20px] mb-8"
                  style={{
                    backgroundColor: 'rgba(203,172,88,0.2)',
                    letterSpacing: '1.5px',
                    lineHeight: '50px',
                  }}
                >
                  {c.category}
                </span>
                <h2
                  className="font-heading text-[#08284F] leading-tight"
                  style={{ fontSize: 'clamp(40px, 4vw, 64px)' }}
                >
                  Acerca del curso
                </h2>
              </div>

              {/* Right */}
              <div className="pt-2">
                <p className="font-body font-normal text-[35px] text-[#08284F] leading-relaxed whitespace-pre-line">
                  {c.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contenido ── */}
        <section className="mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-t-[40px] overflow-hidden mb-20">
          <div className="bg-[#4A90E2] py-20 px-8 md:px-16 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
              {/* Left */}
              <div className="flex flex-col justify-between pb-8">
                <h2
                  className="font-heading text-white leading-[0.95]"
                  style={{ fontSize: 'clamp(64px, 8vw, 86px)' }}
                >
                  Contenido
                </h2>
                <div className="relative w-[160px] h-[160px] mt-12">
                  <Image
                    src={c.icon}
                    alt=""
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </div>

              {/* Right: list */}
              <ul className="flex flex-col gap-1 pt-2">
                {c.contentItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-body text-[28px] text-white leading-snug"
                  >
                    <span className="shrink-0 mt-0.5 font-bold">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Da el siguiente paso ── */}
        <section className="py-24 bg-white text-center">
          <div className="container-ffci flex flex-col items-center gap-8 max-w-[720px] mx-auto">
            <h2
              className="font-heading text-[#08284F]"
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              Da el siguiente paso
            </h2>
            <p className="font-body text-[20px] md:text-[28px] text-[#003366] leading-relaxed max-w-[730px]">
              {c.ctaText}
            </p>
            <Link
              href="/agenda"
              className="inline-flex items-center justify-center h-[56px] px-12 bg-[#4A90E2] text-white font-body font-extrabold text-[20px] tracking-widest uppercase rounded-full hover:brightness-110 transition-all duration-200"
            >
              Comprar curso
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
