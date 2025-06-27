import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="inline-flex items-center gap-2">
            <span className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-clip-text text-transparent drop-shadow-sm select-none">
              Whisperly
            </span>
          </span>
        </Link>
        <div className="space-x-6">
          <Link
            href="/pricing"
            className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 pb-1"
          >
            Pricing
          </Link>
          <Link
            href="/compare"
            className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 pb-1"
          >
            Compare
          </Link>
          <Link
            href="/download"
            className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 pb-1"
          >
            Download
          </Link>
          <Link
            href="/contact"
            className="text-lg font-semibold text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 pb-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 