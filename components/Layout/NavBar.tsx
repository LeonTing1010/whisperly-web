import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Whisperly</Link>
        <div className="space-x-6">
          <Link href="/pricing" className="text-gray-700 dark:text-gray-100">Pricing</Link>
          <Link href="/compare" className="text-gray-700 dark:text-gray-100">Compare</Link>
          <Link href="/blog" className="text-gray-700 dark:text-gray-100">Blog</Link>
          <Link href="/faq" className="text-gray-700 dark:text-gray-100">FAQ</Link>
          <Link href="/testimonials" className="text-gray-700 dark:text-gray-100">Testimonials</Link>
          <Link href="/download" className="text-gray-700 dark:text-gray-100">Download</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-100">Contact</Link>
        </div>
      </div>
    </nav>
  );
} 