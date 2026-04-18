"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "./Reveal";
import { EASE_KIARA } from "./motion";

const tiles: { label: string; hint: string; aspect: string }[] = [
  { label: "The lanai", hint: "afternoon light, long table", aspect: "aspect-[4/5]" },
  { label: "Sunday lunch", hint: "rice, ulam, iced tea", aspect: "aspect-[4/3]" },
  { label: "The garden", hint: "sampaguita, old tiles", aspect: "aspect-[3/4]" },
  { label: "Kitchen still", hint: "lola's hands at work", aspect: "aspect-[5/4]" },
];

export function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="atmosphere"
      ref={ref}
      className="relative overflow-hidden bg-kiara-cream px-6 py-28 text-kiara-burgundy sm:py-40"
    >
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_30%_20%,rgba(171,95,100,0.08),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-end gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <p className="font-body text-xs tracking-[0.4em] text-kiara-motif uppercase">
                The House
              </p>
              <h2 className="mt-6 font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
                A table that keeps <br /> making room.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-lg leading-relaxed text-kiara-burgundy/80 sm:text-xl">
              Warm wood, soft cloth, the hum of conversation from the next
              table over. Stay for coffee. Stay for the afternoon. No one is in
              a hurry here.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {tiles.map((tile, i) => (
            <Reveal key={tile.label} delay={0.1 * i}>
              <motion.figure
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: EASE_KIARA }}
                className={`relative ${tile.aspect} overflow-hidden bg-kiara-burgundy/10`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-kiara-burgundy/20 via-kiara-motif/10 to-kiara-burgundy/30" />
                <figcaption className="absolute inset-0 flex flex-col justify-end gap-1 p-5">
                  <p className="font-display text-lg italic">{tile.label}</p>
                  <p className="font-body text-xs tracking-widest text-kiara-burgundy/70 uppercase">
                    {tile.hint}
                  </p>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
