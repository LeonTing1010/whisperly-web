import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto flex flex-col items-center py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 leading-tight drop-shadow">本地化音频转录<br />保护隐私，一次付费终身使用</h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl">Whisperly 提供高质量本地音频转文字，数据不上传云端，隐私安全有保障。支持多语言、专业降噪、极简操作，适合播客、企业、视频创作者。</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="/download" className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition">立即免费下载</a>
          <a href="/pricing" className="bg-white border border-blue-600 text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg shadow hover:bg-blue-50 transition">了解专业版</a>
        </div>
        <div className="w-full max-w-2xl bg-gray-50 rounded-xl shadow p-8 mb-10 border">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">在线体验</h2>
          <p className="mb-3 text-gray-500">上传一小段音频，立即体验转录效果：</p>
          <div className="border-2 border-dashed rounded p-8 text-gray-400 bg-white">[在线演示组件占位，支持mp3/wav上传]</div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="max-w-5xl mx-auto py-8 px-4 text-center">
        <div className="text-gray-400 mb-4">受信任于</div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <img src="/logo_google.svg" alt="Google" className="h-8" />
          <img src="/logo_microsoft.svg" alt="Microsoft" className="h-8" />
          <img src="/logo_amazon.svg" alt="Amazon" className="h-8" />
          <img src="/logo_meta.svg" alt="Meta" className="h-8" />
          <img src="/logo_bilibili.svg" alt="Bilibili" className="h-8" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">三步轻松转录</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-4">1</div>
            <h3 className="font-semibold mb-2">上传音频</h3>
            <p className="text-gray-500">支持 mp3/wav/m4a 等主流格式，隐私本地保障</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-4">2</div>
            <h3 className="font-semibold mb-2">本地极速转录</h3>
            <p className="text-gray-500">AI 自动识别，准确率高达 95%+，支持多语言</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center text-3xl mb-4">3</div>
            <h3 className="font-semibold mb-2">导出文本</h3>
            <p className="text-gray-500">一键导出多种格式，支持字幕、文稿等多场景</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">核心优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="text-4xl mb-3">🔒</span>
            <h3 className="font-semibold mb-2">本地处理</h3>
            <p className="text-gray-500">数据绝不上传云端，隐私安全</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="text-4xl mb-3">💸</span>
            <h3 className="font-semibold mb-2">一次性付费</h3>
            <p className="text-gray-500">买断即用，后续升级免费</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="text-4xl mb-3">🌍</span>
            <h3 className="font-semibold mb-2">多语言高准确率</h3>
            <p className="text-gray-500">支持多种语言，准确率高达95%+</p>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <span className="text-4xl mb-3">🎧</span>
            <h3 className="font-semibold mb-2">专业降噪</h3>
            <p className="text-gray-500">内置降噪算法，界面极简</p>
          </div>
        </div>
      </section>

      {/* Demo/Showcase Section */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">转录效果展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/demo1.png" alt="Demo1" className="rounded mb-4 w-full h-40 object-cover" />
            <p className="text-gray-500">原始音频片段</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/demo2.png" alt="Demo2" className="rounded mb-4 w-full h-40 object-cover" />
            <p className="text-gray-500">AI 转录结果</p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/demo3.png" alt="Demo3" className="rounded mb-4 w-full h-40 object-cover" />
            <p className="text-gray-500">导出字幕/文稿</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">真实用户评价</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <img src="/avatar1.png" alt="用户1" className="w-16 h-16 rounded-full mb-4" />
            <p className="text-gray-700 mb-2">“隐私安全，转录准确率高”</p>
            <span className="text-gray-400 text-sm">—— 播客主</span>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <img src="/avatar2.png" alt="用户2" className="w-16 h-16 rounded-full mb-4" />
            <p className="text-gray-700 mb-2">“一次性买断，性价比高”</p>
            <span className="text-gray-400 text-sm">—— 企业用户</span>
          </div>
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
            <img src="/avatar3.png" alt="用户3" className="w-16 h-16 rounded-full mb-4" />
            <p className="text-gray-700 mb-2">“本地处理，速度快”</p>
            <span className="text-gray-400 text-sm">—— 视频创作者</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12 text-blue-700 text-center">常见问题 FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="font-semibold mb-1">Q: 支持哪些音频格式？</p>
            <p className="text-gray-500">A: 支持 mp3、wav、m4a 等主流格式。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="font-semibold mb-1">Q: 我的数据会上传到云端吗？</p>
            <p className="text-gray-500">A: 完全本地处理，绝不上传。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="font-semibold mb-1">Q: 专业版和免费版有何区别？</p>
            <p className="text-gray-500">A: 专业版支持更长音频、更高准确率和批量处理。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="font-semibold mb-1">Q: 购买后如何激活？</p>
            <p className="text-gray-500">A: 支付后获取激活码，软件内输入即可。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
