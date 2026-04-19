import { Fragment, type ReactNode } from "react";
import { Logo } from "./Logo";
import { HeartMark } from "./HeartMark";
import {
  menuSections,
  type ItemPrice,
  type FlatBand,
  type MenuItem,
  type MenuSection,
} from "./menuData";

type Tone = "cream" | "burgundy";

const ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
];

const PAPER_TEXTURE = {
  backgroundImage:
    "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
  backgroundSize: "3px 3px, 7px 7px",
  backgroundPosition: "0 0, 1px 2px",
};

const FRAME_BACKGROUND = {
  backgroundImage:
    "radial-gradient(1200px 700px at 10% 0%, #4b2131 0%, transparent 55%), radial-gradient(1100px 800px at 100% 100%, #3c1a29 0%, transparent 60%)",
  backgroundColor: "#2c1320",
};

function PageShell({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  const toneBg =
    tone === "cream"
      ? "bg-kiara-cream text-kiara-burgundy"
      : "bg-kiara-burgundy text-kiara-cream";

  return (
    <section
      data-menu-page
      className={`relative isolate flex w-full flex-col overflow-hidden px-8 pt-12 pb-14 shadow-[0_40px_80px_-40px_rgba(60,20,35,0.4),0_8px_24px_-12px_rgba(60,20,35,0.25)] sm:px-14 sm:pt-16 sm:pb-16 md:aspect-[8.5/11] md:px-24 md:pt-22 md:pb-24 ${toneBg} ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay"
        style={PAPER_TEXTURE}
      />
      <div className="relative z-10 flex h-full w-full flex-col">
        {children}
      </div>
    </section>
  );
}

function PageTopper({
  tone,
  pageNumber,
}: {
  tone: Tone;
  pageNumber: string;
}) {
  const accent =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  return (
    <div
      className={`mb-10 grid grid-cols-[1fr_auto_1fr] items-center font-smallcaps text-[10px] tracking-[0.4em] uppercase opacity-75 md:mb-12 ${accent}`}
    >
      <span>{pageNumber}</span>
      <span
        className={`block w-10 justify-self-center [&_svg]:block [&_svg]:h-auto [&_svg]:w-full md:w-[54px] ${accent}`}
      >
        <Logo variant="logomark" />
      </span>
      <span className="justify-self-end">Kiara · The House of Love</span>
    </div>
  );
}

function PageFooter({
  tone,
  left,
  right,
}: {
  tone: Tone;
  left: string;
  right: string;
}) {
  const accent =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  return (
    <div
      className={`mt-auto flex flex-col items-center gap-3 pt-9 font-smallcaps text-[10px] tracking-[0.4em] uppercase opacity-70 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-4 sm:tracking-[0.45em] ${accent}`}
    >
      <span className="order-2 sm:order-none sm:justify-self-start">{left}</span>
      <span className="order-1 flex items-center gap-1.5 sm:order-none sm:justify-self-center">
        <HeartMark />
        <span aria-hidden>&mdash;</span>
        <span>Mom&rsquo;s favorite</span>
      </span>
      <span className="order-3 sm:order-none sm:justify-self-end">{right}</span>
    </div>
  );
}

function SectionHead({
  tone,
  eyebrow,
  title,
  titleLine2,
  subtitle,
}: {
  tone: Tone;
  eyebrow: string;
  title: string;
  titleLine2?: string;
  subtitle: string;
}) {
  const eyebrowColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  const titleColor =
    tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";
  const subColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-cream/75";
  const ruleColor =
    tone === "cream" ? "bg-kiara-burgundy/55" : "bg-kiara-cream/55";

  return (
    <div className="mb-10 max-w-xl md:mb-14">
      <p
        className={`mb-4 font-smallcaps text-[11px] font-medium tracking-[0.5em] uppercase ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-body text-5xl leading-[0.92] font-bold tracking-[-0.015em] md:text-[84px] ${titleColor}`}
      >
        {title}
        {titleLine2 && (
          <>
            <br />
            {titleLine2}
          </>
        )}
      </h2>
      <p
        className={`mt-3.5 font-body text-xl italic md:text-[22px] ${subColor}`}
      >
        {subtitle}
      </p>
      <div className={`mt-7 h-px w-12 opacity-55 ${ruleColor}`} />
    </div>
  );
}

function PriceDisplay({ price, tone }: { price: ItemPrice; tone: Tone }) {
  const bold = tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";
  const accent =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";

  if (price.kind === "flat") {
    return (
      <span
        className={`font-body text-lg font-bold tracking-[0.02em] whitespace-nowrap md:text-[22px] ${bold}`}
      >
        {price.amount}
      </span>
    );
  }
  if (price.kind === "italic") {
    return (
      <span
        className={`font-body text-[16px] font-medium whitespace-nowrap italic md:text-[18px] ${accent}`}
      >
        {price.text}
      </span>
    );
  }
  return (
    <span
      data-tiered-price
      className={`flex flex-col items-end gap-0.5 font-body text-base font-bold tracking-[0.02em] whitespace-nowrap md:block md:text-lg md:leading-normal lg:text-[22px] ${bold}`}
    >
      {price.tiers.map((t, i) => (
        <span key={t.label} data-tier className="flex items-baseline gap-2 md:inline md:gap-0">
          {i > 0 && (
            <span
              data-tier-sep
              className={`hidden font-normal opacity-70 md:mx-2 md:inline ${accent}`}
              aria-hidden
            >
              ·
            </span>
          )}
          <span
            className={`font-smallcaps text-[10px] font-medium tracking-[0.2em] uppercase md:mr-[5px] md:text-[11px] ${accent}`}
          >
            {t.label}
          </span>
          <span className="tabular-nums">{t.amount}</span>
        </span>
      ))}
    </span>
  );
}

function MenuItemRow({
  item,
  tone,
  isFirst,
}: {
  item: MenuItem;
  tone: Tone;
  isFirst: boolean;
}) {
  const nameColor =
    tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";
  const asideColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  const descColor =
    tone === "cream" ? "text-kiara-burgundy/70" : "text-kiara-cream/70";
  const noteItalicColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-cream/70";
  const noteStrongColor =
    tone === "cream" ? "text-kiara-burgundy-deep" : "text-kiara-cream";
  const leaderColor =
    tone === "cream" ? "border-kiara-burgundy" : "border-kiara-cream";
  const borderColor =
    tone === "cream"
      ? "border-kiara-burgundy/10"
      : "border-kiara-cream/15";

  const row = (
    <div
      data-menu-row
      className="flex w-full items-start gap-3 md:items-end md:gap-3.5"
    >
      <span
        data-item-name
        className={`flex-1 font-body text-[17px] font-bold tracking-[0.005em] md:flex-initial md:text-[24px] ${nameColor}`}
      >
        {item.favorite && (
          <HeartMark className={`mr-2 ${asideColor}`} />
        )}
        {item.name}
        {item.aside && (
          <em
            className={`ml-1.5 font-body text-sm font-normal italic md:text-[18px] ${asideColor}`}
          >
            {item.aside}
          </em>
        )}
      </span>
      <span
        aria-hidden
        data-leaders
        className={`mx-1 mb-[9px] hidden min-w-5 flex-1 self-end border-b-[1.5px] border-dotted opacity-30 md:block ${leaderColor}`}
      />
      <PriceDisplay price={item.price} tone={tone} />
    </div>
  );

  const hasStack = Boolean(item.description || item.note);

  return (
    <li
      className={`break-inside-avoid py-3.5 ${isFirst ? "" : `border-t ${borderColor}`}`}
    >
      {hasStack ? (
        <div className="flex w-full flex-col gap-1">
          {row}
          {item.description && (
            <p
              className={`mt-0.5 max-w-lg font-body text-[15px] leading-[1.5] tracking-[0.01em] whitespace-pre-line italic ${descColor}`}
            >
              {item.description}
            </p>
          )}
          {item.note && (
            <p
              className={`mt-0.5 font-body text-[15px] tracking-[0.01em] italic ${noteItalicColor}`}
            >
              <strong
                className={`mr-2 font-smallcaps text-[13px] font-semibold tracking-[0.18em] uppercase not-italic ${noteStrongColor}`}
              >
                {item.note.prefix}
              </strong>
              {item.note.text}
            </p>
          )}
        </div>
      ) : (
        row
      )}
    </li>
  );
}

function FlatBandBlock({ band, tone }: { band: FlatBand; tone: Tone }) {
  const bandColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  const strongColor =
    tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";

  return (
    <p
      className={`mb-7 font-smallcaps text-[13px] font-medium tracking-[0.32em] uppercase ${bandColor}`}
    >
      {band.lead && <>{band.lead}&nbsp;&nbsp;·&nbsp;&nbsp;</>}
      {band.singleAmount ? (
        <strong
          className={`mx-[3px] font-body text-[22px] font-bold tracking-normal normal-case italic ${strongColor}`}
        >
          {band.singleAmount}
        </strong>
      ) : (
        band.tiers.map((t, i) => (
          <Fragment key={t.label}>
            {i > 0 && <> · </>}
            <strong
              className={`mx-[3px] font-body text-[22px] font-bold tracking-normal normal-case italic ${strongColor}`}
            >
              {t.label} {t.amount}
            </strong>
          </Fragment>
        ))
      )}
    </p>
  );
}

function SectionPage({
  section,
  pageNumber,
}: {
  section: MenuSection;
  pageNumber: string;
}) {
  const tone: Tone = "cream";
  return (
    <PageShell tone={tone}>
      <PageTopper tone={tone} pageNumber={pageNumber} />
      <SectionHead
        tone={tone}
        eyebrow={section.eyebrow}
        title={section.title}
        titleLine2={section.titleLine2}
        subtitle={section.subtitle}
      />
      {section.flatBand && (
        <FlatBandBlock band={section.flatBand} tone={tone} />
      )}
      <ul className="m-0 list-none p-0">
        {section.items.map((item, i) => (
          <MenuItemRow
            key={item.name}
            item={item}
            tone={tone}
            isFirst={i === 0}
          />
        ))}
      </ul>
      {section.flavorGrid && (
        <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-12 gap-y-3 font-body text-xl font-semibold text-kiara-burgundy md:text-[22px]">
          {section.flavorGrid.map((f) => (
            <div key={f}>{f}</div>
          ))}
        </div>
      )}
      {section.footerNote && (
        <p className="mt-14 max-w-md font-body text-lg leading-[1.6] text-kiara-motif italic">
          {section.footerNote}
        </p>
      )}
      <PageFooter tone={tone} left={section.title} right={pageNumber} />
    </PageShell>
  );
}

function CoverPage() {
  return (
    <PageShell tone="burgundy" className="!p-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay"
        style={PAPER_TEXTURE}
      />
      <div className="absolute inset-0 z-10 grid place-items-center">
        <p className="absolute top-14 right-0 left-0 m-0 text-center font-smallcaps text-[13px] font-medium tracking-[0.55em] text-kiara-cream/75 uppercase md:top-20">
          Catering
          <span className="mx-3 text-kiara-motif-soft">·</span>
          Restaurant
          <span className="mx-3 text-kiara-motif-soft">·</span>
          Cafe
        </p>
        <div className="w-[min(640px,70%)] text-kiara-cream [&_svg]:block [&_svg]:h-auto [&_svg]:w-full">
          <Logo variant="wordmark" />
        </div>
        <p className="absolute right-0 bottom-12 left-0 text-center font-smallcaps text-[10px] tracking-[0.6em] text-kiara-cream/55 uppercase md:bottom-[72px]">
          Antipolo · Philippines
        </p>
      </div>
    </PageShell>
  );
}

function LetterPage({
  tone,
  logoColor,
  eyebrow,
  title,
  titleItalic = false,
  subtitle,
  paragraphs,
  signoff,
}: {
  tone: Tone;
  logoColor: string;
  eyebrow: string;
  title: ReactNode;
  titleItalic?: boolean;
  subtitle: string;
  paragraphs: string[];
  signoff: ReactNode;
}) {
  const eyebrowColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-motif-soft";
  const titleColor =
    tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";
  const subColor =
    tone === "cream" ? "text-kiara-motif" : "text-kiara-cream/80";
  const bodyColor =
    tone === "cream" ? "text-kiara-burgundy" : "text-kiara-cream";
  const ruleColor =
    tone === "cream" ? "bg-kiara-motif/70" : "bg-kiara-cream/55";

  return (
    <PageShell tone={tone} className="!px-10 !py-20 md:!px-30 md:!py-[140px]">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div
          className={`mb-8 w-14 opacity-85 [&_svg]:block [&_svg]:h-auto [&_svg]:w-full md:w-[58px] ${logoColor}`}
        >
          <Logo variant="logomark" />
        </div>
        <p
          className={`mb-5 font-smallcaps text-xs font-medium tracking-[0.55em] uppercase ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
        <h1
          className={`mb-2 font-body text-5xl leading-none font-bold tracking-[-0.015em] md:text-[76px] ${titleItalic ? "italic" : ""} ${titleColor}`}
        >
          {title}
        </h1>
        <p
          className={`mb-10 font-body text-2xl font-normal italic md:mb-11 md:text-[28px] ${subColor}`}
        >
          {subtitle}
        </p>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`m-0 mb-5 max-w-lg font-body text-lg leading-[1.7] md:text-[21px] [text-wrap:pretty] ${bodyColor}`}
          >
            {p}
          </p>
        ))}
        <div className={`my-8 h-px w-14 opacity-55 ${ruleColor}`} />
        <p
          className={`m-0 font-body text-2xl italic md:text-[26px] ${bodyColor}`}
        >
          {signoff}
        </p>
      </div>
    </PageShell>
  );
}

