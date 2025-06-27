const faqs = [
  // Installation & Setup
  {
    question: "How do I install Whisperly?",
    answer: "Download Whisperly from our official website, run the installer, and follow the setup wizard. The application will automatically download the required AI model (approximately 1GB) on first launch.",
  },
  {
    question: "What are the system requirements?",
    answer: "Whisperly requires Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+), minimum 4GB RAM (8GB recommended), 2GB free storage space, and a modern multi-core CPU. GPU acceleration is optional but recommended.",
  },
  {
    question: "Do I need an internet connection?",
    answer: "You only need internet for the initial model download (approximately 1GB). After that, Whisperly works completely offline for all transcription tasks.",
  },

  // Privacy & Security
  {
    question: "How does local audio transcription work?",
    answer: "Whisperly processes your audio files directly on your device using advanced AI technology. Your audio never leaves your computer, ensuring complete privacy and data security.",
  },
  {
    question: "Is my data safe with Whisperly?",
    answer: "Yes, absolutely. All processing happens locally - your audio files and transcripts are never uploaded to the cloud or shared with third parties. Your data stays on your computer at all times.",
  },
  {
    question: "Does Whisperly collect any data?",
    answer: "No, Whisperly doesn't collect, store, or transmit any of your audio data or transcriptions. The application operates entirely offline after the initial model download.",
  },

  // Supported Formats & Languages
  {
    question: "What audio formats are supported?",
    answer: "Whisperly supports MP3, WAV, FLAC, M4A, AAC, OGG, and WMA files. The application automatically detects the format and converts it to the optimal format for transcription.",
  },
  {
    question: "What languages are supported?",
    answer: "Whisperly supports 99+ languages with automatic language detection. You can also manually select the language for better accuracy. The system handles mixed-language content and various accents.",
  },
  {
    question: "Can I transcribe multiple speakers?",
    answer: "Yes, Whisperly includes speaker diarization features that can automatically identify and label different speakers in your audio files for clearer, more organized transcriptions.",
  },

  // Processing & Performance
  {
    question: "How long does transcription take?",
    answer: "Processing time depends on the audio length, quality, and model size. A 30-minute audio file typically takes 5-15 minutes depending on your hardware and chosen model size.",
  },
  {
    question: "Which model size should I choose?",
    answer: "Choose based on your needs: Tiny (fastest, basic accuracy), Base (balanced, recommended), Small (better quality), Medium (high quality), or Large (best quality, slowest). For most users, Base or Small models provide the best balance.",
  },
  {
    question: "Can I use GPU acceleration?",
    answer: "Yes, Whisperly supports GPU acceleration for faster processing. You can use NVIDIA CUDA, Apple Metal (Mac), or CPU processing. The application will automatically select the best available option.",
  },

  // Export & Output
  {
    question: "What export formats are available?",
    answer: "Whisperly supports Plain Text (.txt), SRT Subtitle (.srt), JSON Format (.json), and CSV Format (.csv). Each format includes timestamps, confidence scores, and metadata as appropriate.",
  },
  {
    question: "Can I copy transcriptions to clipboard?",
    answer: "Yes, use the 'Copy' button to quickly copy the transcription text to your system clipboard for easy pasting into other applications.",
  },
  {
    question: "Do transcriptions include timestamps?",
    answer: "Yes, all export formats include precise timestamps. SRT format provides subtitle-style timing, while JSON and CSV formats include start/end times for each segment.",
  },

  // Troubleshooting
  {
    question: "What if I get a 'Model Not Found' error?",
    answer: "Ensure you have an internet connection for the first launch, check that you have sufficient disk space (2GB minimum), and try restarting the application. The model download is required only once.",
  },
  {
    question: "Why is processing slow?",
    answer: "Close other applications to free up memory, try using a smaller model (Tiny or Base), ensure you're using the recommended device setting, and check that your computer has adequate cooling.",
  },
  {
    question: "What if my audio file isn't supported?",
    answer: "Verify the file format is supported (MP3, WAV, FLAC, M4A, AAC, OGG, WMA). Try converting the file to MP3 or WAV format, or check that the file isn't corrupted.",
  },
  {
    question: "The application crashes - what should I do?",
    answer: "Update to the latest version, check system requirements, try running with CPU-only mode, and ensure you have adequate RAM and storage space available.",
  },

  // Licensing & Pricing
  {
    question: "How much does Whisperly cost?",
    answer: "Whisperly is available for a one-time purchase of $39 with a lifetime license. There are no subscription fees or recurring charges - you own the software forever.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you can try Whisperly for free with limited features before purchasing the full version to ensure it meets your needs.",
  },
  {
    question: "Do I need to renew my license?",
    answer: "No, the $39 license is a one-time purchase that includes lifetime access to Whisperly and all future updates at no additional cost.",
  },

  // Advanced Features
  {
    question: "Can I process multiple files at once?",
    answer: "Yes, Whisperly supports batch processing. You can select multiple audio files and process them sequentially, then export all results at once.",
  },
  {
    question: "Does Whisperly provide confidence scores?",
    answer: "Yes, the application provides confidence scores for each transcription segment, helping you identify areas that may need review or correction.",
  },
  {
    question: "Can I add custom terminology?",
    answer: "Yes, you can add custom dictionaries to improve transcription accuracy for specialized content like medical, technical, or industry-specific terminology.",
  },

  // Updates & Support
  {
    question: "How do I update Whisperly?",
    answer: "Whisperly automatically checks for updates when connected to the internet. Updates are free for all licensed users and include new features and improvements.",
  },
  {
    question: "Where can I get help if I have issues?",
    answer: "Check the application logs for detailed error information, visit our official website for additional support resources, or contact our support team with specific error messages.",
  },
  {
    question: "Is technical support included?",
    answer: "Yes, technical support is included with your license. You can contact our support team for help with installation, usage, or troubleshooting issues.",
  },
];

export default function FAQList() {
  return (
    <div className="space-y-8">
      {/* Installation & Setup */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Installation & Setup</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(0, 3).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy & Security */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Privacy & Security</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(3, 6).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supported Formats & Languages */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Supported Formats & Languages</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(6, 9).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Processing & Performance */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Processing & Performance</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(9, 12).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Export & Output */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Export & Output</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(12, 15).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Troubleshooting</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(15, 19).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Licensing & Pricing */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Licensing & Pricing</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(19, 22).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Features */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Advanced Features</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(22, 25).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Updates & Support */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Updates & Support</h2>
        <div className="grid grid-cols-1 gap-6">
          {faqs.slice(25, 28).map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400 text-lg">{faq.question}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 