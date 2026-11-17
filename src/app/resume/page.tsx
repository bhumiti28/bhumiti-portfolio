import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume-document";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${profile.name} résumé. ${profile.role} in ${profile.location}.`,
};

export default function ResumePage() {
  return <ResumeDocument />;
}
