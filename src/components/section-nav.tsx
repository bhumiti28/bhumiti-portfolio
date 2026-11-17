"use client";

import { useEffect, useState } from "react";
import { sections } from "@/content/profile";
import { cn } from "@/lib/utils";

export function SectionNav({ className }: { className?: string }) {
  const [active, setActive] = useState<string>(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const next = visible[0]?.target.id;
        if (next) setActive(next);
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className={className}>
      <ul className="flex gap-1 lg:flex-col">
        {sections.map((section) => {
          const current = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  current && "text-foreground",
                )}
              >
                <span
                  className={cn(
                    "hidden h-px w-6 bg-border transition-all group-hover:w-10 group-hover:bg-primary lg:block",
                    current && "w-10 bg-primary",
                  )}
                />
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
