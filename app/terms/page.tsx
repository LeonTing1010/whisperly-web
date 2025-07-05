import SEO from "../../components/SEO/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Whisperly"
        description="Read the terms and conditions for using Whisperly's local audio transcription software."
        keywords="Whisperly terms of service, audio transcription terms, software license"
        url="https://whisperly.space/terms"
      />
      <main>
        <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-blue-100 dark:border-blue-900 animate-fade-in">
              <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Terms of Service</h1>
              <p className="mb-4 text-lg text-gray-700 dark:text-gray-300 text-center">
                By using Whisperly, you agree to the following terms and conditions. Please read them carefully.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">License</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Whisperly grants you a non-exclusive, non-transferable license to use the software for personal or business purposes.</li>
                <li>You may not redistribute, resell, or reverse engineer the software.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">User Responsibilities</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>You are responsible for complying with all applicable laws when using Whisperly.</li>
                <li>You must not use Whisperly for any unlawful or harmful activities.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Disclaimer</h2>
              <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Whisperly is provided "as is" without warranty of any kind.</li>
                <li>We do not guarantee 100% accuracy of transcriptions or uninterrupted service.</li>
                <li>We are not liable for any damages arising from the use or inability to use the software.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Changes to Terms</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We may update these terms from time to time. Continued use of Whisperly after changes constitutes acceptance of the new terms.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-2 text-gray-900 dark:text-white">Contact</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                For questions about these terms, contact us at <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>.
              </p>
              <p className="text-sm text-gray-500 mt-8 text-center">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 