export type CaseStudy = {
  slug: string;
  company: string;
  description: string;
  category: string;
  atendimos: string;
  image: string;
  objetivo: string;
  metas: { title: string; text: string }[];
  resultados: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: 'unisuper',
    company: 'Unisuper',
    description: 'Seminario-taller de administración financiera a la luz de la biblia',
    category: 'Educación Financiera',
    atendimos: '30 Empleados',
    image: '/assets/casos-exito-1.png',
    objetivo:
      'Evalúe su estado actual de salud espiritual analizando aspectos como su fortaleza, perseverancia, equilibrio interior y nutrición espiritual, reflejados en la práctica de 16 disciplinas espirituales. A través de la analogía con la salud física, descubrirá la importancia de asumir la responsabilidad de su propio crecimiento espiritual.',
    metas: [
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
    ],
    resultados: [
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
    ],
  },
  {
    slug: 'combexim',
    company: 'Combexim',
    description: 'Seminario-taller de administración financiera a la luz de la biblia',
    category: 'Asesoría Financiera',
    atendimos: '45 Empleados',
    image: '/assets/casos-exito2.png',
    objetivo:
      'Evalúe su estado actual de salud espiritual analizando aspectos como su fortaleza, perseverancia, equilibrio interior y nutrición espiritual, reflejados en la práctica de 16 disciplinas espirituales. A través de la analogía con la salud física, descubrirá la importancia de asumir la responsabilidad de su propio crecimiento espiritual.',
    metas: [
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
    ],
    resultados: [
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
    ],
  },
  {
    slug: 'guateplast',
    company: 'Guateplast',
    description: 'Seminario-taller de administración financiera a la luz de la biblia',
    category: 'Liderazgo',
    atendimos: '60 Empleados',
    image: '/assets/casos-exito3.png',
    objetivo:
      'Evalúe su estado actual de salud espiritual analizando aspectos como su fortaleza, perseverancia, equilibrio interior y nutrición espiritual, reflejados en la práctica de 16 disciplinas espirituales. A través de la analogía con la salud física, descubrirá la importancia de asumir la responsabilidad de su propio crecimiento espiritual.',
    metas: [
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
      { title: 'Metas', text: 'Seminario-taller de administración financiera a la luz de la biblia' },
    ],
    resultados: [
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
      'Seminario-taller de administración financiera a la luz de la biblia',
    ],
  },
];
