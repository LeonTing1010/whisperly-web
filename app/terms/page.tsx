import SEO from "../../components/SEO/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Whisperly"
        description="Read the terms and conditions for using Whisperly's local audio transcription software."
        keywords="Whisperly terms of service, audio transcription terms, software license"
        url="https://whisperly.com/terms"
      />
      <main>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="mb-4">
            By using Whisperly, you agree to the following terms and conditions. Please read them carefully.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">License</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Whisperly grants you a non-exclusive, non-transferable license to use the software for personal or business purposes.</li>
            <li>You may not redistribute, resell, or reverse engineer the software.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">User Responsibilities</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>You are responsible for complying with all applicable laws when using Whisperly.</li>
            <li>You must not use Whisperly for any unlawful or harmful activities.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Disclaimer</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Whisperly is provided "as is" without warranty of any kind.</li>
            <li>We do not guarantee 100% accuracy of transcriptions or uninterrupted service.</li>
            <li>We are not liable for any damages arising from the use or inability to use the software.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
          <p>
            We may update these terms from time to time. Continued use of Whisperly after changes constitutes acceptance of the new terms.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
          <p>
            For questions about these terms, contact us at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.
          </p>
          <p className="text-sm text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </main>
    </>
  );
} 