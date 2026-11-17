import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { SectionNav } from "@/components/section-nav";
import {
  education,
  experience,
  githubWork,
  profile,
  projects,
  skillGroups,
} from "@/content/profile";

export function Portfolio() {
  return (
    <div className="relative mx-auto flex min-h-full w-full max-w-6xl">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,oklch(0.9_0.045_70)_0%,transparent_42%)]"
      />
      <aside className="sticky top-0 hidden h-dvh w-80 shrink-0 flex-col justify-between overflow-y-auto border-r border-border/80 px-8 py-10 lg:flex">
        <div className="space-y-8">
          <Identity />
          <SectionNav />
        </div>
        <ContactLinks />
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur lg:hidden">
          <div className="flex items-baseline justify-between gap-4 px-5 py-3">
            <a href="#top" className="font-serif text-lg text-foreground">
              {profile.name}
            </a>
            <div className="flex items-center gap-4">
              <Link
                href="/resume"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Print
              </Link>
              <a
                href={profile.resumePdf}
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Résumé
              </a>
            </div>
          </div>
          <SectionNav className="overflow-x-auto px-3 pb-2" />
        </header>

        <main className="px-5 py-8 sm:px-8 lg:px-14 lg:py-16">
          <Identity className="mb-14 lg:hidden" detailed />
          <About />
          <Experience />
          <Work />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

function Identity({
  className,
  detailed = false,
}: {
  className?: string;
  detailed?: boolean;
}) {
  return (
    <div id="top" className={className}>
      <p className="text-xs tracking-[0.22em] text-primary uppercase">
        {profile.location}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-none tracking-tight text-foreground sm:text-5xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-base text-foreground">{profile.role}</p>
      <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
        {profile.hero}
      </p>
      {detailed ? <ContactLinks className="mt-6" /> : null}
    </div>
  );
}

function ContactLinks({ className }: { className?: string }) {
  return (
    <ul className={`space-y-2 text-sm ${className ?? ""}`}>
      <li>
        <External href={profile.github}>{profile.githubHandle}</External>
      </li>
      <li>
        <External href={profile.linkedin}>LinkedIn</External>
      </li>
      <li>
        <a
          href={`mailto:${profile.email}`}
          className="text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {profile.email}
        </a>
      </li>
      <li>
        <a
          href={profile.phoneHref}
          className="text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {profile.phone}
        </a>
      </li>
      <li>
        <a
          href={profile.resumePdf}
          className="text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Résumé PDF
        </a>
      </li>
      <li>
        <Link
          href="/resume"
          className="text-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Printable résumé
        </Link>
      </li>
    </ul>
  );
}

function External({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-foreground underline-offset-4 hover:text-primary hover:underline"
    >
      {children}
      <span aria-hidden className="text-primary">
        ↗
      </span>
    </a>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionLabel index="01" title="About" />
      <p className="max-w-2xl text-base leading-7 text-foreground">
        {profile.summary}
      </p>
      <dl className="mt-10 space-y-5">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-2 sm:grid-cols-[9rem_1fr]">
            <dt className="text-sm text-muted-foreground">{group.label}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mt-20 scroll-mt-24">
      <SectionLabel index="02" title="Experience" />
      <ol className="space-y-12">
        {experience.map((role) => (
          <li key={role.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-2xl text-foreground">
                {role.role}
              </h3>
              <p className="text-sm text-muted-foreground tabular-nums">
                {role.dates}
              </p>
            </div>
            <p className="mt-1 text-sm text-primary">
              {role.company}
              <span className="text-muted-foreground"> · {role.location}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{role.stack}</p>
            <ul className="mt-4 space-y-3">
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="grid grid-cols-[0.75rem_1fr] gap-2 text-sm leading-6 text-foreground"
                >
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mt-20 scroll-mt-24">
      <SectionLabel index="03" title="Selected work" />
      <ol className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.title}
            className="border-l-2 border-primary/70 py-1 pl-5"
          >
            <p className="text-xs tracking-[0.16em] text-primary uppercase">
              {project.kicker}
            </p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-serif text-2xl text-foreground">
                {project.title}
              </h3>
              {project.href && project.linkLabel ? (
                <External href={project.href}>{project.linkLabel}</External>
              ) : null}
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-foreground">
              {project.summary}
            </p>
            <ul className="mt-3 space-y-2">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-6 text-muted-foreground"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <h3 className="text-sm text-muted-foreground">Also on GitHub</h3>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {githubWork.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group grid gap-1 py-4 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-6"
              >
                <span className="font-medium text-foreground group-hover:text-primary">
                  {project.title}
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </span>
                <span className="text-sm text-primary">Code ↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mt-20 scroll-mt-24">
      <SectionLabel index="04" title="Education" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-2xl text-foreground">
          {education.degree}
        </h3>
        <p className="text-sm text-muted-foreground tabular-nums">
          {education.date}
        </p>
      </div>
      <p className="mt-1 text-sm text-primary">
        {education.school}
        <span className="text-muted-foreground"> · {education.location}</span>
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mt-20 scroll-mt-24 pb-8">
      <SectionLabel index="05" title="Contact" />
      <p className="max-w-xl text-sm leading-6 text-muted-foreground">
        For a role or a project, write to{" "}
        <a
          href={`mailto:${profile.email}`}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {profile.email}
        </a>{" "}
        or call{" "}
        <a
          href={profile.phoneHref}
          className="text-foreground underline-offset-4 hover:underline"
        >
          {profile.phone}
        </a>
        . LinkedIn is{" "}
        <External href={profile.linkedin}>{profile.linkedinHandle}</External>.
      </p>
      <div className="mt-8 max-w-xl rounded-xl border border-border bg-card p-5 sm:p-6">
        <ContactForm />
      </div>
      <div className="mt-8">
        <Button variant="outline" render={<a href={profile.resumePdf} />}>
          Download résumé
        </Button>
      </div>
    </section>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3">
      <span className="font-mono text-xs text-primary">{index}</span>
      <h2 className="font-serif text-3xl tracking-tight text-foreground">
        {title}
      </h2>
    </div>
  );
}
