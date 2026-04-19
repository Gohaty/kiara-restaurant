import type { Metadata } from "next";
import { MenuBook } from "@/components/MenuBook";

export const metadata: Metadata = {
  title: "Menu · Kiara · The House of Love",
  description:
    "The full Kiara menu — Filipino classics, borrowed recipes, burgers, pizza, coffee, and drinks. Served in Antipolo with a whole lot of love.",
};

export default function MenuPage() {
  return <MenuBook />;
}
