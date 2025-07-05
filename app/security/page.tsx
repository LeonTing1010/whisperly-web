import SEO from "../../components/SEO/SEO";

export default function SecurityPolicy() {
  return (
    <>
      <SEO
        title="Security Policy | Whisperly"
        description="Learn how Whisperly keeps your audio and data secure with local processing and privacy-first design."
        keywords="Whisperly security, audio data security, local processing security"
        url="https://whisperly.space/security"
      />
      <main>
        <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-blue-100 dark:border-blue-900 animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Security Policy</h1>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 text-center">
                Whisperly is designed with security and privacy at its core. All audio transcription is performed locally on your device, ensuring your data never leaves your control.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Local Processing</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>All audio files and transcripts are processed and stored locally on your device.</li>
                <li>No audio data is ever uploaded to the cloud or our servers.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Data Protection</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>We follow industry best practices for software security and regular updates.</li>
                <li>We do not collect or store your audio content.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Vulnerability Reporting</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                If you discover a security vulnerability, please report it to <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>. We take all reports seriously and will respond promptly.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Contact</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                For any security-related questions, contact us at <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>.
              </p>
              <p className="text-sm text-gray-500 mt-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 