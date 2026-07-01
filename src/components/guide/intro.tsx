"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: meta */}
        <div className="lg:col-span-3 space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
            00 / Sobre esta guía
          </span>
          <div className="hidden lg:block w-12 h-px bg-foreground" />
          <p className="font-mono text-xs text-muted-foreground leading-relaxed">
            Hecha para un amigo. Adaptada a su nicho (techwear), su país (España), su edad
            (18-25) y su nivel (cero absoluto).
          </p>
        </div>

        {/* Right: body */}
        <div className="lg:col-span-9 space-y-6 sm:space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]"
          >
            No necesitas saber de diseño, ni de código, ni de moda. Solo necesitas{" "}
            <span className="text-muted-foreground">seguir los pasos en orden.</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 pt-4">
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
                Cómo funciona
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Esta guía está dividida en 4 fases que cubren 6 meses. Cada fase tiene tareas
                concretas y marcables. Tu progreso se guarda en este navegador — puedes cerrar
                y volver cuando quieras, las casillas seguirán ahí. Tacha una cada vez que la
                completes, sin prisa pero sin pausa.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground">
                Qué NO es esta guía
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                No es un curso acelerado de diseño. No te promete que serás Supreme en 6 meses.
                No te vende nada. Es un mapa honesto: hace explícito el camino real que recorren
                las marcas que duran. Lo que hagas con él depende de tu constancia.
              </p>
            </div>
          </div>

          {/* Three principles */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
            {[
              {
                num: "01",
                title: "Identidad antes que producto",
                body: "Las marcas que duran saben qué son ANTES de coser una sola prenda. Tu marca es una opinión, no un logo.",
              },
              {
                num: "02",
                title: "Comunidad antes que venta",
                body: "Si tienes 100 personas que de verdad quieren lo que haces, tienes un negocio. Si tienes 10.000 curiosos, tienes ruido.",
              },
              {
                num: "03",
                title: "Pequeño, perfecto, repetido",
                body: "Un primer drop de 3 prendas excepcionales vale más que uno de 10 mediocres. Empieza enfocado, crece con criterio.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-background p-5 sm:p-6 flex flex-col gap-3"
              >
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  {p.num}
                </span>
                <h4 className="font-sans font-semibold text-base leading-snug">
                  {p.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Honest disclaimer */}
          <div className="mt-8 border-l-2 border-foreground pl-4 sm:pl-6 py-2">
            <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
              "Las marcas que vale la pena construir tardan más en construirse. Pero también
              duran más." — Anónimo, en algún foro de streetwear que ya no existe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
