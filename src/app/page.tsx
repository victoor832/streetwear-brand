"use client";

import { useMemo } from "react";
import { Nav } from "@/components/guide/nav";
import { Hero } from "@/components/guide/hero";
import { Intro } from "@/components/guide/intro";
import { BrandDefinition } from "@/components/guide/brand-definition";
import { GarmentDesign } from "@/components/guide/garment-design";
import { Roadmap } from "@/components/guide/roadmap";
import { Courses } from "@/components/guide/courses";
import { Resources } from "@/components/guide/resources";
import { Hardware } from "@/components/guide/hardware";
import { Glossary } from "@/components/guide/glossary";
import { Footer } from "@/components/guide/footer";
import { useProgress } from "@/lib/guide/use-progress";
import { totalTasks } from "@/lib/guide/roadmap-data";

export default function Home() {
  const { completed, toggle, reset, hydrated } = useProgress("blackprint-progress-v2");

  const completedCount = useMemo(() => completed.size, [completed]);
  const progressPercent = hydrated
    ? Math.round((completedCount / totalTasks) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav progressPercent={progressPercent} />

      <main className="flex-1">
        <Hero />
        <Intro />
        <BrandDefinition />
        <GarmentDesign />
        <Roadmap
          completed={completed}
          completedCount={completedCount}
          onToggle={toggle}
          onReset={reset}
        />
        <Courses />
        <Resources />
        <Hardware />
        <Glossary />
      </main>

      <Footer />
    </div>
  );
}
