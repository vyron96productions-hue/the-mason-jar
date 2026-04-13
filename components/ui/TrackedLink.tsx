"use client";

import { pushEvent } from "@/lib/gtm";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  gtmEvent: Record<string, unknown>;
  children: React.ReactNode;
}

export function TrackedLink({ gtmEvent, onClick, children, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        pushEvent(gtmEvent);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
