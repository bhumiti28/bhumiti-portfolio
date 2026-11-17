import type { ReactNode } from "react";
import { ResumeToolbar } from "@/components/resume-toolbar";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/content/profile";

export function ResumeDocument() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 print:max-w-none print:px-0 print:py-0">
      <ResumeToolbar />
      <article className="rounded-xl border border-border bg-card px-6 py-8 shadow-sm sm:px-10 sm:py-10 print:rounded-none print:border-0 print:bg-white print:px-0 print:py-0 print:shadow-none">
        <header>
          <h1 className="font-serif text-4xl tracking-tight text-foreground">
            {profile.name}
          </h1>
          <p className="mt-1 text-base text-foreground">{profile.role}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            {profile.locationShort}
            {" · "}
            <a href={profile.phoneHref} className="hover:text-foreground">
              {profile.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-foreground"
            >
              {profile.email}
            </a>
            {" · "}
            <a href={profile.linkedin} className="hover:text-foreground">
              {profile.linkedinHandle}
            </a>
            {" · "}
            <a href={profile.github} className="hover:text-foreground">
              {profile.githubHandle}
            </a>
          </p>
        </header>

        <ResumeSection title="Summary">
          <p className="text-sm leading-6 text-foreground">{profile.summary}</p>
        </ResumeSection>

        <ResumeSection title="Experience">
          <div className="space-y-6">
            {experience.map((role) => (
              <section key={role.company}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    {role.role}, {role.company}
                  </h3>
                  <p className="text-sm text-muted-foreground tabular-nums">
                    {role.dates}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {role.location} · {role.stack}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-6 text-foreground">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Projects">
          <div className="space-y-5">
            {projects.map((project) => (
              <section key={project.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.kicker}</p>
                <p className="mt-1 text-sm leading-6 text-foreground">
                  {project.summary}
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-6 text-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="mt-1 text-sm text-muted-foreground">
                  {project.stack.join(", ")}
                </p>
              </section>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Education">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              {education.degree}, {education.school}
            </h3>
            <p className="text-sm text-muted-foreground tabular-nums">
              {education.date}
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{education.location}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
          <dl className="space-y-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="text-sm leading-6">
                <dt className="inline font-semibold text-foreground">
                  {group.label}:{" "}
                </dt>
                <dd className="inline text-foreground">
                  {group.items.join(", ")}
                </dd>
              </div>
            ))}
          </dl>
        </ResumeSection>
      </article>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6 border-t border-border pt-4">
      <h2 className="mb-2 text-xs tracking-[0.18em] text-primary uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
