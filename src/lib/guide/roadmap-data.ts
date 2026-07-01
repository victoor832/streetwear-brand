/**
 * Roadmap data, 5 phases over 6 months.
 * Tailored for:
 * - Techwear streetwear niche
 * - Student 18-25 in Spain
 * - Absolute beginner level
 * - Brand and web first (no production in phase 1)
 * - Shopify as recommended platform
 * - 6-month timeline
 * NO em dashes allowed (per user strict rule).
 */

export type Task = {
  id: string;
  label: string;
  hint?: string;
  days?: number;
  link?: { label: string; url: string };
};

export type Phase = {
  id: string;
  index: string;
  title: string;
  months: string;
  duration: string;
  goal: string;
  tasks: Task[];
};

export const phases: Phase[] = [
  {
    id: "phase-1",
    index: "01",
    title: "Concepto y Definición",
    months: "Mes 1",
    duration: "~4 semanas",
    goal:
      "Definir quién eres como marca, qué defendes y para quién diseñas, antes de tocar cualquier herramienta.",
    tasks: [
      {
        id: "1-1",
        label: "Escribir autocuestionario de 20 preguntas sobre ti",
        hint:
          "Preguntas: ¿Qué ropa uso cada día? ¿Qué marcas admiro y por qué? ¿Qué odio de la moda actual? ¿Qué subculturas me influyen? ¿Qué música escucho? ¿Qué películas? ¿Qué barrios o ciudades? Sin filtros, en una libreta.",
        days: 2,
      },
      {
        id: "1-2",
        label: "Construir 3 moodboards separados en Pinterest",
        hint:
          "Tableros: 'Siluetas y prendas', 'Paletas y texturas', 'Fotografía y actitud'. Mínimo 30 pins por tablero. NO mezcles estilos. Si pinneas algo que no encaja con el resto, descártalo.",
        days: 4,
        link: { label: "Pinterest", url: "https://www.pinterest.com" },
      },
      {
        id: "1-3",
        label: "Aplicar técnica de los 5 Por Qués a tu idea de marca",
        hint:
          "Escribe 'Quiero crear una marca de ropa'. Pregúntate 'por qué' 5 veces seguidas. Cada respuesta profundiza. Al final llegarás a algo honesto: probablemente no es 'para hacerme rico' sino algo más personal.",
        days: 1,
      },
      {
        id: "1-4",
        label: "Estudiar 5 marcas referentes techwear en profundidad",
        hint:
          "Acronym, Goldwin, Arc'teryx Veilance, Salomon Advanced, Stone Island Shadow Project. Por cada una, anota: silueta, paleta, materiales, narrativa de marca, cliente ideal. Una página por marca.",
        days: 5,
      },
      {
        id: "1-5",
        label: "Escribir manifiesto de marca (1 página, 3 párrafos)",
        hint:
          "Párrafo 1: qué defendes. Párrafo 2: contra qué te rebelas. Párrafo 3: qué tipo de vida quieres que tu cliente viva con tu ropa. Sin eslogans. Sin marketing. Lenguaje honesto.",
        days: 3,
      },
      {
        id: "1-6",
        label: "Definir tu cliente ideal (buyer persona) en 1 página",
        hint:
          "Nombre inventado, edad, ciudad, barrio, ingresos, estudios, hobbies, qué música escucha, qué otras marcas viste, qué redes usa, qué le frustra, qué aspira a ser. Cuanto más concreto, mejor.",
        days: 3,
      },
      {
        id: "1-7",
        label: "Elegir UN nicho techwear específico",
        hint:
          "Opciones: utilitario cyberpunk, gorpcore, ninja-style, mil-tech. NO mezcles al principio. Un nicho claro facilita todas las decisiones posteriores.",
        days: 1,
      },
      {
        id: "1-8",
        label: "Bocetar 10 ideas de nombre de marca en libreta",
        hint:
          "Corto, pronunciable en español e inglés, sin números ni guiones. Técnicas: combinar dos palabras, inventar neologismo, usar un término técnico. Verifica disponibilidad de @handle en IG y TikTok.",
        days: 4,
      },
      {
        id: "1-9",
        label: "Verificar disponibilidad y reservar dominio .com (o .es)",
        hint:
          "Usa Namecheap o Cloudflare Registrar (unos 10€/año). Evita GoDaddy por el precio de renovación. Si el .com no está libre, prueba .es, .store o .co.",
        days: 1,
        link: { label: "Namecheap", url: "https://www.namecheap.com" },
      },
      {
        id: "1-10",
        label: "Reservar @handles en Instagram, TikTok, Pinterest, X, YouTube",
        hint:
          "Mismo nombre en todas. Coherencia equivale a credibilidad. Si el nombre exacto no está libre en alguna, añade un prefijo como 'shop' o sufijo como 'official'.",
        days: 1,
      },
      {
        id: "1-11",
        label: "Definir paleta bicromática (negro, blanco, 1 gris)",
        hint:
          "Herramienta: coolors.co. Ejemplo techwear: #0A0A0A (negro puro) + #F5F5F5 (blanco off) + #6B6B6B (grafito). Anota códigos HEX y los Pantone equivalentes.",
        days: 2,
        link: { label: "Coolors", url: "https://coolors.co" },
      },
      {
        id: "1-12",
        label: "Elegir 2 tipografías (display + body)",
        hint:
          "Google Fonts gratis. Techwear clásico: Space Grotesk + Inter, o JetBrains Mono + Inter. La display para titulares, la body para texto largo. Máximo 2 familias.",
        days: 2,
        link: { label: "Google Fonts", url: "https://fonts.google.com" },
      },
      {
        id: "1-13",
        label: "Bocetar 20 variaciones de logo a mano (papel y lápiz)",
        hint:
          "Techwear equivale a formas geométricas, mono-line, sin adornos. NO uses color. Explora: wordmark (solo texto), lettermark (iniciales), monograma (símbolo + texto). 20 mínimas.",
        days: 5,
      },
      {
        id: "1-14",
        label: "Digitalizar logo en Figma (versión final en SVG)",
        hint:
          "Crea cuenta gratuita en figma.com. Reproduce tu mejor boceto con la herramienta Pen (tecla P). Exporta en SVG (vectorial, escalable sin perder calidad).",
        days: 5,
        link: { label: "Figma", url: "https://www.figma.com" },
      },
      {
        id: "1-15",
        label: "Crear Brand Kit de 1 página (PDF) y guardarlo como Biblia",
        hint:
          "En Figma: junta logo, paleta con códigos HEX, tipografías, reglas de uso correcto e incorrecto. Este documento es la Biblia visual de tu marca.",
        days: 3,
      },
      {
        id: "1-16",
        label: "Compartir Brand Kit con 3 personas de confianza y pedir feedback honesto",
        hint:
          "Pregunta: ¿qué transmite esta marca? ¿Para quién crees que es? Si las respuestas no coinciden con tu intención, vuelve a pasos anteriores. NO ignores el feedback.",
        days: 3,
      },
    ],
  },
  {
    id: "phase-2",
    index: "02",
    title: "Diseño de Prendas",
    months: "Mes 2",
    duration: "~4 semanas",
    goal:
      "Aprender los fundamentos del diseño de moda y bocetar tu primera colección de 3 a 5 prendas hero.",
    tasks: [
      {
        id: "2-1",
        label: "Auditar curso Fashion as Design del MoMA (Coursera, gratis)",
        hint:
          "Modo auditor (sin certificado). Son 7 módulos de unos 4h. Haz 1 módulo por día. Te dará contexto cultural e histórico del diseño de moda.",
        days: 7,
        link: { label: "Coursera: Fashion as Design", url: "https://www.coursera.org/learn/fashion-design" },
      },
      {
        id: "2-2",
        label: "Ver 5 vídeos de Zoe Hong sobre fashion illustration",
        hint:
          "Su playlist 'Fashion Illustration for Beginners' es la mejor en inglés. Toma apuntes del proceso: cómo dibuja la figura, cómo coloca la prenda encima.",
        days: 3,
        link: { label: "Zoe Hong en YouTube", url: "https://www.youtube.com/@zoehong" },
      },
      {
        id: "2-3",
        label: "Descargar 3 plantillas de croquis (figura humana) gratis",
        hint:
          "Busca 'fashion croquis template free' en Pinterest. Elige 3 estilos diferentes. Imprímelas en A4. Te servirán de base para bocetar tus prendas sin tener que dibujar la figura desde cero.",
        days: 1,
        link: { label: "Pinterest: croquis templates", url: "https://www.pinterest.com/search/pins/?q=fashion%20croquis%20template" },
      },
      {
        id: "2-4",
        label: "Bocetar 20 prendas en papel usando croquis como base",
        hint:
          "No juzgues mientras dibujas. 20 ideas, mínimas. 5 hoodies, 5 tees, 5 pantalones, 5 accesorios. Usa rotuladores Pigma Micron para los trazos finales.",
        days: 5,
      },
      {
        id: "2-5",
        label: "Seleccionar 5 prendas hero (tu primera colección)",
        hint:
          "Para techwear nivel cero: 1 cargo pant + 1 hoodie oversized + 1 tee técnica + 1 accessorio (mochila o sterape) + 1 wild card. Criterio: que las 5 formen un universo visual coherente.",
        days: 2,
      },
      {
        id: "2-6",
        label: "Dibujar flat sketch (vista frontal técnica) de cada prenda",
        hint:
          "Sin volumen ni sombras. Solo construcción y costuras. Estilo plano. Esto será la base de tu tech pack. Usa regla y compás para líneas rectas.",
        days: 4,
      },
      {
        id: "2-7",
        label: "Estudiar tipos de tejido para techwear (1 tarde)",
        hint:
          "Aprende la diferencia: algodón peinado vs cardado, ripstop, cordura, softshell, nylon balístico. Mira vídeos de Justine Leconte sobre tejidos. Anota qué tejido corresponde a cada una de tus 5 prendas.",
        days: 2,
        link: { label: "Justine Leconte en YouTube", url: "https://www.youtube.com/@JustineLeconte" },
      },
      {
        id: "2-8",
        label: "Crear ficha de materiales por prenda (1 página por prenda)",
        hint:
          "Para cada una de las 5: tejido principal, GSM (peso), color Pantone, tejido secundario (forro, refuerzos), hardware (cremalleras, cordones), etiquetas.",
        days: 4,
      },
      {
        id: "2-9",
        label: "Construir tech pack completo de cada prenda (plantilla gratuita)",
        hint:
          "Usa plantilla gratuita de Hubify o de The Evans Group blog. Incluye: flat sketch frontal y posterior, tabla de medidas (S, M, L, XL), ficha de materiales, ubicación de prints o bordados con medidas.",
        days: 5,
        link: { label: "The Evans Group blog", url: "https://evansgroup.la/blog/" },
      },
      {
        id: "2-10",
        label: "Crear mockups digitales de las 5 prendas en Placeit o Smartmockups",
        hint:
          "Sube tus diseños a plantillas de hoodie, tee y pant. NO pidas muestras físicas todavía. El objetivo es ver cómo se verían y poder enseñarlas.",
        days: 3,
        link: { label: "Placeit", url: "https://placeit.net" },
      },
      {
        id: "2-11",
        label: "Presentar la colección a 3 personas de confianza y pedir feedback específico",
        hint:
          "Preguntas: ¿cuál te comprarías? ¿Por qué? ¿Qué prenda sobra? ¿Qué eches en falta? Anota TODO. No te defiendas de la crítica.",
        days: 3,
      },
      {
        id: "2-12",
        label: "Iterar diseños según feedback y bloquear colección final",
        hint:
          "Máximo 2 cambios por prenda. Después de este paso, la colección queda CONGELADA. Cualquier cambio posterior debe esperar al Drop 2.",
        days: 4,
      },
    ],
  },
  {
    id: "phase-3",
    index: "03",
    title: "Marca y Web",
    months: "Mes 3",
    duration: "~4 semanas",
    goal:
      "Materializar la marca en una tienda Shopify Coming Soon que capture emails y muestre tu universo visual.",
    tasks: [
      {
        id: "3-1",
        label: "Ver curso de Shopify en español (Udemy) completo",
        hint:
          "Inscríbete en el curso de Shopify en español de la sección de cursos. Hazlo en 1 semana, a razón de 1h diaria. Toma apuntes solo de lo que no entiendas.",
        days: 7,
      },
      {
        id: "3-2",
        label: "Tomar curso de Diseño de Identidad para Marcas (Domestika)",
        hint:
          "Refuerza y profesionaliza lo que aprendiste en la Fase 1 sobre branding. Curso de 18 unidades, ofertado a 11,99€. Haz el proyecto final con tu propia marca.",
        days: 7,
        link: { label: "Domestika: curso 852", url: "https://www.domestika.org/es/courses/852-diseno-de-identidad-para-marcas" },
      },
      {
        id: "3-3",
        label: "Diseñar wireframe (esqueleto) de tu web en Figma",
        hint:
          "Páginas: Home, Coming Soon, About, Contacto. Mantén todo minimalista: mucho espacio en blanco, fotos grandes, poco texto. Una página por pantalla.",
        days: 4,
      },
      {
        id: "3-4",
        label: "Crear cuenta en Shopify (1€/mes durante 3 meses)",
        hint:
          "Trial de 3 días, luego 1€/mes los primeros 3 meses. NO elijas plan completo hasta tener ventas. Tarjeta de crédito necesaria para el alta.",
        days: 1,
        link: { label: "Shopify", url: "https://www.shopify.com/es" },
      },
      {
        id: "3-5",
        label: "Elegir theme minimalista gratuito",
        hint:
          "Recomendado: Dawn o Sense (ambos gratis). Busca themes con poco texto, imagen grande y navegación simple. Evita themes con muchos colores por defecto.",
        days: 2,
      },
      {
        id: "3-6",
        label: "Subir logo, paleta y tipografías al theme",
        hint:
          "Shopify > Online Store > Themes > Customize. Reemplaza el logo default, ajusta colores a B&W (negro #0A0A0A, blanco #F5F5F5, gris #6B6B6B).",
        days: 3,
      },
      {
        id: "3-7",
        label: "Configurar página Coming Soon con captura de email",
        hint:
          "Usa la app gratuita Shopify Email o embed un formulario de Mailchimp. Mensaje: 'Próximamente. Únete a la lista VIP para acceso prioritario al primer drop.'",
        days: 3,
      },
      {
        id: "3-8",
        label: "Conectar dominio propio a Shopify",
        hint:
          "Shopify > Settings > Domains > Connect existing domain. Tarda 24 a 48h en propagar. Mientras tanto, Shopify te da un dominio temporal .myshopify.com.",
        days: 1,
      },
      {
        id: "3-9",
        label: "Configurar Shopify Payments (o Stripe como alternativa)",
        hint:
          "Necesitarás DNI y cuenta bancaria española. Sin esto no puedes cobrar. Verificación: 2 a 5 días hábiles. Hazlo cuanto antes para no bloquear el lanzamiento.",
        days: 3,
      },
      {
        id: "3-10",
        label: "Crear 3 páginas legales obligatorias",
        hint:
          "Aviso legal, Política de privacidad, Política de cookies. Usa plantillas gratuitas de Aviso Legal Web adaptadas a España. Imprescindible para cumplir RGPD.",
        days: 2,
      },
      {
        id: "3-11",
        label: "Configurar mail profesional (hola@tumarca.com)",
        hint:
          "Opción gratuita: Zoho Mail (1 cuenta gratis). Opción de pago: Google Workspace (6€/mes). NO uses gmail.com para contactos de marca, da mala imagen.",
        days: 2,
      },
      {
        id: "3-12",
        label: "Hacer test completo de la web en móvil y desktop",
        hint:
          "Pídele a 3 amigos que entren desde su móvil y te cuenten: ¿entienden qué vendes en 5 segundos? ¿Encuentran el formulario de email? Corrige antes de seguir.",
        days: 2,
      },
    ],
  },
  {
    id: "phase-4",
    index: "04",
    title: "Comunidad y Contenido",
    months: "Mes 4 y 5",
    duration: "~6 semanas",
    goal:
      "Construir una audiencia real alrededor de la marca ANTES de tener producto físico.",
    tasks: [
      {
        id: "4-1",
        label: "Optimizar perfiles sociales (bio coherente + link en bio)",
        hint:
          "Misma bio en IG, TikTok y Pinterest. Link: tu tienda Shopify. Herramienta gratuita para link en bio: Linktree. Foto de perfil: tu logo en B&W.",
        days: 2,
      },
      {
        id: "4-2",
        label: "Diseñar grid coherente de 9 posts en Instagram",
        hint:
          "Alterna: mockups, inspiración techwear, proceso creativo, tipografía. Paleta B&W en TODO. Programa los 9 primeros posts antes de empezar a publicar para tener base visual.",
        days: 5,
      },
      {
        id: "4-3",
        label: "Grabar 5 vídeos verticales (TikTok o Reels) de proceso",
        hint:
          "Bocetando en libreta, digitalizando en Figma, eligiendo tejidos, etc. Cámara del móvil basta. Edita en CapCut (gratis). Máximo 30 segundos por vídeo.",
        days: 5,
        link: { label: "CapCut", url: "https://www.capcut.com" },
      },
      {
        id: "4-4",
        label: "Documentar tu proceso en Stories diariamente",
        hint:
          "Sube 3 a 5 stories al día. La gente sigue personas, no logos. Sé transparente sobre tu aprendizaje. Cuenta los días que fallas también, conecta más.",
        days: 30,
      },
      {
        id: "4-5",
        label: "Identificar 15 micro-creadores techwear (1k a 10k seguidores)",
        hint:
          "Búsqueda IG: #techwear, #techwearspain, #gorpcore. Anota su @ y engagement. NO pidas nada todavía. Solo observa qué contenido les funciona.",
        days: 4,
      },
      {
        id: "4-6",
        label: "Empezar a interactuar con esos 15 creadores (genuinamente)",
        hint:
          "Comenta sus posts con opiniones reales (no pongas 'fuego, fuego, fuego'). Comparte su contenido. Construye relación antes de pedir nada.",
        days: 14,
      },
      {
        id: "4-7",
        label: "Crear servidor de Discord para tu comunidad",
        hint:
          "Canales: general, inspiración, behind-the-scenes, sugerencias. Invita a los 10 primeros seguidores más activos. Reglas claras y moderación desde el día 1.",
        days: 2,
        link: { label: "Discord", url: "https://discord.com" },
      },
      {
        id: "4-8",
        label: "Configurar Mailchimp gratis (hasta 500 contactos)",
        hint:
          "Importa los emails capturados en Shopify. Crea secuencia de 3 emails de bienvenida automatizada. Email 1: gracias. Email 2: historia de la marca. Email 3: sneak peek de la colección.",
        days: 3,
        link: { label: "Mailchimp", url: "https://mailchimp.com" },
      },
      {
        id: "4-9",
        label: "Publicar 3 posts en r/streetwearstartup (Reddit)",
        hint:
          "Comparte tu proceso, pide feedback honesto. La comunidad Reddit es brutal pero útil. Respeta las reglas del subreddit. NO hagas spam.",
        days: 7,
        link: { label: "r/streetwearstartup", url: "https://www.reddit.com/r/streetwearstartup/" },
      },
      {
        id: "4-10",
        label: "Definir fecha de lanzamiento (Drop Day)",
        hint:
          "Marca un día concreto en el calendario, por ejemplo: 'Sábado 17 de enero, 18:00h CET'. Comprométete públicamente. La presión social te ayudará a cumplir.",
        days: 1,
      },
      {
        id: "4-11",
        label: "Diseñar teasers visuales (cuenta atrás + mockups)",
        hint:
          "Crea 5 imágenes de teaser con los mockups de tu colección y cuenta atrás (28 días, 21 días, 14 días, 7 días, 1 día). Programa en todas las redes.",
        days: 3,
      },
      {
        id: "4-12",
        label: "Lanzar campaña de teaser en stories y Reels (2 semanas)",
        hint:
          "Cuenta atrás diaria en stories. Publica 1 Reel cada 3 días mostrando un detalle de la colección. Refuerza el misterio, no enseñes todo.",
        days: 14,
      },
    ],
  },
  {
    id: "phase-5",
    index: "05",
    title: "Pre-Launch y Drop",
    months: "Mes 6",
    duration: "~4 semanas",
    goal:
      "Lanzar el primer drop de 3 a 5 prendas con una comunidad ya calentada y un proceso de compra impecable.",
    tasks: [
      {
        id: "5-1",
        label: "Decidir vía de producción: POD, blanks o cut-and-sew",
        hint:
          "Nivel cero recomendado: POD con Printful (validación barata) o blanks premium (AS Colour, Comfort Colors) con serigrafía o bordado local. Cut-and-sew se reserva para Drop 2.",
        days: 2,
      },
      {
        id: "5-2",
        label: "Pedir muestras (1 por prenda, en talla M)",
        hint:
          "Si POD: pide a tu propia dirección. Si blanks: pide al impresor local. Coste: 15 a 40€ por pieza. NO avances a producción sin ver y tocar la muestra.",
        days: 14,
      },
      {
        id: "5-3",
        label: "Fotografiar producto (móvil + luz natural + fondo blanco)",
        hint:
          "Ventana grande + pared blanca. Edita en Lightroom Mobile (gratis). Mínimo 5 fotos por prenda: frontal, lateral, detalle, etiqueta, contexto lifestyle.",
        days: 3,
      },
      {
        id: "5-4",
        label: "Subir productos a Shopify (título, descripción, fotos, precio)",
        hint:
          "Precio techwear: coste x 2.5 a 3. NO seas barato. La primera colección debe ser sostenible, no quiero venderlo todo. Descripciones cortas, enfocadas en material y fit.",
        days: 3,
      },
      {
        id: "5-5",
        label: "Configurar envíos y políticas de devolución",
        hint:
          "Shopify > Settings > Shipping. Para España: 4 a 6€ envío nacional, gratis a partir de 80€. Devoluciones: 14 días según ley europea. Documenta todo en página de FAQ.",
        days: 2,
      },
      {
        id: "5-6",
        label: "Email a waitlist 7 días antes del drop",
        hint:
          "Asunto: '7 días. Acceso VIP 24h antes.' Crea sentido de exclusividad real. Añade 2 fotos de producto. Botón claro a la página de producto o a la home.",
        days: 1,
      },
      {
        id: "5-7",
        label: "Email a waitlist 1 día antes (acceso VIP real)",
        hint:
          "Dales acceso 24h antes que al público general. Refuerza el sentimiento de comunidad. Crea un código de descuento exclusivo o acceso anticipado con contraseña.",
        days: 1,
      },
      {
        id: "5-8",
        label: "DROP DAY: activar tienda y publicar en todas las redes",
        hint:
          "Publica a la hora exacta anunciada. Story en IG, post feed, Reel, TikTok, email a lista. Haz live si te atreves. Tienes máxima visibilidad las primeras 6h.",
        days: 1,
      },
      {
        id: "5-9",
        label: "Atender mensajes y DMs en tiempo real (primeras 48h)",
        hint:
          "Responde a TODO en menos de 2h las primeras 48h. La atención al cliente en el lanzamiento crea o rompe la reputación de la marca para siempre.",
        days: 2,
      },
      {
        id: "5-10",
        label: "Recoger feedback post-compra (encuesta + DMs)",
        hint:
          "Pregunta: ¿qué te gustó? ¿qué mejorarías? ¿qué prenda echas en falta? Escucha, no te defiendas. Las críticas son oro para el Drop 2.",
        days: 7,
      },
      {
        id: "5-11",
        label: "Analizar métricas: ventas, visitas, conversión, devoluciones",
        hint:
          "Shopify Analytics. Métrica clave: tasa de conversión. Punto de referencia para nivel cero: 1 a 2%. Anota qué producto vendió primero y cuál no se movió.",
        days: 3,
      },
      {
        id: "5-12",
        label: "Planificar Drop 2 basándote en lo aprendido",
        hint:
          "Repite lo que funcionó. Elimina lo que no. NO añadas prendas nuevas por inercia. Mantén foco. Drop 2 debe ser una versión mejorada del 1, no una colección nueva.",
        days: 5,
      },
    ],
  },
];

export const totalTasks = phases.reduce((acc, p) => acc + p.tasks.length, 0);
