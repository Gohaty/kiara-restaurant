export function HeartMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-label="Mom's favorite"
      role="img"
      viewBox="0 0 24 24"
      className={`inline-block h-[0.72em] w-[0.72em] translate-y-[-0.05em] fill-current ${className}`}
    >
      <path d="M12 21s-6.716-4.273-9.193-8.06C1.15 10.36 2.05 6.9 4.8 5.4c2.23-1.22 4.72-.4 6.16 1.3l1.04 1.24 1.04-1.24c1.44-1.7 3.93-2.52 6.16-1.3 2.75 1.5 3.65 4.96 1.99 7.54C18.716 16.727 12 21 12 21z" />
    </svg>
  );
}
