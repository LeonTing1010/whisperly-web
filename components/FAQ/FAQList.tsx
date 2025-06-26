const faqs = [
  {
    question: "How does local audio transcription work?",
    answer: "Whisperly processes your audio files directly on your device, ensuring your data never leaves your computer.",
  },
  {
    question: "Is my data safe with Whisperly?",
    answer: "Yes, all processing is local. Your audio and transcripts are never uploaded to the cloud.",
  },
  {
    question: "What languages are supported?",
    answer: "Whisperly supports over 50 languages, including English, Chinese, Spanish, and more.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you can try Whisperly for free with limited features before purchasing the full version.",
  },
];

export default function FAQList() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 