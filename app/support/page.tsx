export default function SupportPage() {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-blue-100 dark:border-blue-900 animate-fade-in text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">Support Center</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">We're here to help! Please visit our <a href='/faq' className='text-blue-600 underline'>FAQ</a> or <a href='/contact' className='text-blue-600 underline'>Contact Us</a> for assistance.</p>
          <p className="text-gray-500 dark:text-gray-400">More support resources coming soon.</p>
        </div>
      </div>
    </section>
  );
} 