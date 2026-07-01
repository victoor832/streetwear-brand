"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { glossary, type GlossaryTerm } from "@/lib/guide/content-data";

const categories: Array<{ id: GlossaryTerm["category"] | "Todos"; label: string }> = [
  { id: "Todos", label: "Todos" },
  { id: "Diseño", label: "Diseño" },
  { id: "Producción", label: "Producción" },
  { id: "E-commerce", label: "E-commerce" },
  { id: "Marketing", label: "Marketing" },
];

export function Glossary() {
  const [active, setActive] = useState<GlossaryTerm["category"] | "Todos">("Todos");

  const filtered =
    active === "Todos"
      ? glossary
      : glossary.filter((t) => t.category === active);

  return (
    <section id="glosario" className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="space-y-3 max-w-3xl mb-10">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            05 / Glosario del principiante
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Cada término técnico,{" "}
            <span className="text-muted-foreground">explicado como a un humano.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Cuando un tutorial o un fabricante use una palabra que no entiendas, vuelve aquí. Si
            echas en falta algún término, escríbelo en tu libreta y búscalo después.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-3 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors ${
                active === cat.id
                  ? "bg-foreground text-background"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-xs text-muted-foreground tabular-nums">
            {String(filtered.length).padStart(2, "0")} términos
          </span>
        </div>

        {/* Terms list */}
        <motion.dl
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border"
        >
          {filtered.map((term) => (
            <motion.div
              key={term.term}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-background p-5 sm:p-6 flex flex-col gap-2"
            >
              <div className="flex items-baseline justify-between gap-3">
                <dt className="text-base sm:text-lg font-bold tracking-tight">{term.term}</dt>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground shrink-0">
                  {term.category}
                </span>
              </div>
              <dd className="text-sm text-muted-foreground leading-relaxed">
                {term.definition}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
