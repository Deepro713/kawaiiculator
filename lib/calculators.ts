import type { PetType } from "@/app/components/Pet";

export type Accent =
  | "pink"
  | "peach"
  | "mint"
  | "coral"
  | "lavender"
  | "sky"
  | "teal"
  | "rose";

export type Calculator = {
  slug: string;
  name: string;
  domain: string;
  pet: PetType;
  petName: string;
  accent: Accent;
  tagline: string;
  say: string; // what the pet "says" on the calculator page
};

export const calculators: Calculator[] = [
  {
    slug: "basic",
    name: "Basic",
    domain: "Everyday",
    pet: "cat",
    petName: "Mochi",
    accent: "pink",
    tagline: "Add, subtract & everything nyan~",
    say: "Tap the keys and I'll do the sums for you!",
  },
  {
    slug: "tip",
    name: "Tip Splitter",
    domain: "Dining",
    pet: "puppy",
    petName: "Biscuit",
    accent: "peach",
    tagline: "Split the bill without the ruff math.",
    say: "How was dinner? Let's split it fair and square!",
  },
  {
    slug: "bmi",
    name: "BMI",
    domain: "Health",
    pet: "bunny",
    petName: "Momo",
    accent: "mint",
    tagline: "A hoppy little health check.",
    say: "Let's check in on you — gently, I promise!",
  },
  {
    slug: "converter",
    name: "Unit Converter",
    domain: "Science",
    pet: "fox",
    petName: "Kon",
    accent: "coral",
    tagline: "Length, weight & temperature, converted.",
    say: "Give me a number and a unit — I'm clever like that!",
  },
  {
    slug: "loan",
    name: "Loan",
    domain: "Finance",
    pet: "bear",
    petName: "Kuma",
    accent: "lavender",
    tagline: "Monthly payments, beary simple.",
    say: "Let's plan those payments so nothing surprises you.",
  },
  {
    slug: "age",
    name: "Age",
    domain: "Time",
    pet: "panda",
    petName: "Dango",
    accent: "sky",
    tagline: "How many days have you been adorable?",
    say: "Tell me your birthday and I'll count every day!",
  },
  {
    slug: "percentage",
    name: "Percentage",
    domain: "Math",
    pet: "penguin",
    petName: "Pomu",
    accent: "teal",
    tagline: "Percent problems, waddled away.",
    say: "Percentages confuse everyone — not on my watch!",
  },
  {
    slug: "love",
    name: "Love",
    domain: "Just for fun",
    pet: "unicorn",
    petName: "Yumeko",
    accent: "rose",
    tagline: "Two names, one magical match. ♡",
    say: "Ooh, a crush? Let me peek into the stars for you~",
  },
];

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}
