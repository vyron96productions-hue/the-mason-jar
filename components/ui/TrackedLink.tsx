"use client";

import { pushEvent } from "@/lib/gtm";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  gtmEvent: Record<string, unknown>;
  children: React.ReactNode;
}

export function TrackedLink({ gtmEvent, onClick, children, href, target, ...props }: TrackedLinkProps) {
  return (
    <a
      href={href}
      target={target}
      {...props}
      onClick={(e) => {
        pushEvent(gtmEvent);
        onClick?.(e);

        const shouldDelayNavigation =
          href &&
          target !== "_blank" &&
          !e.defaultPrevented &&
          !e.metaKey &&
          !e.ctrlKey &&
          !e.shiftKey &&
          !e.altKey &&
          e.button === 0;

        if (shouldDelayNavigation) {
          e.preventDefault();
          window.setTimeout(() => {
            window.location.assign(href);
          }, 100);
        }
      }}
    >
      {children}
    </a>
  );
}
