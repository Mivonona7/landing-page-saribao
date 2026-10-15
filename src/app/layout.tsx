import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL;

export const metadata: Metadata = {
  metadataBase: configuredSiteUrl
    ? new URL(
        configuredSiteUrl.startsWith("http")
          ? configuredSiteUrl
          : `https://${configuredSiteUrl}`,
      )
    : undefined,
  title: "Saribao — Application de gestion de commerce de charbon",
  description:
    "Découvrez Saribao, une application Android conçue pour gérer les stocks, enregistrer les ventes et organiser votre commerce de charbon, même hors ligne.",
  applicationName: "Saribao",
  openGraph: {
    title: "Saribao — Application de gestion de commerce de charbon",
    description:
      "Découvrez Saribao, une application Android conçue pour gérer les stocks, enregistrer les ventes et organiser votre commerce de charbon, même hors ligne.",
    siteName: "Saribao",
    locale: "fr_MG",
    type: "website",
    ...(configuredSiteUrl
      ? {
          images: [
            {
              url: "/api/og",
              width: 1200,
              height: 630,
              alt: "Saribao, application Android de gestion commerciale hors ligne.",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Saribao — Application de gestion de commerce de charbon",
    description:
      "Gérez votre stock et vos ventes de charbon, même sans connexion Internet.",
    ...(configuredSiteUrl ? { images: ["/api/og"] } : {}),
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const savedTheme = localStorage.getItem("saribao-theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            document.documentElement.dataset.theme =
              savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";
          })();`}
        </Script>
      </body>
    </html>
  );
}
