"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { id: "intro", label: "Inicio", num: "00" },
  { id: "concepto", label: "Concepto", num: "01" },
  { id: "diseno", label: "Diseño", num: "02" },
  { id: "roadmap", label: "Roadmap", num: "03" },
  { id: "cursos", label: "Cursos", num: "04" },
  { id: "recursos", label: "Recursos", num: "05" },
  { id: "hardware", label: "Hardware", num: "06" },
  { id: "glosario", label: "Glosario", num: "07" },
];

export function Nav({ progressPercent }: { progressPercent: number }) {
  const [activeId, setActiveId] = useState<string>("intro");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("intro")}
          className="flex items-center gap-2 group shrink-0"
          aria-label="Volver al inicio"
        >
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
            BLK/
          </span>
          <span className="font-mono text-xs font-bold tracking-[0.15em] text-foreground">
            BLACKPRINT
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`group relative px-3 py-2 text-xs font-mono tracking-wider transition-colors ${
                activeId === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="opacity-50 mr-1">{item.num}</span>
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-3 right-3 bottom-1 h-px bg-foreground"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right cluster: progress + theme toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tabular-nums">
              {String(Math.round(progressPercent)).padStart(2, "0")}%
            </span>
            <div className="w-12 sm:w-24 h-px bg-border relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-8 h-8 flex items-center justify-center border border-border hover:border-foreground transition-colors"
            aria-label="Cambiar modo claro/oscuro"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-3.5 h-3.5" />
            ) : (
              <Moon className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom scroll progress line */}
      <motion.div
        className="h-px bg-foreground/40 origin-left"
        style={{ scaleX }}
      />
    </header>
  );
}
