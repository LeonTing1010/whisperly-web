import Image from "next/image";
import CTAButton from "../components/Button/CTAButton";
import FAQList from "../components/FAQ/FAQList";
import SEO from "../components/SEO/SEO";
import Testimonials from "../components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Whisperly | Local Audio Transcription, Privacy-First, One-Time Payment"
        description="Whisperly is the leading local audio-to-text software. Multi-language, privacy protected, no subscription, free trial forever."
        keywords="local audio transcription, AI speech-to-text, privacy audio transcription, one-time payment, offline audio to text"
        url="https://whisperly.space/"
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
        {/* Hero Section - Modern Gradient, Brand Icon, Focused Messaging */}
        <section className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            {/* Brand Icon */}
            <div className="flex justify-center mb-8">
              <Image src="/icon.svg" alt="Whisperly Logo" width={112} height={112} className="drop-shadow-xl animate-fade-in" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-clip-text text-transparent">Local. Private. Yours.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-200 animate-fade-in delay-100">
              One-Time Payment. Lifetime Use. No Cloud. No Tracking.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
              Whisperly is your privacy-first, local audio transcription tool. No subscriptions. No cloud uploads. Fast, accurate, and secure speech-to-text—forever yours.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in delay-300">
              <CTAButton 
                text="Download Free Trial" 
                href="/download" 
                className="w-full sm:w-auto text-lg px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-0" 
              />
              <CTAButton 
                text="View Comparison" 
                href="/compare" 
                intent="secondary" 
                className="w-full sm:w-auto text-lg px-8 py-4 border-2 border-blue-400 dark:border-blue-500 bg-white/80 dark:bg-gray-900/80 hover:bg-blue-50 hover:scale-105 transition-transform duration-200" 
              />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in delay-400">
              No registration required. Works fully offline.
            </div>
          </div>
        </section>
        {/* Key Features Section - Modern Card Style */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">Why Choose Whisperly?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Experience the future of audio transcription with privacy-first, local processing technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-xl p-10 border border-blue-100 dark:border-blue-900 hover:shadow-2xl transition-shadow group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">100% Local Processing</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">Your audio never leaves your device. All transcription is done locally for maximum privacy and security.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-green-900 rounded-2xl shadow-xl p-10 border border-green-100 dark:border-green-900 hover:shadow-2xl transition-shadow group">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">High Accuracy</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">Powered by advanced Whisper models, delivering 95%+ accuracy for clear, reliable transcripts.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900 rounded-2xl shadow-xl p-10 border border-purple-100 dark:border-purple-900 hover:shadow-2xl transition-shadow group">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">One-Time Payment</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">No subscriptions. Pay once, use forever. Get all updates and features for life.</p>
              </div>
            </div>
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
