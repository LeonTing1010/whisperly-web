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
      <section className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Download Whisperly</h1>
        <p className="mb-6 text-lg text-gray-70">
          Get started with Whisperly in seconds. Download the free version or unlock Pro for unlimited, high-accuracy transcription. No registration required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <CTAButton text="Download Free for Windows" href="/download/windows" className="w-full sm:w-auto" />
          <CTAButton text="Download Free for macOS" href="/download/macos" className="w-full sm:w-auto" />
          <CTAButton text="Download Free for Linux" href="/download/linux" className="w-full sm:w-auto" />
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Upgrade to Pro</h2>
          <p className="mb-4 text-gray-700 dark:text-white">Unlock unlimited transcription, advanced export formats, and priority support.</p>
          <CTAButton text="Buy Pro Version" href="/pricing" className="w-full sm:w-auto" />
        </div>
        <div className="text-gray-600 text-sm ">
          Need help installing? See our <a href="/faq" className="text-blue-600 underline">FAQ</a> or contact <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>.
        </div>
      </section>
    </>
  );
} 