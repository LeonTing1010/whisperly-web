import SEO from "../../components/SEO/SEO";

const competitors = [
  {
    name: "TurboScribe",
    features: [
      { label: "100% Local Processing", value: false },
      { label: "One-Time Payment", value: false },
      { label: "Privacy Protection", value: false },
      { label: "No Tracking", value: false },
      { label: "Works Offline", value: true },
      { label: "Batch Processing", value: true },
      { label: "Multi-Language Support", value: true },
      { label: "High Accuracy (95%+)", value: true },
      { label: "Export Formats (TXT/SRT/JSON/CSV)", value: true },
      { label: "Free Updates Forever", value: false },
    ],
    note: "Subscription, cloud-based"
  },
  {
    name: "Adobe Podcast",
    features: [
      { label: "100% Local Processing", value: false },
      { label: "One-Time Payment", value: false },
      { label: "Privacy Protection", value: false },
      { label: "No Tracking", value: false },
      { label: "Works Offline", value: false },
      { label: "Batch Processing", value: false },
      { label: "Multi-Language Support", value: true },
      { label: "High Accuracy (95%+)", value: true },
      { label: "Export Formats (TXT/SRT/JSON/CSV)", value: false },
      { label: "Free Updates Forever", value: false },
    ],
    note: "Subscription, cloud-based"
  },
  {
    name: "ElevenLabs",
    features: [
      { label: "100% Local Processing", value: false },
      { label: "One-Time Payment", value: false },
      { label: "Privacy Protection", value: false },
      { label: "No Tracking", value: false },
      { label: "Works Offline", value: false },
      { label: "Batch Processing", value: false },
      { label: "Multi-Language Support", value: true },
      { label: "High Accuracy (95%+)", value: true },
      { label: "Export Formats (TXT/SRT/JSON/CSV)", value: false },
      { label: "Free Updates Forever", value: false },
    ],
    note: "Subscription, cloud-based"
  },
];

const whisperlyFeatures = [
  { label: "100% Local Processing", value: true, highlight: true },
  { label: "One-Time Payment, Lifetime Use", value: true, highlight: true },
  { label: "Privacy Protection (No Cloud Upload)", value: true, highlight: true },
  { label: "No Tracking", value: true, highlight: true },
  { label: "Works Offline", value: true },
  { label: "Batch Processing", value: true },
  { label: "Multi-Language Support", value: true },
  { label: "High Accuracy (95%+)", value: true },
  { label: "Export Formats (TXT/SRT/JSON/CSV)", value: true },
  { label: "Free Updates Forever", value: true },
];

export default function ComparePage() {
  return (
    <>
      <SEO
        title="Whisperly vs Competitors | Audio Transcription Tool Comparison"
        description="See how Whisperly compares to TurboScribe, Adobe Podcast, and ElevenLabs. Local processing, privacy, one-time payment, and more."
        keywords="audio transcription comparison, Whisperly vs TurboScribe, local vs cloud transcription, AI speech-to-text tools"
        url="https://whisperly.com/compare"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white text-center tracking-tight">Whisperly vs Competitors</h1>
          <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto">
            Discover why Whisperly is the only audio transcription tool that truly puts your privacy and value first.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-12">
            {/* Whisperly 主卡片 */}
            <div className="flex-1 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-2xl p-10 border-4 border-blue-400 dark:border-blue-500 relative animate-fade-in flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-transform duration-200">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 text-white text-xs px-3 py-1 rounded-full font-bold shadow">Best Value</div>
              <h2 className="text-2xl font-extrabold mb-4 text-blue-700 dark:text-blue-300 text-center">Whisperly</h2>
              <ul className="space-y-3 mb-6 divide-y divide-blue-100 dark:divide-blue-900">
                {whisperlyFeatures.map((f, i) => (
                  <li key={i} className={`flex items-center text-lg py-2 ${f.highlight ? 'font-bold text-blue-700 dark:text-blue-300' : 'text-gray-900 dark:text-white'}`}>
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full bg-green-100 dark:bg-green-900">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-auto">
                <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-6 py-2 rounded-xl font-bold text-lg shadow">$39 One-Time</span>
                <div className="text-xs text-gray-500 mt-2">No subscription, all features included</div>
              </div>
            </div>
            {/* 竞品卡片 */}
            {competitors.map((c, idx) => (
              <div key={c.name} className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow p-8 border border-gray-200 dark:border-gray-800 opacity-80 flex flex-col hover:scale-[1.01] hover:shadow-xl transition-transform duration-200 animate-fade-in relative">
                <div className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-bold shadow z-10 whitespace-nowrap">{c.note}</div>
                <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200 text-center">{c.name}</h2>
                <ul className="space-y-3 mb-6 divide-y divide-gray-100 dark:divide-gray-800">
                  {c.features.map((f, i) => (
                    <li key={i} className={`flex items-center text-base py-2 ${f.value ? 'text-green-700 dark:text-green-400' : 'text-gray-400 dark:text-gray-300'}`}>
                      <span className={`inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full ${f.value ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-700'}`}>
                        {f.value ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        )}
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-auto">
                  <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-xl font-bold text-base shadow">$10/mo Subscription</span>
                  <div className="text-xs text-gray-500 mt-2">{c.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Whisperly is the Best Choice</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Whisperly is the only tool that guarantees your audio never leaves your device, with a one-time payment and no hidden fees. Enjoy peace of mind, professional accuracy, and lifetime updates—no subscriptions, no compromises.
            </p>
            <a href="/download" className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform font-bold text-lg">Download Free Trial</a>
          </div>
        </div>
      </section>
    </>
  );
} 