import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Priscille E. Ebwala - AI/ML Engineer",
  description:
    "AI/ML Engineer and researcher building intelligent systems that cross from research into reality - turning data into decisions, models into products, and ideas into impact.",
  openGraph: {
    title: "Priscille E. Ebwala - AI/ML Engineer",
    description: "AI/ML Engineer building intelligent systems across research and industry.",
    siteName: "Priscille E. Ebwala",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priscille E. Ebwala - AI/ML Engineer",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