export function MenuBook({ frameless = false }: { frameless?: boolean } = {}) {
  return (
    <main
      data-menu-frame
      className={`min-h-screen px-6 py-14 md:px-6 md:py-14 ${frameless ? "bg-white [&_[data-menu-page]]:shadow-none" : ""}`}
      style={frameless ? undefined : FRAME_BACKGROUND}
    >
      <div className="mx-auto flex max-w-[960px] flex-col gap-10 md:gap-12">
        <CoverPage />
        <LetterPage
          tone="cream"
          logoColor="text-kiara-burgundy"
          eyebrow="A Letter from the House"
          title="Welcome to Kiara"
          subtitle="The House of Love"
          paragraphs={[
            "Tucked into the hills of Antipolo, Kiara began as a family home. The walls hold years of laughter, the kitchen has fed generations, and every corner carries a story worth staying for.",
            "We opened our doors because food tastes better when shared, and home feels bigger when filled with guests. Whether you are here for a quiet coffee, a long lunch with family, or a celebration that spills into the evening, you are exactly where you should be.",
          ]}
          signoff={
            <>
              Kumain ka na.
              <br />
              Make yourself at home.
            </>
          }
        />
        {menuSections.map((section, i) => (
          <SectionPage
            key={section.id}
            section={section}
            pageNumber={ROMAN[i]}
          />
        ))}
        <LetterPage
          tone="burgundy"
          logoColor="text-kiara-cream"
          eyebrow="Salamat po"
          title={
            <>
              Thank you
              <br />
              for coming home.
            </>
          }
          titleItalic
          subtitle="Kiara · The House of Love"
          paragraphs={[
            "Every plate was cooked in a family kitchen, built from our lola\u2019s recipes, our titas\u2019 corrections, and a whole lot of love.",
          ]}
          signoff={
            <>
              Until the next table, until the next pour,
              <br />
              you are always welcome here.
            </>
          }
        />
      </div>
    </main>
  );
}
