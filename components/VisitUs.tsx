import { MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const phones = [
  { number: "+63 961 748 9605", href: "tel:+639617489605" },
  { number: "+63 916 734 6808", href: "tel:+639167346808" },
];

export function VisitUs() {
  return (
    <section
      id="visit"
      className="relative bg-kiara-cream px-6 py-28 text-kiara-burgundy sm:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <p className="font-body text-xs tracking-[0.4em] text-kiara-motif uppercase">
              Visit Us
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
              The door is open.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl font-body text-lg text-kiara-burgundy/80 sm:text-xl">
              Dropping by, booking the house for a birthday, or sending food
              home. Message us and we will take care of it.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-kiara-burgundy/15 sm:grid-cols-3">
          <Reveal className="bg-kiara-cream p-8 sm:p-10">
            <MapPin
              className="h-5 w-5 text-kiara-motif"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="mt-6 font-display text-xl italic">Where to find us</h3>
            <p className="mt-3 font-body leading-relaxed text-kiara-burgundy/80">
              Antipolo, Rizal <br />
              Philippines
            </p>
          </Reveal>

          <Reveal delay={0.1} className="bg-kiara-cream p-8 sm:p-10">
            <Phone
              className="h-5 w-5 text-kiara-motif"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="mt-6 font-display text-xl italic">Say hello</h3>
            <ul className="mt-3 space-y-2 font-body text-kiara-burgundy/80">
              {phones.map((p) => (
                <li key={p.number}>
                  <a
                    href={p.href}
                    className="transition-colors hover:text-kiara-motif"
                  >
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="bg-kiara-cream p-8 sm:p-10">
            <Clock
              className="h-5 w-5 text-kiara-motif"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="mt-6 font-display text-xl italic">House hours</h3>
            <p className="mt-3 font-body leading-relaxed text-kiara-burgundy/80">
              Tuesday to Sunday <br />
              11am until the last plate
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
