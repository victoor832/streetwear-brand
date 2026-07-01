"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { garmentDesignCourses, digitalDesignCourses } from "@/lib/guide/content-data";

type Module = {
  num: string;
  level: string;
  title: string;
  duration: string;
  intro: string;
  body: string[];
  practical?: { title: string; description: string };
  resources?: { label: string; url: string }[];
};

const modules: Module[] = [
  {
    num: "M1",
    level: "Nivel 0",
    title: "Fundamentos: qué es el diseño de moda",
    duration: "1 semana",
    intro:
      "Antes de dibujar, necesitas entender qué es el diseño de moda y qué NO es. Es la diferencia entre hacer 'dibujos bonitos de ropa' y diseñar prendas que se puedan fabricar y llevar.",
    body: [
      "El diseño de moda NO es dibujar prendas bonitas. Es resolver un problema: cómo cubrir un cuerpo humano con materiales que cumplan una función (abrigo, transpiración, identidad, status) dentro de una estética coherente. Si dibujas algo que no se puede coser, no es diseño, es ilustración.",
      "Un diseñador de moda trabaja con 4 elementos simultáneamente: la forma (silueta), el material (tejido y construcción), la función (para qué sirve) y el significado (qué comunica). Estos 4 elementos deben estar de acuerdo entre sí. Si diseñas un cargo pant de inspiración militar en algodón fino y liso, el material contradice la forma y la función. El tejido rompe la coherencia.",
      "Para principiantes absolutos, hay 3 tipos de diseño de moda que debes conocer. Haute couture (alta costura, piezas únicas hechas a mano). Ready-to-wear (prêt-à-porter, producción en serie de calidad). Streetwear (producción en serie, estética urbana). Tu marca es streetwear. No intentes hacer haute couture al principio, es la trampa del ego.",
    ],
    practical: {
      title: "Estudio de 3 prendas",
      description:
        "Coge 3 prendas de tu armario. Para cada una, escribe en una hoja: forma (silueta general), material (tejido, peso aproximado), función (para qué sirve), significado (qué dice de quien la lleva). Verás que las 3 prendas son coherentes en sus 4 dimensiones. Esa coherencia es lo que tú debes lograr en tus diseños.",
    },
    resources: [
      { label: "Coursera: Fashion as Design (MoMA)", url: "https://www.coursera.org/learn/fashion-design" },
      { label: "Ssense Editorial (lectura cultural)", url: "https://www.ssense.com/en-us/editorial" },
    ],
  },
  {
    num: "M2",
    level: "Nivel 10",
    title: "Bocetado de prendas: croquis y flats",
    duration: "2 semanas",
    intro:
      "El bocetado tiene 2 propósitos distintos: el croquis (ilustración con figura humana, para comunicar estilo) y el flat (dibujo técnico sin volumen, para comunicar construcción). Necesitas los dos.",
    body: [
      "El croquis es la versión 'publicable' de tu diseño. Usa una figura humana estilizada (cabeza más grande de lo real, 9 cabezas de alto en vez de las 8 reales) y dibujas la prenda encima. El objetivo es transmitir sensación, no exactitud. Es lo que enseñas en Instagram y en tu lookbook.",
      "El flat sketch es lo opuesto: sin figura humana, sin volumen, sin sombras. Solo líneas planas que muestran construcción y costuras. Vista frontal y a veces posterior. Es lo que va dentro de tu tech pack y lo que el fabricante va a interpretar. Si el flat está mal, la prenda física estará mal.",
      "Para principiantes, NO intentes dibujar la figura humana desde cero. Descarga plantillas gratuitas de croquis (busca 'fashion croquis template free' en Pinterest) y dibuja sobre ellas. Te ahorra meses de frustración. Cuando tengas más soltura, podrás crear tus propias plantillas.",
      "Herramientas para bocetar: lápices HB y 2B para bocetos rápidos. Rotuladores Pigma Micron (0.2, 0.4, 0.6) para entintar. Marcadores de tonos grises Copic para dar volumen a los flats. Papel A4 de 90gsm mínimo. Tableta gráfica opcional para digitalizar, NO imprescindible al principio.",
    ],
    practical: {
      title: "Boceta 20 prendas en 5 días",
      description:
        "5 prendas por día, en croquis. Sin juzgar mientras dibujas. Las primeras 10 serán malas. Las siguientes 10 empezarán a tener personalidad. Si te bloqueas en una, pasa a la siguiente. El objetivo es volumen, no calidad al principio.",
    },
    resources: [
      { label: "Pinterest: croquis templates", url: "https://www.pinterest.com/search/pins/?q=fashion%20croquis%20template" },
      { label: "Zoe Hong en YouTube", url: "https://www.youtube.com/@zoehong" },
    ],
  },
  {
    num: "M3",
    level: "Nivel 20",
    title: "Pensar una colección (no prendas sueltas)",
    duration: "1 semana",
    intro:
      "Una colección no es un conjunto de prendas bonitas. Es una historia coherente. Si enseñas tus 5 prendas juntas y parecen un armario aleatorio, no tienes colección, tienes stock.",
    body: [
      "Una colección coherente tiene 3 ejes: repetición, variación y evolución. Repetición: hay elementos que aparecen en varias prendas (un tipo de costura, un color, un detalle de hardware). Variación: cada prenda es distinta, no son 5 versiones de la misma. Evolución: hay una progresión, una prenda lleva a la siguiente, visual o conceptualmente.",
      "Para tu primer drop, trabaja con 3 a 5 prendas hero (protagonistas). Para techwear nivel cero, recomendación: 1 cargo pant + 1 hoodie oversized + 1 tee técnica + 1 accesorio funcional (mochila, sterape, gorra) + 1 wild card (lo que más te entusiasme). Más de 5 prendas te diluirá el presupuesto y la atención.",
      "Antes de bocetar, escribe la 'frase de colección' en una sola línea. Ejemplo: 'Ropa técnica para moverse por la ciudad de noche'. Esta frase es tu filtro: cualquier prenda que no cumpla esa frase, queda fuera. Suena simple, pero te ahorrará semanas de duda.",
    ],
    practical: {
      title: "Diagrama de colección",
      description:
        "En un A3, dibuja las 5 prendas en círculo. Entre cada par de prendas adyacentes, escribe qué las conecta (mismo tejido, misma paleta, mismo detalle de hardware, etc.). Si entre dos prendas no encuentras conexión, o sobra una prenda o necesitas rediseñar la otra.",
    },
  },
  {
    num: "M4",
    level: "Nivel 40",
    title: "Tech pack: el documento que habla con el fabricante",
    duration: "1 semana",
    intro:
      "El tech pack es el documento técnico más importante de tu marca. Sin un tech pack claro, el fabricante adivina. Y cuando el fabricante adivina, pierdes dinero en muestras que no coinciden con tu visión.",
    body: [
      "Un tech pack profesional contiene 7 secciones obligatorias. 1: Flat sketch frontal y posterior (dibujo técnico en vista plana). 2: Tabla de medidas por talla (S, M, L, XL como mínimo, con medidas en cm: largo total, ancho de pecho, largo de manga, sisa, etc.). 3: Ficha de materiales (tejido principal, forro, refuerzos, con tipos y pesos GSM). 4: Ficha de hardware (cremalleras YKK, cordones, botones, velcros, con referencias).",
      "5: Ubicación de prints o bordados (con medidas exactas en cm desde puntos de referencia como 'a 5cm del cuello, centrado'). 6: Códigos de color Pantone (no HEX, el fabricante necesita Pantone para teñir el tejido). 7: Etiquetas y tags (interior, cuello, lateral, con tamaño y posición).",
      "Para tu primer tech pack, NO lo hagas desde cero. Descarga plantillas gratuitas (The Evans Group blog tiene plantillas, Hubify también). Adapta la plantilla a tu prenda. Un buen tech pack tarda 1 día en hacerse. Uno malo te costará 200€ en muestras fallidas.",
    ],
    practical: {
      title: "Tech pack real de tu primera prenda",
      description:
        "Elige la prenda más sencilla de tu colección (probablemente la tee). Haz su tech pack completo siguiendo los 7 puntos. Mándalo a 3 fabricantes y pide presupuesto. Compararás 3 respuestas, aprenderás mucho del proceso y entenderás qué información falta o sobra en tu tech pack.",
    },
    resources: [
      { label: "The Evans Group blog (tech packs)", url: "https://evansgroup.la/blog/" },
      { label: "Tech pack templates gratis (búsqueda)", url: "https://www.google.com/search?q=tech+pack+template+free" },
    ],
  },
  {
    num: "M5",
    level: "Nivel 50",
    title: "Patronaje básico: cómo se construye una prenda",
    duration: "2 semanas (teoría)",
    intro:
      "No necesitas saber patronaje para tu primer drop (puedes usar blanks o POD). Pero sí necesitas entender qué es, porque te hará mejor diseñador y mejor comunicador con tu fabricante.",
    body: [
      "El patronaje es el arte de crear patrones: las plantillas de papel (o digitales) con las formas que, recortadas en tejido y cosidas, construyen una prenda en 3D. Sin patrón, no hay prenda. Hay 2 métodos: patronaje plano (se dibuja en 2D sobre papel usando medidas) y drapeado (se manipula el tejido directamente sobre un maniquí). El plano es más común para producción industrial.",
      "Conceptos que debes conocer aunque no patronajes tú: punto de sisa (donde la manga se une al cuerpo), pinza (pliegue que da forma a la prenda, común en camisas y pantalones), margen de costura (los cm extra que se dejan para coser, típicamente 1cm), escalado (proceso de generar las tallas S, M, L, XL a partir del patrón base, normalmente talla M).",
      "Si te decides por cut-and-sew en el futuro (no para tu primer drop), necesitarás un patronista. Puede ser freelance (50 a 150€ por patrón) o internal en tu fábrica. Tu trabajo como diseñador es entregarle flats clarísimos y referencias. El patronista traduce eso a patrones.",
      "Para empezar a entender patronaje sin pagar curso, mira vídeos en YouTube de 'patronaje básico para principiantes' en español. Hay canales como Moda Fácil o Costura Creativa con tutoriales paso a paso. No para que patronajes tú, sino para que entiendas el vocabulario y el proceso.",
    ],
    practical: {
      title: "Coser una tote bag desde cero",
      description:
        "Como ejercicio de comprensión, compra medio metro de tela de algodón, hilo y una aguja. Sigue un tutorial de YouTube para coser una tote bag sencilla a mano (sin máquina). Te llevará 4 horas. Cuando termines, entenderás mejor qué es una costura, un margen, un dobladillo. Y valorarás el trabajo que hay detrás de cada prenda.",
    },
    resources: [
      { label: "YouTube: patronaje básico español", url: "https://www.youtube.com/results?search_query=patronaje+b%C3%A1sico+espa%C3%B1ol+principiantes" },
      { label: "Seamly2D (software libre de patronaje)", url: "https://seamly.net" },
    ],
  },
  {
    num: "M6",
    level: "Nivel 55",
    title: "Diseño digital en Mac: Inkscape, GIMP y Adobe Express (todo gratuito)",
    duration: "2 semanas",
    intro:
      "Hasta aquí has trabajado a mano. Ahora toca profesionalizar: dibujar flats y tech packs en software digital. Todo el software de este módulo es gratuito y nativo para macOS en Apple Silicon (M1 a M4). No necesitas pagar suscripciones de Adobe para diseñar prendas profesionales.",
    body: [
      "Por qué vectorial y no píxeles. Un flat sketch debe escalarse sin perder calidad: lo dibujas una vez y lo usas en el tech pack, en el lookbook, en Instagram, en un cartel. Los gráficos vectoriales se componen de trayectorias matemáticas, no de píxeles, así que escalan infinitamente. Inkscape es el editor vectorial gratuito líder en macOS Apple Silicon. GIMP y Photopea son de píxeles: útiles para fotos y texturas, NO para flats.",
      "Inkscape en macOS Apple Silicon (M4). Inkscape es 100% gratuito y de código abierto. La versión actual (1.3+) es nativa para Apple Silicon, así que corre sin Rosetta y aprovecha toda la potencia del M4. Lo descargas desde inkscape.org (archivo DMG, instalación drag-and-drop como cualquier app de Mac). Flujo de trabajo típico: 1) Importas tu boceto a mano como referencia (capa bloqueada con opacidad al 30%). 2) Sobre ella, dibujas con la herramienta Pluma (B) los contornos planos. 3) Añades las costuras con trazo punteado. 4) Etiquetas todas las medidas. 5) Exportas en SVG, PDF y PNG. El resultado es un flat digital limpio que cualquier fabricante entiende.",
      "Adobe Express: la herramienta web gratuita de Adobe. Adobe Express (express.adobe.com) es la alternativa gratuita de Adobe a Canva. Funciona en el navegador, no requiere instalación y se usa con cuenta Adobe ID gratuita. Permite crear mockups, posts para redes sociales, miniaturas y presentaciones. Incluye plantillas profesionales y acceso limitado a Adobe Fonts y Adobe Stock gratis. NO sustituye a Inkscape para flats, pero complementa para todo lo visual y de marketing.",
      "GIMP y Photopea para edición de imágenes. GIMP es el equivalente gratuito de Photoshop, nativo para macOS Apple Silicon (descarga desde gimp.org, archivo DMG). Lo usas para editar fotos de producto, aplicar texturas a tus flats y retocar mockups. Photopea (photopea.com) es una alternativa web que abre y guarda archivos PSD de Photoshop sin instalar nada. Para tu primer drop, con Inkscape + GIMP + Adobe Express tienes cubierto el 100% del trabajo digital de diseño. Cero euros en software.",
    ],
    practical: {
      title: "Dibuja tu primer flat digital en Inkscape",
      description:
        "Elige la prenda más sencilla de tu colección (probablemente la tee). Imprime tu boceto a mano o hazle una foto con el móvil. En Inkscape, importa la imagen como referencia. Bloquéala en una capa con opacidad al 30%. Crea capa nueva encima. Con la Pluma (B), dibuja el contorno plano. Añade costuras con trazo punteado. Etiqueta medidas. Exporta en PDF y SVG. Compáralo con tu flat a mano: la diferencia será obvia.",
    },
    resources: [
      { label: "Inkscape (gratis, nativo Mac M4)", url: "https://inkscape.org" },
      { label: "GIMP (gratis, nativo Mac M4)", url: "https://www.gimp.org" },
      { label: "Adobe Express (web, gratis)", url: "https://express.adobe.com" },
      { label: "Photopea (web, gratis)", url: "https://www.photopea.com" },
      { label: "Tutoriales Inkscape oficiales en YouTube", url: "https://www.youtube.com/results?search_query=inkscape+tutorial+espa%C3%B1ol" },
    ],
  },
  {
    num: "M7",
    level: "Nivel 65",
    title: "Diseño 3D en Mac: CLO 3D (estudiante gratis) y Blender (100% gratis)",
    duration: "3 a 4 semanas",
    intro:
      "El software 3D es la revolución del diseño de moda en la última década. Permite simular una prenda en 3D, ver cómo cae el tejido, ajustar el patrón en tiempo real y renderizar imágenes fotorrealistas sin coser una sola pieza. En macOS Apple Silicon (M4) tienes dos opciones potentes: CLO 3D (gratis con licencia de estudiante) y Blender (100% gratuito y libre).",
    body: [
      "CLO 3D en Mac Apple Silicon. CLO 3D es compatible con macOS en Apple Silicon (M1 a M4). Su página oficial confirma compatibilidad nativa. Lo que hace: importas un patrón 2D (el que hiciste en M5 o que te dio un patronista). CLO lo cose virtualmente sobre un avatar 3D. Aplicas un tejido de su biblioteca (algodón pesado, ripstop, softshell). El software simula cómo cae y se mueve la prenda sobre el cuerpo. Puedes cambiar el tejido, el color o el ajuste en segundos. Renderizas una imagen que parece una foto real. Todo sin producir nada físico.",
      "Cómo conseguir CLO 3D gratis. Hay 3 vías. Trial gratuito de 30 días (ideal para hacer tu colección entera sin pagar). Licencia de estudiante gratuita: CLO ofrece licencia gratuita para estudiantes verificados (necesitas email .edu de tu universidad o documentación académica). Licencia profesional: aprox. 50€/mes o 500€/año (cara pero rentable si te ahorra muestras). Para tu primer drop, el trial de 30 días es suficiente si te organizas. Si eres estudiante, la licencia gratuita es la opción perfecta.",
      "Blender como alternativa 100% gratuita y libre. Si no puedes acceder a CLO 3D gratis, Blender es la alternativa. Es 100% gratuito, de código abierto y nativo para macOS Apple Silicon (descarga desde blender.org, DMG para Mac). Blender NO está diseñado específicamente para moda, pero su motor de simulación de telas (Cloth Simulator) es potente y gratuito. Hay tutoriales en YouTube específicos sobre cómo usar Blender para diseño de moda 3D. La curva de aprendizaje es mayor que CLO 3D, pero el coste es cero para siempre.",
      "Por qué es revolucionario para una marca pequeña. Tradicionalmente, una marca pequeña necesitaba 3 rondas de muestras físicas (200 a 400€ por ronda) para afinar una prenda. Con CLO 3D o Blender, las 3 rondas se hacen virtualmente. Solo pides 1 muestra física al final, cuando el diseño está pulido. Ahorro: 400 a 800€ por prenda. Para una colección de 5 prendas, son 2.000 a 4.000€ ahorrados. Y con la potencia del M4, los renders son rápidos: lo que en un PC antiguo tardaba 30 minutos, en un MacBook Air M4 tarda 3 a 5 minutos.",
      "Cómo empezar sin abrumarte. NO intentes aprender CLO 3D o Blender en 1 semana. Ambos softwares son complejos. Plan realista con CLO 3D: semana 1, mira el tutorial oficial de CLO 3D en YouTube y haz su proyecto de muestra (camiseta básica). Semana 2, importa tu primer patrón real (la tee de tu colección). Semana 3, intenta un hoodie (más complejo). Semana 4, renderiza y exporta imágenes para tu lookbook. Si lo haces bien, en 4 semanas tienes tu primera colección virtual.",
    ],
    practical: {
      title: "Tu primera prenda en CLO 3D o Blender",
      description:
        "Tras ver los tutoriales oficiales, coge el patrón de la camiseta de tu colección (puedes usar uno gratuito de la biblioteca de CLO o buscar 'Blender cloth simulation t-shirt' en YouTube). En 1 sesión de 4 horas, deberías tenerla cosida virtualmente, con tejido aplicado y un render básico. NO esperes perfección. El objetivo es entender el flujo: importar patrón, coser, aplicar tejido, renderizar. La perfección viene después.",
    },
    resources: [
      { label: "CLO 3D (trial 30 días + estudiante gratis)", url: "https://www.clo3d.com" },
      { label: "Blender (100% gratis, nativo Mac M4)", url: "https://www.blender.org" },
      { label: "Canal oficial CLO 3D en YouTube", url: "https://www.youtube.com/@CLO3D" },
      { label: "Zoe Hong playlist CLO 3D", url: "https://www.youtube.com/playlist?search=CLO+3D+zoehong" },
      { label: "Tutoriales Blender cloth en YouTube", url: "https://www.youtube.com/results?search_query=blender+cloth+simulation+fashion" },
      { label: "Coursera: 3D Fashion Design with CLO (audit gratis)", url: "https://www.coursera.org/learn/3d-fashion-design" },
    ],
  },
  {
    num: "M8",
    level: "Nivel 75",
    title: "Ilustración digital a mano en Mac: Krita y Adobe Fresco (gratis)",
    duration: "1 a 2 semanas (opcional)",
    intro:
      "Si tu flujo de trabajo es más artístico que técnico, la ilustración digital a mano es la herramienta ideal para croquis, presentaciones y moodboards digitales. En macOS Apple Silicon tienes dos opciones gratuitas: Krita (100% gratis, nativo Mac) y Adobe Fresco (gratis con cuenta Adobe). Procreate NO existe para Mac (solo iPad), así que se menciona como alternativa condicional.",
    body: [
      "Krita en Mac Apple Silicon (M4). Krita es 100% gratuito, de código abierto y nativo para macOS Apple Silicon. Lo descargas desde krita.org (archivo DMG). Pinceles que imitan acuarela, rotulador, lápiz, óleo. Capas. Exportación a PSD, PNG, PDF. Si tienes tableta gráfica Wacom o similar conectada por USB a tu Mac, Krita te da pinceles profesionales sin coste. Curva de aprendizaje media: más complejo que Procreate pero más potente. Recomendado para ilustración de moda en Mac.",
      "Adobe Fresco en Mac. Adobe Fresco es la app de ilustración de Adobe, disponible para Mac, iPad y iPhone. La versión gratuita incluye la mayoría de pinceles vectoriales y de píxeles, con limite de uso mensual. Funciona con cuenta Adobe ID gratuita. Descarga desde la web de Adobe o desde la Mac App Store. Fresco es más fluido que Krita para croquis rápidos, pero la versión gratuita tiene límites. Si ilustras mucho, valora pagar la versión completa (10,99€/mes). Para empezar, Krita cubre el 100% del trabajo sin coste.",
      "Procreate: la aclaración importante. Procreate NO existe para Mac. Es exclusivo de iPad (13€ pago único). Si tienes un iPad y Apple Pencil, Procreate es la herramienta más fluida para ilustración de moda digital. Pero si trabajas solo en Mac, no puedes usar Procreate. Krita + Adobe Fresco son tus alternativas. Esto es importante porque muchos tutoriales en YouTube asumen que tienes iPad.",
      "Cuándo usar ilustración digital vs CLO 3D vs Inkscape. Ilustración digital (Krita o Fresco): para croquis, presentaciones artísticas, lookbook. Inkscape: para flats y tech packs técnicos (vectorial). CLO 3D o Blender: para simulación fotorrealista y validación de patronaje. Los 3 se complementan, no se excluyen. Una marca profesional usa los 3 según la fase.",
      "Flujo recomendado en Mac para tu primer drop. 1) Bocetos a mano en libreta (M2). 2) Croquis digitales en Krita o Fresco para lookbook y redes sociales (M8). 3) Flats técnicos en Inkscape para tech packs (M6). 4) Simulación en CLO 3D o Blender para validar patronaje antes de pedir muestra física (M7). 5) Muestra física y producción. Todo el software es gratuito o tiene versión gratuita suficiente. Cero euros en software si usas Krita + Inkscape + GIMP + Blender + Adobe Express + Adobe Fresco (gratis).",
    ],
    practical: {
      title: "Croquis digital de tu colección completa",
      description:
        "Si tienes Mac y tableta gráfica (Wacom Intuos S vale 60€), descarga Krita gratis. Dibuja los 5 croquis de tu colección en digital. Usa una plantilla de croquis como base (las hay gratuitas en Pinterest). Aplica los colores de tu paleta. Exporta en PNG con fondo transparente. Estos 5 croquis serán la columna visual de tu lookbook y de tu Instagram durante las 4 semanas previas al drop.",
    },
    resources: [
      { label: "Krita (gratis, nativo Mac M4)", url: "https://krita.org" },
      { label: "Adobe Fresco (gratis con cuenta Adobe)", url: "https://www.adobe.com/es/products/fresco.html" },
      { label: "Procreate (solo iPad, 13€)", url: "https://procreate.com" },
      { label: "Tutoriales Krita en YouTube", url: "https://www.youtube.com/results?search_query=krita+tutorial+digital+art" },
      { label: "Tutoriales Adobe Fresco oficiales", url: "https://www.youtube.com/results?search_query=adobe+fresco+tutorial" },
      { label: "Pinterest: croquis templates", url: "https://www.pinterest.com/search/pins/?q=fashion%20croquis%20template" },
    ],
  },
  {
    num: "M9",
    level: "Nivel 60",
    title: "Tejidos y materiales: clasificación y comportamiento",
    duration: "1 semana",
    intro:
      "En streetwear, y especialmente en techwear, el tejido es la marca. Un cliente experto nota el tejido antes que el logo. Si eliges mal, todo el trabajo de diseño se cae.",
    body: [
      "Clasificación básica por composición. Algodón (transpirable, cómodo, pesado si es 300+ GSM). Polyester (sintético, ligero, no transpira, barato). Nylon (sintético, resistente, técnica, ideal para techwear). Mezclas (algodón/polyester combina lo mejor de ambos). Lana (calor, premium, cara). Para techwear dominan algodón pesado (hoodies, tees) y nylon (pantalones, chaquetas técnicas).",
      "Clasificación por construcción (cómo se teje). Jersey (punto, elástico, típico de camisetas). Twill (sarga, diagonal, típico de jeans y cargos). Ripstop (cuadrícula reforzada, anti-desgarros). Softshell (3 capas laminadas, impermeable y transpirable). Cada construcción comporta distinto: el jersey cede, el twill aguanta, el ripstop resiste, el softshell protege.",
      "Pesos GSM referencia: para tees streetwear busca 200 a 280 GSM. Para hoodies premium, 380 a 480 GSM. Para pantalones techwear, 200 a 350 GSM dependiendo del material. Menos de 180 GSM en cualquier prenda se siente 'barato' y no encaja en techwear premium.",
      "Drapeado y caída: cómo se mueve el tejido sobre el cuerpo. Un tejido con buen drapeado se adapta a la forma. Uno rígido mantiene silueta. En techwear buscas rigidez estructural (cargo pant que mantenga forma) o drapeado pesado (hoodie que caiga con peso). Pregunta siempre al proveedor por el comportamiento del tejido antes de comprar.",
    ],
    practical: {
      title: "Biblioteca de muestras de tejido",
      description:
        "Pide muestras físicas a 3 proveedores (ver sección Recursos). Te cuesta 5 a 15€ por muestra. Tócalas, lávalas, estíralas, abrásalas suavemente. Etiqueta cada una con composición y GSM. Esta biblioteca física te ahorrará cientos de euros en muestras fallidas cuando llegues a producción.",
    },
    resources: [
      { label: "Justine Leconte en YouTube (tejidos)", url: "https://www.youtube.com/@JustineLeconte" },
      { label: "Tejidos Royo (proveedor ES)", url: "https://www.tejidosroyo.com" },
    ],
  },
  {
    num: "M10",
    level: "Nivel 70",
    title: "Mockups y prototipos: visualizar antes de fabricar",
    duration: "1 semana",
    intro:
      "Nunca pidas una muestra física sin haberla visto antes en mockup. El mockup es tu ensayo gratis. La muestra física es tu ensayo de 40€. Salta del boceto a la muestra física y perderás dinero.",
    body: [
      "Hay 3 tipos de mockup. Mockup digital sobre plantilla: subes tu diseño a un servicio como Placeit o Smartmockups y obtienes una imagen realista en una prenda. Útil para redes sociales y validación con audiencia. Mockup digital sobre foto propia: tomas foto a una prenda real tuya y aplicas el diseño en GIMP, Photopea o Adobe Express (todas gratuitas en Mac). Más auténtico pero más trabajo.",
      "Prototipo en papel: imprimes tu diseño en papel y lo pegas a una prenda real. Cuelgas la prenda y la fotografiás. Suena primitivo pero te da información sobre escala y ubicación que el mockup digital no te da. Útil para logos grandes en espalda.",
      "Muestra física (sample): solo cuando has validado los 2 anteriores. Cuesta 15 a 40€ por pieza. Tardan 2 a 4 semanas en llegar. Pídela en talla M (la más vendida en streetwear). Si llega mal, pides 1 revisión. Si llega bien, pides producción. Si pides más de 2 revisiones sin mejorar, el problema es tu tech pack, no el fabricante.",
    ],
    practical: {
      title: "Mockup coherente de las 5 prendas",
      description:
        "Antes de pedir ninguna muestra física, haz mockup digital de las 5 prendas de tu colección. Colócalas juntas en un solo documento (Adobe Express, Figma o Inkscape, todos gratuitos en Mac). Míralas en conjunto. ¿Parecen una colección o 5 prendas sueltas? Si no parecen colección, vuelve a bocetar antes de avanzar.",
    },
    resources: [
      { label: "Placeit (mockups)", url: "https://placeit.net" },
      { label: "Smartmockups (alternativa gratuita)", url: "https://smartmockups.com" },
    ],
  },
  {
    num: "M11",
    level: "Nivel 80",
    title: "Producción: blanks, POD o cut-and-sew",
    duration: "Teórico",
    intro:
      "Para tu primer drop, recomiendo blanks o POD. Cut-and-sew se reserva para cuando tienes validación de mercado (un drop previo exitoso). Aquí te explico las 3 vías con honestidad.",
    body: [
      "Print-on-Demand (POD): usas un proveedor como Printful o Printify. Ellos imprimen y envían solo cuando recibes un pedido. Cero stock, cero riesgo. Margen bajo (30 a 40%). Menos control de calidad. Ideal para tu primer drop si el presupuesto es muy ajustado. Inconveniente: tu base es una prenda genérica, no tienes diferenciación de tejido o fit.",
      "Blanks premium: compras prendas ya fabricadas (sin marca visible) a mayoristas como AS Colour, Comfort Colors, Bella+Canvas. Las personalizas con serigrafía, bordado o DTG mediante un impresor local. Margen medio (45 a 60%). Más control. Tejido y fit ya decididos por el fabricante del blank. Buen balance para tu primer o segundo drop.",
      "Cut-and-sew: trabajas con un fabricante que corta tejido y cose según tu patrón. Margen alto (55 a 70%). Control total de silueta, tejido, detalles. Coste inicial alto (mínimo 1000 a 2000€ para un drop pequeño). Plazo largo (8 a 16 semanas). Solo recomendado cuando ya tienes un drop previo que vendió bien y quieres subir el nivel.",
      "Para tu primer drop: empieza con POD (si tienes menos de 500€) o blanks premium (si tienes 1000 a 2000€). NO intentes cut-and-sew al principio. Es la trampa más común y la más cara. Cut-and-sew se justifica cuando tu comunidad pide algo que los blanks no pueden dar.",
    ],
    practical: {
      title: "Calcula tu COG (Cost of Goods) antes de producir",
      description:
        "Para cada prenda, suma: coste del blank o producción, coste de impresión o bordado, coste de etiquetas y tags, coste de packaging (bolsa + hangtag), coste de envío desde el fabricante a ti. Multiplica el total por 2.5 a 3 para obtener el precio de venta al público. Si el precio de venta te parece caro, tu COG es demasiado alto. Reduce costes o sube el valor percibido.",
    },
  },
  {
    num: "M12",
    level: "Nivel 90",
    title: "Presentación profesional: lookbook y línea de tiempo",
    duration: "1 semana",
    intro:
      "Una colección se vende cuando se presenta bien. Lookbook, fichas técnicas y línea de tiempo de lanzamiento son las herramientas que separan una marca amateur de una profesional.",
    body: [
      "Lookbook: documento visual (PDF o web) de 10 a 20 páginas que presenta tu colección en formato editorial. NO es un catálogo de producto (eso va en tu tienda). Es un documento de marca que muestra la colección en contexto: modelos reales, escenarios coherentes con tu universo, fotografía profesional. Mira lookbooks de Fear of God, ACRONYM, Salomon Advanced para referencia.",
      "Fichas técnicas por prenda: 1 página por prenda con foto de producto sobre fondo blanco, nombre, materiales, tallas disponibles, precio, fecha de lanzamiento. Para prensa, compradores y colaboradores. NO es para el cliente final (esa info va en tu web), es para uso interno y B2B.",
      "Línea de tiempo de lanzamiento: calendario visual de las 4 semanas previas al drop y las 2 posteriores. Cuándo se publican teasers, cuándo se envía email a waitlist, cuándo es drop day, cuándo se hace follow-up. Sin esta línea, improvisas. Y la improvisación en un lanzamiento se paga caro.",
    ],
    practical: {
      title: "Lookbook mínimo viable",
      description:
        "Para tu primer drop, NO necesitas lookbook de 20 páginas. Con 6 a 8 basta. 1 portada con tu logo, 4 a 6 páginas con fotos de las prendas (puede ser con móvil, si la luz y el fondo son correctos), 1 página de créditos (menciona a fotógrafo, modelos, colaboradores). Exporta en PDF y súbelo a tu web como descarga gratuita. Refuerza credibilidad.",
    },
  },
  {
    num: "M13",
    level: "Nivel 100",
    title: "Iteración y escala: del primer drop al segundo",
    duration: "Continuo",
    intro:
      "Tu primer drop es un experimento. Tu segundo drop es donde aplicas lo aprendido. Aquí termina la fase de principiante y empieza la de fundador real.",
    body: [
      "Después del primer drop, reúne datos. Qué prenda vendió primero, cuál no se movió, qué tallas faltaron, qué comentarios recibiste, qué devoluciones hubo y por qué. Estos datos son tu hoja de ruta para el Drop 2. Si ignoras los datos y lanzas lo que te apetece, repites errores.",
      "Para el Drop 2, aplica 3 principios. Repite lo que funcionó (si un color se agotó, refuérzalo). Elimina lo que no (si una prenda no se movió, no la repliques). Añade UN elemento nuevo como prueba (1 prenda nueva, 1 nuevo color, 1 nueva técnica de impresión). NO cambies todo a la vez, no sabrás qué funcionó.",
      "Escala con paciencia. Si tu Drop 1 vendió 50 prendas, tu Drop 2 debería ser de 70 a 100. NO saltes a 500. El crecimiento sostenido es mejor que el boom y quiebra. Las marcas que escalan demasiado rápido se rompen por falta de cash flow o por pérdida de calidad.",
      "Y recuerda: el diseño de moda es un oficio que se aprende en 10 años, no en 10 meses. Tu primer drop será mediocre comparado con tu décimo. Eso es normal. Lo importante es que cada drop sea mejor que el anterior. La consistencia vence al talento.",
    ],
    practical: {
      title: "Post-mortem del Drop 1",
      description:
        "Una semana después del Drop 1, escribe un post-mortem de 3 páginas. Página 1: qué fue bien (vendiste, recibiste feedback positivo, aprendiste X). Página 2: qué fue mal (retrasos, devoluciones, quejas). Página 3: qué cambiarás en el Drop 2. Este documento es tu activo más valioso como fundador.",
    },
  },
];

