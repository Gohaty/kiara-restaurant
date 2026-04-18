import type { ReactNode } from "react";

type FooterProps = {
  logo: ReactNode;
};

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer({ logo }: FooterProps) {
  return (
    <footer className="relative bg-kiara-burgundy px-6 py-20 text-kiara-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="block w-28 text-kiara-cream [&_svg]:h-auto [&_svg]:w-full">
          {logo}
        </div>

        <p className="max-w-md font-display text-xl leading-relaxed italic sm:text-2xl">
          Salamat sa pagdaan. Come back soon. Bring someone.
        </p>

        <div className="flex items-center gap-6 text-kiara-cream/70">
          <a
            href="#"
            aria-label="Instagram"
            className="transition-colors hover:text-kiara-cream"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="transition-colors hover:text-kiara-cream"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-2 border-t border-kiara-cream/15 pt-8 font-body text-xs tracking-[0.3em] text-kiara-cream/50 uppercase sm:flex-row sm:justify-between">
          <span>Made with love in Antipolo</span>
          <span>&copy; {new Date().getFullYear()} Kiara</span>
        </div>
      </div>
    </footer>
  );
}
