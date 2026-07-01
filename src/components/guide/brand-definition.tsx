"use client";

import { motion } from "framer-motion";
import { BrandCards } from "@/components/guide/brand-cards";

type Step = {
  num: string;
  title: string;
  duration: string;
  intro: string;
  body: string[];
  exercise?: { title: string; description: string };
  pitfall?: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Autoconocimiento: ¿quién eres tú?",
    duration: "2 a 3 días",
    intro:
      "Antes de buscar inspiración fuera, mira hacia dentro. Las marcas que duran nacen de una convicción personal, no de una oportunidad de mercado. Si no sabes qué te define, tu marca será genérica.",
    body: [
      "Coge una libreta y responde por escrito a 20 preguntas sobre ti. Qué ropa llevas cada día. Qué marcas admiras y por qué. Qué odias de la moda actual. Qué subculturas te influyen (skate, hip-hop, gamer, climbing, anime, fútbol). Qué música escuchas. Qué películas y series. Qué barrios o ciudades te gustan. Sin filtros, sin pensar qué suena bien. Solo honestidad.",
      "El objetivo no es encontrar una marca, es encontrarte a ti. Una marca techwear auténtica nace de alguien que de verdad vive esa estética. Si solo te gusta 'porque vende', la audiencia lo notará en tres posts.",
      "Cuando termines, subraya las 5 respuestas que te hayan sorprendido. Esas son las semillas de tu marca. Las demás son ruido.",
    ],
    exercise: {
      title: "Ejercicio de las 5 palabras",
      description:
        "Después del cuestionario, elige 5 palabras que te definan como persona (no como marca). Ejemplos: minimalista, obsesivo, urbano, melancólico, funcional. Estas 5 palabras serán tu filtro: cada decisión de marca deberá ser coherente con al menos 3 de ellas.",
    },
    pitfall:
      "Error común: copiar las 5 palabras de tu marca referente. Si dices 'minimalista, técnico, futurista, funcional, urbano' estás describiendo Acronym, no a ti. Busca tu propia combinación, aunque sea más rara.",
  },
  {
    num: "02",
    title: "Técnicas de brainstorming para encontrar tu concepto",
    duration: "3 a 4 días",
    intro:
      "El brainstorming no es sentarse a esperar la inspiración. Es una técnica con método. Aquí tienes 3 que funcionan para fundadores principiantes.",
    body: [
      "Primera técnica: el mapa mental. Escribe en el centro de un A3 una palabra que te defina (por ejemplo, 'resistencia'). Desde ahí, dibuja ramas con palabras asociadas (montaña, ciudad, militar, supervivencia,icket, escudo). De cada rama salen subramas. Llena el A3. Cuando termines, busca patrones: ¿hay grupos de palabras que se repiten? Esos son tus ejes conceptuales.",
      "Segunda técnica: los 5 Por Qués. Escribe tu idea inicial de marca como afirmación ('Quiero crear una marca de ropa techwear'). Pregúntate 'por qué' y responde. Vuelve a preguntar 'por qué' sobre esa respuesta. Cinco veces. Al final llegarás a algo honesto, probablemente más personal que 'para hacerme rico'. Ese motivo profundo es el motor real de la marca.",
      "Tercera técnica: la escritura libre de 15 minutos. Pon un cronómetro. Escribe sin parar sobre la pregunta '¿qué quiero que la gente sienta al ponerse mi ropa?'. No corrijas, no releas. Cuando suene el cronómetro, lee. Las frases más potentes son las que escribiste en los últimos 5 minutos, cuando dejaste de pensar.",
    ],
    exercise: {
      title: "Banco de 100 conceptos",
      description:
        "Tras las 3 técnicas, escribe una lista de 100 palabras o frases que aparecieron en tus exploraciones. Sí, 100. La regla es: las primeras 30 son obvias, las 30 siguientes son más raras, y las últimas 40 son donde aparece el oro. Las fuerzas creativas surgen cuando el cerebro se aburre de las respuestas obvias.",
    },
    pitfall:
      "Error común: casarte con la primera idea. Las primeras 20 ideas de cualquier creativo suelen ser clichés heredados. Itera hasta llegar a la 50 o la 60.",
  },
  {
    num: "03",
    title: "Dónde y cómo encontrar inspiración real",
    duration: "1 semana",
    intro:
      "La inspiración no se busca en Instagram. Se busca en la vida real, en archivos, en libros, en conversaciones. Las marcas mediocres se inspiran en Instagram. Las marcas memorables se inspiran en cualquier otra cosa.",
    body: [
      "Pinterest es tu primera parada, pero úsalo bien. Crea 3 tableros separados: 'Siluetas y prendas', 'Paletas y texturas', 'Fotografía y actitud'. Mínimo 30 pins por tablero. La regla: si un pin no encaja con el resto, descártalo. NO pinnees todo lo que te gusta. Pinnea solo lo que se parece entre sí.",
      "Más allá de Pinterest, mira archivos. Archivos de revistas antiguas (Highsnobiety, i-D, Dazed tienen hemerotecas online). Catálogos militares originales (las fotos de catálogos de militares de los 90 son oro para techwear). Películas (Blade Runner, Akira, Tetsuo, The Matrix). Videojuegos (Cyberpunk 2077, Death Stranding). La inspiración de calidad no está en feeds algorítmicos.",
      "Pero sobre todo: sal a la calle. Techwear nació en ciudades (Tokio, Berlín, NYC). Camina por tu ciudad con cámara. Fotografía detalles urbanos: rampas, rampas de metro, señales, desagües, postes, todo lo que tenga una función técnica. Esa es tu biblioteca visual auténtica, no la de Pinterest.",
    ],
    exercise: {
      title: "Diario visual de 7 días",
      description:
        "Durante 7 días, haz mínimo 5 fotos al día de cosas que veas en tu día a día y que te transmitan algo. NO filtres por estética. Al final de la semana, revisa las 35 fotos. Verás patrones. Esos patrones son tu mirada, y tu mirada es tu marca.",
    },
    pitfall:
      "Error común: usar el algoritmo de Instagram como única fuente. El algoritmo te muestra lo que ya te gusta. Tu marca será una copia de una copia. Rompe el loop buscando en sitios donde el algoritmo no te conoce.",
  },
  {
    num: "04",
    title: "Definir el concepto y escribir tu manifiesto",
    duration: "3 a 4 días",
    intro:
      "El concepto es la idea central que sostiene toda la marca. El manifiesto es su declaración pública. Sin un concepto claro, tomas decisiones al azar. Con un concepto, cada decisión se filtra.",
    body: [
      "Un buen concepto responde a 3 preguntas: qué defiendes, contra qué te rebelas y qué tipo de vida quieres que tu cliente viva. Por ejemplo, el concepto de Acronym podría resumirse así: defiendo la ropa como herramienta, me rebelo contra la moda decorativa, quiero que mi cliente viva la ciudad como un terreno técnico. Tres frases, una dirección.",
      "El manifiesto es la versión escrita de tu concepto, dirigida a tu cliente ideal. Máximo 1 página, idealmente 3 párrafos cortos. Párrafo 1: qué defiendes. Párrafo 2: contra qué te rebelas. Párrafo 3: qué tipo de vida quieres que tu cliente viva con tu ropa. Lenguaje honesto, no marketing. Sin eslogans. Sin emojis.",
      "Lee tu manifiesto en voz alta. Si suena pretencioso, reescríbelo. Si suena plano, añade más concreción. Si tuviera que tatuarte una frase del manifiesto en el brazo, ¿cuál sería? Esa frase es tu tagline.",
    ],
    exercise: {
      title: "Test del desconocido",
      description:
        "Lee tu manifiesto a 3 personas que no te conozcan (puede ser por DM a desconocidos en Reddit). Pregúntales: ¿qué tipo de ropa crees que vende esta persona? ¿Se la comprarías? Si las respuestas no coinciden con tu intención, el manifiesto no comunica bien. Reescribe.",
    },
    pitfall:
      "Error común: escribir un manifiesto que podría servir para cualquier marca. Si cambias 'techwear' por 'moda sostenible' en tu manifiesto y sigue funcionando, es demasiado genérico. Profundiza.",
  },
  {
    num: "05",
    title: "Construir tu cliente ideal (buyer persona)",
    duration: "3 días",
    intro:
      "Decir 'mi cliente es cualquiera que le guste el streetwear' es como decir 'mi cliente es cualquier humano con dinero'. No es un cliente, es una masa amorfa. Necesitas una persona concreta, con nombre y cara.",
    body: [
      "Crea una ficha de 1 página con tu buyer persona. Ponle un nombre inventado (ejemplo: 'Iker, 22, Bilbao'). Edad concreta. Ciudad concreta (no 'España', sino 'Barcelona centro' o 'periferia de Valencia'). Ingresos estimados (en España, un estudiante de 22 años trabaja a tiempo parcial y tiene unos 400 a 600€/mes de disponible). Estudios. Hobbies (¿escala, skate, música electrónica, fotografía?).",
      "Y lo más importante: dimensiones psicológicas. ¿Qué música escucha? (¿Lois, Yung Beef, Rosalía, techno berlinés?). ¿Qué otras marcas viste? (¿Carhartt, Salomon, Nike ACG, Arket?). ¿Qué redes usa y cómo? (¿TikTok 2h al día, Instagram solo para stories, Reddit?). ¿Qué le frustra de la moda actual? (¿Pocas tallas para cuerpo delgado, todo carísimo, todo copiado?). ¿Qué aspira a ser dentro de 5 años?",
      "Esta persona no tiene que ser real. Tiene que ser útil. Cuando tomes una decisión de marca (¿hago esta prenda en gris o en azul?), pregúntate: ¿qué elegiría Iker? Si no lo sabes, tu persona es demasiado vaga. Vuelve a la ficha.",
    ],
    exercise: {
      title: "Escribir como tu cliente",
      description:
        "Durante 1 semana, antes de publicar cualquier post en Instagram, lee tu buyer persona y pregúntate: ¿Iker entendería esto? ¿Iker lo compartiría? Si la respuesta es no, no publiques. Mejor publicar 2 posts a la semana que conectan con Iker que 7 posts genéricos para una masa anónima.",
    },
    pitfall:
      "Error común: crear un buyer persona que es una proyección idealizada de ti mismo. Tu cliente no eres tú. Tu cliente es alguien a quien quieres alcanzar. Si describes a alguien idéntico a ti, estás limitando tu mercado a ti y a tus clones.",
  },
  {
    num: "06",
    title: "Definir tu estilo de ropa (silueta, paleta, tejido, referencia)",
    duration: "4 a 5 días",
    intro:
      "El estilo de tu ropa no se decide dibujando. Se decide eligiendo 4 parámetros: silueta, paleta, tejido y referencia. Una vez fijos, todos tus diseños futuros son variaciones dentro de esos límites.",
    body: [
      "Silueta: la forma exterior de la prenda cuando se lleva puesta. En techwear predominan 3 siluetas: boxy (caja, hombro caído, largo corto), oversized (largo y ancho, caída pesada), asimétrica (un lado más largo o con cortes diagonales). Elige UNA como dominante. Si mezclas las 3, tu colección parecerá una tienda de segunda mano.",
      "Paleta: ya decidiste en el paso de branding que será bicromática (B&W + 1 gris). Pero dentro de eso, decide el porcentaje. ¿Tu marca es 80% negro, 15% blanco, 5% gris (estilo más ninja)? ¿O 60% blanco, 30% negro, 10% gris (más gorpcore claro)? Este porcentaje se aplica a TODAS tus prendas.",
      "Tejido: en techwear hay 4 familias principales. Algodón pesado (300 a 480 GSM) para hoodies y tees. Ripstop (nylon cuadriculado) para pantalones y chaquetas. Softshell (3 capas, impermeable) para prendas técnicas. Mesh (red transpirable) para capas interiores. Decide qué familia será la dominante en tu primera colección.",
      "Referencia: elige 3 prendas concretas (no marcas enteras) de marcas existentes que resuman lo que aspiras a hacer. Por ejemplo: 'El cargo pant de Goldwin, el hoodie de Fear of God Essentials, la chaqueta de Arc'teryx Veilance'. Estas 3 prendas son tu benchmark. Tus diseños deben estar al nivel de esas 3.",
    ],
    exercise: {
      title: "Cuadrante de coherencia",
      description:
        "Dibuja un cuadrante. En cada esquina escribe uno de los 4 parámetros (silueta, paleta, tejido, referencia). En el centro, escribe tu nombre de marca. Pega esta hoja en la pared de tu sitio de trabajo. Cada vez que vayas a diseñar o fabricar algo, mírala. Si la prenda no respeta los 4 parámetros, no la hagas.",
    },
    pitfall:
      "Error común: 'quiero hacer algo para todos los gustos'. Si diseñas para todos, no diseñas para nadie. Una marca fuerte dice 'esto es lo que hago, lo demás te lo puedes comprar en otro sitio'.",
  },
  {
    num: "07",
    title: "Proceso de naming (cómo elegir el nombre de tu marca)",
    duration: "4 a 5 días",
    intro:
      "El nombre no es lo más importante de la marca, pero es lo primero que la gente oye. Y es muy difícil de cambiar después. Conviene hacerlo bien desde el principio.",
    body: [
      "Genera mínimo 20 opciones. Técnicas para generar: combina dos palabras significativas (ejemplo: 'Black' + 'Print' = Blackprint). Inventa un neologismo corto (ejemplo: 'Corteiz' no significa nada, suena bien). Usa un término técnico del nicho (ejemplo: 'Ripstop', 'Softshell' son tomados, pero puedes buscar en glosarios). Adapta un apellido familiar. Recorta una palabra hasta hacerla irreconocible.",
      "Filtra las 20 opciones con 4 criterios. Corto: máximo 3 sílabas, idealmente 2. Pronunciable en español e inglés (sin 'ñ' ni 'j' strong, sin diéresis). Sin números ni guiones (escribe mal la gente al buscarlo). Disponible: @handle libre en Instagram y TikTok, y dominio .com o .es libre. De las 20, quizá 3 pasan el filtro.",
      "Prueba las 3 finalistas con 5 personas. Pregúntales: ¿qué te sugiere este nombre? ¿Lo recordarías? ¿Cómo lo escribirías para buscarlo en Google? Si la mayoría lo escribe distinto a como tú lo pronuncias, descarta. La coherencia entre pronunciación y escritura es clave para que te encuentren.",
    ],
    exercise: {
      title: "Test del cóctel",
      description:
        "Imagina que estás en una fiesta y alguien te pregunta '¿qué marca tienes?'. Tienes 3 segundos para decir el nombre y que la persona lo entienda, lo recuerde y sepa escribirlo. Si no pasa el test, el nombre no sirve.",
    },
    pitfall:
      "Error común: elegir un nombre demasiado literal ('Techwear Madrid'). Limita tu crecimiento geográfico y estético. Mejor un nombre abstracto que puedas rellenar de significado con el tiempo.",
  },
];

