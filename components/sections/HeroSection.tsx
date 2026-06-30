"use client";

import { useEffect, useRef, useState } from "react";
import { AppStoreButton } from "@/components/ui/AppStoreButton";
import { DemoNotificationCard } from "@/components/ui/DemoNotificationCard";
import { HeroScreenshot } from "@/components/sections/HeroScreenshot";
import { HERO } from "@/lib/site-config";
import {
  DEMO_NOTIFICATION,
  INITIAL_DELAY_MS,
  VISIBLE_DURATION_MS,
} from "@/lib/notifications-demo";

type Phase = "idle" | "visible" | "leaving" | "done";

function HeroNotificationOverlay({
  phase,
  onLeaveEnd,
  className,
}: {
  phase: Phase;
  onLeaveEnd: () => void;
  className?: string;
}) {
  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      aria-live="polite"
      aria-label="Memory Box 通知のデモ"
      className={className}
    >
      <div
        className={
          phase === "leaving"
            ? "notification-demo-leave"
            : "notification-demo-enter"
        }
        onAnimationEnd={(event) => {
          if (phase === "leaving" && event.currentTarget === event.target) {
            onLeaveEnd();
          }
        }}
      >
        <DemoNotificationCard notification={DEMO_NOTIFICATION} />
      </div>
    </div>
  );
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const hasTriggered = useRef(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || hasTriggered.current) return;

    let showTimer: number | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (hasTriggered.current || !entry?.isIntersecting) return;

        showTimer = window.setTimeout(() => {
          if (hasTriggered.current) return;
          hasTriggered.current = true;
          observer.disconnect();
          setPhase("visible");
        }, INITIAL_DELAY_MS);
      },
      { threshold: 0.35 },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
      if (showTimer) window.clearTimeout(showTimer);
    };
  }, []);

  useEffect(() => {
    if (phase !== "visible") return;

    const hideTimer = window.setTimeout(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      setPhase(prefersReducedMotion ? "done" : "leaving");
    }, VISIBLE_DURATION_MS);

    return () => window.clearTimeout(hideTimer);
  }, [phase]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-visible border-b border-mb-border bg-white"
    >
      <div className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-7xl flex-col justify-center gap-16 px-6 py-24 md:min-h-[calc(100svh-4rem)] md:px-10 md:py-32 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 xl:gap-20 xl:py-40">
        <div className="flex flex-col lg:max-w-xl">
          <h1 className="text-[2rem] font-medium leading-[1.35] tracking-tight text-foreground md:text-5xl md:leading-[1.3] lg:text-[3.25rem] lg:leading-[1.25]">
            {HERO.tagline}
          </h1>
          <p className="mt-10 whitespace-pre-line text-lg leading-[1.9] text-foreground md:mt-12 md:text-xl md:leading-[1.9]">
            {HERO.subtitle}
          </p>
          <p className="mt-8 whitespace-pre-line text-base leading-[1.95] text-mb-muted md:mt-10 md:text-lg md:leading-[1.95]">
            {HERO.body}
          </p>
          <div className="mt-14 hidden lg:block">
            <AppStoreButton href={HERO.appStoreUrl} />
          </div>
        </div>

        <HeroNotificationOverlay
          phase={phase}
          onLeaveEnd={() => setPhase("done")}
          className="pointer-events-none flex justify-center lg:hidden"
        />

        <div className="relative flex justify-center lg:justify-end">
          <HeroScreenshot />
        </div>

        <div className="flex justify-center lg:hidden">
          <AppStoreButton href={HERO.appStoreUrl} />
        </div>
      </div>

      <HeroNotificationOverlay
        phase={phase}
        onLeaveEnd={() => setPhase("done")}
        className="pointer-events-none absolute z-10 hidden w-[min(100%,280px)] lg:block lg:left-[54%] lg:top-[44%] lg:-translate-x-1/2 lg:-translate-y-1/2 xl:left-[56%] xl:top-[42%]"
      />
    </section>
  );
}
