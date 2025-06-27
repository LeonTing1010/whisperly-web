import "../styles/tailwind.css";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/NavBar";
import SEO from "../components/SEO/SEO";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SEO
          title="Whisperly | Local Audio Transcription, Privacy-First, One-Time Payment"
          description="Whisperly is the leading local audio-to-text software. Multi-language, privacy protected, no subscription, free trial forever."
          keywords="local audio transcription, AI speech-to-text, privacy audio transcription, one-time payment, offline audio to text"
          url="https://whisperly.com/"
          image="/images/og-image.png"
        />
        
        {/* Favicon and Icons (PNG/ICO) */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Whisperly" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
