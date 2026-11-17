import { Fragment, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { CountUp } from "@/components/count-up";
import { LocalClock } from "@/components/local-clock";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  education,
  experience,
  githubWork,
  profile,
  projects,
  proof,
} from "@/content/profile";

const featured = projects[0];
const judge = projects[1];

export function Portfolio() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-foreground/5 bg-background/90 backdrop-blur">
        <div
          aria-hidden
          className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-foreground/70"
        />
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-sm font-medium tracking-tight">
            BG
          </a>
          <nav aria-label="Sections" className="flex items-center gap-4 text-xs tracking-[0.16em] uppercase sm:gap-6">
            <a href="#work" className="hover:text-foreground/60">
              Work
            </a>
            <a href="#journey" className="hover:text-foreground/60">
              Journey
            </a>
            <a href="#contact" className="hover:text-foreground/60">
              Contact
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground/60"
            >
              GitHub
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-24 sm:px-8 sm:pt-24">
        <p className="intro flex items-center gap-2 text-sm text-foreground/55">
          <span>New Jersey</span>
          <span aria-hidden className="relative flex size-1.5">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-700 dark:bg-emerald-400" />
          </span>
          <LocalClock />
        </p>
        <p
          className="intro mt-8 text-xs tracking-[0.18em] text-foreground/50 uppercase"
          style={{ "--delay": "60ms" } as CSSProperties}
        >
          {profile.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
          {profile.headline.split(" ").map((word, i) => (
            <Fragment key={i}>
              {i > 0 ? " " : null}
              <span className="rise inline-block overflow-hidden pb-[0.08em] align-bottom">
                <span style={{ "--i": i } as CSSProperties}>{word}</span>
              </span>
            </Fragment>
          ))}
        </h1>
        <p
          className="intro mt-6 max-w-2xl text-lg leading-8 text-foreground/70"
          style={{ "--delay": "520ms" } as CSSProperties}
        >
          {profile.hero}
        </p>
        <div
          className="intro mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base"
          style={{ "--delay": "620ms" } as CSSProperties}
        >
          <TextLink href="#journey">View journey</TextLink>
          <TextLink href={`mailto:${profile.email}`}>Let’s talk</TextLink>
        </div>

        <dl
          className="intro mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4"
          style={{ "--delay": "720ms" } as CSSProperties}
        >
          {proof.map((item) => (
            <div key={item.label}>
              <dt className="text-4xl font-medium tracking-tight sm:text-5xl">
                <CountUp value={item.value} />
              </dt>
              <dd className="mt-2 text-xs tracking-[0.14em] text-foreground/50 uppercase">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>

        <section id="work" className="mt-28 scroll-mt-24 max-w-3xl">
          <SectionLabel>Currently</SectionLabel>
          <p className="reveal mt-4 text-sm text-foreground/55">
            {featured.title} · {profile.role}, Epic Systems
          </p>
          <h2 className="reveal mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Turning noisy healthcare operations into work a team can act on.
          </h2>
          <p className="reveal mt-5 text-base leading-7 text-foreground/75">
            {featured.summary}
          </p>
          <p className="reveal mt-8 text-xs tracking-[0.18em] text-foreground/45 uppercase">
            Systems checklist
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Multi-agent RAG, with a human still in the approval path",
              "Kafka and FastAPI ingestion into prioritized queues",
              "Evals, traces, JWT/RBAC, and PII-safe logs",
            ].map((item) => (
              <li key={item} className="reveal flex items-center gap-3">
                <span aria-hidden className="rule h-px w-4 shrink-0 bg-foreground/50" />
                {item}
              </li>
            ))}
          </ul>
          <p className="reveal mt-4 text-sm text-foreground/50">
            {featured.stack.join(" · ")}
          </p>

          <div className="reveal mt-12">
            <div aria-hidden className="rule mb-8 h-px bg-foreground/10" />
            <p className="text-xs tracking-[0.16em] text-foreground/45 uppercase">
              {judge.kicker}
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight">
              {judge.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/70">
              {judge.summary}
            </p>
            {judge.href ? (
              <a
                href={judge.href}
                target="_blank"
                rel="noreferrer"
                className="link-line mt-4 inline-block text-sm"
              >
                {judge.linkLabel} ↗
              </a>
            ) : null}
          </div>

          <div className="reveal mt-12">
            <h3 className="text-xs tracking-[0.18em] text-foreground/45 uppercase">
              Also on GitHub
            </h3>
            <ul className="mt-4 divide-y divide-foreground/10 border-y border-foreground/10">
              {githubWork.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid gap-1 py-4 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-medium">{project.title}</span>
                    <span className="text-sm leading-6 text-foreground/60 transition-colors group-hover:text-foreground/80">
                      {project.summary}
                    </span>
                    <span className="text-sm">
                      Code{" "}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="journey" className="mt-28 scroll-mt-24 max-w-3xl">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="reveal mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Career headlines from healthcare and enterprise systems.
          </h2>
          <ol className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
            {experience.map((role) => (
              <li key={role.company} className="reveal py-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium">{role.company}</h3>
                  <p className="text-sm text-foreground/50">{role.dates}</p>
                </div>
                <p className="mt-1 text-sm text-foreground/70">
                  {role.role} · {role.location}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground/80">
                  {role.line}
                </p>
                <p className="mt-3 text-sm text-foreground/45">
                  {role.stack.replaceAll(", ", " · ")}
                </p>
              </li>
            ))}
          </ol>
          <p className="reveal mt-8 text-sm text-foreground/60">
            {education.degree}, {education.school} · {education.location} ·{" "}
            {education.date}
          </p>
        </section>

        <section id="contact" className="mt-28 scroll-mt-24 max-w-3xl">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="reveal mt-3 max-w-3xl text-4xl leading-tight font-medium tracking-tight sm:text-6xl">
            Let’s build something that stays up.
          </h2>
          <p className="reveal mt-6 max-w-xl text-base leading-7 text-foreground/70">
            If you need someone who can take a healthcare or enterprise system
            from messy data to a reliable service, send a note. The best
            conversations start short.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href={`mailto:${profile.email}`}>Send an email</TextLink>
            <TextLink href={profile.linkedin}>LinkedIn</TextLink>
            <TextLink href={profile.resumePdf}>Résumé</TextLink>
            <Link href="/resume" className="link-line">
              Printable page
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Building reliable data systems for healthcare and enterprise teams.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${profile.email}`} className="hover:text-foreground">
              Email
            </a>
            <a href={profile.phoneHref} className="hover:text-foreground">
              {profile.phone}
            </a>
            <a href={profile.github} className="hover:text-foreground">
              GitHub
            </a>
            <a href={profile.linkedin} className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="link-line"
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <p className="shrink-0 text-xs tracking-[0.18em] text-foreground/45 uppercase">
        {children}
      </p>
      <span aria-hidden className="rule h-px flex-1 bg-foreground/15" />
    </div>
  );
}
