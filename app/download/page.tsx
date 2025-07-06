
"use client";
import { useEffect, useState } from "react";
import CTAButton from "../../components/Button/CTAButton";
import SEO from "../../components/SEO/SEO";

type Downloads = {
  version: string;
  windows: {
    exe: string;
    setup: string;
  };
  macos: {
    intel: string;
    arm: string;
  };
  linux: {
    deb: string;
    rpm: string;
    appimage: string;
  };
};

export default function DownloadPage() {
  const [downloads, setDownloads] = useState<Downloads | null>(null);

  useEffect(() => {
    fetch("/api/downloads")
      .then((res) => res.json())
      .then((data) => setDownloads(data as Downloads));
  }, []);

  return (
    <>
      <SEO
        title="Download | Whisperly - Get the App"
        description="Download Whisperly for Windows, macOS, or Linux. Start transcribing audio locally with privacy and high accuracy."
        keywords="Whisperly download, audio transcription app, offline speech-to-text"
        url="https://whisperly.space/download"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">Download Whisperly</h1>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 text-center">
            Get started with Whisperly in seconds. Download the free version or unlock Pro for unlimited, high-accuracy transcription. No registration required.
          </p>
          <div className="space-y-6 mb-8">
            {/* Windows Downloads */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                </svg>
                Windows
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton
                  text="Download .exe (17.7 MB)"
                  href={downloads?.windows?.exe || "#"}
                  className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 border-0"
                />
                <CTAButton
                  text="Setup Installer (3.7 MB)"
                  href={downloads?.windows?.setup || "#"}
                  className="flex-1 text-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition-colors duration-200 border-0"
                />
              </div>
            </div>

            {/* macOS Downloads */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                macOS
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton
                  text="Intel Mac (6.0 MB)"
                  href={downloads?.macos?.intel || "#"}
                  className="flex-1 text-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 border-0"
                />
                <CTAButton
                  text="Apple Silicon (5.8 MB)"
                  href={downloads?.macos?.arm || "#"}
                  className="flex-1 text-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition-colors duration-200 border-0"
                />
              </div>
            </div>

            {/* Linux Downloads */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.175-.131.097-.06.132-.06.228-.065z"/>
                </svg>
                Linux
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <CTAButton
                  text=".deb (6.0 MB)"
                  href={downloads?.linux?.deb || "#"}
                  className="text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 border-0"
                />
                <CTAButton
                  text=".rpm (6.0 MB)"
                  href={downloads?.linux?.rpm || "#"}
                  className="text-center px-4 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors duration-200 border-0"
                />
                <CTAButton
                  text="AppImage (88.6 MB)"
                  href={downloads?.linux?.appimage || "#"}
                  className="text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors duration-200 border-0"
                />
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 mb-8 border border-blue-100 dark:border-blue-900 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Upgrade to Pro</h2>
                <p className="mb-4 text-gray-700 dark:text-gray-300">Unlock unlimited transcription, advanced export formats, and priority support.</p>
                <CTAButton
                  text="Buy Pro Version"
                  href="/pricing"
                  className="sm:w-auto w-fit h-[60xp] text-base px-4 py-1.5 bg-gradient-to-r from-purple-600 via-blue-500 to-blue-400 text-white font-extrabold rounded-md shadow-lg border-0 transition-all duration-200 tracking-wider hover:scale-105 hover:bg-gradient-to-br hover:from-blue-600 hover:via-purple-600 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Version Information</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Current Version:</strong> {downloads?.version || 'v1.1.0'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>System Requirements:</strong>
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Windows 10/11 (64-bit)</li>
                  <li>• macOS 10.15+ (Intel/Apple Silicon)</li>
                  <li>• Linux (Ubuntu 18.04+, Fedora 30+)</li>
                  <li>• 4GB RAM minimum, 8GB recommended</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-gray-600 text-sm text-center ">
            Need help installing? See our <a href="/faq" className="text-blue-600 underline">FAQ</a> or contact <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a>.
          </div>
        </div>
      </section>
    </>
  );
}