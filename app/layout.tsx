import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dhyanish-marbles.openai.site"),
  title: { default: "Dhyanish Marbles | Premium Marble & Tiles in Ahmedabad", template: "%s | Dhyanish Marbles" },
  description: "Shop Indian and imported marble, natural stone, granite, onyx, porcelain, ceramic and vitrified tiles in Ahmedabad. Wholesale and retail enquiries welcome.",
  keywords: ["marble dealer Ahmedabad", "marble shop Ahmedabad", "tiles Ahmedabad", "natural stone Gujarat", "Italian marble Ahmedabad", "granite supplier Ahmedabad", "Dhyanish Marbles"],
  alternates: { canonical: "/" },
  openGraph: { title: "Dhyanish Marbles — Remarkable Stone. Enduring Spaces.", description: "Premium natural marble, stone and tiles in Ahmedabad.", type: "website", locale: "en_IN", siteName: "Dhyanish Marbles", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Dhyanish Marbles — Remarkable stone. Enduring spaces." }] },
  twitter: { card: "summary_large_image", title: "Dhyanish Marbles", description: "Premium natural marble, stone and tiles in Ahmedabad.", images: ["/og.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
