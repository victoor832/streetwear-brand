/**
 * Paid courses (max 50€ total), free resources, hardware tiers, glossary.
 * All tailored for: Spain, beginner level, techwear streetwear niche.
 * NO em dashes allowed anywhere in this file (per user strict rule).
 */

export type Course = {
  id: string;
  title: string;
  platform: "Domestika" | "Udemy" | "Coursera" | "YouTube";
  price: number; // in euros, 0 = free
  regularPrice: number;
  duration: string;
  why: string;
  url: string;
  tag: "Pago" | "Gratis" | "Audit gratis";
};

export const paidCourses: Course[] = [
  {
    id: "course-1",
    title: "Diseño de Identidad para Marcas",
    platform: "Domestika",
    price: 11.99,
    regularPrice: 59.99,
    duration: "18 unidades · aprox. 6h",
    why: "Curso de branding completo que te enseña a construir una identidad visual de marca desde cero (logo, paleta, tipografía, manual de marca). Incluye ejercicios prácticos y proyecto final. Imprescindible para tu Fase de Concepto. Precio habitual 59,99€, en oferta recurrente a 11,99€.",
    url: "https://www.domestika.org/es/courses/852-diseno-de-identidad-para-marcas",
    tag: "Pago",
  },
  {
    id: "course-2",
    title: "Shopify desde Cero: Crea tu Tienda Online en Español",
    platform: "Udemy",
    price: 12.99,
    regularPrice: 79.99,
    duration: "45 lecciones · aprox. 6h 30min",
    why: "Configuración completa de Shopify en español: registro, theme, productos, pagos, envíos, dominio y primera venta. Sin conocimientos previos. Cubre exactamente tu Fase de Marca y Web. Verifica que el curso esté en español antes de comprar (filtros de Udemy).",
    url: "https://www.udemy.com/es/topic/shopify/",
    tag: "Pago",
  },
];

export const coursesTotal = paidCourses
  .slice(0, 2)
  .reduce((acc, c) => acc + c.price, 0);

/**
 * Bonus course that replaces the previous (404) "Introducción al Diseño de Moda".
 * Now pointing to a real, free-to-audit course on Coursera by MoMA.
 */
export const bonusCourse: Course = {
  id: "course-bonus",
  title: "Fashion as Design (MoMA, en Coursera)",
  platform: "Coursera",
  price: 0,
  regularPrice: 0,
  duration: "7 módulos · aprox. 27h",
  why: "Curso del Museo de Arte Moderno de Nueva York (MoMA) sobre diseño de moda como disciplina. Gratis en modo 'auditor' (sin certificado). Te da contexto cultural, histórico y de oficio antes de ponerte a dibujar prendas. Imprescindible para tu Fase de Diseño de Prendas. Compatible con tu presupuesto de 50€ porque es 0€.",
  url: "https://www.coursera.org/learn/fashion-design",
  tag: "Audit gratis",
};

/**
 * Garment design specific courses (separate budget, since they are about fashion
 * design rather than branding/web). Free first, paid optional.
 */
export const garmentDesignCourses: Course[] = [
  {
    id: "gd-course-1",
    title: "Fashion as Design (MoMA, Coursera)",
    platform: "Coursera",
    price: 0,
    regularPrice: 0,
    duration: "7 módulos · aprox. 27h",
    why: "El mejor punto de partida gratuito para entender qué es el diseño de moda más allá del dibujo. Te da ojos de diseñador. Auditable gratis.",
    url: "https://www.coursera.org/learn/fashion-design",
    tag: "Audit gratis",
  },
  {
    id: "gd-course-2",
    title: "Patronaje y Costura Básica (playlist gratuita en YouTube)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 40 vídeos · 8h total",
    why: "Aprende cómo se construye una prenda desde el patrón hasta la costura. Sin este conocimiento, tus diseños serán bonitos en papel pero infabricables. Recomendado: busca 'patronaje básico para principiantes' en YouTube y sigue una playlist completa en español.",
    url: "https://www.youtube.com/results?search_query=patronaje+b%C3%A1sico+para+principiantes",
    tag: "Gratis",
  },
  {
    id: "gd-course-3",
    title: "Diseño de Colección de Moda (Domestika, opcional)",
    platform: "Domestika",
    price: 11.99,
    regularPrice: 59.99,
    duration: "15 unidades · aprox. 4h",
    why: "Si te sobra presupuesto (el curso entra en los 50€ si lo sumas a los otros dos), te enseña a pensar una colección de 3 a 5 prendas como una historia coherente. Útil para que tu primer drop no parezca un armario random.",
    url: "https://www.domestika.org/es/search?q=dise%C3%B1o+de+moda",
    tag: "Pago",
  },
];

