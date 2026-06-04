type IconProps = {
  className?: string;
};

export function WebsiteIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 13h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function AppIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 3.8 19 7.9v8.2l-7 4.1-7-4.1V7.9l7-4.1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 12 19 7.9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 12v8.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 12 5 7.9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function StructureIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChatIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 18.2V7.8A3.8 3.8 0 0 1 8.8 4h6.4A3.8 3.8 0 0 1 19 7.8v4.4a3.8 3.8 0 0 1-3.8 3.8H10l-5 4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReactIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.2" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.2" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 9h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 9v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15 15.5c.5.4 1.2.6 2 .6 1 0 1.7-.4 1.7-1.2 0-.7-.5-1-1.7-1.3-1.2-.3-2-.8-2-2 0-1.1.9-1.9 2.3-1.9.8 0 1.5.2 2 .6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function AngularIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 20 6.4 18.8 17 12 20.8 5.2 17 4 6.4 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m8.6 16 3.4-8 3.4 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 13h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function TailwindIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 13.2c1.6-3.3 3.7-5 6.3-5 1.6 0 2.8.6 3.7 1.8.7.9 1.5 1.3 2.4 1.3 1 0 1.9-.6 2.6-1.8-1.6 3.3-3.7 5-6.3 5-1.6 0-2.8-.6-3.7-1.8-.7-.9-1.5-1.3-2.4-1.3-1 0-1.9.6-2.6 1.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 21 12l-9 9-9-9 9-9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.4" fill="currentColor" />
      <circle cx="15" cy="15" r="1.4" fill="currentColor" />
      <path d="M9 10.4V12c0 .7.3 1.1.9 1.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10.4 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DesignIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 7.5 9.8 14.2 7.5 16.5l2.3-6.7 6.7-2.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}