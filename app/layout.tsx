import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";

// --- CSS ---
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from "@/components/Navbar";

config.autoAddCss = false;

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// 1. OPTIMASI METADATA (Untuk Page 1 & Australia Targeting)
export const metadata: Metadata = {
  metadataBase: new URL("https://freezelogistics.com.au"),
  title: "Freeze Logistics | Leading Refrigerated Transport Australia",
  description:
    "Freeze Logistics provides premium frozen goods delivery and professional cold chain solutions across Australia. Secure, temperature-controlled logistics.",
  keywords: [
    "Freeze Logistics",
    "Refrigerated Transport Australia",
    "Cold Chain Solutions",
    "Frozen Goods Delivery",
    "Chilled Transport Services",
    "Logistics Sydney",
    "Logistics Melbourne",
  ],
  icons: {
    icon: "/assets/logo_freeze_logistics_nav.ico",
    shortcut: "/assets/logo_freeze_logistics_nav.ico",
    apple: "/assets/logo_freeze_logistics_nav.ico",
  },
  verification: {
    google: "ZO2KP_6qSUrVmXpRGdKDPlxiXDxId1IRw49xIwhCCMo",
  },
  openGraph: {
    title: "Freeze Logistics | #1 Refrigerated Transport Australia",
    description:
      "Reliable frozen and chilled logistics solutions across Australia.",
    url: "https://freezelogistics.com.au",
    siteName: "Freeze Logistics",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <head>
        {/* 2. GOOGLE TAG MANAGER */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKNRRBJ7');
          `}
        </Script>

        {/* 3. SCHEMA ORG - Agar Google kenal Brand "Freeze Logistics" */}
        <Script
          id="schema-brand"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LogisticsCompany",
            name: "Freeze Logistics",
            alternateName: "Freeze Logistics Australia",
            url: "https://freezelogistics.com.au",
            logo: "https://freezelogistics.com.au/assets/logo_freeze_logistics_nav.ico",
            contactPoint: {
              "@type": "ContactPoint",
              email: "admin@freezelogistics.com.au", // Ganti dengan nomor asli perusahaan
              contactType: "customer service",
              areaServed: "AU",
              availableLanguage: "en",
            },
            // sameAs: [
            //   "https://www.linkedin.com/company/freezelogistics", // Contoh jika ada sosmed
            //   "https://www.instagram.com/freezelogistics",
            // ],
          })}
        </Script>

        {/* 4. SCHEMA NAVIGATION - Agar Menu muncul di bawah Link Utama (Sitelinks) */}
        <Script
          id="schema-navigation"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Home",
                url: "https://freezelogistics.com.au/",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Why Us",
                url: "https://freezelogistics.com.au/whyUs",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Services",
                url: "https://freezelogistics.com.au/services",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Tracking",
                url: "https://freezelogistics.com.au/tracking",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "Get Started",
                url: "https://freezelogistics.com.au/get-started",
              },
            ],
          })}
        </Script>
      </head>

      <body className={fontPoppins.className}>
        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKNRRBJ7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PBV5K5CPSE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBV5K5CPSE');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
