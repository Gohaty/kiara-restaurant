"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { EASE_KIARA } from "./motion";

type MenuItem = {
  name: string;
  note?: string;
  price: string;
};

type MenuSection = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const sections: MenuSection[] = [
  {
    title: "Lola's Kitchen",
    subtitle: "Slow-cooked, home-style",
    items: [
      { name: "Adobo sa Gata", note: "pork belly, coconut, bay", price: "420" },
      { name: "Kaldereta", note: "beef, liver pâté, olives", price: "480" },
      { name: "Lola's Kare-Kare", note: "oxtail, tripe, bagoong", price: "520" },
    ],
  },
  {
    title: "Love-a-Burger",
    subtitle: "On soft brioche, made to order",
    items: [
      { name: "House Smash", note: "double patty, aged cheddar", price: "320" },
      { name: "Longganisa Melt", note: "sweet pork, tomato jam", price: "340" },
      { name: "Kiara Classic", note: "egg, bacon, smoked gouda", price: "360" },
    ],
  },
  {
    title: "Para sa Barkada",
    subtitle: "Meant to be shared",
    items: [
      { name: "Crispy Pata", note: "for the whole table", price: "980" },
      { name: "Sizzling Sisig", note: "the usual way, with egg", price: "420" },
      { name: "Lechon Kawali", note: "with lola's liver sauce", price: "520" },
    ],
  },
];

export function MenuHighlights() {
  return (
    <section
      id="menu"
      className="relative bg-kiara-burgundy px-6 py-28 text-kiara-cream sm:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal>
            <p className="font-body text-xs tracking-[0.4em] text-kiara-cream/60 uppercase">
              A taste of what is on the table
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
              From the kitchen, with love.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-kiara-cream/75 sm:text-xl">
              The menu grows and changes with the season, the mood, and
              whatever tita is craving that week. Here are a few of the
              regulars.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={0.15 * i}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: EASE_KIARA }}
                className="flex h-full flex-col border border-kiara-cream/15 bg-kiara-cream/[0.03] p-8 backdrop-blur-sm"
              >
                <header>
                  <h3 className="font-display text-2xl italic sm:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-2 font-body text-sm tracking-wide text-kiara-cream/60">
                    {section.subtitle}
                  </p>
                </header>

                <ul className="mt-8 flex-1 space-y-5">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <div>
                        <p className="font-display text-lg">{item.name}</p>
                        {item.note && (
                          <p className="mt-1 font-body text-sm text-kiara-cream/55 italic">
                            {item.note}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 font-body text-sm tracking-widest text-kiara-cream/70">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-body text-sm tracking-widest text-kiara-cream/60 uppercase">
            The full menu lives in the house. Come see us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
