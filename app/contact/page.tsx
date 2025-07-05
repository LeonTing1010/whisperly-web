import Link from "next/link";
import SEO from "../../components/SEO/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact & Support | Whisperly - Get Help with Audio Transcription"
        description="Contact Whisperly for technical support, installation help, troubleshooting, or general inquiries. We're here to help with your audio transcription needs."
        keywords="Whisperly contact, technical support, audio transcription help, troubleshooting, installation support"
        url="https://whisperly.space/contact"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">Contact & Support</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Need help with Whisperly? We're here to assist you with installation, troubleshooting, 
              and any questions about our local audio transcription software.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send us a Message</h2>
              <form className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 space-y-6 border border-blue-100 dark:border-blue-900 animate-fade-in">
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Name *</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Your name" 
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Email *</label>
                  <input 
                    type="email" 
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="you@email.com" 
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Subject *</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a topic</option>
                    <option value="installation">Installation & Setup</option>
                    <option value="technical">Technical Support</option>
                    <option value="troubleshooting">Troubleshooting</option>
                    <option value="billing">Billing & Licensing</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Operating System</label>
                  <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select your OS</option>
                    <option value="windows">Windows 10/11</option>
                    <option value="macos">macOS</option>
                    <option value="linux">Linux</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-900 dark:text-white">Message *</label>
                  <textarea 
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    rows={6} 
                    placeholder="Please describe your issue or question in detail. Include any error messages, system specifications, or steps to reproduce the problem."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Support Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Quick Support Options</h2>
                {/* FAQ Link */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2"> Check Our FAQ</h3>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    Find answers to common questions about installation, troubleshooting, and features.
                  </p>
                  <Link 
                    href="/faq" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    Browse FAQ
                  </Link>
                </div>
                {/* Documentation */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">User Guide</h3>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    Comprehensive guide covering installation, features, and advanced usage.
                  </p>
                  <a 
                    href="/guide" 
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm"
                  >
                    View User Guide
                  </a>
                </div>
                {/* System Requirements */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2"> System Requirements</h3>
                  <p className="text-yellow-800 dark:text-yellow-200 mb-4">
                    Ensure your system meets the minimum requirements for optimal performance.
                  </p>
                  <div className="text-sm space-y-1">
                    <p><strong>OS:</strong> Windows 10+, macOS 10.15+, Linux Ubuntu 18.04+</p>
                    <p><strong>RAM:</strong> 4GB minimum (8GB recommended)</p>
                    <p><strong>Storage:</strong> 2GB free space</p>
                    <p><strong>CPU:</strong> Modern multi-core processor</p>
                  </div>
                </div>
              </div>
              {/* Contact Methods */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Other Ways to Reach Us</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-lg"> </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email Support</h3>
                      <a href="mailto:support@whisperly.space" className="text-blue-600 dark:text-blue-400 hover:underline">
                        support@whisperly.space
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 text-lg"> </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Website</h3>
                      <a href="https://whisperly.space" className="text-blue-600 dark:text-blue-400 hover:underline">
                        whisperly.space
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Download and documentation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 text-lg"> </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Live Chat</h3>
                      <p className="text-blue-600 dark:text-blue-400">Available during business hours</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Common Issues Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-10 mt-12 border border-blue-100 dark:border-blue-900 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Common Issues & Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-3"> "Model Not Found" Error</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ensure you have an internet connection for the first launch and sufficient disk space (2GB minimum).
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li> Check internet connection</li>
                  <li> Verify 2GB free disk space</li>
                  <li> Restart the application</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-3"> Slow Processing</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Optimize performance by closing other applications and using appropriate model size.
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li> Close other applications</li>
                  <li> Use a smaller model</li>
                  <li> Ensure adequate cooling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 