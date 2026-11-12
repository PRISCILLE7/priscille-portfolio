import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal", "italic"],
});

const description =
  "AI/ML Engineer specializing in computer vision, multimodal and generative AI, and MLOps. Production YOLO models deployed across 9 countries, Gemini-based vision pipelines, and published research (IEA/AIE 2026).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Priscille E. Ebwala - AI/ML Engineer · Computer Vision & MLOps",
  description,
  keywords: [
    "Priscille Ebwala", "AI Engineer", "Machine Learning Engineer", "Computer Vision Engineer",
    "MLOps", "YOLO11", "Object Detection", "Multimodal AI", "Generative AI", "Google Gemini",
    "Data-Centric AI", "Class Imbalance", "Self-Supervised Learning", "Portfolio",
  ],
  authors: [{ name: "Priscille E. Ebwala", url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Priscille E. Ebwala - AI/ML Engineer · Computer Vision & MLOps",
    description,
    url: SITE_URL,
    siteName: "Priscille E. Ebwala",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priscille E. Ebwala - AI/ML Engineer · Computer Vision & MLOps",
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Priscille E. Ebwala",
  url: SITE_URL,
  jobTitle: "AI/ML Engineer",
  description,
  knowsAbout: [
    "Computer Vision", "Object Detection", "YOLO", "MLOps", "Multimodal AI",
    "Generative AI", "Prompt Engineering", "Self-Supervised Learning", "Data Pipelines",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Institut Francophone International (VNU-IFI)" },
    { "@type": "CollegeOrUniversity", name: "University of La Rochelle" },
    { "@type": "CollegeOrUniversity", name: "University of Kinshasa" },
  ],
  sameAs: [
    "https://linkedin.com/in/priscille-ebwala",
    "https://github.com/PRISCILLE7",
    "https://www.youtube.com/@LeD%C3%A9clicdePriscilla",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
