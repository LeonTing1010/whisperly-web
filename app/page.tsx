import SEO from "../components/SEO/SEO";
import ComparisonTable from "../components/Compare/ComparisonTable";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQList from "../components/FAQ/FAQList";
import CTAButton from "../components/Button/CTAButton";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Whisperly | Local Audio Transcription, Privacy-First, One-Time Payment"
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
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
              Local Audio Transcription. <span className="text-blue-600 dark:text-blue-400">Privacy First.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              One-Time Payment. Lifetime Use.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whisperly is your local, privacy-first audio transcription tool. No cloud uploads. No subscriptions. Fast, accurate, and secure speech-to-text—yours forever.
            </p>
            {/* Tutorial Video Placeholder */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-900 mb-4 border border-gray-200 dark:border-gray-700 flex items-center justify-center aspect-video">
                <img
                  src="/assets/whisperly-hero.svg"
                  alt="Whisperly Tutorial Video Placeholder"
                  className="object-contain w-full h-full"
                  style={{ maxHeight: 320 }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-base">
                Watch a 1-minute video to quickly learn how to transcribe audio locally with Whisperly (coming soon)
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <CTAButton 
                text="Download Free Trial" 
                href="/download" 
                className="w-full sm:w-auto text-lg px-8 py-4" 
              />
              <CTAButton 
                text="View Comparison" 
                href="/compare" 
                intent="secondary" 
                className="w-full sm:w-auto text-lg px-8 py-4" 
              />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              No registration required. Works fully offline.
            </div>
          </div>
        </section>
        {/* Key Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Why Choose Whisperly?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Experience the future of audio transcription with privacy-first, local processing technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
                  100% Local Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Your audio never leaves your device. All transcription is done locally for maximum privacy and security.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
                  High Accuracy
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  Powered by advanced Whisper models, delivering 95%+ accuracy for clear, reliable transcripts.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">
                  One-Time Payment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  No subscriptions. Pay once, use forever. Get all updates and features for life.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Comparison Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Compare with Leading Tools
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                See how Whisperly stacks up against popular transcription services. Privacy, cost, and performance compared.
              </p>
            </div>
            <ComparisonTable />
          </div>
        </section>
        {/* Trust & Testimonials Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Trusted by Professionals Worldwide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Join thousands of users who trust Whisperly for their audio transcription needs.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        {/* Technical Specifications */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Technical Excellence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Built with cutting-edge technology for professional-grade results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99+</div>
                <div className="text-gray-600 dark:text-gray-400">Languages Supported</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">95%+</div>
                <div className="text-gray-600 dark:text-gray-400">Accuracy Rate</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7</div>
                <div className="text-gray-600 dark:text-gray-400">Audio Formats</div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400">Platforms</div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get answers to the most common questions about Whisperly.
              </p>
            </div>
            <FAQList />
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transcribe Smarter?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Download the free version or unlock Pro for unlimited, high-accuracy transcription. 
              Your audio, your privacy, your rules.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <CTAButton 
                text="Download Free Trial" 
                href="/download" 
                className="w-full sm:w-auto text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 shadow-lg" 
              />
              <CTAButton 
                text="Buy Pro - $39" 
                href="/pricing" 
                className="w-full sm:w-auto text-lg px-8 py-4 bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-lg" 
              />
            </div>
            <div className="mt-6 text-blue-100 text-sm">
              No subscription • Lifetime updates
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
