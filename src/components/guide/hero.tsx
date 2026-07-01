"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-10"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      {/* Top meta row */}
      <div className="relative max-w-7xl mx-auto w-full flex items-start justify-between text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">
        <div className="flex flex-col gap-1">
          <span>Doc // BP-001</span>
          <span className="hidden sm:inline">Versión 1.0 — 2026</span>
        </div>
        <div className="flex flex-col gap-1 text-right">
          <span> España / ES</span>
          <span className="hidden sm:inline">Techwear Brief</span>
        </div>
      </div>

      {/* Main hero content */}
      <div className="relative max-w-7xl mx-auto w-full py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-background/60">
            <span className="w-1.5 h-1.5 bg-foreground rounded-full animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] uppercase">
              Guía interactiva / 6 meses
            </span>
          </div>

          {/* Title */}
          <h1 className="font-sans font-bold leading-[0.95] tracking-[-0.03em] text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block">DE CERO</span>
            <span className="block text-muted-foreground">A PRIMER</span>
            <span className="block">DROP.</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Una hoja de ruta visual para crear una marca streetwear techwear desde cero. Sin
            tecnicismos. Sin humo. Diseñada para alguien que{" "}
            <span className="text-foreground font-medium">
              nunca ha tocado diseño, ni webs, ni fabricación
            </span>{" "}
            — y quiere lanzar su primer drop en seis meses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() =>
                document
                  .getElementById("roadmap")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group inline-flex items-center gap-3 px-5 py-3 bg-foreground text-background text-sm font-mono tracking-wider uppercase hover:bg-foreground/85 transition-colors"
            >
              <span>Empezar el roadmap</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("cursos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-sm font-mono tracking-wider uppercase hover:border-foreground transition-colors"
            >
              Ver cursos (&lt;50€)
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom stats row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border"
      >
        {[
          { k: "Duración", v: "6 meses" },
          { k: "Inversión cursos", v: "≤ 50€" },
          { k: "Fases del roadmap", v: "04" },
          { k: "Nivel técnico", v: "Cero" },
        ].map((stat) => (
          <div
            key={stat.k}
            className="bg-background px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-1"
          >
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {stat.k}
            </span>
            <span className="text-lg sm:text-xl font-sans font-semibold tracking-tight">
              {stat.v}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
