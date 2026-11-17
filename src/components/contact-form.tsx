"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/content/profile";

type Fields = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", email: "", message: "" };

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) {
    errors.name = "Add your name.";
  }
  if (!fields.email.trim()) {
    errors.email = "Add your email so Bhumiti can reply.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!fields.message.trim()) {
    errors.message = "Write a short message.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "Add a little more detail, at least a sentence.";
  }
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) {
      setSent(false);
      return;
    }

    const subject = `Portfolio note from ${fields.name.trim()}`;
    const body = `${fields.message.trim()}\n\n— ${fields.name.trim()}\n${fields.email.trim()}`;
    setSent(true);
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          error={errors.name}
          input={
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={fields.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder="Your name"
              onChange={(event) => update("name", event.target.value)}
            />
          }
        />
        <Field
          id="contact-email"
          label="Email"
          error={errors.email}
          input={
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={fields.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder="you@company.com"
              onChange={(event) => update("email", event.target.value)}
            />
          }
        />
      </div>
      <Field
        id="contact-message"
        label="Message"
        error={errors.message}
        input={
          <Textarea
            id="contact-message"
            name="message"
            value={fields.message}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            placeholder="A role, a project, or a question."
            className="min-h-32"
            onChange={(event) => update("message", event.target.value)}
          />
        }
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className={buttonVariants({ size: "lg" })}>
          Write to Bhumiti
        </button>
        <p className="text-sm text-muted-foreground">
          Opens your email app. Nothing is stored on this site.
        </p>
      </div>
      {sent ? (
        <p className="text-sm text-foreground" role="status">
          Your email app should open a draft to {profile.email}. If it does
          not, use the email link above.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  input: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {input}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
