import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Vanshika Weds Nitin — Amantrran Web Invitation 💍",
  description:
    "Aap sabka pyaar bhara swagat hai Vanshika aur Nitin ki shaadi mein. Click to view the wedding invitation card and event details.",
  keywords:
    "Indian wedding, shaadi, wedding invitation, Vanshika Nitin wedding, Amantrran",
  openGraph: {
    title: "Vanshika Weds Nitin — Amantrran Web Invitation 💍",
    description:
      "Join us for the wedding celebrations of Vanshika & Nitin. Tap to view the full invitation.",
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
    title: "Vanshika Weds Nitin — Amantrran Web Invitation 💍",
    description: "Join us for the wedding celebrations. Click to view the invitation.",
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi-EN" className={cormorant.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yatra+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/transcity"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
        {children}
      </body>
    </html>
  );
}
