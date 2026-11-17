import type { ReactNode } from "react";
import Link from "next/link";
import { LocalClock } from "@/components/local-clock";
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
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f5f5f7]/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-sm font-medium tracking-tight">
            BG
          </a>
          <nav aria-label="Sections" className="flex items-center gap-4 text-xs tracking-[0.16em] uppercase sm:gap-6">
            <a href="#work" className="hover:text-black/60">
              Work
            </a>
            <a href="#journey" className="hover:text-black/60">
              Journey
            </a>
            <a href="#contact" className="hover:text-black/60">
              Contact
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-black/60"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-24 sm:px-8 sm:pt-24">
        <p className="flex items-center gap-2 text-sm text-black/55">
          <span>New Jersey</span>
          <span aria-hidden className="size-1.5 rounded-full bg-emerald-700" />
          <LocalClock />
        </p>
        <p className="mt-8 text-xs tracking-[0.18em] text-black/50 uppercase">
          {profile.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
          {profile.hero}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base">
          <TextLink href="#journey">View journey</TextLink>
          <TextLink href={`mailto:${profile.email}`}>Let’s talk</TextLink>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {proof.map((item) => (
            <div key={item.label}>
              <dt className="text-4xl font-medium tracking-tight sm:text-5xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-xs tracking-[0.14em] text-black/50 uppercase">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>

        <section id="work" className="mt-28 scroll-mt-24 max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-black/45 uppercase">
            Currently
          </p>
          <p className="mt-4 text-sm text-black/55">
            {featured.title} · {profile.role}, Epic Systems
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Turning noisy healthcare operations into work a team can act on.
          </h2>
          <p className="mt-5 text-base leading-7 text-black/75">
            {featured.summary}
          </p>
          <p className="mt-8 text-xs tracking-[0.18em] text-black/45 uppercase">
            Systems checklist
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Multi-agent RAG, with a human still in the approval path</li>
            <li>Kafka and FastAPI ingestion into prioritized queues</li>
            <li>Evals, traces, JWT/RBAC, and PII-safe logs</li>
          </ul>
          <p className="mt-4 text-sm text-black/50">
            {featured.stack.join(" · ")}
          </p>

          <div className="mt-12 border-t border-black/10 pt-8">
            <p className="text-xs tracking-[0.16em] text-black/45 uppercase">
              {judge.kicker}
            </p>
            <h3 className="mt-2 text-2xl font-medium tracking-tight">
              {judge.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-black/70">
              {judge.summary}
            </p>
            {judge.href ? (
              <a
                href={judge.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block border-b border-black/30 pb-0.5 text-sm hover:border-black"
              >
                {judge.linkLabel} ↗
              </a>
            ) : null}
          </div>

          <div className="mt-12">
            <h3 className="text-xs tracking-[0.18em] text-black/45 uppercase">
              Also on GitHub
            </h3>
            <ul className="mt-4 divide-y divide-black/10 border-y border-black/10">
              {githubWork.map((project) => (
                <li key={project.title}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6"
                  >
                    <span className="font-medium">{project.title}</span>
                    <span className="text-sm leading-6 text-black/60">
                      {project.summary}
                    </span>
                    <span className="text-sm">Code ↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="journey" className="mt-28 scroll-mt-24 max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-black/45 uppercase">
            Journey
          </p>
          <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight sm:text-4xl">
            Career headlines from healthcare and enterprise systems.
          </h2>
          <ol className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {experience.map((role) => (
              <li key={role.company} className="py-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-medium">{role.company}</h3>
                  <p className="text-sm text-black/50">{role.dates}</p>
                </div>
                <p className="mt-1 text-sm text-black/70">
                  {role.role} · {role.location}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/80">
                  {role.line}
                </p>
                <p className="mt-3 text-sm text-black/45">
                  {role.stack.replaceAll(", ", " · ")}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-black/60">
            {education.degree}, {education.school} · {education.location} ·{" "}
            {education.date}
          </p>
        </section>

        <section id="contact" className="mt-28 scroll-mt-24 max-w-3xl">
          <p className="text-xs tracking-[0.18em] text-black/45 uppercase">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl leading-tight font-medium tracking-tight sm:text-6xl">
            Let’s build something that stays up.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-black/70">
            If you need someone who can take a healthcare or enterprise system
            from messy data to a reliable service, send a note. The best
            conversations start short.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <TextLink href={`mailto:${profile.email}`}>Send an email</TextLink>
            <TextLink href={profile.linkedin}>LinkedIn</TextLink>
            <TextLink href={profile.resumePdf}>Résumé</TextLink>
            <Link
              href="/resume"
              className="border-b border-black/30 pb-0.5 hover:border-black"
            >
              Printable page
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-black/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Building reliable data systems for healthcare and enterprise teams.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={`mailto:${profile.email}`} className="hover:text-black">
              Email
            </a>
            <a href={profile.phoneHref} className="hover:text-black">
              {profile.phone}
            </a>
            <a href={profile.github} className="hover:text-black">
              GitHub
            </a>
            <a href={profile.linkedin} className="hover:text-black">
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
      className="border-b border-black/30 pb-0.5 hover:border-black"
    >
      {children}
    </a>
  );
}
