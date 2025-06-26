import FAQList from "../../components/FAQ/FAQList";
import SEO from "../../components/SEO/SEO";

export default function FAQPage() {
  return (
    <>
      <SEO
        title="FAQ | Whisperly - Audio Transcription Frequently Asked Questions"
        description="Find answers to common questions about Whisperly's local audio transcription, privacy, supported languages, and more."
        keywords="audio transcription FAQ, privacy, supported languages, Whisperly help"
        url="https://whisperly.com/faq"
      />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 ">Frequently Asked Questions</h1>
        <FAQList />
      </section>
    </>
  );
} 