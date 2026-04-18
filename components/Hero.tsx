"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EASE_KIARA } from "./motion";

type HeroProps = {
  logo: ReactNode;
};

export function Hero({ logo }: HeroProps) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-kiara-burgundy px-6 text-kiara-cream"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_20%_20%,#fff6e2_0,transparent_40%),radial-gradient(circle_at_80%_70%,#fff6e2_0,transparent_35%)]" />

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_KIARA }}
          className="font-body text-sm tracking-[0.38em] text-kiara-cream/70 uppercase"
        >
          Catering · Restaurant · Cafe
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: EASE_KIARA,
          }}
          className="mt-12 block w-[min(90vw,520px)] text-kiara-cream [&_svg]:h-auto [&_svg]:w-full"
        >
          {logo}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: EASE_KIARA,
          }}
          className="mt-10 font-display text-4xl font-light tracking-wide italic sm:text-5xl"
        >
          The House of Love
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 1.1 }}
          className="mt-6 max-w-md font-body text-lg leading-relaxed text-kiara-cream/80 sm:text-xl"
        >
          A family home in Antipolo, opened up for gathering, kain, and
          unhurried afternoons.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          href="#about"
          className="mt-16 flex flex-col items-center gap-3 text-xs tracking-[0.3em] text-kiara-cream/60 uppercase transition-colors hover:text-kiara-cream"
        >
          <span>Come in</span>
          <span
            aria-hidden
            className="block h-10 w-px bg-kiara-cream/30"
          />
        </motion.a>
      </div>
    </section>
  );
}
