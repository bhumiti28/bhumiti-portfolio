"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function ResumeToolbar() {
  return (
    <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
      <Button variant="outline" render={<Link href="/" />}>
        Back to portfolio
      </Button>
      <div className="flex gap-2">
        <Button variant="outline" render={<a href={profile.resumePdf} />}>
          Download PDF
        </Button>
        <Button type="button" onClick={() => window.print()}>
          Print
        </Button>
      </div>
    </div>
  );
}
