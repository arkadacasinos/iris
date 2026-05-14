import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin", "cyrillic"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
const siteName = "Iris казино"
const title = "Iris казино - официальный сайт онлайн казино, играть и зеркало"
const description =
  "Iris казино: официальный сайт онлайн казино с рабочим зеркалом. Ирис казино играть онлайн в слоты, лайв и карточные игры. Бонусы Welcome Pack до 50%, быстрые выплаты и более 8000 игр от ведущих провайдеров."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Iris казино",
  },
  description,
  applicationName: siteName,
  generator: "v0.app",
  keywords: [
    "iris casino",
    "iris casino зеркало",
    "iris casino официальный сайт",
    "iris казино",
    "ирис казино",
    "ирис казино зеркало",
    "ирис казино зеркало рабочее",
    "ирис казино играть",
    "ирис казино онлайн",
    "ирис казино официальный",
    "ирис казино официальный сайт",
    "iris casino играть",
    "iris casino официальный",
  ],
  authors: [{ name: "Iris казино" }],
  creator: "Iris казино",
  publisher: "Iris казино",
  category: "casino",
  classification: "Gambling",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: "",
  },
  other: {
    "rating": "adult",
    "age-rating": "18+",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e0b1a" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0b1a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ru-RU",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background" dir="ltr">
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Iris казино" />
        <meta httpEquiv="content-language" content="ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
