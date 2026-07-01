/**
 * Roadmap data — 4 phases × 6 months, tailored for:
 * - Techwear streetwear niche
 * - Student 18-25 in Spain
 * - Absolute beginner level
 * - Brand + web first (no production in phase 1)
 * - Shopify as recommended platform
 * - 6-month timeline
 */

export type Task = {
  id: string;
  label: string;
  hint?: string;
  /** Approximate duration in days for this task */
  days?: number;
  /** Optional links to free resources mentioned in the task */
  link?: { label: string; url: string };
};

export type Phase = {
  id: string;
  index: string; // "01", "02", ...
  title: string;
  months: string; // "Mes 1–2"
  duration: string; // "~4 semanas"
  goal: string; // one-line goal
  tasks: Task[];
};

export const phases: Phase[] = [
  {
    id: "phase-1",
    index: "01",
    title: "Identidad & Marca",
    months: "Mes 1",
    duration: "~4 semanas",
    goal: "Definir qué significa tu marca techwear antes de tocar ninguna herramienta.",
    tasks: [
      {
        id: "1-1",
        label: "Definir el nicho techwear específico",
        hint: "¿Utilitario cyberpunk, gorpcore, ninja-style, mil-tech? Elige UNO.",
        days: 3,
      },
      {
        id: "1-2",
        label: "Estudiar 5 marcas referentes",
        hint: "Acronym, Goldwin, Arc'teryx Veilance, Salomon Advanced, Stone Island Shadow Project. Anota qué te llama de cada una.",
        days: 5,
        link: { label: "Pinterest: Techwear Moodboard", url: "https://www.pinterest.com/search/pins/?q=techwear" },
      },
      {
        id: "1-3",
        label: "Escribir manifiesto de marca (1 página)",
        hint: "¿Por qué existes? ¿Qué problema resuelves? ¿Quién es tu cliente ideal (edad, ciudad, hobbies)?",
        days: 4,
      },
      {
        id: "1-4",
        label: "Crear moodboard en Pinterest (mín. 30 pins)",
        hint: "Agrupa por: siluetas, paletas, tejidos, detalles técnicos, fotografía.",
        days: 3,
      },
      {
        id: "1-5",
        label: "Bocetar 10 ideas de nombre de marca",
        hint: "Corto, pronunciable en español e inglés, sin números ni guiones. Verifica disponibilidad en @username en IG/TikTok.",
        days: 4,
      },
      {
        id: "1-6",
        label: "Reservar dominio .com (o .es / .store)",
        hint: "Usa Namecheap o Cloudflare Registrar (~10€/año). Evita GoDaddy por el precio de renovación.",
        days: 1,
        link: { label: "Namecheap", url: "https://www.namecheap.com" },
      },
      {
        id: "1-7",
        label: "Reservar @handles en Instagram, TikTok, Pinterest, X, YouTube",
        hint: "Mismo nombre en todas. Coherencia = credibilidad.",
        days: 1,
      },
      {
        id: "1-8",
        label: "Bocetar logo a mano (mín. 20 variaciones)",
        hint: "Solo papel y lápiz. Techwear = formas geométricas, mono-line, sin adornos. NO uses color.",
        days: 5,
      },
      {
        id: "1-9",
        label: "Digitalizar logo en Figma (gratis)",
        hint: "Crea cuenta gratuita en figma.com. Reproduce tu mejor boceto con la herramienta Pen (P). Exporta en SVG.",
        days: 5,
        link: { label: "Figma", url: "https://www.figma.com" },
      },
      {
        id: "1-10",
        label: "Definir paleta bicromática (B&W + 1 gris)",
        hint: "Herramienta: coolors.co. Ejemplo techwear: #0A0A0A (black) + #F5F5F5 (off-white) + #6B6B6B (graphite).",
        days: 2,
        link: { label: "Coolors", url: "https://coolors.co" },
      },
      {
        id: "1-11",
        label: "Elegir 2 tipografías (display + body)",
        hint: "Google Fonts gratis. Techwear clásico: Space Grotesk + Inter, o JetBrains Mono + Inter.",
        days: 2,
        link: { label: "Google Fonts", url: "https://fonts.google.com" },
      },
      {
        id: "1-12",
        label: "Crear Brand Kit de 1 página (PDF)",
        hint: "En Figma: junta logo, paleta, tipografías, uso correcto/incorrecto. Este documento es tu 'Biblia'.",
        days: 3,
      },
    ],
  },
  {
    id: "phase-2",
    index: "02",
    title: "Diseño & Web",
    months: "Mes 2–3",
    duration: "~6 semanas",
    goal: "Materializar la marca en mockups digitales y en una tienda Shopify 'Coming Soon' que capture emails.",
    tasks: [
      {
        id: "2-1",
        label: "Tomar curso 'Introducción al Diseño de Marcas' en Domestika",
        hint: "Aprovecha ofertas (cursos a 11,99€). Recomendado: 'Diseño de Marca Personal' de Mario Eskenazi.",
        days: 7,
        link: { label: "Domestika", url: "https://www.domestika.org/es" },
      },
      {
        id: "2-2",
        label: "Bocetar primera colección: 3-5 prendas hero",
        hint: "Para techwear: 1 cargo pant + 1 hoodie oversized + 1 tee técnica + 1 accessorio (mochila/sterape). NO hagas más.",
        days: 5,
      },
      {
        id: "2-3",
        label: "Crear mockups digitales gratis (Placeit o Smartmockups)",
        hint: "Sube tus diseños a plantillas de hoodie/tee. NO pidas muestras físicas todavía.",
        days: 4,
        link: { label: "Placeit", url: "https://placeit.net" },
      },
      {
        id: "2-4",
        label: "Diseñar 3 variaciones de logo aplicado (etiqueta, bordado, print)",
        hint: "En Figma. Muestra cómo se vería el logo en: pecho izquierdo, espalda completa, etiqueta interior.",
        days: 4,
      },
      {
        id: "2-5",
        label: "Diseñar wireframe (esqueleto) de tu web en Figma",
        hint: "Páginas: Home, Coming Soon, About, Contacto. Mantén todo minimalista: mucho espacio en blanco, fotos grandes.",
        days: 4,
      },
      {
        id: "2-6",
        label: "Crear cuenta en Shopify (1€/mes durante 3 meses)",
        hint: "Trial de 3 días, luego 1€/mes los primeros 3 meses. NO eliges plan completo hasta tener ventas.",
        days: 1,
        link: { label: "Shopify", url: "https://www.shopify.com/es" },
      },
      {
        id: "2-7",
        label: "Elegir theme minimalista gratuito",
        hint: 'Recomendado: "Sense" o "Dawn" (gratis). Busca themes con peuco texto, imagen grande, navegación simple.',
        days: 2,
      },
      {
        id: "2-8",
        label: "Subir logo, paleta y tipografías al theme",
        hint: "Shopify > Online Store > Themes > Customize. Reemplaza el logo default, ajusta colores a B&W.",
        days: 3,
      },
      {
        id: "2-9",
        label: "Configurar página 'Coming Soon' con captura de email",
        hint: "Usa la app gratuita 'Shopify Email' o embed un formulario de Mailchimp. Mensaje: 'Próximamente. Únete a la lista VIP.'",
        days: 3,
      },
      {
        id: "2-10",
        label: "Conectar dominio propio a Shopify",
        hint: "Shopify > Settings > Domains > Connect existing domain. Tarda 24-48h en propagar.",
        days: 1,
      },
      {
        id: "2-11",
        label: "Configurar Shopify Payments (o Stripe)",
        hint: "Necesitarás DNI y cuenta bancaria española. Sin esto no puedes cobrar. Verificación: 2-5 días hábiles.",
        days: 3,
      },
      {
        id: "2-12",
        label: "Crear 3 páginas legales obligatorias",
        hint: "Aviso legal, Política de privacidad, Política de cookies. Usa plantillas gratuitas de 'Aviso Legal Web'.",
        days: 2,
      },
    ],
  },
  {
    id: "phase-3",
    index: "03",
    title: "Comunidad & Contenido",
    months: "Mes 4–5",
    duration: "~6 semanas",
    goal: "Construir una audiencia real alrededor de la marca ANTES de tener producto.",
    tasks: [
      {
        id: "3-1",
        label: "Optimizar perfiles sociales (bio + link en bio)",
        hint: "Misma bio en IG/TikTok/Pinterest. Link: tu tienda Shopify. Herramienta gratuita para link en bio: Linktree.",
        days: 2,
      },
      {
        id: "3-2",
        label: "Diseñar grid coherente de 9 posts en Instagram",
        hint: "Alterna: mockups / inspiración techwear / proceso creativo / tipografía. Paleta B&W en TODO.",
        days: 5,
      },
      {
        id: "3-3",
        label: "Grabar 5 videos verticales (TikTok/Reels) de proceso",
        hint: "Bocetando en libreta, digitalizando en Figma, eligiendo tejidos, etc. Cámara del móvil basta. Edita en CapCut (gratis).",
        days: 5,
        link: { label: "CapCut", url: "https://www.capcut.com" },
      },
      {
        id: "3-4",
        label: "Documentar tu proceso en Stories diariamente",
        hint: "Sube 3-5 stories al día. La gente sigue personas, no logos. Sé transparente sobre tu aprendizaje.",
        days: 14,
      },
      {
        id: "3-5",
        label: "Identificar 15 micro-creadores techwear (1k-10k seguidores)",
        hint: "Búsqueda IG: #techwear, #techwearspain, #gorpcore. Anota su @ y engagement. NO pidas nada todavía.",
        days: 4,
      },
      {
        id: "3-6",
        label: "Empezar a interactuar con esos 15 creadores (genuinamente)",
        hint: "Comenta sus posts con opiniones reales (no '🔥🔥🔥'). Comparte su contenido. Construye relación primero.",
        days: 14,
      },
      {
        id: "3-7",
        label: "Crear servidor de Discord para tu comunidad",
        hint: "Canales: general, inspiration, behind-the-scenes, suggestions. Invita a los 10 primeros seguidores más activos.",
        days: 2,
        link: { label: "Discord", url: "https://discord.com" },
      },
      {
        id: "3-8",
        label: "Configurar Mailchimp gratis (hasta 500 contactos)",
        hint: "Importa los emails capturados en Shopify. Crea una secuencia de 3 emails de bienvenida.",
        days: 3,
        link: { label: "Mailchimp", url: "https://mailchimp.com" },
      },
      {
        id: "3-9",
        label: "Publicar 3 posts en r/streetwearstartup (Reddit)",
        hint: "Comparte tu proceso, pide feedback honesto. La comunidad Reddit es brutal pero útil.",
        days: 7,
        link: { label: "r/streetwearstartup", url: "https://www.reddit.com/r/streetwearstartup/" },
      },
      {
        id: "3-10",
        label: "Definir fecha de lanzamiento (Drop Day)",
        hint: "Marca un día concreto en el calendario, ej: 'Sábado 17 de enero, 18:00h CET'. Comprométete públicamente.",
        days: 1,
      },
    ],
  },
  {
    id: "phase-4",
    index: "04",
    title: "Pre-Launch & Drop",
    months: "Mes 6",
    duration: "~4 semanas",
    goal: "Lanzar el primer drop de 3-5 prendas con una comunidad ya calentada.",
    tasks: [
      {
        id: "4-1",
        label: "Finalizar diseño técnico de las 3-5 prendas",
        hint: "Para techwear nivel cero: usa blanks premium (AS Colour, Comfort Colors) + customización (serigrafía/bordado). NO cortar-y-coser aún.",
        days: 7,
      },
      {
        id: "4-2",
        label: "Pedir muestras (o configurar POD)",
        hint: "Print-on-demand con Printful (validación barata) o pide 1 muestra a un impresor local. Coste: 15-40€/pieza.",
        days: 14,
      },
      {
        id: "4-3",
        label: "Fotografiar producto (con móvil + luz natural)",
        hint: "Ventana grande + pared blanca. Edita en Lightroom Mobile (gratis). Mínimo 5 fotos por prenda.",
        days: 3,
      },
      {
        id: "4-4",
        label: "Subir productos a Shopify (título, descripción, fotos, precio)",
        hint: "Precio techwear: coste × 2.5 a 3. NO baratos. La primera colección debe ser sostenible, no 'lo vendo todo'.",
        days: 3,
      },
      {
        id: "4-5",
        label: "Configurar envíos y políticas de devolución",
        hint: "Shopify > Settings > Shipping. Para España: 4-6€ envío nacional. Devoluciones: 14 días según ley europea.",
        days: 2,
      },
      {
        id: "4-6",
        label: "Lanzar campaña de teaser (2 semanas antes)",
        hint: "Cuenta atrás en stories, posts diarios con cuenta regresiva, emails a la lista cada 4 días.",
        days: 14,
      },
      {
        id: "4-7",
        label: "Email a waitlist 7 días antes del drop",
        hint: "Asunto: '7 días. Acceso VIP 24h antes.' Crea sentido de exclusividad real.",
        days: 1,
      },
      {
        id: "4-8",
        label: "Email a waitlist 1 día antes (acceso VIP)",
        hint: "Dales acceso 24h antes que al público general. Refuerza el sentimiento de comunidad.",
        days: 1,
      },
      {
        id: "4-9",
        label: "DROP DAY: activar tienda y publicar en todas las redes",
        hint: "Publica a la hora exacta anunciada. Story en IG, post feed, Reel, TikTok, email a lista. Haz live si te atreves.",
        days: 1,
      },
      {
        id: "4-10",
        label: "Recoger feedback (encuesta post-compra + DMs)",
        hint: "Pregunta: ¿qué te gustó? ¿qué mejorarías? ¿qué prenda echas en falta? Escucha, no te defiendas.",
        days: 7,
      },
      {
        id: "4-11",
        label: "Analizar métricas: ventas, visitas, conversión, devoluciones",
        hint: "Shopify Analytics. Métrica clave: tasa de conversión. Punto de referencia para nivel cero: 1-2%.",
        days: 3,
      },
      {
        id: "4-12",
        label: "Planificar Drop 2 basándote en lo aprendido",
        hint: "Repite lo que funcionó. Elimina lo que no. NO añadas prendas nuevas por inercia. Mantén foco.",
        days: 5,
      },
    ],
  },
];

export const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
