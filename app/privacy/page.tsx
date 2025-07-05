import SEO from "../../components/SEO/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Whisperly"
        description="Learn how Whisperly protects your privacy. All audio processing is local, and your data never leaves your device."
        keywords="Whisperly privacy policy, audio privacy, local transcription privacy"
        url="https://whisperly.space/privacy"
      />
      <main>
        <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-blue-100 dark:border-blue-900 animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Privacy Policy</h1>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 text-center">
                At Whisperly, your privacy is our top priority. Unlike cloud-based transcription services, all audio processing is performed locally on your device. Your audio files and transcripts are never uploaded to our servers or any third party.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">What Data We Collect</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>We do <strong>not</strong> collect or store your audio files or transcripts.</li>
                <li>We may collect anonymized usage statistics (e.g., feature usage, error logs) to improve the product, but these never include your audio content.</li>
                <li>When you contact support, we may collect your email address and message content for customer service purposes only.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">How We Use Your Data</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>To provide and improve our software and services.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>We never sell or share your personal data with third parties.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Your Rights</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>You can request deletion of your support data at any time by contacting us at <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>.</li>
                <li>You have the right to know what data we hold about you and how it is used.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Contact</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>.
              </p>
              <p className="text-sm text-gray-500 mt-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 