export function GarmentDesign() {
  return (
    <section id="diseno" className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              02 / Diseño de Prendas
            </span>
            <div className="hidden lg:block w-12 h-px bg-foreground" />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              De 0 a 100 en 13 módulos. Asume que no sabes nada. Empieza por M1, no te saltes
              nada. Incluye bloque específico de diseño digital en PC (M6 a M8).
            </p>
          </div>
          <div className="lg:col-span-8 space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]"
            >
              Cómo se diseña ropa.{" "}
              <span className="text-muted-foreground">De 0 a 100, paso a paso.</span>
            </motion.h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tu marca es de ropa. Si no sabes cómo se diseña una prenda, no tienes marca,
              tienes tienda de camisetas genéricas. Esta sección es un curso en sí mismo, gratuito,
              que te lleva desde 'no sé qué es un croquis' hasta 'sé qué le digo a un fabricante
              para producir mi segundo drop'. Cada módulo tiene teoría, práctica y recursos.
              Dedica mínimo 1 semana por módulo. Si te saltas módulos, pagarás el precio más
              tarde en muestras fallidas y clientes insatisfechos.
            </p>
          </div>
        </div>

        {/* Modules */}
        <div className="space-y-12 sm:space-y-16">
          {modules.map((mod) => (
            <motion.article
              key={mod.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="border border-border bg-background"
            >
              {/* Module header */}
              <div className="border-b border-border p-5 sm:p-7 flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                    {mod.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                        {mod.level}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">·</span>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                        {mod.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                      {mod.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Module body */}
              <div className="p-5 sm:p-7 space-y-5">
                <p className="text-base text-foreground leading-relaxed">{mod.intro}</p>
                <div className="space-y-4">
                  {mod.body.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Practical block */}
                {mod.practical && (
                  <div className="mt-6 bg-muted/40 border border-border p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-foreground">
                        Práctica obligatoria
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        · {mod.practical.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mod.practical.description}
                    </p>
                  </div>
                )}

                {/* Resources */}
                {mod.resources && mod.resources.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {mod.resources.map((r) => (
                      <a
                        key={r.url}
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:no-underline"
                      >
                        {r.label}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Garment design courses block */}
        <div className="mt-20 border-t border-border pt-12">
          <div className="space-y-3 max-w-2xl mb-8">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Cursos específicos para diseño de prendas
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Recomendaciones de cursos, gratis y de pago.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estos cursos son complementarios a los 2 cursos principales de la sección Cursos
              (que cubren branding y Shopify). Aquí tienes formación específica sobre diseño
              de moda. El primero es gratis, el segundo también, y el tercero es opcional y de
              pago (pero encaja en tu presupuesto de 50€ si lo sumas a los otros dos).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {garmentDesignCourses.map((c, idx) => (
              <div key={c.id} className="bg-background p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} / {c.platform}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 ${
                      c.tag === "Gratis" || c.tag === "Audit gratis"
                        ? "bg-foreground text-background"
                        : "border border-foreground"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold leading-snug">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{c.why}</p>
                <div className="flex items-end justify-between pt-3 border-t border-border">
                  <div>
                    {c.regularPrice > 0 && c.price < c.regularPrice && (
                      <span className="font-mono text-[10px] line-through text-muted-foreground block">
                        {c.regularPrice.toFixed(2).replace(".", ",")}€
                      </span>
                    )}
                    <span className="text-xl font-bold tabular-nums">
                      {c.price === 0 ? "0€" : `${c.price.toFixed(2).replace(".", ",")}€`}
                    </span>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:no-underline"
                  >
                    Ver
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital PC design courses block */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="space-y-3 max-w-2xl mb-8">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Cursos para diseño digital en Mac (software gratuito)
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Aprende Inkscape, Blender, Krita y Adobe gratuito con cursos reales.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Estos cursos cubren las herramientas clave del diseño digital de moda en macOS
              Apple Silicon: Inkscape (vectorial gratis), Blender (3D gratis), Krita
              (ilustración gratis), Adobe Express (web gratis), Adobe Fresco (ilustración
              gratis) y CLO 3D (trial y estudiante gratis). TODOS son gratuitos o tienen
              versión gratuita suficiente. Cero euros en software para tu MacBook Air M4.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {digitalDesignCourses.map((c, idx) => (
              <div key={c.id} className="bg-background p-5 sm:p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} / {c.platform}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 ${
                      c.tag === "Gratis" || c.tag === "Audit gratis"
                        ? "bg-foreground text-background"
                        : "border border-foreground"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold leading-snug">{c.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{c.why}</p>
                <div className="flex items-end justify-between pt-3 border-t border-border">
                  <div>
                    {c.regularPrice > 0 && c.price < c.regularPrice && (
                      <span className="font-mono text-[10px] line-through text-muted-foreground block">
                        {c.regularPrice.toFixed(2).replace(".", ",")}€
                      </span>
                    )}
                    <span className="text-lg font-bold tabular-nums">
                      {c.price === 0 ? "0€" : `${c.price.toFixed(2).replace(".", ",")}€`}
                    </span>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:no-underline"
                  >
                    Ver
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Honest note */}
          <div className="mt-6 border border-dashed border-border p-5 sm:p-6 bg-background">
            <h4 className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">
              Sobre el orden recomendado para Mac
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Si solo puedes elegir 2 cursos, empieza por el de Adobe Express (web gratis, para
              mockups y redes) y el de Inkscape (vectorial gratis, para flats y tech packs). Si
              quieres diseño 3D, añade CLO 3D (trial 30 días) o Blender (100% gratis para
              siempre). Todos funcionan nativamente en MacBook Air M4 sin Rosetta 2. Total
              gastado en software de diseño: 0€.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
