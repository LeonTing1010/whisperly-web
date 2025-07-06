'use client'
import { useState } from "react";
import SEO from "../../components/SEO/SEO";

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    currentUsage: "",
    useCase: "",
    features: [] as string[],
    priceRange: "",
    paymentPreference: "",
    feedback: "",
    urgency: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setSuccess(true);
        setFormData({
          email: "",
          name: "",
          currentUsage: "",
          useCase: "",
          features: [],
          priceRange: "",
          paymentPreference: "",
          feedback: "",
          urgency: ""
        });
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
        title="User Survey | Whisperly - Help Us Build Better Features"
        description="Share your feedback and help us improve Whisperly. Tell us about your transcription needs and desired features."
        keywords="Whisperly survey, user feedback, feature requests, audio transcription needs"
        url="https://whisperly.space/survey"
      />
      <section className="relative min-h-screen py-20 bg-gradient-to-br from-blue-100 via-purple-100 to-white dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300 via-purple-300 to-transparent rounded-full blur-3xl opacity-40 pointer-events-none" />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
            Help Us Build Better Features
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
            Your feedback is invaluable. Tell us about your transcription needs and help shape the future of Whisperly Pro.
          </p>

          {success ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
              <div className="text-green-600 dark:text-green-400 text-xl font-semibold mb-2">
                Thank you for your feedback!
              </div>
              <p className="text-green-700 dark:text-green-300">
                We've received your survey and will consider your suggestions for future updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 space-y-6">
              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Current Usage */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Usage</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How often do you currently use audio transcription tools? *
                  </label>
                  <select
                    required
                    value={formData.currentUsage}
                    onChange={(e) => handleInputChange("currentUsage", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="occasionally">Occasionally</option>
                    <option value="never">Never used before</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    What do you primarily use transcription for? *
                  </label>
                  <select
                    required
                    value={formData.useCase}
                    onChange={(e) => handleInputChange("useCase", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select use case</option>
                    <option value="business-meetings">Business meetings</option>
                    <option value="interviews">Interviews</option>
                    <option value="podcasts">Podcasts</option>
                    <option value="lectures">Lectures/Education</option>
                    <option value="research">Research</option>
                    <option value="content-creation">Content creation</option>
                    <option value="personal-notes">Personal notes</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Feature Preferences */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Feature Preferences</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Which features are most important to you? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Unlimited transcription length",
                      "Higher accuracy models",
                      "Multiple language support",
                      "Export to various formats",
                      "Speaker identification",
                      "Real-time transcription",
                      "Batch processing",
                      "Custom vocabulary",
                      "Timestamping",
                      "Cloud sync",
                      "Team collaboration",
                      "API access"
                    ].map((feature) => (
                      <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureChange(feature)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pricing Preferences</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    What's your preferred price range for a professional transcription tool?
                  </label>
                  <select
                    value={formData.priceRange}
                    onChange={(e) => handleInputChange("priceRange", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select price range</option>
                    <option value="under-20">Under $20</option>
                    <option value="20-50">$20 - $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="over-200">Over $200</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Payment preference
                  </label>
                  <select
                    value={formData.paymentPreference}
                    onChange={(e) => handleInputChange("paymentPreference", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select payment preference</option>
                    <option value="one-time">One-time payment</option>
                    <option value="monthly">Monthly subscription</option>
                    <option value="yearly">Yearly subscription</option>
                    <option value="pay-per-use">Pay per use</option>
                  </select>
                </div>
              </div>

              {/* Additional Feedback */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Additional Feedback</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How urgently do you need these features?
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => handleInputChange("urgency", e.target.value)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select urgency</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="soon">Soon (within 3 months)</option>
                    <option value="eventually">Eventually (within 6 months)</option>
                    <option value="no-rush">No rush (when available)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Any additional comments or feature requests?
                  </label>
                  <textarea
                    value={formData.feedback}
                    onChange={(e) => handleInputChange("feedback", e.target.value)}
                    rows={4}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                    placeholder="Tell us about any specific features you'd like to see or improvements you'd suggest..."
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                  <div className="text-red-600 dark:text-red-400 text-sm">{error}</div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 hover:from-blue-700 hover:via-purple-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Survey"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
