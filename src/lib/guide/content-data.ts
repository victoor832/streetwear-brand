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

/**
 * Digital PC design courses (specifically for software gratuito en macOS Apple Silicon):
 * Inkscape, GIMP, Krita, Blender, CLO 3D (estudiante), Adobe Express, Adobe Fresco.
 * Free first, paid optional.
 */
export const digitalDesignCourses: Course[] = [
  {
    id: "dd-course-1",
    title: "Adobe Express: cursos gratuitos oficiales de Adobe",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 25 vídeos · 5h total",
    why: "Adobe Express es la herramienta web gratuita de Adobe (alternativa a Canva). Adobe ofrece tutoriales oficiales 100% gratuitos en su canal de YouTube para crear mockups, posts para redes y presentaciones de marca. Sin coste, sin trial, sin tarjeta. Imprescindible para tu Mac.",
    url: "https://www.youtube.com/results?search_query=adobe+express+tutorial+espa%C3%B1ol",
    tag: "Gratis",
  },
  {
    id: "dd-course-2",
    title: "Inkscape para diseño de moda (YouTube, gratis)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 30 vídeos · 8h total",
    why: "Inkscape es el editor vectorial gratuito líder en macOS Apple Silicon. Aprenderlo te permite crear flats y tech packs profesionales sin pagar Adobe Illustrator. Busca 'Inkscape fashion design' en YouTube: hay tutoriales específicos sobre flats, croquis y tech packs. Compatible con MacBook Air M4 nativo.",
    url: "https://www.youtube.com/results?search_query=inkscape+fashion+design+tutorial",
    tag: "Gratis",
  },
  {
    id: "dd-course-3",
    title: "Adobe Fresco: ilustración digital gratuita en Mac (oficial Adobe)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 15 vídeos · 4h total",
    why: "Adobe Fresco es la app de ilustración de Adobe, gratis con cuenta Adobe ID. Funciona en Mac Apple Silicon. Tutoriales oficiales de Adobe te enseñan desde configurar pinceles hasta exportar ilustraciones para tu lookbook. Alternativa gratuita a Procreate (que solo existe en iPad).",
    url: "https://www.youtube.com/results?search_query=adobe+fresco+tutorial+illustration",
    tag: "Gratis",
  },
  {
    id: "dd-course-4",
    title: "CLO 3D para principiantes (playlist gratuita en YouTube)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 20 vídeos · 6h total",
    why: "CLO 3D es el software líder de diseño de moda en 3D. Compatible con macOS Apple Silicon. Existe trial de 30 días y licencia de estudiante gratuita (verificada con email .edu). Esta playlist en YouTube te lleva de cero a tu primera prenda virtual sin coste.",
    url: "https://www.youtube.com/results?search_query=CLO+3D+beginner+tutorial",
    tag: "Gratis",
  },
  {
    id: "dd-course-5",
    title: "Blender para diseño de moda 3D (YouTube, 100% gratis)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 25 vídeos · 7h total",
    why: "Blender es 100% gratuito y nativo para macOS Apple Silicon. Su motor de simulación de telas (Cloth Simulator) es potente. Tutoriales específicos sobre cómo usar Blender para diseño de moda 3D, sin coste alguno. Alternativa libre a CLO 3D si no tienes licencia de estudiante.",
    url: "https://www.youtube.com/results?search_query=blender+cloth+simulation+fashion",
    tag: "Gratis",
  },
  {
    id: "dd-course-6",
    title: "Krita para ilustración de moda (YouTube, gratis)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 18 vídeos · 5h total",
    why: "Krita es 100% gratuito y nativo para macOS Apple Silicon. Con tableta gráfica conectada a tu Mac, sustituye a Procreate (que solo existe en iPad). Tutoriales específicos para ilustración de moda digital, desde configurar pinceles hasta exportar croquis para tu lookbook.",
    url: "https://www.youtube.com/results?search_query=krita+digital+painting+tutorial",
    tag: "Gratis",
  },
  {
    id: "dd-course-7",
    title: "Adobe Creative Cloud para principiantes (Adobe Education, gratis)",
    platform: "Coursera",
    price: 0,
    regularPrice: 0,
    duration: "6 módulos · aprox. 20h",
    why: "Curso gratuito de Adobe Education sobre las herramientas gratuitas de Creative Cloud: Adobe Color, Adobe Fonts, Adobe Express, Adobe Fresco, Adobe Portfolio. Auditable gratis en Coursera. Ideal para entender el ecosistema Adobe sin pagar suscripción.",
    url: "https://www.coursera.org/learn/adobe-creative-cloud",
    tag: "Audit gratis",
  },
  {
    id: "dd-course-8",
    title: "GIMP para edición de imágenes (YouTube, gratis)",
    platform: "YouTube",
    price: 0,
    regularPrice: 0,
    duration: "Playlist de unos 20 vídeos · 6h total",
    why: "GIMP es el equivalente gratuito de Photoshop, nativo para macOS Apple Silicon. Lo usas para editar fotos de producto, aplicar texturas y retocar mockups. Tutoriales en español sobre GIMP para principiantes. Sin coste, sin trial, ideal para Mac.",
    url: "https://www.youtube.com/results?search_query=gimp+tutorial+espa%C3%B1ol+principiantes",
    tag: "Gratis",
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
    id: "digital-pc-tools",
    label: "Software Digital de Diseño de Moda (macOS Apple Silicon M4)",
    description:
      "Software gratuito y nativo para MacBook Air M4 (Apple Silicon). Todas estas herramientas se descargan como DMG y se instalan con drag-and-drop como cualquier app de Mac. Cero euros en suscripciones.",
    icon: "Monitor",
    resources: [
      {
        name: "Inkscape (gratis, nativo Mac M4)",
        description:
          "Editor vectorial gratuito líder en macOS Apple Silicon. Alternativa libre a Adobe Illustrator. Tu herramienta principal para flats y tech packs. Instalación DMG desde inkscape.org.",
        url: "https://inkscape.org",
        tag: "Gratis",
      },
      {
        name: "GIMP (gratis, nativo Mac M4)",
        description:
          "Equivalente gratuito de Photoshop, nativo para Apple Silicon. Edición de fotos de producto, texturas y mockups. Instalación DMG desde gimp.org.",
        url: "https://www.gimp.org",
        tag: "Gratis",
      },
      {
        name: "Krita (gratis, nativo Mac M4)",
        description:
          "Software libre de ilustración digital. Con tableta gráfica USB, sustituye a Procreate (que solo existe en iPad). Pinceles profesionales y capas. DMG desde krita.org.",
        url: "https://krita.org",
        tag: "Gratis",
      },
      {
        name: "Blender (100% gratis, nativo Mac M4)",
        description:
          "Software 3D libre y potente. Su Cloth Simulator permite simular telas para diseño de moda. Alternativa gratuita a CLO 3D. Nativo para Apple Silicon desde blender.org.",
        url: "https://www.blender.org",
        tag: "Gratis",
      },
      {
        name: "Adobe Express (web, gratis con cuenta Adobe)",
        description:
          "Herramienta web gratuita de Adobe, alternativa a Canva. Para mockups, posts para redes y presentaciones. Sin instalación, funciona en navegador. Cuenta Adobe ID gratuita.",
        url: "https://express.adobe.com",
        tag: "Gratis",
      },
      {
        name: "Adobe Fresco (gratis con cuenta Adobe, Mac App Store)",
        description:
          "App de ilustración de Adobe, gratuita con límites. Versión gratuita suficiente para croquis y bocetos. Disponible en Mac App Store, alternativa a Procreate en Mac.",
        url: "https://www.adobe.com/es/products/fresco.html",
        tag: "Gratis",
      },
      {
        name: "Adobe Color (web, 100% gratis)",
        description:
          "Herramienta web gratuita de Adobe para crear y explorar paletas de color. Exporta a ASE para Inkscape y a HEX para web. Sin cuenta, sin coste. Esencial para tu Brand Kit.",
        url: "https://color.adobe.com",
        tag: "Gratis",
      },
      {
        name: "Adobe Fonts (gratis con cuenta Adobe ID)",
        description:
          "Biblioteca de tipografías profesionales gratis con cuenta Adobe ID. Compatible con macOS. Sustituye a Google Fonts con opciones más premium. Licencia personal y comercial incluida.",
        url: "https://fonts.adobe.com",
        tag: "Gratis",
      },
      {
        name: "Adobe Portfolio (gratis con cuenta Adobe)",
        description:
          "Crea tu portfolio web de marca gratis con Adobe Portfolio. Plantillas minimalistas, hosting incluido. Útil para presentar tu marca a colaboradores antes de tener tienda Shopify.",
        url: "https://portfolio.adobe.com",
        tag: "Gratis",
      },
      {
        name: "Photopea (web, gratis)",
        description:
          "Editor de imágenes gratuito en navegador. Abre y guarda archivos PSD de Photoshop sin instalar nada. Alternativa web a GIMP cuando no puedes instalar apps.",
        url: "https://www.photopea.com",
        tag: "Gratis",
      },
      {
        name: "CLO 3D (trial 30 días + estudiante gratis, Mac M4)",
        description:
          "Software líder de diseño de moda 3D. Compatible con macOS Apple Silicon. Trial gratis de 30 días. Licencia de estudiante gratuita verificada con email .edu. Profesional pero accesible.",
        url: "https://www.clo3d.com",
        tag: "Trial",
      },
      {
        name: "Valentina (patronaje, gratis, Mac)",
        description:
          "Software libre de patronaje para macOS. Alternativa gratuita a Seamly2D (que es más Windows). Crea patrones 2D escalables a partir de medidas. Curva de aprendizaje media.",
        url: "https://valentinaproject.org",
        tag: "Gratis",
      },
      {
        name: "Procreate (solo iPad, 13€ pago único)",
        description:
          "Aclaración importante: Procreate NO existe para Mac. Es exclusivo de iPad. Si tienes iPad + Apple Pencil, es la app de ilustración más fluida. Para Mac, usa Krita o Adobe Fresco.",
        url: "https://procreate.com",
        tag: "Freemium",
      },
    ],
  },
  {
    id: "digital-pc-tutorials",
    label: "Tutoriales YouTube · Diseño Digital en Mac (software gratuito)",
    description:
      "Canales y playlists específicos para aprender software gratuito de moda digital en macOS Apple Silicon: Inkscape, GIMP, Krita, Blender, CLO 3D y herramientas Adobe gratuitas.",
    icon: "Youtube",
    resources: [
      {
        name: "Adobe Express Tutoriales oficiales (Adobe)",
        description:
          "Canal oficial de Adobe con tutoriales gratuitos sobre Adobe Express. Aprende a crear mockups, posts y presentaciones sin coste. En español e inglés.",
        url: "https://www.youtube.com/results?search_query=adobe+express+tutorial+espa%C3%B1ol",
        tag: "Gratis",
      },
      {
        name: "Adobe Fresco Tutoriales oficiales",
        description:
          "Tutoriales oficiales de Adobe Fresco para ilustración digital. Aprende a configurar pinceles y exportar ilustraciones. Funciona en Mac Apple Silicon.",
        url: "https://www.youtube.com/results?search_query=adobe+fresco+tutorial+illustration",
        tag: "Gratis",
      },
      {
        name: "Inkscape para Fashion Design (varios canales)",
        description:
          "Busca 'Inkscape fashion design' en YouTube. Tutoriales específicos sobre flats, croquis y tech packs vectoriales sin pagar Adobe Illustrator. Ideal para Mac M4.",
        url: "https://www.youtube.com/results?search_query=inkscape+fashion+design+tutorial",
        tag: "Gratis",
      },
      {
        name: "GIMP Tutoriales en español",
        description:
          "Tutoriales en español sobre GIMP para principiantes. Edición de fotos de producto, texturas y mockups. GIMP es nativo para macOS Apple Silicon y 100% gratuito.",
        url: "https://www.youtube.com/results?search_query=gimp+tutorial+espa%C3%B1ol+principiantes",
        tag: "Gratis",
      },
      {
        name: "Krita Digital Painting Tutoriales",
        description:
          "Tutoriales sobre Krita para ilustración digital. Con tableta gráfica conectada a tu Mac, Krita sustituye a Procreate (que solo existe en iPad). 100% gratis y nativo Apple Silicon.",
        url: "https://www.youtube.com/results?search_query=krita+digital+painting+tutorial",
        tag: "Gratis",
      },
      {
        name: "Blender Cloth Simulation Tutoriales",
        description:
          "Tutoriales específicos sobre simulación de telas en Blender para diseño de moda 3D. Blender es 100% gratuito y nativo para macOS Apple Silicon. Alternativa libre a CLO 3D.",
        url: "https://www.youtube.com/results?search_query=blender+cloth+simulation+fashion",
        tag: "Gratis",
      },
      {
        name: "CLO 3D Official Channel",
        description:
          "Canal oficial de CLO 3D con tutoriales paso a paso, casos de estudio y novedades del software. Compatible con Mac Apple Silicon. Trial de 30 días y licencia estudiante gratuita.",
        url: "https://www.youtube.com/@CLO3D",
        tag: "Gratis",
      },
      {
        name: "Zoe Hong (playlist CLO 3D)",
        description:
          "Zoe Hong tiene una playlist específica sobre CLO 3D para principiantes. Muy didáctica, ideal para empezar desde cero con el software.",
        url: "https://www.youtube.com/playlist?search=CLO+3D+zoehong",
        tag: "Gratis",
      },
      {
        name: "Adobe Education en Coursera (audit gratis)",
        description:
          "Curso oficial de Adobe Education sobre herramientas gratuitas de Creative Cloud: Color, Fonts, Express, Fresco, Portfolio. Auditable gratis en Coursera.",
        url: "https://www.coursera.org/learn/adobe-creative-cloud",
        tag: "Gratis",
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
      "Si el presupuesto es ajustado. Con este kit se pueden completar las fases de Concepto, Diseño de Prendas y Marca y Web sin problema. Incluye bloc de bocetos específico para moda.",
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
      "El equilibrio perfecto. Permite digitalizar bocetos a mano con tableta, iluminar bien el espacio y grabar vídeos de proceso con el móvil. Recomendado para alguien que va en serio.",
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
  {
    term: "CLO 3D",
    definition:
      "Software líder de diseño de moda en 3D. Permite simular prendas sobre avatares virtuales, ajustar patrones en tiempo real y renderizar imágenes fotorrealistas sin necesidad de producir muestras físicas. Compatible con macOS Apple Silicon. Trial de 30 días y licencia de estudiante gratuita con email .edu.",
    category: "Moda",
  },
  {
    term: "Blender",
    definition:
      "Software 3D 100% gratuito y de código abierto, nativo para macOS Apple Silicon. Su motor Cloth Simulator permite simular telas para diseño de moda. Alternativa libre a CLO 3D. Curva de aprendizaje mayor pero coste cero para siempre.",
    category: "Moda",
  },
  {
    term: "Inkscape",
    definition:
      "Editor vectorial gratuito y de código abierto, nativo para macOS Apple Silicon (M1 a M4). Alternativa libre a Adobe Illustrator. Estándar para flats y tech packs digitales en presupuestos cero. Instalación DMG desde inkscape.org.",
    category: "Diseño",
  },
  {
    term: "Adobe Express",
    definition:
      "Herramienta web gratuita de Adobe, alternativa a Canva. Funciona en navegador sin instalación. Permite crear mockups, posts para redes y presentaciones de marca. Cuenta Adobe ID gratuita. NO sustituye a Inkscape para flats, pero complementa para todo lo visual.",
    category: "Diseño",
  },
  {
    term: "Adobe Fresco",
    definition:
      "App de ilustración de Adobe, gratis con cuenta Adobe ID. Disponible en Mac App Store para macOS Apple Silicon. Versión gratuita suficiente para croquis y bocetos. Alternativa a Procreate (que solo existe en iPad) en Mac.",
    category: "Diseño",
  },
  {
    term: "Adobe Color",
    definition:
      "Herramienta web 100% gratuita de Adobe para crear y explorar paletas de color. Exporta a ASE (para Inkscape y GIMP) y a HEX (para web). Sin cuenta, sin coste. Esencial para tu Brand Kit bicromático.",
    category: "Diseño",
  },
  {
    term: "Adobe Fonts",
    definition:
      "Biblioteca de tipografías profesionales gratuita con cuenta Adobe ID. Compatible con macOS. Sustituye a Google Fonts con opciones más premium. Licencia personal y comercial incluida en el plan gratuito.",
    category: "Diseño",
  },
  {
    term: "Apple Silicon (M1, M2, M3, M4)",
    definition:
      "Familia de procesadores ARM diseñados por Apple para Mac. Incluyen GPU integrada potente. MacBook Air M4 pertenece a esta familia. La mayoría de software gratuito mencionado en esta guía (Inkscape, GIMP, Krita, Blender, CLO 3D) es nativo para Apple Silicon, sin necesidad de Rosetta 2.",
    category: "Diseño",
  },
  {
    term: "Rosetta 2",
    definition:
      "Tecnología de Apple que permite ejecutar apps compiladas para procesadores Intel en Mac con Apple Silicon. Casi todo el software actual ya es nativo para Apple Silicon. Solo apps antiguas o sin actualizar necesitan Rosetta 2. Si una app pide instalar Rosetta al abrirla, dilo a Sí (es un proceso automático).",
    category: "Diseño",
  },
  {
    term: "DMG (Disk Image)",
    definition:
      "Formato de archivo de instalación estándar en macOS. Para instalar apps desde DMG: doble clic para abrir, arrastra el icono de la app a la carpeta Applications, expulsa el DMG. Todo el software gratuito mencionado (Inkscape, GIMP, Krita, Blender) se distribuye en DMG para Mac.",
    category: "Diseño",
  },
  {
    term: "Valentina (patronaje)",
    definition:
      "Software libre de patronaje para macOS. Alternativa gratuita a Seamly2D (más orientado a Windows). Crea patrones 2D escalables a partir de medidas corporales. Curva de aprendizaje media. Ideal para cut-and-sew en el futuro.",
    category: "Moda",
  },
  {
    term: "Browzwear V-Stitcher",
    definition:
      "Alternativa profesional a CLO 3D, usada por grandes marcas (Nike, Adidas, Lululemon). Más enfocado a producción industrial. Trial disponible bajo solicitud. Solo para Windows (no Mac), por lo que no se recomienda si trabajas con MacBook Air M4.",
    category: "Moda",
  },
  {
    term: "Marvelous Designer",
    definition:
      "Software de simulación de telas más usado en cine y videojuegos que en moda. Disponible para macOS pero solo para Intel (corre vía Rosetta 2 en Apple Silicon). Trial de 30 días. Alternativa a CLO 3D.",
    category: "Moda",
  },
  {
    term: "Vectorial (Vector)",
    definition:
      "Tipo de imagen digital compuesta por trayectorias matemáticas, no píxeles. Escala sin perder calidad. Inkscape (gratis), Adobe Illustrator (pago) y Affinity Designer (pago único) son editores vectoriales. Imprescindible para logos, flats y tech packs.",
    category: "Diseño",
  },
  {
    term: "Flat digital",
    definition:
      "Versión digital del flat sketch hecha en software vectorial (Inkscape en macOS gratuito, Illustrator en pago). Es el plano que va dentro del tech pack y el que el fabricante va a interpretar. Debe ser limpio, sin volumen y con líneas precisas.",
    category: "Moda",
  },
  {
    term: "Renderizado (Render)",
    definition:
      "Proceso de generar una imagen fotorrealista a partir de un modelo 3D digital. En CLO 3D o Blender, el render produce imágenes de prendas virtuales que parecen fotos reales. Útil para vender colecciones antes de fabricar. Con MacBook Air M4, los renders son 5 a 10 veces más rápidos que en PC antiguo.",
    category: "Moda",
  },
  {
    term: "Avatar 3D",
    definition:
      "Modelo humano virtual sobre el que se simulan prendas en CLO 3D o Blender. Se puede ajustar a medidas corporales reales para previsualizar fit y caída de la prenda sin necesidad de prototipo físico.",
    category: "Moda",
  },
  {
    term: "Drapeado digital",
    definition:
      "Simulación virtual de cómo cae y se mueve un tejido sobre un avatar 3D. Permite previsualizar el comportamiento del tejido antes de producir, ahorrando costes de muestras físicas. CLO 3D y Blender (con Cloth Simulator) lo permiten.",
    category: "Moda",
  },
  {
    term: "Paso de muestra (Sampling Round)",
    definition:
      "Cada iteración de prototipo físico que pides al fabricante. Con software 3D como CLO o Blender, puedes reducir los pasos de muestra de 3 a 1, ahorrando tiempo y cientos de euros por drop.",
    category: "Producción",
  },
];
