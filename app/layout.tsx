import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import Script from "next/script";
import PageTracker from "@/components/PageTracker";

export const metadata: Metadata = {
  title: "Sebika Nepal | Frontend Developer",
  description:
    "Portfolio of Sebika Nepal, a frontend developer specializing in Next.js, React, and modern web technologies.",
  other: {
    "google-adsense-account": "ca-pub-4217692983616180",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytrics */}

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-8PVB9LVSH8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8PVB9LVSH8', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4217692983616180"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <PageTracker />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
