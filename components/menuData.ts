export type PriceTier = { label: string; amount: string };

export type ItemPrice =
  | { kind: "flat"; amount: string }
  | { kind: "tiered"; tiers: PriceTier[] }
  | { kind: "italic"; text: string };

export type InlineNote = { prefix: string; text: string };

export type MenuItem = {
  name: string;
  aside?: string;
  note?: InlineNote;
  description?: string;
  price: ItemPrice;
};

export type FlatBand = {
  lead?: string;
  tiers: PriceTier[];
  singleAmount?: string;
};

export type MenuSection = {
  id: string;
  eyebrow: string;
  title: string;
  titleLine2?: string;
  subtitle: string;
  items: MenuItem[];
  flatBand?: FlatBand;
  footerNote?: string;
  flavorGrid?: string[];
};

const flat = (amount: string): ItemPrice => ({ kind: "flat", amount });
const tiers = (...t: [string, string][]): ItemPrice => ({
  kind: "tiered",
  tiers: t.map(([label, amount]) => ({ label, amount })),
});
const italic = (text: string): ItemPrice => ({ kind: "italic", text });

export const menuSections: MenuSection[] = [
  {
    id: "pampagana",
    eyebrow: "Starters & Small Plates",
    title: "Pampagana",
    subtitle: "To awaken the appetite.",
    items: [
      { name: "Lumpia ni Ate", aside: "Togue", price: flat("180") },
      { name: "Special Embutido", price: flat("230") },
      { name: "Samosa", price: flat("200") },
      { name: "Peanuts", price: flat("75") },
      { name: "Mango Salsa", price: flat("150") },
      { name: "Batchoy", price: flat("128") },
      { name: "Kinalas na Baboy", price: flat("98") },
      { name: "Lugaw", aside: "Tokwa\u2019t Baboy", price: flat("89") },
      {
        name: "Fries Platter",
        aside: "Seasoned",
        price: flat("170"),
        note: { prefix: "Choice of", text: "BBQ · Cheese · Sour Cream" },
      },
    ],
  },
  {
    id: "lolas-kitchen",
    eyebrow: "Filipino Classics",
    title: "Lola\u2019s Kitchen",
    subtitle: "The heart of the house.",
    items: [
      {
        name: "Chicken Pecho Inasal",
        price: tiers(["Solo", "199"]),
      },
      {
        name: "Crispy Pata",
        price: tiers(["Solo", "398"], ["Sharing", "628"], ["Family", "1228"]),
      },
      {
        name: "Lechon Bagnet",
        price: tiers(["Solo", "248"], ["Sharing", "428"], ["Family", "828"]),
      },
      {
        name: "Sinigang na Baboy",
        aside: "sa Palayok",
        price: tiers(["Solo", "298"], ["Sharing", "538"], ["Family", "928"]),
      },
      {
        name: "Bulalo",
        price: tiers(["Solo", "308"], ["Sharing", "608"], ["Family", "1228"]),
      },
      {
        name: "Nilagang Baka",
        price: tiers(["Sharing", "475"], ["Family", "730"]),
      },
      {
        name: "Sisig",
        price: tiers(["Solo", "250"], ["Sharing", "375"], ["Family", "598"]),
      },
      {
        name: "Loaded Garlic Bangus Belly",
        price: tiers(["Solo", "208"], ["Sharing", "338"], ["Family", "698"]),
      },
      {
        name: "Fried Chicken",
        price: tiers(["Platter", "398"], ["Whole", "698"]),
      },
    ],
  },
  {
    id: "pansit",
    eyebrow: "Dine-In Portions",
    title: "Pansit",
    subtitle: "Long life on a plate.",
    flatBand: {
      lead: "Each noodle priced the same",
      tiers: [
        { label: "Solo", amount: "198" },
        { label: "Sharing", amount: "378" },
        { label: "Family", amount: "658" },
      ],
    },
    items: [
      {
        name: "Canton",
        aside: "egg noodles, stir-fried",
        price: italic("198 / 378 / 658"),
      },
      {
        name: "Miki",
        aside: "thick fresh wheat",
        price: italic("198 / 378 / 658"),
      },
      {
        name: "Bihon",
        aside: "thin rice noodles",
        price: italic("198 / 378 / 658"),
      },
      {
        name: "Chami",
        aside: "Lucban-style",
        price: italic("198 / 378 / 658"),
      },
    ],
  },
  {
    id: "bilao",
    eyebrow: "For Takeout & Catering",
    title: "Bilao",
    subtitle: "Woven trays, made for a crowd.",
    items: [
      {
        name: "Pansit Bilao",
        price: tiers(["Small", "500"], ["Medium", "650"], ["Large", "800"]),
        note: { prefix: "Choice of", text: "Canton · Bihon · Miki · Chami" },
      },
    ],
    footerNote:
      "Order a day ahead for pickup or delivery. Larger trays and full catering spreads available on request.",
  },
  {
    id: "kanin",
    eyebrow: "Rice",
    title: "Kanin",
    subtitle: "The quiet center of every table.",
    items: [
      {
        name: "Plain Rice",
        price: tiers(["Solo", "68"], ["Sharing", "168"], ["Family", "280"]),
      },
      {
        name: "Garlic Rice",
        price: tiers(["Solo", "98"], ["Sharing", "170"], ["Family", "298"]),
      },
      {
        name: "Chao Fan Rice",
        price: tiers(["Solo", "98"], ["Sharing", "178"], ["Large", "298"]),
      },
      {
        name: "Chao Fan with Topping",
        price: flat("148"),
        note: {
          prefix: "Choose one",
          text: "Tapa · Pork · Chicken · Corned Beef · Hotdog · Lechon · Longganisa · Tocino · Liempo · Hungarian · Bacon · Maling · Siomai · Shanghai · Batutay Longganisa · Sisig",
        },
      },
    ],
  },
  {
    id: "from-the-east",
    eyebrow: "Travels & Borrowed Recipes",
    title: "From the East",
    subtitle: "Japanese favorites, brought home to the table.",
    items: [
      { name: "Tonkatsu", price: flat("208") },
      { name: "Katsudon", price: flat("208") },
      {
        name: "Chicken Teriyaki",
        price: tiers(["Solo", "250"], ["Sharing", "488"]),
      },
      {
        name: "Garlic Pepper Beef",
        price: tiers(["Solo", "208"], ["Sharing", "388"]),
      },
      { name: "Beef Gyudon", price: flat("258") },
      { name: "Maki", price: tiers(["6 pcs", "180"]) },
      { name: "Miso Soup", price: flat("188") },
    ],
  },
  {
    id: "from-the-subcontinent",
    eyebrow: "Travels & Borrowed Recipes",
    title: "From the",
    titleLine2: "Subcontinent",
    subtitle: "Indian warmth, by way of the home kitchen.",
    items: [
      {
        name: "Chicken Tikka Masala",
        price: tiers(["Solo", "275"], ["Sharing", "429"], ["Family", "750"]),
      },
      {
        name: "Chicken Tandoori",
        price: tiers(["Sharing", "325"]),
      },
      {
        name: "Chicken Biryani",
        price: tiers(["Sharing", "350"], ["Family", "530"]),
      },
      {
        name: "Mutton Biryani",
        price: tiers(["Sharing", "788"], ["Family", "1288"]),
      },
    ],
  },
  {
    id: "love-a-burger",
    eyebrow: "Between the Buns",
    title: "Love-a-Burger",
    subtitle: "Flame-kissed, made with love.",
    items: [
      {
        name: "Regular Burger",
        price: flat("185"),
        description: "Beef and pork patty mix, spicy.",
      },
      {
        name: "Special Burger",
        price: flat("285"),
        description: "Two of them. For couples.",
      },
      {
        name: "Burger ni Kuya",
        price: flat("285"),
        description: "Double patty. Sapin-sapin. Not the dessert.",
      },
      {
        name: "Burger ni Lolo",
        price: flat("220"),
        description: "Longganisa patty.",
      },
    ],
  },
  {
    id: "chicken-wings",
    eyebrow: "Six Pieces · One Flavor",
    title: "Chicken Wings",
    subtitle: "Pick your sauce, we handle the rest.",
    items: [{ name: "Six Pieces, one flavor", price: flat("298") }],
    flavorGrid: [
      "Buffalo",
      "Soy Garlic",
      "BBQ",
      "Teriyaki",
      "Honey Garlic",
      "Garlic Parmesan",
    ],
  },
  {
    id: "pizza",
    eyebrow: "Hand-tossed, Family Oven",
    title: "Pizza",
    subtitle: "Simple pies, proper crust.",
    flatBand: {
      lead: "Every pie",
      tiers: [
        { label: "Solo", amount: "190" },
        { label: "Sharing", amount: "300" },
        { label: "Family", amount: "500" },
      ],
    },
    items: [
      { name: "Ham & Cheese", price: italic("a classic") },
      { name: "Hawaiian", price: italic("sweet and smoky") },
      { name: "Pepperoni", price: italic("the house favorite") },
    ],
  },
  {
    id: "almusal",
    eyebrow: "All-Day Breakfast",
    title: "Almusal",
    titleLine2: "Buong Araw",
    subtitle: "Because morning is a mood, not a time.",
    items: [
      {
        name: "Giant Breakfast",
        price: flat("275"),
        description:
          "Sunny-side-up egg, sliced chicken, tuna sandwich, rice, and brewed coffee.",
      },
      {
        name: "Clubhouse Sandwich",
        price: flat("250"),
        description:
          "Wheat bread, ham, cheese, egg salad, lettuce, and tomato. Served with fries and Kiara Sauce, our home-made cream sauce. Ingredients: love.",
      },
    ],
  },
  {
    id: "para-sa-barkada",
    eyebrow: "For the Group",
    title: "Para sa Barkada",
    subtitle: "Long nights, slow pours, loud laughter.",
    items: [
      {
        name: "Beer Bucket 5+1",
        price: flat("688"),
        description:
          "Mix and match based on available brands. Served with peanuts.",
      },
      {
        name: "Beer Bucket 10+1",
        price: flat("1288"),
        description:
          "Mix and match based on available brands. Served with sisig (sharing size).",
      },
      {
        name: "Signature Tower Drink",
        price: flat("788"),
        description:
          "Galaxy Tower — grapes, brandy, blue curaçao wine. · Red Punch — strawberry, cherry, whiskey.",
      },
      {
        name: "Tower Drink Unlimited",
        price: flat("1288"),
        description:
          "Bottomless tower. Peanuts served sharing size (not unlimited).",
      },
    ],
  },
  {
    id: "kape",
    eyebrow: "Hot Coffee",
    title: "Kape",
    subtitle: "The reason we open early.",
    items: [
      { name: "Araku Specialty", price: flat("160") },
      { name: "Americano", price: flat("150") },
      { name: "Long Black", price: flat("160") },
      { name: "Cappuccino", price: flat("150") },
      { name: "Cold Brew", price: flat("160") },
    ],
  },
  {
    id: "frappes",
    eyebrow: "Iced, blended, cold as the hills",
    title: "Frappes",
    subtitle: "Iced and blended, straight from the bar.",
    flatBand: {
      lead: "Most frappes",
      tiers: [],
      singleAmount: "170",
    },
    items: [
      { name: "Caramel Macchiato", price: italic("170") },
      { name: "Cookies & Cream", price: italic("170") },
      { name: "Brewed Coffee with Cream", price: flat("140") },
      { name: "Strawberry", price: italic("170") },
      { name: "Coffee", price: italic("170") },
      { name: "Mochaccino Jelly", price: italic("170") },
    ],
  },
  {
    id: "inumin",
    eyebrow: "Drinks",
    title: "Inumin",
    subtitle: "For thirst, for the table, for just because.",
    items: [
      { name: "Coke Float", price: flat("209") },
      { name: "Mexican Hot Chocolate", price: flat("225") },
      {
        name: "Flexitarian Lassi",
        price: flat("230"),
        note: { prefix: "Choose", text: "Spicy · Mango · Sweet" },
      },
    ],
  },
];
