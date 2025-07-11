import Link from "next/link";
import SEO from "../../components/SEO/SEO";

const posts = [
  {
    title: "How to Transcribe Podcasts Locally with Whisperly",
    excerpt: "Learn how to use Whisperly for fast, private podcast transcription on your own device.",
    url: "/blog/how-to-transcribe-podcasts-locally",
    published: true,
  },
  {
    title: "Best Offline Audio-to-Text Tools in 2024",
    excerpt: "A comparison of the top offline speech-to-text software, including Whisperly, for privacy-focused users.",
    url: "/blog/best-offline-audio-to-text-tools-2024",
    published: true,
  },
  {
    title: "Protecting Your Privacy with Local Audio Transcription",
    excerpt: "Why local processing is the best way to keep your audio data secure.",
    url: "/blog/protecting-your-privacy-local-audio-transcription",
    published: true,
  },
  {
    title: "AI Transcription Accuracy Improvement Tips",
    excerpt: "Expert techniques to maximize your AI transcription accuracy with Whisperly.",
    url: "/blog/ai-transcription-accuracy-improvement-tips",
    published: true,
  },
  {
    title: "Speech-to-Text Business Applications",
    excerpt: "Discover how speech-to-text technology is revolutionizing business operations and workflows.",
    url: "/blog/speech-to-text-business-applications",
    published: true,
  },
];

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Whisperly - Audio Transcription Tips & Industry Insights"
        description="Read the latest tips, tutorials, and industry insights on audio transcription, privacy, and AI speech-to-text from Whisperly."
        keywords="Whisperly blog, audio transcription tips, speech-to-text tutorials, privacy insights"
        url="https://whisperly.space/blog"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white text-center tracking-tight">Whisperly Blog</h1>
          <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 text-center">
            Tips, tutorials, and industry insights on audio transcription, privacy, and AI speech-to-text.
          </p>
          <ul className="space-y-8">
            {posts.map((post, idx) => (
              <li key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-900 group transition-transform hover:scale-[1.025] hover:shadow-2xl animate-fade-in">
                {post.published ? (
                  <Link href={post.url} className="text-2xl font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                    {post.title}
                  </Link>
                ) : (
                  <div className="text-2xl font-bold text-gray-500 dark:text-gray-400 cursor-not-allowed">
                    {post.title}
                    <span className="ml-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-base">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
} 