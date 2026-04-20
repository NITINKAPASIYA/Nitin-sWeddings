import { Cormorant_Garamond, Fraunces, Marcellus } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata = {
  title: "Vanshika Weds Nitin 💍",
  description:
    "Join us for the wedding celebrations. Tap to view the invitation card and details.",
  keywords:
    "Indian wedding, shaadi, wedding invitation, Vanshika Nitin wedding, Amantrran",
  openGraph: {
    title: "Vanshika Weds Nitin 💍",
    description:
      "Join us for the wedding celebrations. Tap to view the full invitation.",
    url: "https://nitinwedsvanshika.vercel.app/",
    siteName: "Amantrran Web Invitation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Vanshika & Nitin Wedding Invitation",
      },
    ],
    locale: "hi_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanshika Weds Nitin 💍",
    description: "Join us for the wedding celebrations. Tap to view the invitation.",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi-EN" className={`${cormorant.variable} ${fraunces.variable} ${marcellus.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yatra+One&family=Tiro+Devanagari+Hindi:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
