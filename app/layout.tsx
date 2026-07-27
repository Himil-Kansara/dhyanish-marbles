import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dhyanish-marbles.netlify.app"),
  title: { default: "Dhyanish Marbles | Marble, Granite & Natural Stone Ahmedabad", template: "%s | Dhyanish Marbles" },
  description: "Premium marble, granite, natural quartzite, onyx stone, CNC stone wall panels and bespoke stone furniture in Ahmedabad. Wholesale and project enquiries welcome.",
  keywords: ["marble dealer Ahmedabad", "granite supplier Ahmedabad", "natural quartzite India", "onyx stone Ahmedabad", "stone CNC wall panels", "marble wall panels", "stone furniture Ahmedabad", "natural stone Gujarat", "Dhyanish Marbles"],
  alternates: { canonical: "/" },
  openGraph: { title: "Dhyanish Marbles — Natural Stone, Crafted Possibilities", description: "Marble, granite, natural quartzite, onyx, CNC wall panels and bespoke stone furniture in Ahmedabad.", type: "website", locale: "en_IN", siteName: "Dhyanish Marbles", images: [{ url: "/og.webp", width: 1536, height: 1024, alt: "Dhyanish Marbles — Remarkable stone. Enduring spaces." }] },
  twitter: { card: "summary_large_image", title: "Dhyanish Marbles", description: "Natural stone slabs, CNC wall panels and bespoke stone furniture in Ahmedabad.", images: ["/og.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
