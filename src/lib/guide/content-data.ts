/**
 * Paid courses (max 50€ total), free resources, hardware tiers, glossary.
 * All tailored for: Spain, beginner level, techwear streetwear niche.
 */

export type Course = {
  id: string;
  title: string;
  platform: "Domestika" | "Udemy";
  price: number; // in euros, on offer
  regularPrice: number;
  duration: string;
  why: string;
  url: string;
};

export const paidCourses: Course[] = [
  {
    id: "course-1",
    title: "Diseño de Marca: Identidad Visual para Proyectos Creativos",
    platform: "Domestika",
    price: 11.99,
    regularPrice: 59.99,
    duration: "5h 28min · 18 unidades",
    why: "Aprenderás a construir un Brand Kit completo (logo, paleta, tipografía) desde cero en Illustrator/Figma. Imprescindible para tu Fase 1. Precio habitual 59,99€, en oferta permanente a 11,99€.",
    url: "https://www.domestika.org/es/courses/proyectos-de-diseno-grafico",
  },
  {
    id: "course-2",
    title: "Shopify para Principiantes: Crea tu Tienda Online desde Cero",
    platform: "Udemy",
    price: 12.99,
    regularPrice: 79.99,
    duration: "6h 30min · 45 lecciones",
    why: "Configuración completa de Shopify: theme, productos, pagos, envíos, dominio. En español, sin conocimientos previos. Cubre exactamente tu Fase 2.",
    url: "https://www.udemy.com/topic/shopify/",
  },
  {
    id: "course-3",
    title: "Introducción al Diseño de Moda: Colección Cápsula",
    platform: "Domestika",
    price: 14.99,
    regularPrice: 69.99,
    duration: "4h 12min · 15 unidades",
    why: "Pensar una colección coherente de 3-5 prendas (no dispersa). Te enseña a bocetar siluetas y a presentarlas profesionalmente. Útil para tu Fase 2.",
    url: "https://www.domestika.org/es/courses/diseno-de-moda",
  },
];

export const coursesTotal = paidCourses
  .slice(0, 2)
  .reduce((acc, c) => acc + c.price, 0);

