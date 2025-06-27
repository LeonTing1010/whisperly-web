import SEO from "../../components/SEO/SEO";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function TestimonialsPage() {
  return (
    <>
      <SEO
        title="Testimonials | Whisperly - User Reviews and Success Stories"
        description="Read real user reviews and success stories from podcasters, trainers, and creators who use Whisperly for local audio transcription."
        keywords="Whisperly testimonials, user reviews, audio transcription success stories"
        url="https://whisperly.com/testimonials"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">What Our Users Say</h1>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-blue-100 dark:border-blue-900 animate-fade-in">
            <Testimonials />
          </div>
        </div>
      </section>
    </>
  );
} 