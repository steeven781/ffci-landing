export type CourseData = {
  slug: string;
  category: string;
  title: string;
  description: string;
  imagePath: string;
  icon: string;
  meta: string;
  longDescription: string;
  contentItems: string[];
  ctaText: string;
};

export const courses: CourseData[] = [
  // ── Educación Financiera ───────────────────────────────────────────────────
  {
    slug: 'libertad-financiera',
    category: 'Educación Financiera',
    title: 'Libertad Financiera',
    description:
      'Seminario-taller de administración financiera\na la luz de la biblia',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 69@2x.png',
    meta: '6 CLASES | 2 HRS',
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
    ctaText:
      'Descubre principios prácticos y herramientas para tomar decisiones financieras inteligentes. Da el primer paso hacia una vida financiera más saludable.',
  },
  // ── Asesoría Financiera ────────────────────────────────────────────────────
  {
    slug: 'asesoria-financiera',
    category: 'Asesoría Financiera',
    title: 'Asesoría Financiera',
    description: 'Programa y resolución\nde deudas',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 81@2x.png',
    meta: '6 CLASES | 2 HRS',
    longDescription:
      'En Guatemala el número de personas con financiamiento o deuda ha ido en aumento, superando 1.4 millones de deudores registrados en el país en los últimos años. Si actualmente enfrentas deudas, te guiamos paso a paso para estructurar un plan que te permita salir de ellas de forma responsable y sostenible. Nuestro objetivo es ayudarte no solo a resolver problemas financieros, sino a desarrollar una administración basada en principios, carácter y propósito.',
    contentItems: [
      'Orientamos',
      'Enseñamos principios',
      'Ayudamos a poner orden en tus finanzas personales y empresariales',
      'Damos acompañamiento',
      'Negociamos la Deuda…. Esto tiene una comisión del 15% de la deuda negociada y pagada',
    ],
    ctaText:
      'Si las deudas te abruman, no estás solo. Te acompañamos paso a paso hacia la libertad financiera con principios bíblicos probados.',
  },
  // ── Liderazgo ─────────────────────────────────────────────────────────────
  {
    slug: '7-leyes-del-aprendizaje',
    category: 'Liderazgo',
    title: '7 leyes del aprendizaje',
    description:
      'Principios del aprendizaje efectivo\npara líderes y educadores',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 77@2x.png',
    meta: '7 CLASES | 3 HRS',
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
    ctaText:
      'Transforma tu manera de enseñar y liderar. Aprende los principios que generan un aprendizaje real y duradero en quienes te rodean.',
  },
  {
    slug: 'experiencia-con-dios',
    category: 'Liderazgo',
    title: 'Experiencia con Dios',
    description:
      'Estudio semanal para desarrollar\nuna verdadera relación con el Creador',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 79@2x.png',
    meta: '7 CLASES | 4 HRS',
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
    ctaText:
      'Profundiza tu relación con el Creador y descubre cómo Su voluntad puede transformar cada área de tu vida.',
  },
  {
    slug: 'fitness-espiritual',
    category: 'Liderazgo',
    title: 'Fitness espiritual',
    description: 'Taller para evaluar su estado actual\nde fitness espiritual',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 85@2x.png',
    meta: '6 CLASES | 2 HRS',
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
    ctaText:
      'Evalúa y fortalece tu vida espiritual con herramientas prácticas que producen transformación duradera desde adentro hacia afuera.',
  },
  {
    slug: 'relaciones-sanas',
    category: 'Liderazgo',
    title: 'Relaciones sanas',
    description:
      'Taller para ganar mayor comprensión sobre\nlas herramientas para construir relaciones',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/Group 83@2x.png',
    meta: '7 CLASES | 3 HRS',
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
    ctaText:
      'Aprende a construir relaciones más saludables y significativas en tu familia, trabajo y comunidad con herramientas bíblicas y prácticas.',
  },
  {
    slug: 'revision-del-conflicto',
    category: 'Liderazgo',
    title: 'Revisión del conflicto',
    description:
      'Identifica causas del conflicto\ny aprende a resolverlo sanamente',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/apreton-de-manos-de-pareja-de-corazon@2x.png',
    meta: '7 CLASES | 3 HRS',
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
    ctaText:
      'Convierte los conflictos en oportunidades de crecimiento y reconciliación con herramientas prácticas y bíblicas probadas.',
  },
  {
    slug: 'acondicionamiento-para-la-carrera',
    category: 'Liderazgo',
    title: 'Acondicionamiento para la carrera',
    description:
      'Taller para líderes que quieren\nliderar con visión y propósito',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/pasos-de-carrera@2x.png',
    meta: '4 CLASES | 2 HRS',
    longDescription:
      'Este taller está diseñado para ayudarte a asumir tu rol como líder que marca el rumbo. Aprenderás a definir tu visión, misión y metas inspiradas por Dios, utilizándolas como guía para tus decisiones, comportamiento y estilo de vida.\n\nTambién te capacitará para comprender la diferencia entre liderar y gestionar, y saber cuándo aplicar cada enfoque para dirigir con mayor efectividad.',
    contentItems: [
      'Liderazgo – Ejercicio de Autoevaluación Gestión',
      'Liderazgo y Gestión – Dos Caras de la Misma Moneda Convertirse en un Líder que Marca el Paso',
      'Alinearse: la Clave para ser Efectivo',
      'Mi Visión, Misión, Valores y Metas Personales',
    ],
    ctaText:
      'Define tu visión, misión y metas como líder. Construye el camino hacia un liderazgo efectivo, inspirador y con propósito eterno.',
  },
  {
    slug: 'superando-los-obstaculos',
    category: 'Liderazgo',
    title: 'Superando los obstáculos',
    description:
      'Identifica y enfrenta los desafíos\ndel liderazgo con efectividad',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/balancearse@2x.png',
    meta: '4 CLASES | 2 HRS',
    longDescription:
      'Este taller te equipará para identificar y enfrentar de manera efectiva los desafíos que los líderes encuentran en la iglesia, el hogar, organizaciones o negocios con propósito ministerial. Aprenderás a reconocer los obstáculos que surgen al influir en tu cultura y a guiar a otros a través de los procesos de cambio, promoviendo un crecimiento saludable y relaciones constructivas.',
    contentItems: [
      'Crear y Sostener una Cultura Inspirada por Dios',
      'Cultivar un Crecimiento Saludable',
      'Beneficios y Obstáculos de Cambio Opciones en Tiempos de Cambio',
      'Superar los Obstáculos',
    ],
    ctaText:
      'Equípate para enfrentar cualquier desafío con estrategias prácticas y una cultura inspirada por Dios que promueve el crecimiento.',
  },
  // ── Empresarios ───────────────────────────────────────────────────────────
  {
    slug: 'cristo-en-el-trabajo',
    category: 'Empresarios',
    title: 'Cristo en el trabajo',
    description:
      'Aplica principios de fe en tu\nvida profesional y empresarial',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/coworking@2x.png',
    meta: '9 CLASES | 3 HRS',
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
    ctaText:
      'Aplica los principios del Reino en tu empresa y descubre el impacto transformador de integrar tu fe con tu vocación profesional.',
  },
  {
    slug: 'liderazgo-autentico',
    category: 'Empresarios',
    title: 'Liderazgo auténtico',
    description:
      'Desarrolla tu potencial en compromisos,\nconvicciones y actitudes',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/linea-de-meta@2x.png',
    meta: '6 CLASES | 2 HRS',
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
    ctaText:
      'Desarrolla el líder que Dios diseñó en ti. Compromisos, convicciones y actitudes para alcanzar el éxito auténtico y duradero.',
  },
  {
    slug: 'los-negocios-y-la-biblia',
    category: 'Empresarios',
    title: 'Los negocios y la Biblia',
    description: 'Principios bíblicos para hombres\ny mujeres de negocios',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/gente-tirando@2x.png',
    meta: '9 CLASES | 4 HRS',
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
    ctaText:
      'Administra tu empresa con principios bíblicos sólidos. Descubre el verdadero rol del mayordomía empresarial y lidera con integridad.',
  },
  // ── Terapia ───────────────────────────────────────────────────────────────
  {
    slug: 'empareja-tus-finanzas',
    category: 'Terapia',
    title: 'Empareja tus finanzas',
    description: 'Principios bíblicos para el manejo\ndel dinero en pareja',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/pareja-de-lesbianas@2x.png',
    meta: '8 CLASES | 3 HRS',
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
    ctaText:
      'Fortalece tu matrimonio al alinear tus finanzas con principios bíblicos. El dinero no tiene que dividirlos — puede unirlos.',
  },
  {
    slug: 'estaciones-del-matrimonio',
    category: 'Terapia',
    title: 'Estaciones del matrimonio',
    description: 'Las estaciones del matrimonio\ny cómo avanzar en cada una',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/anillos-boda (1)@2x.png',
    meta: '6 CLASES | 2 HRS',
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
    ctaText:
      'Identifica en qué estación está tu matrimonio y aprende a avanzar juntos hacia etapas de mayor intimidad, renovación y amor.',
  },
  {
    slug: 'amor-y-respeto',
    category: 'Terapia',
    title: 'Amor y respeto',
    description: 'El ciclo del amor y el respeto\npara un matrimonio duradero',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/manos-sosteniendo (1)@2x.png',
    meta: '7 CLASES | 3 HRS',
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
    ctaText:
      'Descubre el secreto de un matrimonio duradero: dar amor y respeto en la manera que cada cónyuge verdaderamente necesita.',
  },
  // ── Mujeres ───────────────────────────────────────────────────────────────
  {
    slug: 'la-mujer-que-prospera',
    category: 'Mujeres',
    title: 'La Mujer que prospera',
    description: 'Prosperidad integral para mujeres\nbasada en Proverbios 31',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/aprendizaje-electronico (1)@2x.png',
    meta: '5 CLASES | 2 HRS',
    longDescription:
      'es un curso diseñado para ayudar a las mujeres a desarrollar una vida de prosperidad integral basada en principios bíblicos, inspirados en la sabiduría de Proverbios 31. A través de enseñanzas prácticas, las participantes aprenderán a fortalecer su relación con Dios, desarrollar sus habilidades, cultivar un carácter generoso y construir un legado que impacte su familia y su entorno.',
    contentItems: [
      'Prosperidad en su relación con Dios (capitulo 10)',
      'Prosperidad en su relación de pareja (capitulo 1)',
      'Prosperidad impactando a la generación emergente (capitulo 3 y 8)',
      'Prosperidad en su desarrollo personal (capitulo 4.5 y 6)',
      'Prosperidad en su generosidad (capitulo 9)',
    ],
    ctaText:
      'Desarrolla una vida de prosperidad integral basada en la sabiduría de Proverbios 31. Un curso diseñado especialmente para la mujer de hoy.',
  },
  // ── Juventud ──────────────────────────────────────────────────────────────
  {
    slug: 'finanzas-en-accion',
    category: 'Juventud',
    title: 'Finanzas en acción',
    description: 'Lecciones financieras para\nadolescentes de 12 a 16 años',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/hucha@2x.png',
    meta: '11 CLASES | 4 HRS',
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
    ctaText:
      'Equipa a los jóvenes con las lecciones financieras más importantes que todo adolescente necesita aprender para su futuro.',
  },
  {
    slug: 'daniel-y-las-hormigas-millonarias',
    category: 'Juventud',
    title: 'Daniel y las hormigas millonarias',
    description: 'Curso financiero para niños\nsobre ahorro y administración',
    imagePath: '/assets/cursos-image.png',
    icon: '/assets/tiempo-de-fitness (1)@2x.png',
    meta: '9 CLASES | 3 HRS',
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
    ctaText:
      'Enseña a tus hijos los principios del dinero de forma divertida y memorable. Hábitos financieros saludables desde temprana edad.',
  },
];
