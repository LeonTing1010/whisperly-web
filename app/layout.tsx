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
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
