"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { hardwareTiers } from "@/lib/guide/content-data";

export function Hardware() {
  return (
    <section id="hardware" className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="space-y-3 max-w-3xl mb-12">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            06 / Hardware y materiales
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            El set físico.{" "}
            <span className="text-muted-foreground">Para empezar con buen pie.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Tres niveles de presupuesto para que elijas el que mejor encaje como regalo. Los
            precios son orientativos (Amazon español, julio 2026) y los productos concretos son
            recomendaciones. Sustituye por equivalentes si lo prefieres.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border border border-border">
          {hardwareTiers.map((tier, idx) => {
            const isFeatured = idx === 1;
            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 flex flex-col gap-6 bg-background relative`}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-foreground text-background px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                    Recomendado
                  </div>
                )}

                {/* Tier header */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs tracking-widest text-muted-foreground">
                      Tier {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-foreground">
                      {tier.priceRange}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.tagline}</p>
                </div>

                {/* Total */}
                <div className="flex items-baseline gap-2 border-y border-border py-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Total aprox.
                  </span>
                  <span className="text-xl font-bold tabular-nums tracking-tight ml-auto">
                    {tier.total}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>

                {/* Items list */}
                <ul className="space-y-3 flex-1">
                  {tier.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-foreground shrink-0" strokeWidth={2} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-medium leading-snug">{item.name}</span>
                          <span className="font-mono text-xs tabular-nums text-muted-foreground shrink-0">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                          {item.why}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://www.amazon.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono tracking-wider uppercase transition-colors ${
                    isFeatured
                      ? "bg-foreground text-background hover:bg-foreground/85"
                      : "border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Buscar en Amazon
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Honest disclaimers */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-l-2 border-foreground pl-4 py-2">
            <h4 className="font-semibold text-sm mb-1">¿Y un portátil?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Si tu amigo ya tiene cualquier portátil de los últimos 4 años (8GB RAM mínimo),
              NO necesita comprar uno nuevo. Figma y Shopify funcionan en cualquier máquina
              decente. Solo considera actualizar si tiene menos de 8GB RAM o un disco HDD (no
              SSD).
            </p>
          </div>
          <div className="border-l-2 border-border pl-4 py-2">
            <h4 className="font-semibold text-sm mb-1">¿Tableta con pantalla o sin pantalla?</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Las tablets sin pantalla (Wacom Intuos) son más baratas pero requieren coordinación
              ojo-mano diferente. Las con pantalla (iPad y Pencil) son más intuitivas. Si es tu
              primer regalo serio, ve a por el iPad.
            </p>
          </div>
        </div>

        {/* Honest note on budget */}
        <div className="mt-6 border border-dashed border-border p-5 sm:p-6 bg-background">
          <h4 className="font-mono text-xs uppercase tracking-widest text-foreground mb-2">
            Nota sobre el presupuesto total del proyecto
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Los 50€ de cursos más el hardware son solo el inicio. El coste real del primer drop
            (incluyendo dominio, Shopify 3 meses, muestras físicas y producción de 50 prendas)
            oscila entre 600€ y 1.500€ dependiendo de la vía (POD, blanks o cut-and-sew). Tu
            amigo debe tener esto claro desde el principio para no frustrarse cuando llegue la
            fase de producción.
          </p>
        </div>
      </div>
    </section>
  );
}
