import fs from "node:fs";
import path from "node:path";

type LogoProps = {
  variant?: "wordmark" | "logomark";
  className?: string;
  title?: string;
};

const FILES = {
  wordmark: "Logo with Flavor NO BG.svg",
  logomark: "Cream Logomark - NO BG.svg",
} as const;

const cache = new Map<string, string>();

function loadSvg(variant: keyof typeof FILES) {
  const cached = cache.get(variant);
  if (cached) return cached;

  const file = path.join(process.cwd(), "public", "svg", FILES[variant]);
  let raw = fs.readFileSync(file, "utf-8");

  // Main logotype fill (cream) becomes currentColor so Tailwind text-*
  // classes can recolor the logo for either background.
  raw = raw.replace(/#fff6e2/gi, "currentColor");

  // Strip fixed width/height so the SVG scales fluidly via className.
  raw = raw.replace(/\swidth="\d+"/i, "").replace(/\sheight="\d+"/i, "");

  cache.set(variant, raw);
  return raw;
}

export function Logo({
  variant = "wordmark",
  className,
  title = "Kiara",
}: LogoProps) {
  const svg = loadSvg(variant);
  return (
    <span
      role="img"
      aria-label={title}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
