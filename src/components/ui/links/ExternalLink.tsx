import type { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  description: string;
  styles?: string;
  children: string | ReactNode;
}

export function ExternalLink({
  href,
  description,
  styles,
  children,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={description}
      className={styles ? styles : ""}
    >
      {children}
    </a>
  );
}
