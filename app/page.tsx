import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuHighlights } from "@/components/MenuHighlights";
import { VisitUs } from "@/components/VisitUs";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main>
      <Hero logo={<Logo variant="wordmark" />} />
      <About />
      <MenuHighlights />
      <VisitUs />
      <Footer logo={<Logo variant="logomark" />} />
    </main>
  );
}
