const testimonials = [
  {
    user: "Podcaster",
    quote:
      '"I finally found a tool that keeps my audio private and gives me full control. Whisperly is a game changer for my workflow!"',
  },
  {
    user: "Corporate Trainer",
    quote:
      '"We process hours of training audio every week. Whisperly saves us money and keeps our data secure—no more cloud worries."',
  },
  {
    user: "Video Creator",
    quote:
      '"The Pro version\'s accuracy and export options are perfect for my YouTube subtitles. Highly recommended!"',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8 dark:text-white">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2 dark:text-white">{t.user}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 