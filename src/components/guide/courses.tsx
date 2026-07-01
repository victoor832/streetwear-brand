"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { paidCourses, coursesTotal } from "@/lib/guide/content-data";

export function Courses() {
  const recommendedCourses = paidCourses.slice(0, 2); // top 2, suman <50€
  const bonusCourse = paidCourses[2];

  return (
    <section id="cursos" className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              02 / Cursos de pago
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Dos cursos. <span className="text-muted-foreground">Menos de 50€.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Suficiente para cubrir las dos áreas donde más te jugarás el cuello: identidad de
              marca y tienda online. No compres más — el resto lo aprenderás gratis en YouTube y
              practicando.
            </p>
          </div>

          {/* Total badge */}
          <div className="border border-foreground bg-foreground text-background p-5 sm:p-6 min-w-[200px]">
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-70 block">
              Inversión total
            </span>
            <span className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight block">
              {coursesTotal.toFixed(2).replace(".", ",")}€
            </span>
            <span className="font-mono text-xs opacity-70 block mt-1">
              de 50€ de tope · ahorras{" "}
              {(50 - coursesTotal).toFixed(2).replace(".", ",")}€
            </span>
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {recommendedCourses.map((course, idx) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background p-6 sm:p-8 flex flex-col gap-5"
            >
              {/* Top meta */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")} / {course.platform}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {course.duration.split("·")[0].trim()}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold leading-snug tracking-tight">
                {course.title}
              </h3>

              {/* Why */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {course.why}
              </p>

              {/* Price + CTA */}
              <div className="flex items-end justify-between gap-4 pt-4 border-t border-border">
                <div className="flex flex-col">
                  <span className="font-mono text-xs line-through text-muted-foreground">
                    {course.regularPrice.toFixed(2).replace(".", ",")}€
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold tabular-nums tracking-tight">
                    {course.price.toFixed(2).replace(".", ",")}€
                  </span>
                </div>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background text-xs font-mono tracking-wider uppercase hover:bg-foreground/85 transition-colors"
                >
                  Ver curso
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bonus course */}
        <div className="mt-8 border border-dashed border-border p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                Opcional / si te sobra presupuesto
              </span>
              <Check className="w-3 h-3 text-foreground" />
            </div>
            <h4 className="text-lg font-semibold mb-1">{bonusCourse.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{bonusCourse.why}</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <span className="font-mono text-xs line-through text-muted-foreground block">
                {bonusCourse.regularPrice.toFixed(2).replace(".", ",")}€
              </span>
              <span className="text-2xl font-bold tabular-nums">
                {bonusCourse.price.toFixed(2).replace(".", ",")}€
              </span>
            </div>
            <a
              href={bonusCourse.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border text-xs font-mono tracking-wider uppercase hover:border-foreground transition-colors"
            >
              Ver
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Honest disclaimer */}
        <p className="mt-8 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
          <strong className="text-foreground">Consejo honesto:</strong> los precios en
          Domestika y Udemy están casi siempre en oferta (11,99-14,99€). Si ves el precio
          completo (59-79€), espera 2-3 días o abre en una ventana de incógnito — la oferta
          volverá. NO pagues precio completo por ningún curso de estas plataformas.
        </p>
      </div>
    </section>
  );
}
