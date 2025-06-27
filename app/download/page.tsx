import CTAButton from "../../components/Button/CTAButton";
import SEO from "../../components/SEO/SEO";

export default function DownloadPage() {
  return (
    <>
      <SEO
        title="Download | Whisperly - Get the App"
        description="Download Whisperly for Windows, macOS, or Linux. Start transcribing audio locally with privacy and high accuracy."
        keywords="Whisperly download, audio transcription app, offline speech-to-text"
        url="https://whisperly.com/download"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Download Whisperly</h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center">
            Get started with Whisperly in seconds. Download the free version or unlock Pro for unlimited, high-accuracy transcription. No registration required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <CTAButton text="Download Free for Windows" href="/download/windows" className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700 transition-colors duration-200 border-0" />
            <CTAButton text="Download Free for macOS" href="/download/macos" className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700 transition-colors duration-200 border-0" />
            <CTAButton text="Download Free for Linux" href="/download/linux" className="w-full sm:w-auto text-lg px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-700 transition-colors duration-200 border-0" />
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 mb-8 border border-blue-100 dark:border-blue-900 animate-fade-in">
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upgrade to Pro</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Unlock unlimited transcription, advanced export formats, and priority support.</p>
            <CTAButton text="Buy Pro Version" href="/pricing" className="w-full sm:w-auto text-lg px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-0 font-bold" />
          </div>
          <div className="text-gray-600 text-sm text-center ">
            Need help installing? See our <a href="/faq" className="text-blue-600 underline">FAQ</a> or contact <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.
          </div>
        </div>
      </section>
    </>
  );
} 