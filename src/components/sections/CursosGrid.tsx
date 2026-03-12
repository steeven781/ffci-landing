'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Course = {
  slug: string;
  category: string;
  title: string;
  description: string;
  imagePath: string;
  meta: string;
};

const INITIAL_COUNT = 8;

export default function CursosGrid({ courses }: { courses: Course[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? courses : courses.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visible.map((course) => (
          <article
            key={course.title}
            className="bg-white shadow-[0px_3px_30px_rgba(0,0,0,0.08)] rounded-[30px] overflow-hidden flex flex-col"
          >
            {/* Image with category badge */}
            <div className="relative h-[280px] w-full shrink-0">
              <Image
                src={course.imagePath}
                alt={course.title}
                fill
                className="object-cover object-center"
              />
              <span className="absolute top-3 left-3 bg-white text-[#08284F] font-body font-extrabold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-lg shadow-sm">
                {course.category}
              </span>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 px-6 pt-7 pb-8">
              <h2 className="font-heading text-[24px] text-[#08284F] leading-tight mb-4">
                {course.title}
              </h2>

              <p className="font-body text-[15px] text-[#08284F] leading-relaxed flex-1 mb-10 whitespace-pre-line">
                {course.description}
              </p>

              <div className="flex items-center justify-between gap-2">
                <span className="font-body font-bold text-[11px] text-[#4A90E2] uppercase tracking-wide bg-[#4A90E2]/10 px-3 py-1.5 rounded-full shrink-0">
                  {course.meta}
                </span>
                <Link
                  href={`/cursos/${course.slug}`}
                  className="flex items-center gap-1 font-body font-bold text-[14px] text-[#08284F] hover:text-[#4A90E2] transition-colors duration-200 shrink-0"
                >
                  Ver curso <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Cargar más */}
      {!showAll && courses.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center px-10 h-[56px] bg-[#08284F] text-white font-body font-extrabold text-[16px] uppercase rounded-full hover:bg-[#4A90E2] transition-colors duration-200"
          >
            Cargar más
          </button>
        </div>
      )}
    </>
  );
}
