import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative bg-kiara-cream px-6 py-28 text-kiara-burgundy sm:py-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight font-light italic sm:text-5xl md:text-6xl">
            Kumain ka na. <br className="hidden sm:block" />
            Make yourself at home.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 h-px w-16 bg-kiara-burgundy/30" />
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-kiara-burgundy/85 sm:text-xl">
            <p>
              Kiara was our home before it was a restaurant. A house in Antipolo
              where tables got pulled together, stories ran long, and there was
              always too much food. We just opened the door so you can stay a
              while.
            </p>
            <p>
              Everything is cooked the way it has always been cooked here.
              Lovingly, a little slow, and with the expectation that you will
              ask for seconds.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
