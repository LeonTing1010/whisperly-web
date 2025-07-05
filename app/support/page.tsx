import SEO from "../../components/SEO/SEO";

export default function SupportPage() {
  return (
    <>
      <SEO
        title="Support | Whisperly - Get Help with Audio Transcription"
        description="Get support for Whisperly audio transcription software. FAQ, contact information, and troubleshooting help."
        keywords="Whisperly support, audio transcription help, contact support"
        url="https://whisperly.space/support"
      />
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">Support Center</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get help with Whisperly installation, troubleshooting, and general usage questions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Help */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Find answers to common questions about installation, troubleshooting, and features.</p>
            <a href="/faq" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Browse FAQ
            </a>
          </div>

          {/* Contact Support */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-green-100 dark:border-green-900">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Support</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Need personal assistance? Send us a message and we'll get back to you within 24 hours.</p>
            <a href="/contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Contact Us
            </a>
          </div>

          {/* User Guide */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-purple-900">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">User Guide</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Comprehensive documentation covering installation, features, and advanced usage.</p>
            <a href="/guide" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Read Guide
            </a>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">📚 Documentation</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• <a href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">Blog & Tutorials</a></li>
                <li>• <a href="/compare" className="text-blue-600 dark:text-blue-400 hover:underline">Feature Comparison</a></li>
                <li>• <a href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a></li>
                <li>• <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">🔧 Technical Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• System Requirements</li>
                <li>• Installation Troubleshooting</li>
                <li>• Performance Optimization</li>
                <li>• Model & Language Support</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Can't find what you're looking for? We're here to help!
            </p>
            <a href="mailto:support@whisperly.space" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Email us at support@whisperly.space
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
} 