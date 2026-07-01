"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Hook for persisting roadmap task completion AND per-task notes in localStorage.
 * Tracks a set of task IDs that have been checked off + a map of notes by task ID.
 */
type ProgressState = {
  completed: Set<string>;
  notes: Record<string, string>;
  hydrated: boolean;
};

const initialState: ProgressState = {
  completed: new Set<string>(),
  notes: {},
  hydrated: false,
};

export function useProgress(storageKey: string) {
  const [state, setState] = useState<ProgressState>(initialState);

  useEffect(() => {
    let completed = new Set<string>();
    let notes: Record<string, string> = {};
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as {
          completed?: string[];
          notes?: Record<string, string>;
        };
        if (Array.isArray(parsed.completed)) {
          completed = new Set(parsed.completed);
        }
        if (parsed.notes && typeof parsed.notes === "object") {
          notes = parsed.notes;
        }
      }
    } catch {
      // ignore
    }
    Promise.resolve().then(() => {
      setState({ completed, notes, hydrated: true });
    });
  }, [storageKey]);

  const persist = useCallback(
    (completed: Set<string>, notes: Record<string, string>) => {
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify({
            completed: Array.from(completed),
            notes,
          })
        );
      } catch {
        // ignore
      }
    },
    [storageKey]
  );

  const toggle = useCallback(
    (id: string) => {
      setState((prev) => {
        const next = new Set(prev.completed);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        persist(next, prev.notes);
        return { ...prev, completed: next };
      });
    },
    [persist]
  );

  const setNote = useCallback(
    (id: string, value: string) => {
      setState((prev) => {
        const nextNotes = { ...prev.notes };
        if (value.trim() === "") {
          delete nextNotes[id];
        } else {
          nextNotes[id] = value;
        }
        persist(prev.completed, nextNotes);
        return { ...prev, notes: nextNotes };
      });
    },
    [persist]
  );

  const reset = useCallback(() => {
    setState((prev) => {
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
      return { completed: new Set<string>(), notes: {}, hydrated: prev.hydrated };
    });
  }, [storageKey]);

  return {
    completed: state.completed,
    notes: state.notes,
    toggle,
    setNote,
    reset,
    hydrated: state.hydrated,
  };
}
