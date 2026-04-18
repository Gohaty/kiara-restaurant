export type PriceTier = { label: string; amount: string };

export type MenuItem = {
  name: string;
  note?: string;
  price: string | PriceTier[];
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

// Curated selection from the full Kiara menu. The complete list lives at
// /menu.html for the QR code; this teaser covers six sections that best
// showcase the range of the house.
export const menuSections: MenuSection[] = [
  {
    id: "pampagana",
    title: "Pampagana",
    subtitle: "To awaken the appetite",
    items: [
      { name: "Lumpia ni Ate", note: "Togue", price: "180" },
      { name: "Special Embutido", price: "230" },
      { name: "Samosa", price: "200" },
      { name: "Batchoy", price: "128" },
      {
        name: "Fries Platter",
        note: "BBQ, cheese, or sour cream",
        price: "170",
      },
    ],
  },
  {
    id: "lolas-kitchen",
    title: "Lola's Kitchen",
    subtitle: "The heart of the house",
    items: [
      {
        name: "Crispy Pata",
        price: [
          { label: "Solo", amount: "398" },
          { label: "Sharing", amount: "628" },
          { label: "Family", amount: "1228" },
        ],
      },
      {
        name: "Sinigang na Baboy sa Palayok",
        price: [
          { label: "Solo", amount: "298" },
          { label: "Sharing", amount: "538" },
          { label: "Family", amount: "928" },
        ],
      },
      {
        name: "Bulalo",
        price: [
          { label: "Solo", amount: "308" },
          { label: "Sharing", amount: "608" },
          { label: "Family", amount: "1228" },
        ],
      },
      {
        name: "Sisig",
        price: [
          { label: "Solo", amount: "250" },
          { label: "Sharing", amount: "375" },
          { label: "Family", amount: "598" },
        ],
      },
      {
        name: "Chicken Pecho Inasal",
        price: [{ label: "Solo", amount: "199" }],
      },
    ],
  },
  {
    id: "pansit",
    title: "Pansit",
    subtitle: "Long life on a plate",
    items: [
      {
        name: "Canton",
        note: "Egg noodles, stir-fried",
        price: [
          { label: "Solo", amount: "198" },
          { label: "Sharing", amount: "378" },
          { label: "Family", amount: "658" },
        ],
      },
      {
        name: "Miki",
        note: "Thick fresh wheat",
        price: [
          { label: "Solo", amount: "198" },
          { label: "Sharing", amount: "378" },
          { label: "Family", amount: "658" },
        ],
      },
      {
        name: "Bihon",
        note: "Thin rice noodles",
        price: [
          { label: "Solo", amount: "198" },
          { label: "Sharing", amount: "378" },
          { label: "Family", amount: "658" },
        ],
      },
      {
        name: "Chami",
        note: "Lucban-style",
        price: [
          { label: "Solo", amount: "198" },
          { label: "Sharing", amount: "378" },
          { label: "Family", amount: "658" },
        ],
      },
    ],
  },
  {
    id: "love-a-burger",
    title: "Love-a-Burger",
    subtitle: "Flame-kissed, made with love",
    items: [
      { name: "Regular Burger", price: "185" },
      { name: "Special Burger", price: "285" },
      {
        name: "Burger ni Lolo",
        note: "Classic cheeseburger, done right",
        price: "220",
      },
      {
        name: "Burger ni Kuya",
        note: "Double patty, cheese, with sapin-sapin on the side",
        price: "285",
      },
    ],
  },
  {
    id: "para-sa-barkada",
    title: "Para sa Barkada",
    subtitle: "Long nights, slow pours, loud laughter",
    items: [
      {
        name: "Beer Bucket 5+1",
        note: "Mix and match, served with peanuts",
        price: "688",
      },
      {
        name: "Beer Bucket 10+1",
        note: "Mix and match, served with peanuts",
        price: "1288",
      },
      {
        name: "Signature Tower Drink",
        note: "Galaxy Tower or Red Punch",
        price: "788",
      },
      {
        name: "Tower Drink Unlimited",
        note: "Unlimited refills, with pulutan",
        price: "1288",
      },
    ],
  },
  {
    id: "kape",
    title: "Kape",
    subtitle: "The reason we open early",
    items: [
      { name: "Araku Specialty", price: "160" },
      { name: "Americano", price: "150" },
      { name: "Long Black", price: "160" },
      { name: "Cappuccino", price: "150" },
      { name: "Cold Brew", price: "160" },
    ],
  },
];
