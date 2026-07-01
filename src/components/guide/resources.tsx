"use client";

import { motion } from "framer-motion";
import {
  Youtube,
  PenTool,
  Image as ImageIcon,
  Puzzle,
  Users,
  GraduationCap,
  Shirt,
  Package,
  BookOpen,
  Monitor,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { resourceCategories, type Resource } from "@/lib/guide/content-data";

const iconMap: Record<string, LucideIcon> = {
  Youtube,
  PenTool,
  Image: ImageIcon,
  Puzzle,
  Users,
  GraduationCap,
  Shirt,
  Package,
  BookOpen,
  Monitor,
};

export function Resources() {
  return (
    <section id="recursos" className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="space-y-3 max-w-3xl mb-12">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            05 / Ecosistema de recursos gratuitos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Todo lo que necesitas,{" "}
            <span className="text-muted-foreground">sin gastar un euro más.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Más de 50 herramientas, canales y comunidades seleccionadas a mano. No están todas
            las que existen, solo las que de verdad usarás. Marcadas como Gratis, Freemium o
            Trial para que sepas qué esperar antes de pinchar.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
          {resourceCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] ?? PenTool;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                className="bg-background p-6 sm:p-8"
              >
                {/* Category header */}
                <div className="flex items-start gap-4 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 border border-foreground flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight">{cat.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {cat.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs tabular-nums text-muted-foreground shrink-0">
                    {String(cat.resources.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Resource list */}
                <ul className="space-y-3 max-h-[480px] overflow-y-auto scroll-thin pr-2">
                  {cat.resources.map((r) => (
                    <ResourceItem key={r.name} resource={r} />
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Footer tips */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
          {[
            {
              num: "01",
              title: "No te suscribas a todo",
              body: "Elige 2 o 3 canales de YouTube y síguelos a fondo. Suscribirte a 50 no te hace más productivo, te hace más ansioso. La profundidad vence a la amplitud.",
            },
            {
              num: "02",
              title: "Usa el plan gratis primero",
              body: "Las versiones gratuitas de Figma, Mailchimp y Canva son suficientes para llegar a tu primer drop. Paga solo cuando el negocio lo justifique con ingresos.",
            },
            {
              num: "03",
              title: "Participa, no observes",
              body: "En Reddit y Discord, el 90% aprende leyendo y el 10% enseña respondiendo. Sé parte del 10%. Es la forma más rápida de aprender y de hacer networking real.",
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
    </section>
  );
}

function ResourceItem({ resource }: { resource: Resource }) {
  const tagStyle: Record<Resource["tag"], string> = {
    Gratis: "bg-foreground text-background",
    Freemium: "border border-foreground text-foreground",
    Trial: "border border-border text-muted-foreground",
  };

  return (
    <li>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-3 py-1 hover:bg-muted/40 -mx-2 px-2 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-sm font-semibold group-hover:underline">{resource.name}</span>
            <span
              className={`font-mono text-[9px] tracking-wider uppercase px-1.5 py-0.5 ${tagStyle[resource.tag]}`}
            >
              {resource.tag}
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{resource.description}</p>
        </div>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1" />
      </a>
    </li>
  );
}
