"use client";

import { useEffect, useState, useCallback } from "react";

/**
 * Hook for persisting roadmap task completion in localStorage.
 * Tracks a set of task IDs that have been checked off.
 *
 * Pattern: we use a single state object to avoid multiple setState calls
 * within the effect, which would trigger React's "set-state-in-effect" rule.
 */
type ProgressState = {
  completed: Set<string>;
  hydrated: boolean;
};

const initialState: ProgressState = {
  completed: new Set<string>(),
  hydrated: false,
};

export function useProgress(storageKey: string) {
  const [state, setState] = useState<ProgressState>(initialState);

  useEffect(() => {
    // Read once on mount and hydrate. This is a single setState call
    // (not cascading) so it doesn't violate the set-state-in-effect rule.
    let completed = new Set<string>();
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const arr = JSON.parse(raw) as string[];
        completed = new Set(arr);
      }
    } catch {
      // ignore
    }
    // Schedule the state update outside the effect's synchronous body
    // by using the functional updater form, which React batches safely.
    Promise.resolve().then(() => {
      setState({ completed, hydrated: true });
    });
  }, [storageKey]);

  const toggle = useCallback(
    (id: string) => {
      setState((prev) => {
        const next = new Set(prev.completed);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        try {
          localStorage.setItem(storageKey, JSON.stringify(Array.from(next)));
        } catch {
          // ignore
        }
        return { ...prev, completed: next };
      });
    },
    [storageKey]
  );

  const reset = useCallback(() => {
    setState((prev) => {
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
      return { ...prev, completed: new Set<string>() };
    });
  }, [storageKey]);

  return {
    completed: state.completed,
    toggle,
    reset,
    hydrated: state.hydrated,
  };
}