export type ResourceCategory = {
  id: string;
  label: string;
  description: string;
  icon: string;
  resources: Resource[];
};

export type Resource = {
  name: string;
  description: string;
  url: string;
  tag: "Gratis" | "Freemium" | "Trial";
};

export const resourceCategories: ResourceCategory[] = [
  {
    id: "youtube-branding",
    label: "YouTube · Branding y Diseño Gráfico",
    description:
      "Suscríbete a 2 o 3 como máximo. Visualízalos en modo estudio con libreta al lado.",
    icon: "Youtube",
    resources: [
      {
        name: "CharliMarieTV",
        description:
          "Diseñadora de marca que documenta su proceso real, con sus dudas y errores. Perfecta para entender el día a día del branding.",
        url: "https://www.youtube.com/@charlimarie",
        tag: "Gratis",
      },
      {
        name: "The Futur",
        description:
          "Canal de branding y diseño profesional con playlists sobre 'Logo Design' y 'Brand Identity'. Más comercial pero muy didáctico.",
        url: "https://www.youtube.com/@thefuturishere",
        tag: "Gratis",
      },
      {
        name: "Roberto Blake",
        description:
          "Diseño gráfico y branding para emprendedores. Estilo directo, en inglés, ideal para nivel cero.",
        url: "https://www.youtube.com/@robertoblake",
        tag: "Gratis",
      },
      {
        name: "Sebastián Esqueda",
        description:
          "Diseño y branding en español. Sus tutoriales de Figma e Illustrator son ideales para principiantes hispanohablantes.",
        url: "https://www.youtube.com/@sebastianesqueda",
        tag: "Gratis",
      },
      {
        name: "Wholesale Ted",
        description:
          "E-commerce y Shopify para principiantes. Sarah explica dropshipping y POD sin humo, con ejemplos reales.",
        url: "https://www.youtube.com/@wholesaleted",
        tag: "Gratis",
      },
      {
        name: "Printful",
        description:
          "Canal oficial de Printful con tutoriales sobre print-on-demand, mockups y configuración de Shopify paso a paso.",
        url: "https://www.youtube.com/@Printful",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "youtube-fashion",
    label: "YouTube · Diseño de Moda",
    description:
      "Canales especializados en patronaje, bocetado de prendas, tejidos y construcción de colecciones.",
    icon: "Youtube",
    resources: [
      {
        name: "Zoe Hong",
        description:
          "La referencia en inglés para diseñadores de moda principiantes. Playlists de fashion illustration, tech packs y collection development. Visualmente impecable.",
        url: "https://www.youtube.com/@zoehong",
        tag: "Gratis",
      },
      {
        name: "Justine Leconte",
        description:
          "Diseñadora francesa que explica tejidos, patronaje y construcción de prendas con rigor. Ideal para entender por qué una prenda funciona (o no).",
        url: "https://www.youtube.com/@JustineLeconte",
        tag: "Gratis",
      },
      {
        name: "Kestin Goar",
        description:
          "Diseñadora que documenta el proceso de crear una marca de moda desde dentro. Realista, sin humo.",
        url: "https://www.youtube.com/@keestingear",
        tag: "Gratis",
      },
      {
        name: "Escuela de Diseño (varios canales en español)",
        description:
          "Busca 'patronaje básico español' en YouTube. Hay canales como Moda Fácil o Costura Creativa con tutoriales paso a paso para principiantes absolutos.",
        url: "https://www.youtube.com/results?search_query=patronaje+espa%C3%B1ol+principiantes",
        tag: "Gratis",
      },
      {
        name: "Sartorial Talks",
        description:
          "Conversaciones profundas sobre estilo, tejidos y construcción. Más cultural que técnico, te dará ojos de experto.",
        url: "https://www.youtube.com/@SartorialTalks",
        tag: "Gratis",
      },
      {
        name: "Timothy Westbrook",
        description:
          "Diseñador sostenible que enseña bocetado de moda, manejo de tejidos y pensamiento de colección. En inglés.",
        url: "https://www.youtube.com/@timothywestbrook",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "design-tools",
    label: "Herramientas de Diseño",
    description:
      "Software gratuito o freemium para crear tu identidad visual, bocetar prendas y hacer mockups.",
    icon: "PenTool",
    resources: [
      {
        name: "Figma",
        description:
          "El estándar de la industria para branding y diseño web. Gratis hasta 3 proyectos. Tu herramienta principal para logo y web.",
        url: "https://www.figma.com",
        tag: "Gratis",
      },
      {
        name: "Photopea",
        description:
          "Clon gratuito de Photoshop que funciona en el navegador. Edición de imágenes sin instalar nada.",
        url: "https://www.photopea.com",
        tag: "Gratis",
      },
      {
        name: "Canva",
        description:
          "Plantillas rápidas para stories, posts y miniaturas. Útil pero NO para el logo principal (usa Figma).",
        url: "https://www.canva.com",
        tag: "Freemium",
      },
      {
        name: "GIMP",
        description:
          "Alternativa gratuita y de código abierto a Photoshop. Curva de aprendizaje mayor pero muy potente.",
        url: "https://www.gimp.org",
        tag: "Gratis",
      },
      {
        name: "Inkscape",
        description:
          "Editor vectorial gratuito (alternativa a Illustrator). Útil si quieres digitalizar logos en SVG sin pagar Adobe.",
        url: "https://inkscape.org",
        tag: "Gratis",
      },
      {
        name: "Krita",
        description:
          "Software gratuito de ilustración digital. Ideal para bocetar prendas a mano alzada con tableta gráfica.",
        url: "https://krita.org",
        tag: "Gratis",
      },
      {
        name: "Placeit",
        description:
          "Mockups de ropa y escenarios realistas. Plan gratuito limitado (paga solo si necesitas mucho volumen).",
        url: "https://placeit.net",
        tag: "Freemium",
      },
      {
        name: "Smartmockups",
        description:
          "Mockups gratuitos integrados con Adobe (cuenta Adobe ID gratuita). Buena alternativa a Placeit.",
        url: "https://smartmockups.com",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "fashion-tools",
    label: "Herramientas para Diseño de Prendas",
    description:
      "Recursos específicos para bocetar figuras, crear flats, calcular patrones y presentar colecciones.",
    icon: "Shirt",
    resources: [
      {
        name: "Fashion Frog Croquis (Pinterest)",
        description:
          "Plantillas gratuitas de figura humana (croquis) sobre las que dibujar tus prendas. Busca 'fashion croquis template free' en Pinterest.",
        url: "https://www.pinterest.com/search/pins/?q=fashion%20croquis%20template",
        tag: "Gratis",
      },
      {
        name: "Pret-a-Template (app móvil)",
        description:
          "App gratuita con plantillas de figuras masculinas, femeninas y unisex para bocetar prendas en iPad/tableta Android.",
        url: "https://pretatemplate.com",
        tag: "Freemium",
      },
      {
        name: "Tech Pack Templates (Hubify)",
        description:
          "Plantillas básicas de tech packs en PDF editable. Versión gratuita suficiente para tu primer drop.",
        url: "https://www.google.com/search?q=tech+pack+template+free",
        tag: "Gratis",
      },
      {
        name: "Seamly2D",
        description:
          "Software libre de patronaje (pattern making). Curva de aprendizaje alta pero gratuito y profesional. Útil en Fase avanzada.",
        url: "https://seamly.net",
        tag: "Gratis",
      },
      {
        name: "Valentina Project",
        description:
          "Otra alternativa open source para patronaje. Comunidad activa, ideal si te decides por cut-and-sew en el futuro.",
        url: "https://valentinaproject.org",
        tag: "Gratis",
      },
      {
        name: "Wild Ginger Pattern Studio (demo)",
        description:
          "Software profesional de patronaje con versión demo gratuita. Para entender qué herramientas usan los profesionales.",
        url: "https://www.wildginger.com",
        tag: "Trial",
      },
    ],
  },
  {
    id: "images",
    label: "Bancos de Imágenes e Inspiración",
    description:
      "Fotos libres de derechos para tu web y redes, más plataformas para construir moodboards.",
    icon: "Image",
    resources: [
      {
        name: "Unsplash",
        description:
          "Fotografía artística de alta calidad. Busca 'techwear', 'urban', 'minimal architecture'.",
        url: "https://unsplash.com",
        tag: "Gratis",
      },
      {
        name: "Pexels",
        description:
          "Fotos y videos gratuitos. Mejor que Unsplash para imágenes de producto y lifestyle urbano.",
        url: "https://www.pexels.com",
        tag: "Gratis",
      },
      {
        name: "Pixabay",
        description:
          "Imágenes, vectores e ilustraciones libres. Útil para texturas y elementos gráficos.",
        url: "https://pixabay.com",
        tag: "Gratis",
      },
      {
        name: "Pinterest",
        description:
          "Tu herramienta principal de moodboarding. Crea tableros separados: siluetas, paletas, tejidos, fotografía, detalles técnicos.",
        url: "https://www.pinterest.com",
        tag: "Gratis",
      },
      {
        name: "Behance",
        description:
          "La mayor fuente de inspiración de diseño profesional. Mira portfolios techwear y casos completos de branding.",
        url: "https://www.behance.net",
        tag: "Gratis",
      },
      {
        name: "Dribbble",
        description:
          "Inspiración de UI/UX y logos. Busca 'techwear logo' para ver lo que ya existe y diferenciarte.",
        url: "https://dribbble.com",
        tag: "Gratis",
      },
      {
        name: "Are.na",
        description:
          "Alternativa más 'editorial' a Pinterest. Menos ruido, más curada. Útil para construir moodboards conceptuales.",
        url: "https://www.are.na",
        tag: "Freemium",
      },
    ],
  },
  {
    id: "fabric-suppliers",
    label: "Tejidos y Proveedores (España)",
    description:
      "Dónde mirar y comprar tejidos físicamente o por internet cuando llegues a la fase de muestras.",
    icon: "Package",
    resources: [
      {
        name: "Tejidos Royo (Valencia)",
        description:
          "Mayorista histórico de tejidos en España con venta online al particular. Buen punto de partida para pedir muestras.",
        url: "https://www.tejidosroyo.com",
        tag: "Freemium",
      },
      {
        name: "Filatures du Park (Tienda online)",
        description:
          "Tejidos técnicos y sostenibles. Especialmente útil para techwear (cordura, ripstop, softshell).",
        url: "https://www.filaturesduteich.com",
        tag: "Freemium",
      },
      {
        name: "Mercería Creativa (online)",
        description:
          "Venta al detalle de tejidos, hilos y accesorios para costura. Cantidades pequeñas para principiantes.",
        url: "https://www.merceriacreativa.com",
        tag: "Freemium",
      },
      {
        name: "Trouver en España (Instagram)",
        description:
          "Busca el hashtag #tejidosespaña en Instagram. Encuentras pequeños mayoristas y fábricas con catálogo visible.",
        url: "https://www.instagram.com/explore/tags/tejidosespa%C3%B1a/",
        tag: "Gratis",
      },
      {
        name: "Feria MOMAD Madrid (eventos físicos)",
        description:
          "Feria de moda en Madrid abierta a profesionales. Asistir como visitante te da acceso a proveedores en un solo día.",
        url: "https://www.momad.ifema.es",
        tag: "Freemium",
      },
    ],
  },
  {
    id: "extensions",
    label: "Extensiones de Navegador",
    description:
      "Instala en Chrome, Brave o Firefox. Te ahorrarán horas cada semana.",
    icon: "Puzzle",
    resources: [
      {
        name: "ColorZilla",
        description:
          "Cualquier color de cualquier web con un clic. Perfecto para estudiar paletas de marcas que admiras.",
        url: "https://www.colorzilla.com",
        tag: "Gratis",
      },
      {
        name: "WhatFont",
        description:
          "Identifica la tipografía de cualquier web al pasar el cursor. Imprescindible para estudiar referentes.",
        url: "https://www.whatfont.is",
        tag: "Gratis",
      },
      {
        name: "GoFullPage",
        description:
          "Captura toda una web en un solo PNG largo. Útil para archivar inspiración y referencia.",
        url: "https://gofullpage.com",
        tag: "Gratis",
      },
      {
        name: "Notion Web Clipper",
        description:
          "Guarda cualquier web en tu Notion. Tu biblioteca personal de referencias techwear organizada.",
        url: "https://www.notion.so/web-clipper",
        tag: "Gratis",
      },
      {
        name: "Fonts Ninja",
        description:
          "Detecta tipografías comerciales y te dice dónde comprarlas (o alternativas gratuitas).",
        url: "https://fonts.ninja",
        tag: "Freemium",
      },
      {
        name: "Pinterest Save Button",
        description:
          "Guarda cualquier imagen de cualquier web directamente a tus tableros. Acelera el moodboarding.",
        url: "https://help.pinterest.com/es/article/save-images-and-articles-from-the-web",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "communities",
    label: "Comunidades",
    description:
      "Donde aprenderás más en una semana que en un mes solo. Participa, no observes.",
    icon: "Users",
    resources: [
      {
        name: "r/streetwearstartup",
        description:
          "Subreddit de fundadores de marcas streetwear. Feedback brutal pero útil. Lee 50 posts antes de publicar.",
        url: "https://www.reddit.com/r/streetwearstartup/",
        tag: "Gratis",
      },
      {
        name: "r/streetwear",
        description:
          "Subreddit general de streetwear. Estudia qué estética recibe upvotes y cuál no.",
        url: "https://www.reddit.com/r/streetwear/",
        tag: "Gratis",
      },
      {
        name: "r/techwear",
        description:
          "Comunidad hardcore de techwear. Lee mucho antes de publicar, son exigentes con la autenticidad.",
        url: "https://www.reddit.com/r/techwear/",
        tag: "Gratis",
      },
      {
        name: "r/fashiondesign",
        description:
          "Comunidad de diseñadores de moda. Útil para feedback técnico sobre tus bocetos y patrones.",
        url: "https://www.reddit.com/r/fashiondesign/",
        tag: "Gratis",
      },
      {
        name: "Discord: Hidden Champions",
        description:
          "Servidor Discord de marcas emergentes. Networking real con otros fundadores en tu misma fase.",
        url: "https://discord.com",
        tag: "Gratis",
      },
      {
        name: "Foro: Shopify Community ES",
        description:
          "Foro oficial de Shopify en español. Resuelve dudas técnicas con otros dueños de tienda.",
        url: "https://community.shopify.com/c/es/ct-p/es",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "learning",
    label: "Plataformas de Aprendizaje",
    description:
      "Cursos gratuitos o trials para profundizar sin gastar más de los 50€.",
    icon: "GraduationCap",
    resources: [
      {
        name: "Shopify Compass",
        description:
          "Cursos 100% gratuitos de Shopify sobre ecommerce, marketing y branding. Empieza por aquí.",
        url: "https://www.shopify.com/learn",
        tag: "Gratis",
      },
      {
        name: "Domestika Plus (trial 7 días)",
        description:
          "Trial gratuito de 7 días. Cancela antes de que cobren. Acceso a más de 2.000 cursos durante la semana.",
        url: "https://www.domestika.org/es/plus",
        tag: "Trial",
      },
      {
        name: "Google Digital Garage",
        description:
          "Certificación gratuita en marketing digital de Google. 40h de contenido. Ideal para tu fase de comunidad.",
        url: "https://learndigital.withgoogle.com/activate",
        tag: "Gratis",
      },
      {
        name: "Coursera (audit mode)",
        description:
          "Cursos de universidades top (Parsons, MoMA, FIT) auditables gratis. Filtra por 'Fashion Design' y elige sin certificado.",
        url: "https://www.coursera.org/browse/arts-and-humanities/fashion",
        tag: "Gratis",
      },
      {
        name: "freeCodeCamp",
        description:
          "Aprende HTML y CSS básico gratis. NO obligatorio para Shopify, pero útil para personalizar tu theme.",
        url: "https://www.freecodecamp.org/espanol/",
        tag: "Gratis",
      },
      {
        name: "HubSpot Academy",
        description:
          "Cursos gratuitos sobre email marketing, redes sociales y ventas. Certificación reconocida.",
        url: "https://academy.hubspot.com",
        tag: "Gratis",
      },
      {
        name: "Figma Academy (YouTube oficial)",
        description:
          "Tutoriales oficiales de Figma. Empieza por 'Figma for Beginners' (4h, gratuito).",
        url: "https://www.youtube.com/@Figma",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "books",
    label: "Libros y Referencias Teóricas",
    description:
      "Para complementar el aprendizaje en pantalla con lectura profunda. Pide en biblioteca o compra de segunda mano.",
    icon: "BookOpen",
    resources: [
      {
        name: "The Anatomy of Fashion (Phyllis Tortora)",
        description:
          "Enciclopedia visual de cómo se construye la ropa. Referencia para entender por qué cada prenda es como es.",
        url: "https://www.goodreads.com/book/show/255709.The_Anatomy_of_Fashion",
        tag: "Gratis",
      },
      {
        name: "Tech Packs for Beginners (blog The Evans Group)",
        description:
          "Blog gratuito con artículos detallados sobre cómo construir un tech pack profesional. Imprescindible.",
        url: "https://evansgroup.la/blog/",
        tag: "Gratis",
      },
      {
        name: "Fashionary International",
        description:
          "Web de la marca Fashionary con recursos gratuitos, plantillas y blog de diseño de moda.",
        url: "https://www.fashionary.net",
        tag: "Freemium",
      },
      {
        name: "Business of Fashion (BoF) gratis",
        description:
          "Newsletter gratuito con análisis de industria. Te dará contexto de mercado y tendencias.",
        url: "https://www.businessoffashion.com",
        tag: "Freemium",
      },
      {
        name: "Ssense Editorial",
        description:
          "Editorial gratuita de la tienda Ssense. Artículos profundos sobre estética, marcas emergentes y cultura fashion.",
        url: "https://www.ssense.com/en-us/editorial",
        tag: "Gratis",
      },
    ],
  },
];

export type HardwareTier = {
  id: string;
  name: string;
  priceRange: string;
  total: string;
  tagline: string;
  description: string;
  items: { name: string; price: string; why: string }[];
};

export const hardwareTiers: HardwareTier[] = [
  {
    id: "tier-1",
    name: "Kit Esencial",
    priceRange: "≈ 60€",
    total: "≈ 58€",
    tagline: "Lo justo para bocetar y digitalizar.",
    description:
      "Si el presupuesto es ajustado. Con esto tu amigo puede completar las fases de Concepto, Diseño de Prendas y Marca y Web sin problema. Añadimos un álbum de bocetos específico para prendas.",
    items: [
      {
        name: "Libreta Moleskine A5 cuadriculada",
        price: "12€",
        why: "Para bocetar logo, ideas de prendas y moodboard personal. Cuadrícula equivale a simetría.",
      },
      {
        name: "Bloc de bocetos A4 para moda (90gsm, 40 hojas)",
        price: "8€",
        why: "Hojas más grandes para dibujar croquis (figuras humanas) y siluetas de prendas con detalle.",
      },
      {
        name: "Set lápices de grafito Staedtler Mars (6 piezas)",
        price: "8€",
        why: "Durezas variadas para bocetar desde líneas suaves hasta trazos definidos.",
      },
      {
        name: "Rotuladores Pigma Micron (3 piezas, 0.2/0.4/0.6)",
        price: "12€",
        why: "Para pasar a tinta los bocetos finales del logo y los flats de prendas. Trazo profesional.",
      },
      {
        name: "Marcadores de tonos grises Copic (3 piezas)",
        price: "18€",
        why: "Para dar volumen a los flats de prendas y entender cómo cae la luz sobre el tejido.",
      },
      {
        name: "Ratón óptico Logitech M90 (básico)",
        price: "15€",
        why: "Si su portátil tiene trackpad malo, este ratón cambiará su vida en Figma.",
      },
    ],
  },
  {
    id: "tier-2",
    name: "Kit Creativo",
    priceRange: "≈ 170€",
    total: "≈ 165€",
    tagline: "Tableta gráfica para digitalizar como profesional.",
    description:
      "El equilibrio perfecto. Tu amigo podrá digitalizar bocetos a mano con tableta, iluminar bien su espacio y grabar vídeos de proceso con el móvil. Recomendado para alguien que va en serio.",
    items: [
      {
        name: "Todo lo del Kit Esencial",
        price: "≈ 58€",
        why: "Libretas, bloc de moda, lápices, rotuladores, marcadores y ratón.",
      },
      {
        name: "Tableta gráfica Wacom Intuos S",
        price: "60€",
        why: "Estándar de la industria para digitalizar a mano en Figma, Photopea o Krita. Sin pantalla pero suficiente para empezar.",
      },
      {
        name: "Auriculares con cable Sony MDR-ZX110",
        price: "20€",
        why: "Para ver tutoriales sin molestar y para grabar voiceovers de sus vídeos de proceso.",
      },
      {
        name: "Soporte de móvil Ulanzi para grabar vertical",
        price: "15€",
        why: "Estable para grabar vídeos de proceso en TikTok o Reels. Compatible con cualquier smartphone.",
      },
      {
        name: "Lámpara de escritorio LED TaoTronics",
        price: "22€",
        why: "Luz neutra ajustable. Clave para fotos de producto con móvil y para no cansar la vista bocetando.",
      },
    ],
  },
  {
    id: "tier-3",
    name: "Kit Estudio",
    priceRange: "≈ 470€",
    total: "≈ 470€",
    tagline: "Tableta con pantalla y setup completo de grabación.",
    description:
      "Si quieres regalarle algo realmente transformador. Con iPad y Apple Pencil podrá digitalizar a mano alzada, diseñar en cualquier lugar y grabar tutoriales de calidad. La herramienta más potente para un fundador creativo.",
    items: [
      {
        name: "Todo lo del Kit Creativo (sin Wacom Intuos)",
        price: "≈ 105€",
        why: "Libretas, bloc, lápices, rotuladores, marcadores, ratón, auriculares, soporte y lámpara.",
      },
      {
        name: "iPad 9ª generación 64GB",
        price: "329€",
        why: "Modelo más asequible. Suficiente para Procreate, Figma mobile y edición en CapCut. Alternativa Android: Samsung Galaxy Tab S6 Lite por unos 230€.",
      },
      {
        name: "Apple Pencil 1ª gen (compatible con iPad 9)",
        price: "89€",
        why: "Dibujar directamente sobre la pantalla. Probablemente la herramienta más transformadora para un fundador creativo.",
      },
      {
        name: "Trípode móvil Amazon Basics 1,5m",
        price: "15€",
        why: "Para grabarse a sí mismo presentando drops o haciendo unboxing en vertical.",
      },
      {
        name: "Anillo de luz Ulanzi 10 pulgadas con trípode",
        price: "27€",
        why: "Iluminación profesional para fotos de producto, vídeos de TikTok y lives de Instagram.",
      },
    ],
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
  category: "Diseño" | "Producción" | "E-commerce" | "Marketing" | "Moda";
};

export const glossary: GlossaryTerm[] = [
  {
    term: "Mockup",
    definition:
      "Plantilla digital que simula cómo se verá tu diseño en una prenda real (camiseta, hoodie, gorra). Te permite ver el resultado ANTES de fabricar. Esencial para validar con tu audiencia.",
    category: "Diseño",
  },
  {
    term: "Tech Pack",
    definition:
      "Documento técnico que le envías al fabricante con TODAS las especificaciones de una prenda: medidas, tipo de tejido, peso (GSM), ubicación exacta de cada print o bordado, colores Pantone. Sin esto, el fabricante adivina.",
    category: "Producción",
  },
  {
    term: "GSM",
    definition:
      "Grams per Square Meter (gramos por metro cuadrado). Mide el peso del tejido. Un hoodie techwear premium suele ser 380 a 480 GSM. Menos de 180 GSM se siente barato.",
    category: "Producción",
  },
  {
    term: "MOQ",
    definition:
      "Minimum Order Quantity (cantidad mínima de pedido). Cada fabricante exige un mínimo de unidades por prenda. Para empezar, busca MOQ de 30 a 50 unidades. Low MOQ significa menor riesgo pero mayor coste por unidad.",
    category: "Producción",
  },
  {
    term: "Drop",
    definition:
      "Lanzamiento limitado y fechado de una colección. La escasez (pocas unidades, ventana corta de venta) crea urgencia. Supreme, Palace y Corteiz construyeron su imperio sobre este modelo.",
    category: "Marketing",
  },
  {
    term: "Hype",
    definition:
      "Expectativa y deseo colectivo antes del lanzamiento. Se construye con teasers, contenido detrás de cámaras y comunidad activa. Sin hype, el drop fracasa por bueno que sea el producto.",
    category: "Marketing",
  },
  {
    term: "SKU",
    definition:
      "Stock Keeping Unit. Código único que identifica cada variante de producto. Una camiseta en 3 tallas y 2 colores equivale a 6 SKUs. Necesario para llevar inventario en Shopify.",
    category: "E-commerce",
  },
  {
    term: "Cut and Sew",
    definition:
      "Fabricación desde cero: el fabricante corta el tejido y cose la prenda según tu patrón. Máxima personalización pero coste y tiempo altos. Opuesto a usar blanks (prendas ya hechas).",
    category: "Producción",
  },
  {
    term: "Blank",
    definition:
      "Prenda básica ya fabricada (sin marca visible) que compras al por mayor para personalizar con serigrafía, bordado o DTG. Marcas premium: AS Colour, Comfort Colors, Bella+Canvas.",
    category: "Producción",
  },
  {
    term: "POD (Print-on-Demand)",
    definition:
      "Modelo donde un proveedor (Printful, Printify) imprime y envía la prenda SOLO cuando recibes un pedido. Cero stock, cero riesgo, pero margen bajo (30 a 40%) y menos control de calidad.",
    category: "E-commerce",
  },
  {
    term: "Brand Kit",
    definition:
      "Documento de 1 a 3 páginas que reúne: logo (en sus variantes), paleta de colores con códigos HEX, tipografías, y reglas de uso correcto e incorrecto. Es la Biblia visual de tu marca.",
    category: "Diseño",
  },
  {
    term: "HEX / Pantone",
    definition:
      "Sistemas de código de color. HEX (ej: #0A0A0A) se usa en web y digital. Pantone (ej: Pantone Black 6 C) se usa en impresión y serigrafía. Tu paleta debe tener ambos códigos.",
    category: "Diseño",
  },
  {
    term: "Serigrafía",
    definition:
      "Técnica de impresión donde la tinta se presiona a través de una malla. Mejor para gráficos sólidos y tiradas grandes (50+ unidades). Resultado duradero y vibrante.",
    category: "Producción",
  },
  {
    term: "DTG (Direct-to-Garment)",
    definition:
      "Impresión directa sobre la prenda con tecnología similar a una impresora de tinta. Mejor para tiradas pequeñas, fotos y diseños con muchos colores. Menos duradero que serigrafía.",
    category: "Producción",
  },
  {
    term: "Bordado",
    definition:
      "Técnica donde el logo se cose con hilo directamente sobre la prenda. Premium y duradero. Ideal para logos pequeños en pecho o gorras. Más caro que serigrafía.",
    category: "Producción",
  },
  {
    term: "Conversion Rate",
    definition:
      "Porcentaje de visitantes de tu web que terminan comprando. Para una marca nueva, 1 a 2% es normal. Si vendes 100 prendas con 5.000 visitas, tu tasa es 2%.",
    category: "E-commerce",
  },
  {
    term: "Lookbook",
    definition:
      "Documento visual (PDF o web) que presenta tu colección completa con fotografías profesionales estilo editorial. No vende directamente, pero posiciona la marca como real.",
    category: "Marketing",
  },
  {
    term: "Waitlist",
    definition:
      "Lista de correos de personas interesadas ANTES del lanzamiento. Se construye con la página Coming Soon en Shopify. Un waitlist de 100 personas vale más que 10.000 seguidores sin email.",
    category: "Marketing",
  },
  {
    term: "Seeding",
    definition:
      "Enviar muestras gratuitas a creadores y micro-influencers para que las usen y, idealmente, las mencionen. Funciona si eliges bien (creadores que ya visten tu estética), no si envías a diestro y siniestro.",
    category: "Marketing",
  },
  {
    term: "Theme (Shopify)",
    definition:
      "Plantilla visual pre-diseñada para tu tienda Shopify. Themes gratuitos recomendados para empezar: Dawn, Sense, Refresh. Themes de pago (unos 200€ una vez): Impulse, Prestige, Empire.",
    category: "E-commerce",
  },
  {
    term: "Croquis",
    definition:
      "Boceto rápido de la figura humana (generalmente 9 cabezas de alto, idealizado) sobre el que dibujas tus prendas. Es la base del fashion sketch. Puedes usar plantillas gratuitas para empezar.",
    category: "Moda",
  },
  {
    term: "Flat (Flat Sketch)",
    definition:
      "Dibujo técnico de una prenda, sin volumen ni sombras, mostrando construcción y costuras. Es el plano que va dentro del tech pack. Se dibuja en vista frontal y a veces posterior.",
    category: "Moda",
  },
  {
    term: "Patronaje",
    definition:
      "Arte de crear el patrón: las plantillas de papel con las formas que, recortadas en tejido y cosidas, construyen una prenda. Puede ser plano (2D) o tridimensional (draping sobre maniquí).",
    category: "Moda",
  },
  {
    term: "Silueta",
    definition:
      "Forma exterior de una prenda cuando se lleva puesta. En techwear predominan siluetas boxy (caja), oversized o asimétricas. La silueta es lo primero que un cliente percibe, antes que el logo.",
    category: "Moda",
  },
  {
    term: "Drop Shoulder",
    definition:
      "Tipo de sisa donde la costura del hombro cae por el brazo, no en el hombro natural. Muy común en streetwear y techwear para dar un look relajado y oversized.",
    category: "Moda",
  },
  {
    term: "Raglan",
    definition:
      "Tipo de manga donde la costura va desde la axila hasta el cuello en diagonal. Permite mayor libertad de movimiento y se usa mucho en prendas deportivas y techwear.",
    category: "Moda",
  },
  {
    term: "Drapeado",
    definition:
      "Cómo cae y se mueve el tejido sobre el cuerpo. Un tejido con buen drapeado se adapta a la forma; uno rígido mantiene su silueta. Clave para elegir tejido según la prenda.",
    category: "Moda",
  },
  {
    term: "Cordura",
    definition:
      "Marca de tejido técnico de nylon, altamente resistente a la abrasión. Estándar en techwear para pantalones, mochilas y refuerzos. Más caro que el algodón pero diferenciador.",
    category: "Moda",
  },
  {
    term: "Ripstop",
    definition:
      "Tejido con patrón de cuadrícula visible que evita que los desgarros se extiendan. Muy usado en techwear y mil-tech por su resistencia y ligereza.",
    category: "Moda",
  },
  {
    term: "Softshell",
    definition:
      "Tejido técnico de tres capas que combina impermeabilidad, transpirabilidad y elasticidad. Ideal para chaquetas techwear. Más caro que el polyester normal.",
    category: "Moda",
  },
  {
    term: "Moodboard",
    definition:
      "Tablero visual (físico o digital, típicamente en Pinterest) que reúne imágenes, tejidos, colores y referencias que definen el universo estético de tu marca o colección. Es tu brújula visual.",
    category: "Diseño",
  },
  {
    term: "Persona (Buyer Persona)",
    definition:
      "Ficha detallada de tu cliente ideal: nombre inventado, edad, ciudad, ingresos, hobbies, miedos, aspiraciones, dónde consume contenido. Cuanto más concreta, más fáciles son las decisiones de diseño y marketing.",
    category: "Marketing",
  },
  {
    term: "Manifesto de Marca",
    definition:
      "Texto breve (1 a 3 párrafos) que declara qué defiende tu marca y contra qué se rebela. Es la declaración de intenciones que da coherencia a todas tus decisiones futuras.",
    category: "Marketing",
  },
];
