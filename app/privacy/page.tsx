import SEO from "../../components/SEO/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Whisperly"
        description="Learn how Whisperly protects your privacy. All audio processing is local, and your data never leaves your device."
        keywords="Whisperly privacy policy, audio privacy, local transcription privacy"
        url="https://whisperly.com/privacy"
      />
      <main>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            At Whisperly, your privacy is our top priority. Unlike cloud-based transcription services, all audio processing is performed locally on your device. Your audio files and transcripts are never uploaded to our servers or any third party.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">What Data We Collect</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>We do <strong>not</strong> collect or store your audio files or transcripts.</li>
            <li>We may collect anonymized usage statistics (e.g., feature usage, error logs) to improve the product, but these never include your audio content.</li>
            <li>When you contact support, we may collect your email address and message content for customer service purposes only.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Data</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>To provide and improve our software and services.</li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>We never sell or share your personal data with third parties.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>You can request deletion of your support data at any time by contacting us at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.</li>
            <li>You have the right to know what data we hold about you and how it is used.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.
          </p>
          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </main>
    </>
  );
} 