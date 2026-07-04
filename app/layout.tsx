import type { Metadata } from "next";
import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kawaiiculator ♡ cute calculators for every domain",
  description:
    "A kawaii collection of calculators — basic, tip, BMI, unit, loan, age, percentage & love — each with its own chibi anime pet friend.",
  keywords: ["calculator", "kawaii", "cute", "chibi", "nextjs", "tools"],
  authors: [{ name: "Kawaiiculator" }],
  openGraph: {
    title: "Kawaiiculator ♡",
    description: "Cute calculators for every domain, each with a chibi pet friend.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#ff9ec4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
