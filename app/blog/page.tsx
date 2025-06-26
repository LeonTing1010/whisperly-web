import SEO from "../../components/SEO/SEO";

const posts = [
  {
    title: "How to Transcribe Podcasts Locally with Whisperly",
    excerpt: "Learn how to use Whisperly for fast, private podcast transcription on your own device.",
    url: "/blog/how-to-transcribe-podcasts-locally",
  },
  {
    title: "Best Offline Audio-to-Text Tools in 2024",
    excerpt: "A comparison of the top offline speech-to-text software, including Whisperly, for privacy-focused users.",
    url: "/blog/best-offline-audio-to-text-tools-2024",
  },
  {
    title: "Protecting Your Privacy with Local Audio Transcription",
    excerpt: "Why local processing is the best way to keep your audio data secure.",
    url: "/blog/protecting-your-privacy-local-audio-transcription",
  },
];

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Whisperly - Audio Transcription Tips & Industry Insights"
        description="Read the latest tips, tutorials, and industry insights on audio transcription, privacy, and AI speech-to-text from Whisperly."
        keywords="Whisperly blog, audio transcription tips, speech-to-text tutorials, privacy insights"
        url="https://whisperly.com/blog"
      />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Whisperly Blog</h1>
        <p className="mb-8 text-lg text-gray-700 ">
          Tips, tutorials, and industry insights on audio transcription, privacy, and AI speech-to-text.
        </p>
        <ul className="space-y-8">
          {posts.map((post, idx) => (
            <li key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <a href={post.url} className="text-2xl font-semibold text-blue-600 hover:underline dark:text-blue-400">{post.title}</a>
              <p className="text-gray-700 dark:text-white mt-2">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
} 