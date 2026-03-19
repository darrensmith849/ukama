import type { Metadata } from "next";
import { serif, sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "u-Kama — Ecological Economic Architecture",
  description:
    "A doctrinal framework where ecology constrains economics, structure precedes speculation, and human presence anchors value.",
  openGraph: {
    title: "u-Kama — Ecological Economic Architecture",
    description:
      "A doctrinal framework where ecology constrains economics, structure precedes speculation, and human presence anchors value.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
