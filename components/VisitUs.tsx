import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

const phones = [
  { number: "+63 961 748 9605", href: "tel:+639617489605" },
  { number: "+63 916 734 6808", href: "tel:+639167346808" },
];

const EMAIL = "kiararestaurant.ph@gmail.com";

export function VisitUs() {
  return (
    <section
      id="visit"
      className="relative bg-kiara-cream px-6 py-28 text-kiara-burgundy sm:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
              The door is open.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
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
            <h3 className="mt-6 font-display text-xl italic">Location</h3>
            <p className="mt-3 font-body leading-relaxed text-kiara-burgundy/80">
              Block 1 Lot 26 Dama de Noche Street corner Poinsettia Street,
              Bermuda Heights Subdivision, Antipolo
            </p>
          </Reveal>

          <Reveal delay={0.1} className="bg-kiara-cream p-8 sm:p-10">
            <Phone
              className="h-5 w-5 text-kiara-motif"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="mt-6 font-display text-xl italic">Contact</h3>
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
              <li className="flex items-start gap-2 pt-1">
                <Mail
                  className="mt-1 h-4 w-4 shrink-0 text-kiara-motif"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all transition-colors hover:text-kiara-motif"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="bg-kiara-cream p-8 sm:p-10">
            <Clock
              className="h-5 w-5 text-kiara-motif"
              strokeWidth={1.5}
              aria-hidden
            />
            <h3 className="mt-6 font-display text-xl italic">Hours</h3>
            <p className="mt-3 font-body leading-relaxed text-kiara-burgundy/80">
              Daily 9 AM to 2 AM
            </p>
            <p className="mt-2 font-body leading-relaxed text-kiara-burgundy/70 italic">
              Thursdays 9 AM to 5 PM
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
