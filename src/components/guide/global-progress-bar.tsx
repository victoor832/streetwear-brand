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
      <div className="h-6 bg-background/85 backdrop-blur-sm border-b border-border flex items-center px-4 sm:px-6 lg:px-10">
        <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground shrink-0">
          Progreso
        </span>
        <span
          className={`ml-3 font-mono text-xs tabular-nums shrink-0 ${
            isComplete ? "text-foreground font-bold" : "text-foreground"
          }`}
        >
          {String(completed).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
        <div className="flex-1 mx-3 sm:mx-4 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground"
            animate={{ width: `${percent}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
          />
        </div>
        <span className="font-mono text-[10px] sm:text-xs tabular-nums text-muted-foreground shrink-0">
          {String(percent).padStart(2, "0")}%
        </span>
        {isComplete && (
          <span className="ml-3 font-mono text-[10px] tracking-widest uppercase text-foreground shrink-0 hidden sm:inline">
            Completado
          </span>
        )}
      </div>
    </div>
  );
}
