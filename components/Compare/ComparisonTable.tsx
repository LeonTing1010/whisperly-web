export default function ComparisonTable() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Whisperly vs Competitors: Audio Transcription Comparison</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border rounded-lg overflow-hidden bg-white dark:bg-gray-900">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Whisperly</th>
                  <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">TurboScribe</th>
                  <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">Adobe Podcast</th>
                  <th className="px-6 py-3 font-semibold text-gray-900 dark:text-gray-100">ElevenLabs</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">Local Processing</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">One-Time Payment</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌ (Subscription)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌ (Subscription)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌ (Subscription)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">Privacy Protection</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">❌</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">Multi-Language</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">Accuracy</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">95%+</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">High</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">High</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-200">High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
} 