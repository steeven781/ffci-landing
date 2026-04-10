import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoursesFilter from '@/components/sections/CoursesFilter';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cursos y Capacitación – FFCI Guatemala',
  description:
    'Programas de formación ejecutiva y técnica para profesionales y empresas en Guatemala. Liderazgo, gestión de proyectos, finanzas y más.',
};

const courses = [
  // ── Educación Financiera ──────────────────────────────────────────────────
  {
    category: 'Educación Financiera',
    title: 'Libertad Financiera',
    description: 'Seminario-taller de admin.\nfinanciera a la luz de la biblia',
    imagePath: '/assets/manos-usd@2x.png',
    modalIcon: '/assets/Group 69@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'El Seminario Libertad Financiera nace del llamado a vivir la verdadera libertad que Dios nos dio, aprendiendo a administrar con fidelidad los recursos que Él nos confía. Ante la falta de enseñanza sobre el Señorío y la mayordomía, este seminario ofrece principios bíblicos prácticos para ordenar las finanzas a la luz de la Palabra, integrando el Ser, el Hacer y el Tener.',
    contentItems: [
      'Principios del Ser (ahorro, integridad, administración, contentamiento, trabajo, generosidad entre otros)',
      'El dinero y los temperamentos',
      'Principios del hacer',
      'Las 5 C del control de gastos',
      'Ajuste de presupuesto',
      'Diferenciar entre N-G-D',
      'Actitudes frente al dinero',
      'Cómo salir de las deudas-proceso de asesoría',
      'La importancia de tener sabiduría para generar dinero, gastarlo, multiplicarlo y conservarlo.',
    ],
  },
  // ── Asesoría Financiera ───────────────────────────────────────────────────
  {
    category: 'Asesoría Financiera',
    title: 'Asesoría Financiera',
    description: 'Programa y resolución\nde deudas',
    imagePath: '/assets/finacial.png',
    modalIcon: '/assets/Group 81@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'En Guatemala el número de personas con financiamiento o deuda ha ido en aumento, superando 1.4 millones de deudores registrados en el país en los últimos años. Si actualmente enfrentas deudas, te guiamos paso a paso para estructurar un plan que te permita salir de ellas de forma responsable y sostenible. Nuestro objetivo es ayudarte no solo a resolver problemas financieros, sino a desarrollar una administración basada en principios, carácter y propósito.',
    contentItems: [
      'Orientamos',
      'Enseñamos principios',
      'Ayudamos a poner orden en tus finanzas personales y empresariales',
      'Damos acompañamiento',
      'Negociamos la Deuda…. Esto tiene una comisión del 15% de la deuda negociada y pagada',
    ],
  },
  // ── Liderazgo ─────────────────────────────────────────────────────────────
  {
    category: 'Liderazgo',
    title: '7 leyes del aprendizaje',
    description:
      'Principios del aprendizaje efectivo\npara líderes y educadores',
    imagePath: '/assets/bible.png',
    modalIcon: '/assets/Group 77@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Basado en el libro Las 7 Leyes del Aprendizaje de Bruce Wilkinson, este curso presenta principios esenciales para enseñar de manera efectiva y generar un aprendizaje real.\n\nEnseñar no es solo transmitir información; el verdadero desafío es asegurarse de que el alumno realmente aprenda. A través de estas siete leyes, maestros, líderes y padres cristianos descubrirán herramientas prácticas para comunicar con mayor claridad, influir en el corazón y la mente de sus discípulos, y desarrollar una enseñanza que produzca transformación duradera.',
    contentItems: [
      'La Ley del Agente',
      'La Ley del Potencial',
      'La Ley de la Retención',
      'La Ley de la Ejecución',
      'La Ley de la Necesidad',
      'La Ley del Desarrollo',
      'La Ley del Avivamiento',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Experiencia con Dios',
    description:
      'Estudio semanal para desarrollar\nuna verdadera relación con el Creador',
    imagePath: '/assets/hands.png',
    modalIcon: '/assets/Group 79@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'El objetivo es enseñar a desarrollar una verdadera relación con el Creador para conocer claramente su voluntad y hacerla mientras descubrimos como cambian nuestras vidas en forma radical por medio de la gracia.',
    contentItems: [
      'El conocimiento de Dios se basa en la experiencia Dios obra conforme a su naturaleza',
      'Cómo hacer la voluntad de Dios',
      'Las siete realidades de una experiencia con Dios - Dios está obrando a tu alrededor',
      'La invitación de Dios para participar en su obra - Participar en su obra',
      'Dios habla a través de la Biblia, la oración, las circunstancias, a través de su iglesia.',
      'Experiencia con Dios en el matrimonio, en la iglesia, en el mundo de los negocios, en su reino.',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Fitness espiritual',
    description: 'Taller para evaluar su estado actual\nde fitness espiritual',
    imagePath: '/assets/fitness.png',
    modalIcon: '/assets/Group 85@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Evalúe su estado actual de salud espiritual analizando aspectos como su fortaleza, perseverancia, equilibrio interior y nutrición espiritual, reflejados en la práctica de 16 disciplinas espirituales. A través de la analogía con la salud física, descubrirá la importancia de asumir la responsabilidad personal por su crecimiento espiritual, fortalecer su vida interior y cultivar una relación más profunda con Dios.',
    contentItems: [
      'Espíritu — Alma — Cuerpo',
      'Fitness Espiritual: Una Analogía',
      'El Papel de los Instructores Personales y Spotters - El Papel de Entrenadores, Mentores y Socios de Constancia y Transparencia',
      'Elementos Esenciales de Competencia',
      'Disciplinas del Espíritu',
      'Cómo contribuyen los elementos esenciales de competencia y las disciplinas del Espíritu a la Salud Espiritual y a Ser Fructífero.',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Relaciones sanas',
    description:
      'Taller para ganar una mayor\ncompresión sobre las herramientas\npara construir relaciones',
    imagePath: '/assets/relations.png',
    modalIcon: '/assets/Group 83@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Gane una mayor compresión sobre las herramientas para construir relaciones al aprender a identificar tus fortalezas, valorar las fortalezas de los demás y permitir que el poder de la vida de Cristo te ayude a ser flexible y adaptable en tus relaciones. Disfrute de la interacción con otros con menor estrés y frustración.',
    contentItems: [
      'El Misterio de las Diferencias',
      'Dios Ama la Variedad',
      'Introducción a Cuatro Patrones Básicos de Comportamiento',
      'Identificando Patrones de Comportamiento - Patrones de Comportamiento y Zonas de Comodidad',
      'Cuatro Desafíos Comunes en las Relaciones Sanas Liderando desde tus Fortalezas',
      '¿Estás Viviendo en el Círculo de la Vida de Cristo, o en la Caja de tus Limitaciones Naturales?',
      'Vivir en el Círculo de la Vida de Cristo',
      '¿Cómo Deberíamos Vivir?',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Revisión del conflicto',
    description:
      'Identifica causas del conflicto\ny aprende a resolverlo sanamente',
    imagePath: '/assets/gente-tirando@2x.png',
    modalIcon: '/assets/Group 99@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'El objetivo ayudar a líderes de iglesias, organizaciones, ministerios y empresarios que utilizan su negocio como plataforma de servicio a identificar las causas del conflicto y aprender formas saludables de abordarlo. A través de herramientas prácticas, los participantes aprenderán a transformar el posible daño del conflicto en oportunidades de crecimiento, relaciones restauradas y entornos de reconciliación, paz y perdón.',
    contentItems: [
      'Reflexión sobre el Conflicto según Tu Experiencia Ejercicio de Auto-Evaluación ¿Qué es el Conflicto?',
      'Formas Comunes de Enfrentar el Conflicto',
      'Punto Óptimo: Enfoque de Dios ante la Resolución "explosivos aparatos improvisados" Conflicto',
      'Avanzando Hacia el Punto Óptimo – Usando el Comportamiento Inspirado por Dios para Difuminar el Conflicto',
      'Explorando de las Causas Comunes del Conflicto',
      'Difuminar el Conflicto',
      'Convertirse en un Seguidor de la Paz',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Acondicionamiento para la carrera',
    description:
      'Taller para líderes que quieren\nliderar con visión y propósito',
    imagePath: '/assets/linea-de-meta@2x.png',
    modalIcon: '/assets/Group 91@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Este taller está diseñado para ayudarte a asumir tu rol como líder que marca el rumbo. Aprenderás a definir tu visión, misión y metas inspiradas por Dios, utilizándolas como guía para tus decisiones, comportamiento y estilo de vida.\n\nTambién te capacitará para comprender la diferencia entre liderar y gestionar, y saber cuándo aplicar cada enfoque para dirigir con mayor efectividad.',
    contentItems: [
      'Liderazgo – Ejercicio de Autoevaluación Gestión',
      'Liderazgo y Gestión – Dos Caras de la Misma Moneda Convertirse en un Líder que Marca el Paso',
      'Alinearse: la Clave para ser Efectivo',
      'Mi Visión, Misión, Valores y Metas Personales',
    ],
  },
  {
    category: 'Liderazgo',
    title: 'Superando los obstáculos',
    description:
      'Identifica y enfrenta los desafíos\ndel liderazgo con efectividad',
    imagePath: '/assets/pasos-de-carrera@2x.png',
    modalIcon: '/assets/Group 93@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Este taller te equipará para identificar y enfrentar de manera efectiva los desafíos que los líderes encuentran en la iglesia, el hogar, organizaciones o negocios con propósito ministerial. Aprenderás a reconocer los obstáculos que surgen al influir en tu cultura y a guiar a otros a través de los procesos de cambio, promoviendo un crecimiento saludable y relaciones constructivas.',
    contentItems: [
      'Crear y Sostener una Cultura Inspirada por Dios',
      'Cultivar un Crecimiento Saludable',
      'Beneficios y Obstáculos de Cambio Opciones en Tiempos de Cambio',
      'Superar los Obstáculos',
    ],
  },
  // ── Empresarios ───────────────────────────────────────────────────────────
  {
    category: 'Empresarios',
    title: 'Cristo en el trabajo',
    description:
      'Aplica principios de fe en tu\nvida profesional y empresarial',
    imagePath: '/assets/coworking@2x.png',
    modalIcon: '/assets/Group 95@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Sensibilizar al ejecutivo sobre la importancia de su llamado e introducir consejos prácticos para aplicar la fe en su trabajo.',
    contentItems: [
      'El papel del líder',
      'El sacerdocio en tu empresa',
      'El llamado empresarial',
      'Aplicación de la mayordomía',
      'FE en nuestro trabajo',
      'Corrupción y soborno',
      'Equilibrando tu entorno: familia, empresa, iglesia.',
      'Contento con lo que tienes',
      'Primero el reino',
    ],
  },
  {
    category: 'Empresarios',
    title: 'Liderazgo auténtico',
    description:
      'Desarrolla tu potencial en compromisos,\nconvicciones y actitudes',
    imagePath: '/assets/lider-de-inspiracion-de-la-antorcha@2x.png',
    modalIcon: '/assets/Group 97@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Enseñar a desarrollar una verdadera relación con el Creador para conocer claramente su voluntad y hacerla mientras descubrimos como cambian nuestras vidas en forma radical por medio de la gracia. Diez principios que OPTIMIZARAN su verdadero potencial en tres áreas: Compromisos, convicciones y actitudes. Dirigido a Lideres, profesionales, empresarios. Hombres y mujeres',
    contentItems: [
      'Comprender la importancia y métodos para construir una vida de éxito auténtico',
      'Crear una imagen acertada de lo qué es el éxito',
      'Desarrollar un claro sentido de propósito en la vida',
      'Entender cuál es su parte en el crecimiento personal',
      'Comprender la importancia de construir sobre principios nuestra vida',
      'Desarrollar un sistema y estrategias para experimentar el éxito auténtico',
    ],
  },
  {
    category: 'Empresarios',
    title: 'Los negocios y la Biblia',
    description: 'Principios bíblicos para hombres\ny mujeres de negocios',
    imagePath: '/assets/biblia@2x.png',
    modalIcon: '/assets/Group 101@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Una Guía completa de Principios Bíblicos para hombres y mujeres de negocios. Aprenderá los fundamentos que distinguen a una empresa manejada con Principios No Opcionales. Lograremos que el ejecutivo reconozca y comprenda su rol de administrador y no de dueño. Confiar porque Dios tiene completo control e identificar los factores críticos de una sociedad empresarial.',
    contentItems: [
      'Propiedad y propósito',
      'Liderazgo',
      'Finanzas: Deudas, préstamos y cobranzas',
      'Finanzas: Generosidad',
      'Recursos humanos: Contratación y promociones Recursos humanos: Pago a empleados y despidos',
      'Organización',
      'Mercadotecnia',
      'Planificación personal y empresarial',
      'Diario de oración',
    ],
  },
  // ── Terapia ───────────────────────────────────────────────────────────────
  {
    category: 'Terapia',
    title: 'Empareja tus finanzas',
    description: 'Principios bíblicos para el manejo\ndel dinero en pareja',
    imagePath: '/assets/balancearse@2x.png',
    modalIcon: '/assets/Group 103@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Los problemas de dinero afectan directamente la relación de pareja, debido a que se desconocen los principios bíblicos en la toma de decisiones financieras, lo cual provoca el aislamiento, el estrés emocional, la baja autoestima y la depresión.',
    contentItems: [
      'Métodos utilizados en el manejo del dinero',
      'Razones del por qué hablar del dinero en pareja',
      'Aprendiendo del círculo de la libertad financiera',
      'Principios para el éxito financiero en pareja',
      'Rompiendo con los paradigmas financieros',
      'Conociendo nuestras diferencias',
      'Los temperamentos y el dinero',
      'Las prioridades bíblicas',
    ],
  },
  {
    category: 'Terapia',
    title: 'Estaciones del matrimonio',
    description: 'Las estaciones del matrimonio\ny cómo avanzar en cada una',
    imagePath: '/assets/anillos-boda (1)@2x.png',
    modalIcon: '/assets/Group 105@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Este taller presenta las distintas "estaciones" que atraviesa el matrimonio, ayudando a las parejas a identificar en cuál se encuentran y cómo avanzar desde momentos de distancia o dificultad hacia etapas de renovación, esperanza e intimidad.\n\nA través de pasos prácticos y la integración de los Cinco Lenguajes del Amor, los participantes aprenderán a fortalecer su relación y aprovechar el potencial de crecimiento y bienestar que existe en cada etapa del matrimonio.',
    contentItems: [
      'Estación del INVIERNO',
      'Estación del OTOÑO',
      'Estación de la PRIMAVERA',
      'Estación del VERANO',
      'Pasos positivos para sacarle el máximo provecho a cada estación',
      'Los 5 lenguajes del amor: Palabras de afirmación, tiempo de calidad, Los regalos, Toque físico, Actos de servicio',
    ],
  },
  {
    category: 'Terapia',
    title: 'Amor y respeto',
    description: 'El ciclo del amor y el respeto\npara un matrimonio duradero',
    imagePath: '/assets/apreton-de-manos-de-pareja-de-corazon@2x.png',
    modalIcon: '/assets/Group 107@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Hoy en día, cinco de cada diez matrimonios terminan en divorcio, porque el amor no es suficiente. Sí, el amor es vital, especialmente para la esposa, pero nos hemos olvidado de la necesidad que el esposo tiene de respeto. Este libro trata la manera en que la esposa puede satisfacer su necesidad de ser amada, al mismo tiempo que le da a su esposo lo que él necesita: respeto',
    contentItems: [
      'Ciclo alienante',
      'El sencillo secreto para un matrimonio mejor.',
      'Ciclo energizante',
      'P-A-R-E-J-A cómo deletrearle amor a su esposa',
      'S-I-L-L-A-S cómo deletrearle respeto a su esposo',
      'Ciclo gratificante',
      'La verdadera razón para amar y respetar',
    ],
  },
  {
    category: 'Terapia',
    title: 'Sexualidad y matrimonio',
    description: 'Espacio de amor, seguridad\ny ternura en el matrimonio',
    imagePath: '/assets/propuesta-de-matrimonio@2x.png',
    modalIcon: '/assets/Group 109@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Cantar de los Cantares reúne algunos de los poemas más románticos de la Biblia, donde la relación matrimonial es comparada con un jardín íntimo y reservado (Cantares 4:12–16). Más allá de la metáfora, este "jardín" representa el espacio de amor, seguridad y ternura que la pareja construye, un lugar donde pueden encontrar fuerza y esperanza para volver a empezar.',
    contentItems: [
      'Dios nos dice: ¡Disfrútense!',
      'El Secreto para la Pasión',
      'Asimetría Sexual',
      'Buenos Amantes',
      'Comunicación Sexual',
      'Prácticas Sexuales',
    ],
  },
  // ── Mujeres ───────────────────────────────────────────────────────────────
  {
    category: 'Mujeres',
    title: 'La Mujer que prospera',
    description: 'Prosperidad integral para mujeres\nbasada en Proverbios 31',
    imagePath: '/assets/alt-de-empleado@2x.png',
    modalIcon: '/assets/Group 111@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'es un curso diseñado para ayudar a las mujeres a desarrollar una vida de prosperidad integral basada en principios bíblicos, inspirados en la sabiduría de Proverbios 31. A través de enseñanzas prácticas, las participantes aprenderán a fortalecer su relación con Dios, desarrollar sus habilidades, cultivar un carácter generoso y construir un legado que impacte su familia y su entorno.',
    contentItems: [
      'Prosperidad en su relación con Dios (capitulo 10)',
      'Prosperidad en su relación de pareja (capitulo 1)',
      'Prosperidad impactando a la generación emergente (capitulo 3 y 8)',
      'Prosperidad en su desarrollo personal (capitulo 4.5 y 6)',
      'Prosperidad en su generosidad (capitulo 9)',
    ],
  },
  // ── Juventud ──────────────────────────────────────────────────────────────
  {
    category: 'Juventud',
    title: 'Finanzas en acción',
    description: 'Lecciones financieras para\nadolescentes de 12 a 16 años',
    imagePath: '/assets/hucha@2x.png',
    modalIcon: '/assets/Group 113@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'Un curso dirigido a adolescentes y jóvenes con lecciones que todo joven debe aprender sobre el dinero. Para edades de 12-16 años',
    contentItems: [
      'El yo-yo y el dinero',
      'El mal del último siglo',
      'Ordenando tu closet financiero',
      'Nadando en contra de la corriente',
      'Una frase enemiga',
      'Mirando hacia el futuro',
      'Generador de empleos',
      'Quien manda a quien',
      'Vanidad todo es vanidad',
      'La fórmula perfecta',
      'La brújula y el GPS',
    ],
  },
  {
    category: 'Juventud',
    title: 'Daniel y las hormigas millonarias',
    description: 'Curso financiero para niños\nsobre ahorro y administración',
    imagePath: '/assets/nino-sonriente@2x.png',
    modalIcon: '/assets/Group 115@2x.png',
    badge: null,
    status: 'active' as const,
    longDescription:
      'es un curso financiero para niños que enseña, de forma divertida y práctica, principios básicos de administración del dinero. A través de historias, ejemplos y actividades, los niños aprenden sobre ahorro, responsabilidad, trabajo y generosidad, desarrollando desde temprana edad hábitos financieros saludables y valores que los acompañarán toda la vida.',
    contentItems: [
      'De Quien es la fiesta - Soy un administrador',
      'Mentiritas Blancas mentiritas - Integridad',
      'Yo debo, tu debes - Deudas',
      '¡Estoy Feliz! - Contentamiento',
      '¡Dame un pedazo de pastel! - Generosidad',
      '¡Te veo en el cielo Daniel! - Eternidad',
      'Hormigas Millonarias - Ahorro',
      'Pequeños Gigantes – Proyecto de vida',
      'Trabajando y con el mazo dando - Valor del trabajo',
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative bg-[#051D3B] mt-[93px] mx-auto w-[calc(100%-30px)] max-w-[1865px] rounded-xl2 overflow-hidden min-h-[55vh] flex flex-col items-center justify-center text-center pt-[112px] md:pt-[154px] pb-[70px] md:pb-[98px]"
          aria-label="Sección de cursos"
        >
          <Image
            src="/assets/ffci-bg-hero.png"
            alt=""
            fill
            className="object-cover object-center pointer-events-none"
            aria-hidden="true"
            priority
          />

          <div className="container-ffci relative z-10">
            <h1 className="font-heading text-[clamp(29px,4.5vw,92px)] text-white leading-[1.1]">
              <span className="block">Soluciones formativas</span>
              <span className="block">que transforman vidas</span>
            </h1>

            <p className="mt-14 pt-[21px] md:pt-[28px] font-body text-[13px] leading-relaxed md:text-[18px] lg:text-[30px] lg:leading-[34px] text-white text-center w-full max-w-[1130px] mx-auto">
              Brindamos herramientas prácticas y acompañamiento cercano para
              integrar fe, finanzas y liderazgo, generando impacto real en la
              vida y los negocios.
            </p>

            <div className="mt-10 pt-[21px] flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center w-[222px] h-[52px] bg-[#4A90E2] text-white font-body font-extrabold text-[17px] tracking-normal uppercase rounded-full hover:brightness-110 transition-all duration-200 shadow-card"
              >
                Adquirir un curso
              </Link>
              <Link
                href="/agenda"
                className="inline-flex items-center justify-center w-[222px] h-[52px] bg-white text-[#4A90E2] font-body font-extrabold text-[17px] tracking-normal uppercase rounded-full hover:bg-white/90 transition-all duration-200 shadow-card"
              >
                Tomar asesoría
              </Link>
            </div>
          </div>
        </section>

        {/* Filter pills + Courses grid */}
        <div id="cursos">
          <CoursesFilter courses={courses} />
        </div>
      </main>
      <Footer />
    </>
  );
}
