import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Whisperly - 本地音频转录工具 | 保护隐私的音频转文字软件",
  description: "Whisperly本地音频转录工具 - 100%本地处理，保护隐私安全，一次付费终身使用。支持多语言高精度转录，专业音频降噪，专为播客创作者、企业培训和视频创作者打造。",
  openGraph: {
    title: "Whisperly - 本地音频转录工具",
    description: "Whisperly本地音频转录工具 - 100%本地处理，保护隐私安全，一次付费终身使用。支持多语言高精度转录，专业音频降噪，为音频创作者和企业提供高效转录服务。",
    type: "website",
    url: "https://whisperly.app",
    images: [{ url: "https://whisperly.app/og-image.jpg" }],
    locale: "zh_CN",
    siteName: "Whisperly"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
              <img src="/logo.svg" alt="Whisperly Logo" className="h-8 w-8" /> Whisperly
            </Link>
            <div className="hidden md:flex gap-6 text-base font-medium text-gray-700 dark:text-gray-200">
              <Link href="/features" className="hover:text-blue-600 dark:hover:text-blue-400 transition">核心功能</Link>
              <Link href="/use-cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition">使用场景</Link>
              <Link href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">定价</Link>
              <Link href="/download" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">免费下载</Link>
            </div>
            <div className="md:hidden">
              {/* 可扩展为移动端菜单 */}
            </div>
          </nav>
        </header>
        <main className="flex-1 w-full">{children}</main>
        <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-8 mt-12 text-center text-gray-400 dark:text-gray-500 text-sm">
          <div className="mb-2">&copy; {new Date().getFullYear()} Whisperly. All rights reserved.</div>
          <div className="flex justify-center gap-4 text-xs text-gray-300 dark:text-gray-600">
            <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">关于</a>
            <a href="/pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">定价</a>
            <a href="/compare" className="hover:text-blue-600 dark:hover:text-blue-400 transition">产品对比</a>
            <a href="/download" className="hover:text-blue-600 dark:hover:text-blue-400 transition">下载</a>
          </div>
        </footer>
      </body>
    </html>
  );
}