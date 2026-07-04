"use client";

import { motion } from "framer-motion";

type Props = {
  completed: number;
  total: number;
};

export function GlobalProgressBar({ completed, total }: Props) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isComplete = completed >= total && total > 0;

  return (
    <div
      className="fixed top-14 sm:top-16 left-0 right-0 z-40 pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label={`Progreso: ${completed} de ${total} tareas completadas, ${percent} por ciento`}
    >
      {/* Background track */}
      <div className="h-5 sm:h-6 bg-background/85 backdrop-blur-sm border-b border-border flex items-center px-3 sm:px-6 lg:px-10 gap-2 sm:gap-3">
        <span className="hidden sm:inline font-mono text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground shrink-0">
          Progreso
        </span>
        <span
          className={`font-mono text-[11px] sm:text-xs tabular-nums shrink-0 ${
            isComplete ? "text-foreground font-bold" : "text-foreground"
          }`}
        >
          {String(completed).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
        <div className="flex-1 h-px bg-border relative overflow-hidden min-w-[40px]">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground"
            animate={{ width: `${percent}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
          />
        </div>
        <span className="font-mono text-[11px] sm:text-xs tabular-nums text-muted-foreground shrink-0">
          {String(percent).padStart(2, "0")}%
        </span>
        {isComplete && (
          <span className="font-mono text-[10px] tracking-widest uppercase text-foreground shrink-0 hidden sm:inline">
            Completado
          </span>
        )}
      </div>
    </div>
  );
}
