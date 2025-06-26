import CTAButton from "../components/Button/CTAButton";
import ComparisonTable from "../components/Compare/ComparisonTable";
import FAQList from "../components/FAQ/FAQList";
import SEO from "../components/SEO/SEO";
import Testimonials from "../components/Testimonials/Testimonials";

export default function Web() {
  return (
    <>
      <SEO
        title="Local Audio Transcription, AI-Powered, Privacy-First | Whisperly"
        description="Whisperly is the leading local audio-to-text software. Multi-language, privacy protected, no subscription, free trial forever."
        keywords="local audio transcription, AI speech-to-text, privacy audio transcription, one-time payment, offline audio to text"
        url="https://whisperly.com/"
        image="/images/og-image.png"
        schema={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Whisperly",
          operatingSystem: "Windows, macOS, Linux",
          applicationCategory: "AudioTranscription",
          offers: {
            "@type": "Offer",
            price: "39",
            priceCurrency: "USD",
          },
        }}
      />
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-tight dark:text-white">
            Local Audio Transcription.{" "}
            <span className="text-blue-600">Privacy First.</span> One-Time Payment. Lifetime Use.
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Whisperly is your local, privacy-protecting audio transcription tool. No cloud uploads. No subscriptions. Just
            fast, accurate, and secure speech-to-text—forever yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <CTAButton text="Try Live Demo" href="/demo" className="w-full sm:w-auto" />
            <CTAButton text="Download Free Version" href="/download" intent="secondary" className="w-full sm:w-auto" />
          </div>
          <div className="mt-2 text-sm text-gray-400">No registration required. Works fully offline.</div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <ComparisonTable />

      {/* Trust & Use Cases Section */}
      <Testimonials />

      {/* Technical Strengths Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Why Choose Whisperly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-blue-600 dark:text-blue-400">
                {/* icon */}
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 dark:text-gray-100">100% Local Processing</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Your audio never leaves your device. All transcription is done locally for maximum privacy and security.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 text-blue-600 dark:text-blue-400">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 dark:text-gray-100">High Accuracy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Powered by advanced Whisper models, delivering 95%+ accuracy for clear, reliable transcripts.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 text-blue-600 dark:text-blue-400">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2 dark:text-gray-100">One-Time Payment</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                No subscriptions. Pay once, use forever. Get all updates and features for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQList />

      {/* Call to Action Section */}
      <section className="bg-blue-600 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transcribe Smarter?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Download the free version or unlock Pro for unlimited, high-accuracy transcription. Your audio, your privacy,
            your rules.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton text="Download Free" href="/download" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50" />
            <CTAButton text="Buy Pro" href="/pricing" className="w-full sm:w-auto bg-yellow-400 text-gray-900 hover:bg-yellow-300" />
          </div>
        </div>
      </section>
    </>
  )
}
