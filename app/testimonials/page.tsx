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
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 ">What Our Users Say</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <Testimonials />
        </div>
      </section>
    </>
  );
} 