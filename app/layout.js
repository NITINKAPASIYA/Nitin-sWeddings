import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Vanshika & Nitin Ki Shaadi | Wedding Invitation 💍",
  description:
    "Aap sabka pyaar bhara swagat hai Vanshika aur Nitin ki shaadi mein. Join us for Lagan, Sagai, Haldi & Shaadi celebrations!",
  keywords:
    "Indian wedding, shaadi, wedding invitation, Vanshika Nitin wedding",
  openGraph: {
    title: "Vanshika & Nitin Ki Shaadi 💍",
    description:
      "Aap sabka swagat hai hamari khushiyon mein! Join us for the wedding celebrations.",
    type: "website",
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
