"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE_KIARA } from "./motion";
import { menuSections, type ItemPrice } from "./menuData";

const FEATURED_IDS = [
  "lolas-kitchen",
  "love-a-burger",
  "para-sa-barkada",
] as const;

const featured = FEATURED_IDS.map(
  (id) => menuSections.find((s) => s.id === id)!,
);

function PriceBlock({ price }: { price: ItemPrice }) {
  if (price.kind === "flat") {
    return (
      <span className="font-body text-base tracking-wide tabular-nums text-kiara-cream/85">
        {price.amount}
      </span>
    );
  }
  if (price.kind === "italic") {
    return (
      <span className="font-body text-base text-kiara-cream/70 italic">
        {price.text}
      </span>
    );
  }
  return (
    <dl className="flex flex-col items-end gap-0.5 text-right font-body text-sm">
      {price.tiers.map((tier) => (
        <div key={tier.label} className="flex items-baseline gap-4">
          <dt className="text-[0.65rem] tracking-[0.2em] text-kiara-cream/55 uppercase">
            {tier.label}
          </dt>
          <dd className="w-12 tabular-nums text-kiara-cream/85">
            {tier.amount}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function MenuHighlights() {
  const [activeId, setActiveId] = useState(featured[0].id);
  const active = featured.find((s) => s.id === activeId) ?? featured[0];

  return (
    <section
      id="menu"
      className="relative bg-kiara-burgundy px-6 py-28 text-kiara-cream sm:py-40"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
              From the kitchen, with love.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-kiara-cream/75 sm:text-xl">
              The menu grows and changes with the season, the mood, and
              whatever tita is craving that week. Pick a corner of the house
              to peek into.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="mt-16 flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {featured.map((section) => {
              const isActive = section.id === activeId;
              return (
                <button
                  key={section.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`menu-panel-${section.id}`}
                  id={`menu-tab-${section.id}`}
                  onClick={() => setActiveId(section.id)}
                  className={`rounded-full border px-4 py-1.5 font-body text-[0.8rem] tracking-wide whitespace-nowrap transition-colors duration-300 sm:px-5 sm:py-2 sm:text-base ${
                    isActive
                      ? "border-kiara-cream bg-kiara-cream text-kiara-burgundy"
                      : "border-kiara-cream/30 text-kiara-cream/75 hover:border-kiara-cream/60 hover:text-kiara-cream"
                  }`}
                >
                  {section.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          role="tabpanel"
          id={`menu-panel-${active.id}`}
          aria-labelledby={`menu-tab-${active.id}`}
          className="mt-14 h-[36rem] sm:h-[34rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: EASE_KIARA }}
            >
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-body text-[0.65rem] tracking-[0.35em] text-kiara-cream/55 uppercase sm:text-xs">
                  {active.subtitle}
                </p>
                <h3 className="mt-3 font-display text-3xl italic sm:text-4xl">
                  {active.title}
                </h3>
              </div>

              <ul className="mx-auto mt-10 max-w-2xl divide-y divide-kiara-cream/10">
                {active.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.28,
                      delay: 0.03 * i,
                      ease: EASE_KIARA,
                    }}
                    className="flex items-start justify-between gap-8 py-6"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-lg leading-snug sm:text-xl">
                        {item.name}
                        {item.aside && (
                          <span className="ml-2 font-body text-base text-kiara-cream/70 italic">
                            {item.aside}
                          </span>
                        )}
                      </p>
                      {item.description && (
                        <p className="mt-1.5 font-body text-sm text-kiara-cream/55 italic">
                          {item.description}
                        </p>
                      )}
                      {item.note && (
                        <p className="mt-1.5 font-body text-sm text-kiara-cream/55 italic">
                          <span className="mr-2 font-smallcaps tracking-[0.18em] text-kiara-cream/70 uppercase not-italic">
                            {item.note.prefix}
                          </span>
                          {item.note.text}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 pt-1">
                      <PriceBlock price={item.price} />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 flex flex-col items-center gap-4 text-center">
            <a
              href="/menu"
              className="group inline-flex items-center gap-2 rounded-full border border-kiara-cream/40 px-7 py-3 font-body text-sm tracking-[0.25em] uppercase transition-colors hover:border-kiara-cream hover:bg-kiara-cream hover:text-kiara-burgundy"
            >
              See the full menu
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </a>
            <p className="font-body text-sm text-kiara-cream/60 italic">
              Or come by. Everything is better when tita serves it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
