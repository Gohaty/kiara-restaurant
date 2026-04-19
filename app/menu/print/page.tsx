import type { Metadata } from "next";
import { MenuBook } from "@/components/MenuBook";

export const metadata: Metadata = {
  title: "Menu · Print · Kiara · The House of Love",
  robots: { index: false, follow: false },
};

export default function MenuPrintPage() {
  return <MenuBook frameless />;
}
