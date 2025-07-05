import React from 'react';
import SEO from "../../components/SEO/SEO";

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>Whisperly is a fully local, cross-platform desktop application that converts audio files to text using advanced AI technology. All audio processing is done locally on your computer, ensuring privacy and data security.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Privacy First: All processing is local, your audio never leaves your device</li>
          <li>Multi-format Support: MP3, WAV, FLAC, M4A, AAC, OGG, WMA</li>
          <li>High Quality: Powered by OpenAI Whisper model</li>
          <li>Cross-platform: Windows, macOS, Linux</li>
          <li>One-time Purchase: Lifetime license, no subscription</li>
          <li>Offline Operation: No internet required after initial setup</li>
        </ul>
      </>
    ),
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: (
      <>
        <ol className="list-decimal ml-6">
          <li>Download Whisperly from the official website</li>
          <li>Run the installer and follow the setup wizard</li>
          <li>On first launch, the AI model (~1GB) will be downloaded</li>
          <li>After download, you can use Whisperly fully offline</li>
        </ol>
        <p className="mt-2 text-sm text-gray-500">*Internet is only required for the initial model download.</p>
      </>
    ),
  },
  {
    id: 'main-interface',
    title: 'Main Interface',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Welcome Screen: Large icon, "Select Audio File" button, drag & drop support</li>
          <li>Workspace: Left - file info/progress/export; Right - transcription results and editor</li>
          <li>Status Indicators: Local processing, Ready, Processing, Loading, etc.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'audio-processing',
    title: 'Audio Processing',
    content: (
      <>
        <ol className="list-decimal ml-6">
          <li>Select audio file (multiple formats supported)</li>
          <li>Automatic format detection and audio analysis</li>
          <li>Preprocessing (convert to 16kHz mono)</li>
          <li>AI transcription to generate text</li>
          <li>Post-processing (punctuation, timestamps, formatting)</li>
        </ol>
        <ul className="list-disc ml-6 mt-2">
          <li>Supports auto language detection, quality/speed settings, CPU/GPU selection</li>
        </ul>
      </>
    ),
  },
  {
    id: 'settings',
    title: 'Settings & Configuration',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Model Selection: Tiny/Base/Small/Medium/Large (speed vs. accuracy)</li>
          <li>Compute Device: Auto/CPU/NVIDIA GPU/Apple Metal</li>
          <li>Output Format: TXT/SRT/JSON/CSV</li>
          <li>Output Directory: Custom save path</li>
        </ul>
        <p className="mt-2">Click "Save Settings" after changes. Some settings require restart.</p>
      </>
    ),
  },
  {
    id: 'export',
    title: 'Export & Copy',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Export as TXT, SRT, JSON, CSV</li>
          <li>One-click copy transcription to clipboard</li>
        </ul>
        <ol className="list-decimal ml-6 mt-2">
          <li>After transcription, click "Export"</li>
          <li>Select format and save location</li>
        </ol>
      </>
    ),
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Optimization',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Model download failed: Check network and disk space</li>
          <li>Slow processing: Close other apps, try smaller model or GPU acceleration</li>
          <li>Unsupported audio: Convert to MP3/WAV and ensure file is not corrupted</li>
          <li>Crash: Update version, check system requirements, try CPU-only mode</li>
        </ul>
        <p className="mt-2">Optimization: Prefer GPU, close unnecessary apps, choose suitable model, ensure good cooling.</p>
      </>
    ),
  },
  {
    id: 'shortcuts',
    title: 'Keyboard Shortcuts',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Ctrl+O: Open audio file</li>
          <li>Ctrl+S: Save settings</li>
          <li>Ctrl+Q: Quit application</li>
          <li>F1: Open help</li>
          <li>Ctrl+C: Copy transcription</li>
          <li>Ctrl+E: Export transcription</li>
          <li>Ctrl+,: Open settings</li>
          <li>Enter: Save settings</li>
          <li>Escape: Cancel/close panel</li>
        </ul>
      </>
    ),
  },
  {
    id: 'advanced',
    title: 'Advanced Features',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Batch processing: Multiple files sequentially, batch export</li>
          <li>Audio analysis: RMS, zero-crossing rate, spectral centroid, SNR</li>
          <li>Multi-language: Auto/manual selection, 99+ languages, mixed content</li>
          <li>Quality metrics: Confidence score for each segment</li>
          <li>Custom dictionary: Add specialized terms for better accuracy</li>
        </ul>
      </>
    ),
  },
  {
    id: 'support',
    title: 'Support & Updates',
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Version and license info in settings</li>
          <li>Auto update check when online, free lifetime upgrades</li>
          <li>For help, visit the official website or contact support</li>
        </ul>
      </>
    ),
  },
];

export default function GuidePage() {
  return (
    <>
      <SEO
        title="User Guide | Whisperly - How to Use Audio Transcription"
        description="Complete guide on how to use Whisperly for audio transcription. Learn about features, troubleshooting, and best practices."
        keywords="Whisperly guide, audio transcription tutorial, how to use Whisperly"
        url="https://whisperly.space/guide"
      />
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Whisperly User Guide</h1>
      <nav className="mb-8">
        <ul className="list-disc ml-6 space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-blue-600 hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          <div className="text-base leading-relaxed">{section.content}</div>
        </section>
      ))}
    </div>
    </>
  );
} 