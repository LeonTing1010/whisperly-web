import FAQList from "../../components/FAQ/FAQList";
import SEO from "../../components/SEO/SEO";

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | Whisperly - Audio Transcription Frequently Asked Questions"
        description="Find answers to common questions about Whisperly's local audio transcription, privacy, supported languages, installation, troubleshooting, and more."
        keywords="audio transcription FAQ, Whisperly help, installation guide, troubleshooting, privacy questions, supported formats"
        url="https://whisperly.com/faq"
      />
      <section className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about Whisperly's local audio transcription software. 
            From installation to advanced features, we've got you covered.
          </p>
        </div>
        <FAQList />
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Can't find what you're looking for?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </>
  );
} 