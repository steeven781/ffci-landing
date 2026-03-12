'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';

const categories = [
  'TODOS',
  'EDUCACIÓN FINANCIERA',
  'ASESORÍA FINANCIERA',
  'LIDERAZGO',
  'EMPRESARIOS',
  'TERAPIA',
  'MUJERES',
  'JUVENTUD',
];

type Course = {
  category: string;
  title: string;
  description: string;
  imagePath: string;
  modalIcon?: string;
  badge: string | null;
  longDescription?: string;
  contentItems?: string[];
};

const modalCardStyle = {
  background: '#F6F7F3',
  boxShadow: '0px 3px 30px #00000029',
  borderRadius: '65px',
};

export default function CoursesFilter({ courses }: { courses: Course[] }) {
  const [active, setActive] = useState('TODOS');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!selectedCourse) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCourse(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selectedCourse]);

  const filtered =
    active === 'TODOS'
      ? courses
      : courses.filter((c) => c.category.toUpperCase() === active);

  return (
    <>
      {/* Filter pills */}
      <div className="bg-white pt-10 pb-4">
        <div className="container-ffci">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`h-[52px] px-7 rounded-full font-body font-extrabold text-[21px] uppercase transition-colors duration-200 ${
                  active === cat
                    ? 'bg-[#4A90E2] text-white'
                    : 'bg-[#8D99AE] text-white hover:bg-[#4A90E2]/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses grid */}
      <section className="section-padding bg-white">
        <div className="container-ffci">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((course) => (
              <article
                key={course.title}
                className="bg-white shadow-[0px_3px_30px_rgba(0,0,0,0.05)] rounded-[45px] p-10 flex flex-col min-h-[562px] cursor-pointer hover:shadow-[0px_6px_40px_rgba(0,0,0,0.1)] transition-shadow duration-200"
                onClick={() => setSelectedCourse(course)}
              >
                {/* Icon image */}
                <div className="mb-8 w-[96px] h-[96px] relative">
                  <Image
                    src={course.imagePath}
                    alt={course.title}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                {/* Title */}
                <h2 className="font-body font-semibold text-[45px] text-[#08284F] leading-tight mb-4 min-h-[113px]">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="font-body font-normal text-[25px] text-[#08284F] leading-relaxed flex-1 mb-8 whitespace-pre-line">
                  {course.description}
                </p>

                {/* Divider */}
                <hr className="border border-[#8D99AE] mb-6" />

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-body font-semibold text-[15px] text-[#CBAC58] uppercase tracking-wider px-4 py-2 rounded-lg"
                    style={{ backgroundColor: 'rgba(203,172,88,0.12)' }}
                  >
                    {course.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    aria-label={`Ver detalles de ${course.title}`}
                    className="w-12 h-12 rounded-full bg-[#003366] flex items-center justify-center hover:bg-[#4A90E2] transition-colors duration-200 shrink-0"
                  >
                    <ArrowRight size={20} className="text-white" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            style={modalCardStyle}
            className="relative w-full max-w-[1200px] max-h-[90vh] overflow-y-auto p-10 md:p-16 lg:p-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-8 right-10 text-[#08284F] hover:opacity-50 transition-opacity"
              aria-label="Cerrar"
            >
              <X size={30} strokeWidth={1.5} />
            </button>

            {/* Category badge */}
            <span
              className="inline-block font-body font-semibold text-[13px] text-[#CBAC58] uppercase tracking-wider px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'rgba(203,172,88,0.12)' }}
            >
              {selectedCourse.category}
            </span>

            {/* Title — full width so description and content align */}
            <h2 className="font-heading text-[clamp(40px,5vw,70px)] text-[#08284F] leading-tight mt-4 mb-10">
              {selectedCourse.title}
            </h2>

            {/* Two columns: description + icon | content list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: description + icon */}
              <div className="flex flex-col">
                <p className="font-body text-[22px] text-[#08284F] leading-tight flex-1 whitespace-pre-line">
                  {selectedCourse.longDescription || selectedCourse.description}
                </p>
                <div className="mt-10 w-[96px] h-[96px] relative">
                  <Image
                    src={selectedCourse.modalIcon ?? selectedCourse.imagePath}
                    alt=""
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* Right: content list */}
              {selectedCourse.contentItems &&
                selectedCourse.contentItems.length > 0 && (
                  <div>
                    <p className="font-body font-bold text-[22px] text-[#08284F] mb-3">
                      Contenido:
                    </p>
                    <ul>
                      {selectedCourse.contentItems.map((item, i) => (
                        <li
                          key={i}
                          className="font-body text-[22px] text-[#08284F] flex gap-2 leading-tight"
                        >
                          <span className="shrink-0">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
