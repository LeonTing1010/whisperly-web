import ComparisonTable from "../../components/Compare/ComparisonTable";
import SEO from "../../components/SEO/SEO";

export default function ComparePage() {
  return (
    <>
      <SEO
        title="Whisperly vs Competitors | Audio Transcription Tool Comparison"
        description="See how Whisperly compares to TurboScribe, Adobe Podcast, and ElevenLabs. Local processing, privacy, one-time payment, and more."
        keywords="audio transcription comparison, Whisperly vs TurboScribe, local vs cloud transcription, AI speech-to-text tools"
        url="https://whisperly.com/compare"
      />
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 ">Whisperly vs Competitors</h1>
        <p className="mb-8 text-lg text-gray-700 ">
          Compare Whisperly with leading audio transcription tools. Discover the benefits of local processing, privacy-first design, and one-time payment.
        </p>
        <ComparisonTable />
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Why Choose Whisperly?</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-white">
            <li>100% local processing—your audio never leaves your device</li>
            <li>One-time payment, lifetime use—no subscriptions</li>
            <li>Advanced privacy and security</li>
            <li>High accuracy (95%+), multi-language support</li>
            <li>Free updates and priority support</li>
          </ul>
        </div>
      </section>
    </>
  );
} 