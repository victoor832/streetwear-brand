"use client";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-foreground text-background mt-auto">
      {/* Big closing message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: closing statement */}
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs tracking-[0.2em] uppercase opacity-60">
              End of document / BP-001
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.02]">
              Tu primer drop no es la línea de meta.
              <br />
              <span className="opacity-60">Es la señal de salida.</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg opacity-80 leading-relaxed">
              Esta guía es un punto de partida, no un contrato. Adáptala a tu ritmo, a tu
              realidad y a lo que vayas descubriendo por el camino. Lo único que no se puede
              adaptar es la constancia: sin ella, ni el mejor roadmap del mundo sirve.
            </p>
            <p className="max-w-2xl text-sm opacity-70 leading-relaxed">
              Si llegaste hasta aquí, ya estás más cerca que el 90% de la gente que dice 'algún
              día montaré una marca'. El día que lances tu primer drop, escríbenos. Lo
              celebraremos contigo.
            </p>
          </div>

          {/* Right: meta */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono">
            <div className="space-y-1">
              <span className="opacity-50 block uppercase tracking-widest text-[10px]">
                Documento
              </span>
              <span>BP-001 / v2.0</span>
              <span className="opacity-60 block">2026</span>
            </div>
            <div className="space-y-1">
              <span className="opacity-50 block uppercase tracking-widest text-[10px]">
                Scope
              </span>
              <span>Techwear ES</span>
              <span className="opacity-60 block">Nivel cero</span>
            </div>
            <div className="space-y-1">
              <span className="opacity-50 block uppercase tracking-widest text-[10px]">
                Duración
              </span>
              <span>6 meses</span>
              <span className="opacity-60 block">5 fases / 64 tareas</span>
            </div>
            <div className="space-y-1">
              <span className="opacity-50 block uppercase tracking-widest text-[10px]">
                Inversión
              </span>
              <span>≤ 50€ cursos</span>
              <span className="opacity-60 block">+ hardware opcional</span>
            </div>
          </div>
        </div>

        {/* PDF download block */}
        <div className="mt-10 border border-background/20 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-60 block">
              Documento imprimible
            </span>
            <p className="text-sm sm:text-base font-semibold">
              Descarga la guía completa en PDF (43 páginas, todo el contenido en un solo archivo).
            </p>
            <p className="text-xs opacity-60">
              Incluye portada, las 7 secciones, el roadmap completo, cursos, recursos, hardware y glosario.
            </p>
          </div>
          <a
            href="/download/blackprint-guia-completa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-background text-foreground text-xs font-mono tracking-wider uppercase hover:bg-background/85 transition-colors"
          >
            Descargar PDF
            <span aria-hidden>↓</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-background/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono opacity-60">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-[0.15em]">BLACKPRINT</span>
            <span className="opacity-50">
              · BLACKPRINT Guide. Versión 2.2 con modo oscuro, sección de
              concepto, módulos de diseño de prendas y bloque de diseño digital en Mac.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Tu progreso se guarda solo en este navegador.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
