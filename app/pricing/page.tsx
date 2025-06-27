'use client'
import { useState } from "react";
import CTAButton from "../../components/Button/CTAButton";
import SEO from "../../components/SEO/SEO";

export default function PricingPage() {
  const [months, setMonths] = useState(12);
  const subscriptionPrice = 10; // $10/month for competitors
  const whisperlyPrice = 39; // $39 one-time
  const competitorTotal = months * subscriptionPrice;

  return (
    <>
      <SEO
        title="Pricing | Whisperly - One-Time Payment Audio Transcription"
        description="Whisperly offers a one-time payment for lifetime audio transcription. Compare with subscription-based tools and see your savings."
        keywords="audio transcription pricing, one-time payment, subscription comparison, refund policy"
        url="https://whisperly.com/pricing"
      />
      <section className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 ">Simple, Transparent Pricing</h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">Pro Version</h2>
          <div className="text-3xl font-bold text-blue-600 mb-2">$39 <span className="text-base font-normal text-gray-500 dark:text-white">one-time</span></div>
          <ul className="list-disc ml-6 mb-4 text-gray-700 dark:text-white">
            <li>Lifetime access, all features</li>
            <li>No subscription, no hidden fees</li>
            <li>Free updates forever</li>
            <li>Priority email support</li>
          </ul>
          <CTAButton text="Buy Pro Now" href="/pricing" className="mt-4" />
        </div>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">How much can you save?</h2>
          <label className="block mb-2 dark:text-white">Months of use:</label>
          <input
            type="range"
            min={1}
            max={36}
            value={months}
            onChange={e => setMonths(Number(e.target.value))}
            className="w-full mb-2"
          />
          <div className="flex justify-between text-sm mb-4 dark:text-white">
            <span>1</span>
            <span>36</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 dark:text-white">
            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
              <div className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Whisperly</div>
              <div className="text-2xl font-bold text-blue-600">$39</div>
              <div className="text-sm text-gray-500 dark:text-white">One-time payment</div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-900 p-4 rounded shadow text-center ">
              <div className="text-lg font-semibold mb-1">Subscription Tool</div>
              <div className="text-2xl font-bold text-red-600">${competitorTotal}</div>
              <div className="text-sm text-gray-500">${subscriptionPrice}/month</div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-8 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
          <p>Email us at <a href="mailto:support@whisperly.com" className="text-blue-600 underline">support@whisperly.com</a> for any questions about pricing, payment, or refunds.</p>
        </div>
      </section>
    </>
  );
} 