export type ResourceCategory = {
  id: string;
  label: string;
  description: string;
  icon: string; // lucide icon name as string
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
    id: "youtube",
    label: "Canales de YouTube",
    description:
      "Suscríbete y activa la campana. Visualízalos en modo 'estudio' (con libreta al lado).",
    icon: "Youtube",
    resources: [
      {
        name: "CharliMarieTV",
        description:
          "Diseñadora de marca que documenta su proceso. Perfecta para entender el día a día de un branding real.",
        url: "https://www.youtube.com/@charlimarie",
        tag: "Gratis",
      },
      {
        name: "The Futur",
        description:
          "Canal de branding y diseño profesional. Busca sus playlists sobre 'Logo Design' y 'Brand Identity'.",
        url: "https://www.youtube.com/@thefuturishere",
        tag: "Gratis",
      },
      {
        name: "Roberto Blake",
        description:
          "Diseño gráfico y branding para emprendedores. Estilo directo y didáctico para principiantes.",
        url: "https://www.youtube.com/@robertoblake",
        tag: "Gratis",
      },
      {
        name: "Wholesale Ted",
        description:
          "E-commerce y Shopify para principiantes. Sarah es la mejor explicando dropshipping y POD sin humo.",
        url: "https://www.youtube.com/@wholesaleted",
        tag: "Gratis",
      },
      {
        name: "Sebastián Esqueda",
        description:
          "Diseño y branding en español. Sus tutoriales de Figma e Illustrator son ideales para nivel cero.",
        url: "https://www.youtube.com/@sebastianesqueda",
        tag: "Gratis",
      },
      {
        name: "Printful",
        description:
          "Canal oficial de Printful con tutoriales sobre print-on-demand, mockups y configuración de Shopify.",
        url: "https://www.youtube.com/@Printful",
        tag: "Gratis",
      },
    ],
  },
  {
    id: "design-tools",
    label: "Herramientas de Diseño",
    description:
      "Software gratuito o freemium para crear tu identidad visual y mockups.",
    icon: "PenTool",
    resources: [
      {
        name: "Figma",
        description:
          "El estándar de la industria. Gratis hasta 3 proyectos. TU herramienta principal de branding y diseño web.",
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
          "Alternativa gratuita y de código abierto a Photoshop. Curva de aprendizaje mayor pero potente.",
        url: "https://www.gimp.org",
        tag: "Gratis",
      },
      {
        name: "Placeit",
        description:
          "Mockups de ropa y escenarios realistas. Plan gratuito limitado (pagar solo si necesitas mucho volumen).",
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
    id: "images",
    label: "Bancos de Imágenes",
    description:
      "Fotos gratis y libres de derechos para tu web, moodboards y redes sociales.",
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
        name: "Freepik",
        description:
          "Vectores y PSD editables. Versión gratuita con atribución obligatoria. Plan Freepik Premium ~10€/mes.",
        url: "https://www.freepik.com",
        tag: "Freemium",
      },
      {
        name: "Behance",
        description:
          "NO es banco de imágenes, pero es la mayor fuente de inspiración de diseño. Mira portfolios techwear.",
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
    ],
  },
  {
    id: "extensions",
    label: "Extensiones de Navegador",
    description:
      "Instala en Chrome/Brave/Firefox. Te ahorrarán horas cada semana.",
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
        name: "SEO Minion",
        description:
          "Verifica metadatos y links rotos de tu tienda Shopify antes del lanzamiento.",
        url: "https://seominion.com",
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
          "Subreddit de fundadores de marcas streetwear. Feedback brutal pero útil. Lée 50 posts antes de publicar.",
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
          "Comunidad hardcore de techwear. Pulsa y lee antes de publicar — son exigentes con la autenticidad.",
        url: "https://www.reddit.com/r/techwear/",
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
          "Trial gratuito de 7 días. Cancela antes de que cobren. Acceso a +2.000 cursos durante la semana.",
        url: "https://www.domestika.org/es/plus",
        tag: "Trial",
      },
      {
        name: "Google Digital Garage",
        description:
          "Certificación gratuita en marketing digital de Google. 40h de contenido. Ideal para Fase 3.",
        url: "https://learndigital.withgoogle.com/activate",
        tag: "Gratis",
      },
      {
        name: "freeCodeCamp",
        description:
          "Aprende HTML/CSS básico gratis. NO obligatorio para Shopify, pero útil para personalizar tu theme.",
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
    priceRange: "~50€",
    total: "≈ 48€",
    tagline: "Lo justo para empezar a bocetar y digitalizar.",
    description:
      "Si el presupuesto es ajustado. Con esto tu amigo puede completar la Fase 1 y 2 del roadmap sin problema.",
    items: [
      {
        name: "Libreta Moleskine A5 cuadriculada",
        price: "12€",
        why: "Para bocetar logo, ideas de prendas y moodboard personal. Cuadrícula = simetría.",
      },
      {
        name: "Set lápices de grafito Staedtler Mars (6 piezas)",
        price: "8€",
        why: "Durezas variadas para bocetar desde líneas suaves hasta trazos definidos.",
      },
      {
        name: "Rotuladores Pigma Micron (3 piezas, 0.2/0.4/0.6)",
        price: "12€",
        why: "Para pasar a tinta los bocetos finales del logo. Trazo profesional.",
      },
      {
        name: "Ratón óptico Logitech M90 (básico)",
        price: "15€",
        why: "Si su portátil tiene trackpad malo, este ratón cambiará su vida en Figma.",
      },
      {
        name: "Plantilla de diseño grid (Deleter)",
        price: "3€",
        why: "Para bocetar layouts web consistentes y proporciones de logo.",
      },
    ],
  },
  {
    id: "tier-2",
    name: "Kit Creativo",
    priceRange: "~150€",
    total: "≈ 145€",
    tagline: "Incluye tableta gráfica para digitalizar como profesional.",
    description:
      "El equilibrio perfecto. Tu amigo podrá digitalizar bocetos a mano con tableta, iluminar bien su espacio y grabar vídeos de proceso con el móvil.",
    items: [
      {
        name: "Todo lo del Kit Esencial",
        price: "≈48€",
        why: "Libreta, lápices, rotuladores, ratón y plantilla.",
      },
      {
        name: "Tableta gráfica Wacom Intuos S",
        price: "60€",
        why: "Estándar de la industria para digitalizar a mano en Figma/Photopea. Sin pantalla pero suficiente para empezar.",
      },
      {
        name: "Auriculares con cable Sony MDR-ZX110",
        price: "20€",
        why: "Para ver tutoriales sin molestar y para grabar voiceovers de sus vídeos de proceso.",
      },
      {
        name: "Soporte de móvil Ulanzi para grabar vertical",
        price: "15€",
        why: "Estable para grabar vídeos de proceso en TikTok/Reels. Compatible con cualquier smartphone.",
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
    priceRange: "~450€",
    total: "≈ 445€",
    tagline: "Tableta con pantalla + setup completo de grabación.",
    description:
      "Si quieres regalarle algo realmente transformador. Con iPad + Apple Pencil podrá digitalizar a mano alzada, diseñar en cualquier lugar y grabar tutoriales de calidad.",
    items: [
      {
        name: "Todo lo del Kit Creativo (sin Wacom Intuos)",
        price: "≈85€",
        why: "Libreta, lápices, rotuladores, ratón, auriculares, soporte y lámpara.",
      },
      {
        name: "iPad 9ª generación 64GB",
        price: "329€",
        why: "Modelo más asequible. Suficiente para Procreate, Figma mobile y edición en CapCut. (Alternativa Android: Samsung Galaxy Tab S6 Lite ~230€.)",
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
        name: "Anillo de luz Ulanzi 10\" con trípode",
        price: "27€",
        why: "Iluminación profesional para fotos de producto, videos de TikTok y lives de Instagram.",
      },
    ],
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
  category: "Diseño" | "Producción" | "E-commerce" | "Marketing";
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
      "Grams per Square Meter (gramos por metro cuadrado). Mide el peso del tejido. Un hoodie techwear premium suele ser 380-480 GSM. Menos de 180 GSM se siente 'barato'.",
    category: "Producción",
  },
  {
    term: "MOQ",
    definition:
      "Minimum Order Quantity (cantidad mínima de pedido). Cada fabricante exige un mínimo de unidades por prenda. Para empezar, busca MOQ de 30-50 unidades. Low MOQ = menor riesgo pero mayor coste por unidad.",
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
      "Stock Keeping Unit. Código único que identifica cada variante de producto. Una camiseta en 3 tallas y 2 colores = 6 SKUs. Necesario para llevar inventario en Shopify.",
    category: "E-commerce",
  },
  {
    term: "Cut & Sew",
    definition:
      "Fabricación desde cero: el fabricante corta el tejido y cose la prenda según tu patrón. Máxima personalización pero coste y tiempo altos. Opuesto a usar 'blanks' (prendas ya hechas).",
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
      "Modelo donde un proveedor (Printful, Printify) imprime y envía la prenda SOLO cuando recibes un pedido. Cero stock, cero riesgo, pero margen bajo (~30-40%) y menos control de calidad.",
    category: "E-commerce",
  },
  {
    term: "Brand Kit",
    definition:
      "Documento de 1-3 páginas que reúne: logo (en sus variantes), paleta de colores con códigos HEX, tipografías, y reglas de uso correcto/incorrecto. Es la 'Biblia' visual de tu marca.",
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
      "Porcentaje de visitantes de tu web que terminan comprando. Para una marca nueva, 1-2% es normal. Si vendes 100 prendas con 5.000 visitas, tu tasa es 2%.",
    category: "E-commerce",
  },
  {
    term: "Lookbook",
    definition:
      "Documento visual (PDF o web) que presenta tu colección completa con fotografías profesionales estilo editorial. No vende directamente, pero posiciona la marca como 'real'.",
    category: "Marketing",
  },
  {
    term: "Waitlist",
    definition:
      "Lista de correos de personas interesadas ANTES del lanzamiento. Se construye con la página 'Coming Soon' en Shopify. Un waitlist de 100 personas > 10.000 seguidores sin email.",
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
      "Plantilla visual pre-diseñada para tu tienda Shopify. Themes gratuitos recomendados para empezar: Dawn, Sense, Refresh. Themes de pago (~200€ una vez): Impulse, Prestige, Empire.",
    category: "E-commerce",
  },
];
