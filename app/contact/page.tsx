import SEO from "../../components/SEO/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact | Whisperly - Get in Touch"
        description="Contact Whisperly for support, feedback, or partnership inquiries. We're here to help with your audio transcription needs."
        keywords="Whisperly contact, support, audio transcription help"
        url="https://whisperly.com/contact"
      />
      <section className="max-w-2xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 ">Contact Us</h1>
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-900 dark:text-white">Name</label>
            <input type="text" className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-900 dark:text-white">Email</label>
            <input type="email" className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-900 dark:text-white">Message</label>
            <textarea className="w-full p-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-white" rows={5} placeholder="How can we help?" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
        <div className="mt-8 text-center text-gray-700 dark:text-gray-100">
          Or email us directly at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a>
        </div>
      </section>
    </>
  );
} 