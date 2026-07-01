"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ExternalLink, RotateCcw } from "lucide-react";
import { phases, totalTasks, type Phase } from "@/lib/guide/roadmap-data";

type Props = {
  completed: Set<string>;
  completedCount: number;
  onToggle: (id: string) => void;
  onReset: () => void;
};

export function Roadmap({ completed, completedCount, onToggle, onReset }: Props) {
  const [openId, setOpenId] = useState<string>(phases[0].id);
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const togglePhase = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="roadmap" className="relative border-t border-border bg-background">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground">
              01 / Roadmap visual
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              4 fases. 6 meses.{" "}
              <span className="text-muted-foreground">{totalTasks} tareas.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Tu progreso se guarda automáticamente en este navegador. Marca cada tarea cuando
              la termines — no antes. La honestidad con uno mismo es la primera disciplina de
              un fundador.
            </p>
          </div>

          {/* Progress card */}
          <div className="border border-border p-5 sm:p-6 min-w-[260px] sm:min-w-[300px]">
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                Progreso total
              </span>
              <span className="font-mono text-xs tabular-nums text-foreground">
                {String(completedCount).padStart(2, "0")}/
                {String(totalTasks).padStart(2, "0")}
              </span>
            </div>
            <div className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight mb-3">
              {progressPercent}
              <span className="text-2xl text-muted-foreground">%</span>
            </div>
            <div className="h-1.5 bg-muted relative overflow-hidden mb-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-foreground"
                animate={{ width: `${progressPercent}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 25 }}
              />
            </div>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "¿Seguro que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer."
                  )
                ) {
                  onReset();
                }
              }}
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Reiniciar progreso
            </button>
          </div>
        </div>
      </div>

      {/* Phases list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28">
        <div className="border-t border-border">
          {phases.map((phase) => (
            <PhaseRow
              key={phase.id}
              phase={phase}
              isOpen={openId === phase.id}
              onToggleOpen={() => togglePhase(phase.id)}
              completed={completed}
              onToggleTask={onToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhaseRow({
  phase,
  isOpen,
  onToggleOpen,
  completed,
  onToggleTask,
}: {
  phase: Phase;
  isOpen: boolean;
  onToggleOpen: () => void;
  completed: Set<string>;
  onToggleTask: (id: string) => void;
}) {
  const phaseTotal = phase.tasks.length;
  const phaseDone = phase.tasks.filter((t) => completed.has(t.id)).length;
  const phasePercent = Math.round((phaseDone / phaseTotal) * 100);

  return (
    <div className="border-b border-border">
      <button
        onClick={onToggleOpen}
        className="w-full text-left py-6 sm:py-8 flex items-start sm:items-center gap-4 sm:gap-6 group"
      >
        {/* Number */}
        <span className="font-mono text-xs sm:text-sm tracking-widest text-muted-foreground w-8 sm:w-12 shrink-0 pt-1">
          {phase.index}
        </span>

        {/* Title block */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
              {phase.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
              {phase.months} · {phase.duration}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {phase.goal}
          </p>
        </div>

        {/* Mini progress */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {String(phaseDone).padStart(2, "0")}/{String(phaseTotal).padStart(2, "0")}
          </span>
          <div className="w-16 h-px bg-border relative">
            <div
              className="absolute inset-y-0 left-0 bg-foreground"
              style={{ width: `${phasePercent}%` }}
            />
          </div>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 sm:pb-10 pl-12 sm:pl-18 lg:pl-24 pr-2">
              <ul className="divide-y divide-border">
                {phase.tasks.map((task, idx) => {
                  const isDone = completed.has(task.id);
                  return (
                    <li key={task.id} className="py-3 sm:py-4">
                      <button
                        onClick={() => onToggleTask(task.id)}
                        className="w-full text-left flex items-start gap-3 sm:gap-4 group"
                      >
                        {/* Checkbox */}
                        <span
                          className={`mt-0.5 w-5 h-5 border flex items-center justify-center shrink-0 transition-all ${
                            isDone
                              ? "bg-foreground border-foreground"
                              : "border-border group-hover:border-foreground"
                          }`}
                        >
                          {isDone && (
                            <Check
                              className="w-3.5 h-3.5 text-background"
                              strokeWidth={3}
                            />
                          )}
                        </span>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <span
                              className={`font-mono text-[10px] tabular-nums text-muted-foreground ${
                                isDone ? "line-through" : ""
                              }`}
                            >
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`text-sm sm:text-base font-medium leading-snug transition-colors ${
                                isDone
                                  ? "text-muted-foreground line-through"
                                  : "text-foreground"
                              }`}
                            >
                              {task.label}
                            </span>
                            {task.days && (
                              <span className="font-mono text-[10px] text-muted-foreground ml-auto">
                                ~{task.days}d
                              </span>
                            )}
                          </div>
                          {task.hint && (
                            <p
                              className={`mt-1 text-xs sm:text-sm leading-relaxed ${
                                isDone
                                  ? "text-muted-foreground/70"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {task.hint}
                            </p>
                          )}
                          {task.link && (
                            <a
                              href={task.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-foreground underline underline-offset-4 hover:no-underline"
                            >
                              {task.link.label}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
