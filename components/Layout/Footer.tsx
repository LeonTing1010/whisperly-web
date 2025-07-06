import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-12" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto px-4 text-gray-500 dark:text-gray-400">
        {/* 主要导航区域 */}
        <nav className="flex flex-wrap justify-center gap-12 mb-8 text-left text-sm" aria-label="Footer Navigation">
          {/* 产品/功能导航 */}
          <section>
            <h3 className="block font-semibold mb-3 text-gray-700 dark:text-gray-200 text-base">Product & Features</h3>
            <ul className="space-y-2" role="list">
              <li><Link href="/" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/download" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Download Whisperly</Link></li>
              <li><Link href="/survey" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">User Survey</Link></li>
              <li><Link href="/compare" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Compare Transcription Tools</Link></li>
              <li><Link href="/faq" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/testimonials" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Customer Reviews</Link></li>
              <li><Link href="/blog" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog & Updates</Link></li>
            </ul>
          </section>
          
          {/* 支持与帮助 */}
          <section>
            <h3 className="block font-semibold mb-3 text-gray-700 dark:text-gray-200 text-base">Support & Help</h3>
            <ul className="space-y-2" role="list">
              <li><Link href="/support" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Support Center</Link></li>
              <li><Link href="/contact" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link href="/faq" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/blog" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Tutorials & Guides</Link></li>
              <li><Link href="/compare" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Feature Comparison</Link></li>
            </ul>
          </section>
          
          {/* 法律/政策导航 */}
          <section>
            <h3 className="block font-semibold mb-3 text-gray-700 dark:text-gray-200 text-base">Legal & Privacy</h3>
            <ul className="space-y-2" role="list">
              <li><Link href="/privacy" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Security & Compliance</Link></li>
              <li><Link href="/contact" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </section>
          
          {/* 资源/外链 */}
          <section>
            <h3 className="block font-semibold mb-3 text-gray-700 dark:text-gray-200 text-base">Resources & Tools</h3>
            <ul className="space-y-2" role="list">
              {/* AI转录工具 */}
              <li>
                <a
                  href="https://turboscribe.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit TurboScribe - AI transcription service"
                >
                  <Image src="/assets/turboscribe-logo.svg" alt="TurboScribe Logo" width={16} height={16} className="inline" />
                  TurboScribe
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://podcast.adobe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Adobe Podcast - Audio enhancement tool"
                >
                  <Image src="/assets/adobe-logo.svg" alt="Adobe Podcast Logo" width={16} height={16} className="inline" />
                  Adobe Podcast
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://elevenlabs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit ElevenLabs - AI voice synthesis platform"
                >
                  <Image src="/assets/elevenlabs-logo.svg" alt="ElevenLabs Logo" width={16} height={16} className="inline" />
                  ElevenLabs
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://otter.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Otter.ai - AI meeting transcription"
                >
                  <Image src="/assets/otter-logo.ico" alt="Otter.ai Logo" width={16} height={16} className="inline" />
                  Otter.ai
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.rev.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Rev - Professional transcription service"
                >
                  <Image src="/assets/rev-logo.ico" alt="Rev Logo" width={16} height={16} className="inline" />
                  Rev
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              {/* 音频处理工具 */}
              <li>
                <a
                  href="https://www.audacityteam.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Audacity - Free audio editor"
                >
                  <Image src="/assets/audacity-logo.svg" alt="Audacity Logo" width={16} height={16} className="inline" />
                  Audacity
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.adobe.com/products/audition.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Adobe Audition - Professional audio editing"
                >
                  <Image src="/assets/adobe-audition-logo.svg" alt="Adobe Audition Logo" width={16} height={16} className="inline" />
                  Adobe Audition
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              {/* 隐私和安全工具 */}
              <li>
                <a
                  href="https://www.torproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Tor Project - Privacy protection"
                >
                  <Image src="/assets/tor-logo.svg" alt="Tor Project Logo" width={16} height={16} className="inline" />
                  Tor Project
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://protonmail.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit ProtonMail - Secure email service"
                >
                  <Image src="/assets/protonmail-logo.ico" alt="ProtonMail Logo" width={16} height={16} className="inline" />
                  ProtonMail
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              {/* 开发者资源 */}
              <li>
                <a
                  href="https://openai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit OpenAI - AI research and development"
                >
                  <Image src="/assets/openai-logo.svg" alt="OpenAI Logo" width={16} height={16} className="inline" />
                  OpenAI
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Visit Hugging Face - AI model hub"
                >
                  <Image src="/assets/huggingface-logo.svg" alt="Hugging Face Logo" width={16} height={16} className="inline" />
                  Hugging Face
                  <FaExternalLinkAlt className="ml-1 w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </section>
        </nav>
        
        {/* 公司信息区域 */}
        <section className="text-center border-t border-gray-200 dark:border-gray-700 pt-8 pb-4">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Whisperly</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Professional audio transcription software with local processing and privacy protection. 
              Convert speech to text with high accuracy using AI-powered transcription technology.
            </p>
          </div>
          
          {/* 版权信息和SEO链接 */}
          <div className="text-sm">
            <address className="not-italic">
              &copy; {new Date().getFullYear()} Whisperly. All rights reserved. | 
              <Link href="/sitemap.xml" className="ml-2 hover:underline hover:text-blue-600 dark:hover:text-blue-400">Sitemap</Link> | 
              <Link href="/robots.txt" className="ml-2 hover:underline hover:text-blue-600 dark:hover:text-blue-400">Robots.txt</Link>
            </address>
          </div>
        </section>
      </div>
    </footer>
  );
} 