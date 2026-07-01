"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Instagram, Globe } from "lucide-react";

type Brand = {
  name: string;
  web: string;
  instagram: string;
  description: string;
  hero: string;
  priceRange: string;
};

const brands: Brand[] = [
  {
    name: "Acronym",
    web: "https://acrnm.com/",
    instagram: "https://www.instagram.com/acronymberlin/",
    description:
      "Fundada por Errolson Hugh en 1999. Referencia absoluta del techwear. Ropa como herramienta técnica pura, siluetas asimétricas, hardware W. L. Gore, colaboraciones con Nike ACG y Arcteryx Veilance. Estética minimalista, monocromática, sin logos visibles.",
    hero: "J96-Sgt pant (cargo técnico con 14 bolsillos)",
    priceRange: "800€ a 2.400€ por prenda",
  },
  {
    name: "Goldwin",
    web: "https://www.goldwin.co.jp/sp/",
    instagram: "https://www.instagram.com/goldwin_jp/",
    description:
      "Marca japonesa con licencia The North Face en Japón. Su línea propia techwear combina tejidos técnicos premium (pertex, cordura) con cortes japoneses precisos. Colaboraciones con Nanamica y Arc'teryx. Estética más sobria que Acronym, mucho gorpcore.",
    hero: "Goldwin 0 Ghost jacket (chaqueta shell 3 capas)",
    priceRange: "300€ a 1.200€ por prenda",
  },
  {
    name: "Arc'teryx Veilance",
    web: "https://veilance.arcteryx.com/",
    instagram: "https://www.instagram.com/veilance/",
    description:
      "Línea de lujo de Arc'teryx, sin logos visibles. Diseño minimalista, cortes quirúrgicos, materiales técnicos de primera (Gore-Tex Pro, N40r-LCP). Para usuario que quiere performance técnico con estética business-casual. Fabricación en Canadá.",
    hero: "Partition jacket (chaqueta insulated con Coreloft)",
    priceRange: "400€ a 1.800€ por prenda",
  },
  {
    name: "Salomon Advanced",
    web: "https://www.salomon.com/en-us/apparel/advanced.html",
    instagram: "https://www.instagram.com/salomon/",
    description:
      "Línea advanced de la marca francesa de outdoor. Sneakers techwear (XT-6, ACS Pro) que se han convertido en iconos del gorpcore. Apparel técnico con colaboraciones con brands como 11 by Boris Bidjan Saberi. Punto de entrada más accesible al techwear premium.",
    hero: "XT-6 sneaker (zapatilla trail running adoptada por fashion)",
    priceRange: "200€ (sneakers) a 700€ (apparel)",
  },
  {
    name: "Stone Island Shadow Project",
    web: "https://www.stoneisland.com/us/shadow-project",
    instagram: "https://www.instagram.com/stoneislandshadowproject/",
    description:
      "Línea de Stone Island dirigida por Errolson Hugh de 2008 a 2020. Estética más oscura y técnica que la línea principal. Telas exclusivas (Metal, Reflective) y tratamiento de color único. Aunque se discontinuó como colección, sigue siendo referencia de estudio.",
    hero: "Shadow Project reflective parka (parka con tejido reflectante)",
    priceRange: "500€ a 1.500€ por prenda",
  },
];

export function BrandCards() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="mt-8 border border-border bg-background">
      {/* Header */}
      <div className="border-b border-border px-5 sm:px-6 py-3 bg-muted/40">
        <span className="font-mono text-[10px] tracking-widest uppercase text-foreground">
          Fichas de marcas referentes (tarea 1-4)
        </span>
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          · 5 marcas · clic para expandir
        </span>
      </div>

      <ul className="divide-y divide-border">
        {brands.map((brand, idx) => {
          const isOpen = openIdx === idx;
          return (
            <li key={brand.name}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-3 group hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="font-mono text-xs tabular-nums text-muted-foreground shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                    {brand.name}
                  </span>
                  <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {brand.priceRange}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {brand.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="border border-border p-3">
                          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                            Prenda hero de estudio
                          </span>
                          <p className="text-sm text-foreground leading-snug">
                            {brand.hero}
                          </p>
                        </div>
                        <div className="border border-border p-3 sm:hidden">
                          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1">
                            Rango de precio
                          </span>
                          <p className="text-sm text-foreground leading-snug">
                            {brand.priceRange}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-1">
                        <a
                          href={brand.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-foreground text-xs font-mono tracking-wider uppercase hover:bg-foreground hover:text-background transition-colors"
                        >
                          <Globe className="w-3 h-3" />
                          Web oficial
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={brand.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-mono tracking-wider uppercase text-foreground hover:border-foreground transition-colors"
                        >
                          <Instagram className="w-3 h-3" />
                          @{brand.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      {/* Footer note */}
      <div className="border-t border-border px-5 sm:px-6 py-3 bg-muted/30">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-mono uppercase tracking-wider text-foreground">
            Cómo estudiarlas:
          </span>{" "}
          para cada marca, anota en una página: silueta dominante, paleta, materiales firma,
          narrativa de marca y cliente ideal. Una página por marca. 5 páginas en total.
        </p>
      </div>
    </div>
  );
}
