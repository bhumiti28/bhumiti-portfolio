"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { taglines } from "@/content/taglines";

const TYPE_MS = 60;
const DELETE_MS = 35;
const HOLD_MS = 2400;
const START_MS = 900;

const reducedQuery = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const media = window.matchMedia(reducedQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

type Phase = "start" | "typing" | "holding" | "deleting";

export function Typewriter({ className }: { className?: string }) {
  const reduced = useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(reducedQuery).matches,
    () => false,
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("start");

  useEffect(() => {
    if (reduced) return;
    const current = taglines[index];

    let delay = TYPE_MS;
    let next: () => void;

    if (phase === "start") {
      delay = START_MS;
      next = () => setPhase("typing");
    } else if (phase === "typing") {
      next = () => {
        const typed = current.slice(0, text.length + 1);
        setText(typed);
        if (typed === current) setPhase("holding");
      };
    } else if (phase === "holding") {
      delay = HOLD_MS;
      next = () => setPhase("deleting");
    } else {
      delay = DELETE_MS;
      next = () => {
        const trimmed = text.slice(0, -1);
        setText(trimmed);
        if (!trimmed) {
          setIndex((i) => (i + 1) % taglines.length);
          setPhase("typing");
        }
      };
    }

    const timer = window.setTimeout(next, delay);
    return () => window.clearTimeout(timer);
  }, [reduced, index, text, phase]);

  return (
    <p className={className}>
      <span className="sr-only">{taglines[0]}</span>
      <span aria-hidden>
        {reduced ? taglines[0] : text}
        <span className="type-cursor" />
      </span>
    </p>
  );
}
