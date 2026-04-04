export type CaseStudy = {
  slug: string;
  company: string;
  description: string;
  category: string;
  atendimos: string;
  image: string;
  imagenDetail: string;
  objetivo: string;
  metas: { title: string; text: string }[];
  resultados: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "unisuper",
    company: "Unisuper",
    description:
      "Brindamos el Seminario-taller de administración financiera a un grupo especifico del personal de la empresa.",
    category: "EDUCACIÓN FINANCIERA",
    atendimos: "150 Empleados",
    image: "/assets/unisuper-logo-color.png",
    imagenDetail: "/assets/unisuper.png",
    objetivo:
      "Brindar educación financiera y desarrollo personal para ayudar a las personas a ordenar sus finanzas, tomar decisiones más conscientes y superar procesos de endeudamiento, guiándolos hacia una vida con mayor estabilidad y libertad financiera.",
    metas: [
      {
        title: "Metas",
        text: "Implementar un plan piloto con 150 participantes para evaluar el impacto del programa en sus hábitos financieros.",
      },
      {
        title: "Metas",
        text: "Lograr que al menos el 80% adopte herramientas prácticas como control de gastos, presupuestos y planificación financiera.",
      },
    ],
    resultados: [
      "Los participantes aprendieron a organizar sus finanzas mediante control de gastos, elaboración de presupuestos y análisis de deudas.",
      "Aplicaron valores y principios en su vida diaria, generando mayor disciplina y responsabilidad financiera. ",
      "Desarrollaron una mentalidad financiera más estratégica, estableciendo metas claras y tomando decisiones más acertadas sobre su dinero.",
    ],
  },
  {
    slug: "combexim",
    company: "Combexim",
    description:
      "Formación practica acerca del emprendimiento y desarrollo personal.",
    category: "EMPRESARIOS",
    atendimos: "24 Empleados",
    image: "/assets/combexim-logo-color.png",
    imagenDetail: "/assets/combexim2.png",
    objetivo:
      "Romper los mitos sobre la edad en el emprendimiento, demostrando que no es una limitante sino una ventaja competitiva. A través de formación práctica y desarrollo personal, se busca que los participantes reconozcan el valor de su experiencia, fortalezcan su confianza y descubran nuevas oportunidades para emprender o innovar en cualquier etapa de su vida.",
    metas: [
      {
        title: "Metas",
        text: "Brindar herramientas prácticas para identificar oportunidades, desarrollar ideas y potenciar su experiencia como un activo clave en el ámbito emprendedor.",
      },
      {
        title: "Metas",
        text: "Formar a 24 gerentes y subgerentes de 45-60 años, fortaleciendo su mentalidad emprendedora y liderazgo, para que puedan impulsar iniciativas, adaptarse al cambio y generar valor dentro de sus equipos y organizaciones.",
      },
    ],
    resultados: [
      "Los participantes lograron reconectar con sus talentos, pasiones y fortalezas, incrementando su confianza personal y profesional. ",
      "Transformaron su experiencia acumulada en oportunidades concretas de crecimiento, innovación y generación de valor.",
      "Desarrollaron una mentalidad emprendedora sólida, entendiendo que es posible iniciar, reinventarse y crecer a cualquier edad.",
    ],
  },
  {
    slug: "uni-san-carlos",
    company: "Uni. San Carlos",
    description:
      "Brindamos el Seminario-taller de administración financiera a coordinadores, personal administrativo y docentes de la Universidad San Carlos de Guatemala",
    category: "EDUCACIÓN FINANCIERA",
    atendimos: "70 Empleados",
    imagenDetail: "/assets/unisancarlos.png",
    image: "/assets/usac-logo-color.png",
    objetivo:
      "Brindar capacitación en educación financiera personal a coordinadores del área educativa, personal administrativo y docentes de la Universidad de San Carlos de Guatemala, a través de un modelo híbrido (presencial y virtual), con el fin de fortalecer sus capacidades financieras y multiplicar este conocimiento a nivel nacional.",
    metas: [
      {
        title: "Metas",
        text: "Facilitar un diplomado en educación financiera dirigido a coordinadores del área educativa, catedráticos de distintas facultades y personal administrativo, proporcionando herramientas prácticas para la gestión financiera personal y su aplicación en entornos educativos.",
      },
      {
        title: "Metas",
        text: "Desarrollar un programa de conferencias complementarias —incluyendo graduaciones del diplomado— sobre educación financiera, liderazgo, empoderamiento femenino y psicología, con el objetivo de fortalecer habilidades integrales en los participantes y ampliar el impacto del programa a nivel nacional.",
      },
    ],
    resultados: [
      "Se certificaron 70 participantes, quienes actualmente están replicando conocimientos de educación financiera en distintos campus de la universidad a nivel nacional.",
      "Los participantes fortalecieron sus habilidades para la toma de decisiones financieras, aplicando herramientas prácticas en su vida personal y profesional.",
      "Se generó un efecto multiplicador del conocimiento, ampliando el alcance de la educación financiera dentro del sistema educativo.",
    ],
  },
  {
    slug: "instituto-prevision-militar",
    company: "Instituto de Previsión Militar",
    description:
      "Formación practica acerca de la jubilación y estabilidad financiera.",
    category: "LIDERAZGO",
    atendimos: "24 Empleados",
    imagenDetail: "/assets/ipm2.png",
    image: "/assets/ipm-logo-color.png",
    objetivo:
      "Desarrollar recomendaciones prácticas que permitan a las personas prepararse para una jubilación plena, equilibrando bienestar personal, relaciones significativas y estabilidad financiera. El enfoque busca que los participantes visualicen esta etapa como una oportunidad de crecimiento, propósito y calidad de vida.",
    metas: [
      {
        title: "Metas",
        text: "Brindar formación en productividad y desarrollo personal, enfocada en la transición hacia la jubilación, ayudando a los participantes a redefinir su propósito, organizar su tiempo y mantener una vida activa y significativa.",
      },
      {
        title: "Metas",
        text: "Promover herramientas para el bienestar integral, incluyendo hábitos saludables, gestión emocional y planificación financiera, con el fin de construir una base sólida para una jubilación estable y satisfactoria.",
      },
    ],
    resultados: [
      "Los participantes fortalecieron sus relaciones familiares e interpersonales, mejorando la calidad de sus vínculos en esta nueva etapa de vida.",
      "Desarrollaron hábitos saludables y una mayor conciencia sobre su bienestar físico, emocional y financiero, promoviendo paz financiera.",
      "Adoptaron una visión positiva de la jubilación, viéndola como una etapa activa, con propósito y oportunidades de crecimiento personal.",
    ],
  },
  {
    slug: "colegio-penzotti",
    company: "Colegio Penzotti",
    description:
      "Capacitar y enseñar la educación financiera personal en los maestros y alumnos del colegio.",
    category: "EDUCACIÓN FINANCIERA",
    atendimos: "5 Empleados",
    imagenDetail: "/assets/penzotti.png",
    image: "/assets/penzotti-logo-color.png",
    objetivo:
      "Enseñar, capacitar e impulsar la educación financiera personal en la generación emergente, promoviendo desde edades tempranas hábitos y conocimientos que les permitan tomar decisiones responsables, construir una base económica sólida y prepararse para un futuro con mayor estabilidad y oportunidades.",
    metas: [
      {
        title: "Metas",
        text: "Implementar programas de educación financiera dirigidos a maestros, niños, adolescentes y padres de familia, fomentando un aprendizaje integral que involucre tanto el entorno educativo como el hogar.",
      },
      {
        title: "Metas",
        text: "Aplicar principios de educación financiera a través de metodologías prácticas y materiales de: “Daniel y Finanzas en Acción”, facilitando el aprendizaje dinámico y adaptado a cada grupo de edad.",
      },
    ],
    resultados: [
      "Se estableció un modelo de educación financiera tripartita que integra a padres, maestros y estudiantes, fortaleciendo el aprendizaje conjunto y continuo.",
      "Los participantes iniciaron un proceso formativo de un año, adquiriendo herramientas prácticas para la gestión del dinero y la toma de decisiones financieras.",
      "Se generó mayor conciencia y participación familiar en la educación financiera, reforzando hábitos positivos desde el hogar.",
    ],
  },
];
