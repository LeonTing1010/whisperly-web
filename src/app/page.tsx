import HomePage from "@/components/HomePage";
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">Whisperly 本地音频转录工具</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            100%本地处理，保护隐私安全，一次付费终身使用。专为播客创作者、企业培训和视频创作者打造的专业音频转录解决方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl">
              免费下载
            </a>
            <a href="/pricing" className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-8 rounded-lg transition shadow-md hover:shadow-lg">
              查看定价
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">专为创作者打造的核心优势</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">基于先进的Whisper技术，为不同场景提供专业级音频转录体验</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">本地隐私保护</h3>
              <p className="text-gray-600 dark:text-gray-400">音频100%本地处理，不上传云端，确保敏感信息安全，保护您的知识产权和数据隐私。</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">高精度转录</h3>
              <p className="text-gray-600 dark:text-gray-400">95%+转录准确率，支持多语言识别，智能分段和标点符号自动添加，媲美专业人工转录质量。</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">一次付费终身使用</h3>
              <p className="text-gray-600 dark:text-gray-400">一次性购买，终身使用所有功能，无订阅费用，无隐藏成本，比持续订阅更经济实惠的长期选择。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">深受用户信赖的音频转录解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"作为播客创作者，Whisperly帮我节省了大量转录时间，本地处理让我非常安心。"</p>
              <div className="flex items-center justify-center">
                <img src="/avatars/podcaster.jpg" alt="用户头像" className="w-12 h-12 rounded-full mr-4" />
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">李明</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">科技播客主理人</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"企业培训录音处理从未如此简单，准确率高，一次性付费非常划算。"</p>
              <div className="flex items-center justify-center">
                <img src="/avatars/hr-manager.jpg" alt="用户头像" className="w-12 h-12 rounded-full mr-4" />
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">张婷</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">人力资���总监</div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">"视频创作必备工具，转录准确率比我试用过的其他工具都高，一次性购买太值了！"</p>
              <div className="flex items-center justify-center">
                <img src="/avatars/video-creator.jpg" alt="用户头像" className="w-12 h-12 rounded-full mr-4" />
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">王强</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">B站视频创作者</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">准备好开始使用Whisperly了吗？</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">立即下载免费版体验核心功能，或升级至专业版解锁全部高级功能</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/download" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              免费下载
            </a>
            <a href="/pricing" className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              查看专业版定价
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}