export function BrandDefinition() {
  return (
    <section id="concepto" className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              01 / Definición de Marca
            </span>
            <div className="hidden lg:block w-12 h-px bg-foreground" />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              La fase más importante y la más subestimada. Sin una identidad clara, todo lo
              demás es decoración.
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
              Antes de dibujar una prenda,{" "}
              <span className="text-muted-foreground">
                necesitas saber quién eres.
              </span>
            </motion.h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Esta sección es la base de todo. Si la saltas por prisa, pagarás el precio
              más tarde con una marca dispersa, diseños sin coherencia y un público que no
              conecta. Aquí vas a recorrer 7 pasos, de la mano, sin asumir que sabes nada.
              Tómate tu tiempo. Cada paso es más importante que el siguiente.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20">
          {steps.map((step, idx) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* Number + meta */}
              <div className="lg:col-span-3 space-y-2">
                <span className="font-mono text-5xl sm:text-6xl font-bold tracking-tight tabular-nums">
                  {step.num}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    Paso
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    ·
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-9 space-y-5 border-l border-border lg:pl-10 pl-5">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="text-base text-foreground leading-relaxed">{step.intro}</p>
                <div className="space-y-4">
                  {step.body.map((para, i) => (
                    <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Exercise block */}
                {step.exercise && (
                  <div className="mt-6 bg-muted/40 border border-border p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase text-foreground">
                        Ejercicio práctico
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        · {step.exercise.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.exercise.description}
                    </p>
                  </div>
                )}

                {/* Pitfall block */}
                {step.pitfall && (
                  <div className="mt-3 border-l-2 border-foreground pl-4 py-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-foreground block mb-1">
                      Aviso
                    </span>
                    <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                      {step.pitfall}
                    </p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Brand reference cards (for task 1-4) */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="space-y-3 max-w-2xl mb-6">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Fichas de marcas referentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Las 5 marcas techwear que tienes que estudiar en la tarea 1-4.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              En la tarea 1-4 del roadmap se te pide estudiar 5 marcas referentes en profundidad.
              Aquí tienes las fichas completas de cada una, con web oficial, Instagram, descripción
              y prenda hero de estudio. Clic en cada marca para expandir la ficha.
            </p>
          </div>
          <BrandCards />
        </div>

        {/* Closing reminder */}
        <div className="mt-20 border-t border-border pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                num: "01",
                title: "La identidad se defiende, no se explica",
                body: "Si necesitas 3 párrafos para explicar qué tipo de marca eres, no has terminado el ejercicio. Vuelve a los pasos 1 a 4.",
              },
              {
                num: "02",
                title: "Tu cliente ideal no eres tú",
                body: "Diseñar para ti mismo es válido al principio. Pero tu marca crece cuando aceptas que tu cliente tiene su propia vida, sus propios gustos y sus propios bolsillos.",
              },
              {
                num: "03",
                title: "El estilo es una restricción, no una libertad",
                body: "Una marca fuerte se reconoce por lo que NO hace. Definir estilo es decidir qué prendas NO vas a hacer, aunque sepas que se venderían.",
              },
            ].map((tip) => (
              <div key={tip.num} className="bg-background p-5 sm:p-6 flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {tip.num}
                </span>
                <h4 className="font-semibold text-sm leading-snug">{tip.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
