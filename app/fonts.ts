import localFont from "next/font/local";

export const serif = localFont({
  src: "../public/fonts/CormorantGaramond-Variable.ttf",
  variable: "--font-serif",
  display: "swap",
  weight: "300 700",
});

export const sans = localFont({
  src: "../public/fonts/Inter-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
  weight: "300 800",
});
