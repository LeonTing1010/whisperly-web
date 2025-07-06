'use client'
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import SEO from "../../components/SEO/SEO";

export default function PricingPage() {
  const [months, setMonths] = useState(12);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [survey, setSurvey] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const subscriptionPrice = 10; // $10/month for competitors
  const competitorTotal = months * subscriptionPrice;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/buy-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, survey }),
      });
      if (res.ok) {
        setSuccess(true);
        setEmail("");
        setSurvey("");
      } else {
        const data = await res.json();
        if (typeof data === 'object' && data && 'error' in data && typeof data.error === 'string') {
          setError(data.error);
        } else {
          setError("Something went wrong.");
        }
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Pricing | Whisperly - One-Time Payment vs Subscription"
        description="Compare Whisperly's one-time payment of $39 with competitors' monthly subscriptions. Save money with lifetime access to local audio transcription."
        keywords="Whisperly pricing, one-time payment audio transcription, subscription alternative"
        url="https://whisperly.space/pricing"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900 dark:text-white text-center tracking-tight">Simple, Transparent Pricing</h1>
        {/* 价格卡片 */}
        <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-2xl p-10 mb-10 border border-blue-100 dark:border-blue-900 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Pro Version</h2>
          <div className="text-4xl font-extrabold text-blue-600 mb-2">$39 <span className="text-base font-normal text-gray-500 dark:text-white">one-time</span></div>
          <ul className="list-none flex flex-col gap-2 mb-6 text-gray-700 dark:text-gray-200 text-lg">
            <li>✔ Lifetime access, all features</li>
            <li>✔ No subscription, no hidden fees</li>
            <li>✔ Free updates forever</li>
            <li>✔ Priority email support</li>
          </ul>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button href="#" className="mt-4 w-full md:w-auto text-lg px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-200 border-0 font-bold" onClick={e => { e.preventDefault(); setOpen(true); }}>Buy Pro Now</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
              <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-2xl border border-blue-100 dark:border-blue-900 animate-fade-in">
                <Dialog.Title className="text-xl font-bold mb-2">Buy Whisperly Pro</Dialog.Title>
                <Dialog.Description className="mb-4 text-gray-600 dark:text-gray-300">Enter your email and answer a quick survey. You'll receive the Pro version within 24 hours.</Dialog.Description>
                {success ? (
                  <div className="text-green-600 font-semibold">Thank you! We'll send your Pro version within 24 hours.</div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-1 text-left">
                      <span className="font-medium">Email</span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border-2 border-blue-200 dark:border-blue-700 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                        placeholder="you@email.com"
                      />
                    </label>
                    <label className="flex flex-col gap-1 text-left">
                      <span className="font-medium">How do you plan to use Whisperly?</span>
                      <textarea
                        required
                        value={survey}
                        onChange={e => setSurvey(e.target.value)}
                        className="border-2 border-blue-200 dark:border-blue-700 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 outline-none transition"
                        placeholder="e.g. Podcast, research, business, etc."
                        rows={3}
                      />
                    </label>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 text-white rounded-lg px-4 py-2 font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-200 disabled:opacity-60"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit & Buy"}
                    </button>
                  </form>
                )}
                <Dialog.Close asChild>
                  <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl" aria-label="Close">×</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        {/* 节省对比区块 */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-2xl shadow-xl p-10 mb-10 border border-blue-100 dark:border-blue-900 animate-fade-in">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">How much can you save?</h2>
          <label className="block mb-2 dark:text-white">Months of use:</label>
          <input
            type="range"
            min={1}
            max={36}
            value={months}
            onChange={e => setMonths(Number(e.target.value))}
            className="w-full mb-2 accent-blue-500"
          />
          <div className="flex justify-between text-sm mb-4 dark:text-white">
            <span>1</span>
            <span>36</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 dark:text-white">
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center border border-blue-100 dark:border-blue-900">
              <div className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Whisperly</div>
              <div className="text-2xl font-bold text-blue-600">$39</div>
              <div className="text-sm text-gray-500 dark:text-white">One-time payment</div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center border border-red-100 dark:border-red-900">
              <div className="text-lg font-semibold mb-1">Subscription Tool</div>
              <div className="text-2xl font-bold text-red-600">${competitorTotal}</div>
              <div className="text-sm text-gray-500">${subscriptionPrice}/month</div>
            </div>
          </div>
        </div>
        {/* 联系方式区块 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-8 dark:text-white border border-blue-100 dark:border-blue-900 animate-fade-in">
          <h2 className="text-xl font-bold mb-2">Need Help?</h2>
          <p>Email us at <a href="mailto:support@whisperly.space" className="text-blue-600 underline">support@whisperly.space</a> for any questions about pricing, payment, or refunds.</p>
        </div>
      </div>
    </section>
    </>
  );
} 