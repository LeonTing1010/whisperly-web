export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Whisperly. All rights reserved.<br />
        Compare:
        <a href="https://turboscribe.ai/" target="_blank" rel="noopener noreferrer" className="underline mx-1 hover:text-blue-600 dark:hover:text-blue-400">TurboScribe</a>|
        <a href="https://podcast.adobe.com/" target="_blank" rel="noopener noreferrer" className="underline mx-1 hover:text-blue-600 dark:hover:text-blue-400">Adobe Podcast</a>|
        <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="underline mx-1 hover:text-blue-600 dark:hover:text-blue-400">ElevenLabs</a>
      </div>
    </footer>
  );
} 