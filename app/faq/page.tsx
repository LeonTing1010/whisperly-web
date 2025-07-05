import FAQList from "../../components/FAQ/FAQList";
import SEO from "../../components/SEO/SEO";

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | Whisperly - Audio Transcription Frequently Asked Questions"
        description="Find answers to common questions about Whisperly's local audio transcription, privacy, supported languages, installation, troubleshooting, and more."
        keywords="audio transcription FAQ, Whisperly help, installation guide, troubleshooting, privacy questions, supported formats"
        url="https://whisperly.space/faq"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about Whisperly's local audio transcription software. 
              From installation to advanced features, we've got you covered.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 mb-12 border border-blue-100 dark:border-blue-900 animate-fade-in">
            <FAQList />
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Can't find what you're looking for?
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform font-semibold"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
} 