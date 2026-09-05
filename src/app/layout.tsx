import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agamemnon — King of Mycenae",
  description:
    "A tribute to Agamemnon, High King of Mycenae, Commander of the Achaean forces at Troy.",
  openGraph: {
    title: "Agamemnon — King of Mycenae",
    description:
      "A cinematic tribute to the most powerful king of ancient Greece.",
    images: ["/atreus-king.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agamemnon — King of Mycenae",
    images: ["/atreus-king.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
