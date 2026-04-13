import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://batiproafrique.com"),
  title: {
    default: "BatiPro Afrique — Guide Expert Construction & BTP au Sénégal",
    template: "%s | BatiPro Afrique",
  },
  description:
    "Guides experts, prix actualisés 2026 et conseils pratiques pour réussir votre projet de construction au Sénégal et en Afrique francophone. Coûts, matériaux, réglementation.",
  keywords: [
    "construction Sénégal",
    "BTP Afrique",
    "prix construction maison Sénégal 2026",
    "permis de construire Sénégal",
    "matériaux construction Afrique",
    "cout construction Dakar",
    "parpaing brique Sénégal",
    "guide construction maison",
  ],
  authors: [{ name: "BatiPro Afrique" }],
  creator: "BatiPro Afrique",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://batiproafrique.com",
    siteName: "BatiPro Afrique",
    title: "BatiPro Afrique — Guide Expert Construction & BTP au Sénégal",
    description:
      "Guides experts, prix actualisés 2026 et conseils pratiques pour la construction au Sénégal.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "BatiPro Afrique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BatiPro Afrique — Guide Expert Construction & BTP",
    description:
      "Guides experts et prix actualisés pour la construction au Sénégal et en Afrique.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics 4 — Remplacer G-XXXXXXXXXX par votre ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BatiPro Afrique",
              url: "https://batiproafrique.com",
              description:
                "Guide expert de la construction et du BTP en Afrique francophone",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://batiproafrique.com/articles?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-white-cream text-mocha-deep antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
