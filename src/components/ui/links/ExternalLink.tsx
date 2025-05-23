"use client";

import { gtagEvents } from "@/lib/helpers/gtag";
import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  description: string;
  styles?: string;
  event?: "joinUs" | "docs" | "vkdrDocs" | "devportal" | "blog" | "demo";
  children: string | ReactNode;
}

export function ExternalLink({
  href,
  description,
  styles,
  event,
  children,
}: ExternalLinkProps) {
  const setGtagEvents = () => {
    if (event) return gtagEvents(event);
    return;
  };
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={description}
      className={styles ? styles : ""}
      onClick={setGtagEvents}
    >
      {children}
    </a>
  );
}
