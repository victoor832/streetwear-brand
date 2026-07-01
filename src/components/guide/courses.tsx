"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { paidCourses, bonusCourse, coursesTotal } from "@/lib/guide/content-data";

export function Courses() {
  return (
    <section id="cursos" className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        {/* Header */}
        <div className="space-y-3 max-w-3xl mb-10">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            04 / Cursos de pago
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
            Dos cursos. <span className="text-muted-foreground">Menos de 50€.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Suficiente para cubrir las dos áreas donde más te jugarás el cuello: identidad de
            marca y tienda online. No compres más: el resto lo aprenderás gratis en YouTube y
            practicando. Para diseño de prendas, mira los cursos específicos en la sección
            Diseño.
          </p>
        </div>

        {/* Top: total + 2 main courses */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Total badge */}
          <div className="lg:col-span-4 border border-foreground bg-foreground text-background p-6 sm:p-7 flex flex-col gap-3">
            <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
              Inversión total
            </span>
            <span className="text-5xl sm:text-6xl font-bold tabular-nums tracking-tight">
              {coursesTotal.toFixed(2).replace(".", ",")}€
            </span>
            <div className="space-y-1 mt-2">
              <span className="font-mono text-xs opacity-70 block">
                de 50€ de tope
              </span>
              <span className="font-mono text-xs opacity-70 block">
                ahorras {(50 - coursesTotal).toFixed(2).replace(".", ",")}€
              </span>
              <span className="font-mono text-xs opacity-70 block mt-2">
                Curso bonus (sustituye al que daba error 404) incluido abajo, gratis.
              </span>
            </div>
          </div>

          {/* Main courses grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {paidCourses.map((course, idx) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background p-6 sm:p-7 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")} / {course.platform}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {course.duration.split("·")[0].trim()}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {course.why}
                </p>
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
        </div>

        {/* Bonus course (replaces the previous 404 course) */}
        <div className="border border-dashed border-border p-6 sm:p-7 bg-background">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="sm:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  Curso bonus · sustituye al que daba error 404
                </span>
                <Check className="w-3 h-3 text-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold leading-snug">{bonusCourse.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{bonusCourse.why}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                Plataforma: {bonusCourse.platform}. Duración: {bonusCourse.duration}. Modalidad:
                audit gratis (sin certificado, con acceso a todos los vídeos y materiales).
              </p>
            </div>
            <div className="sm:col-span-5 flex items-center justify-between sm:justify-end gap-4 sm:border-l sm:border-border sm:pl-6">
              <div className="text-left sm:text-right">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                  Precio
                </span>
                <span className="text-3xl font-bold tabular-nums">0€</span>
                <span className="font-mono text-xs text-muted-foreground block mt-1">
                  modo auditor
                </span>
              </div>
              <a
                href={bonusCourse.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-foreground text-xs font-mono tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Ver curso
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Honest disclaimer */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="border-l-2 border-foreground pl-4 py-2">
            <h4 className="font-semibold text-sm mb-1">Sobre los precios en oferta</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Los precios en Domestika y Udemy están casi siempre en oferta (11,99 a 14,99€).
              Si ves el precio completo (59 a 79€), espera 2 o 3 días o abre en una ventana de
              incógnito. La oferta volverá. NO pagues precio completo por ningún curso de estas
              plataformas.
            </p>
          </div>
          <div className="border-l-2 border-border pl-4 py-2">
            <h4 className="font-semibold text-sm mb-1">Sobre el curso bonus de Coursera</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Para auditar gratis en Coursera: busca el curso, clic en 'Inscribirse', y debajo
              del botón principal busca el enlace pequeño 'Auditar este curso'. Sin este paso,
              te pedirán pago. Cancela el trial si te lo ofrecen (no lo necesitas).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
