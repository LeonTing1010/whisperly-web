import SEO from "../../components/SEO/SEO";

export default function SecurityPolicy() {
  return (
    <>
      <SEO
        title="Security Policy | Whisperly"
        description="Learn how Whisperly keeps your audio and data secure with local processing and privacy-first design."
        keywords="Whisperly security, audio data security, local processing security"
        url="https://whisperly.com/security"
      />
      <main>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Security Policy</h1>
          <p className="mb-4">
            Whisperly is designed with security and privacy at its core. All audio transcription is performed locally on your device, ensuring your data never leaves your control.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Local Processing</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>All audio files and transcripts are processed and stored locally on your device.</li>
            <li>No audio data is ever uploaded to the cloud or our servers.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Data Protection</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>We follow industry best practices for software security and regular updates.</li>
            <li>We do not collect or store your audio content.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Vulnerability Reporting</h2>
          <p>
            If you discover a security vulnerability, please report it to <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>. We take all reports seriously and will respond promptly.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
          <p>
            For any security-related questions, contact us at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.
          </p>
          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </main>
    </>
  );
} 