import React from "react";

export default function DownloadPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">软件下载</h1>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-blue-700">支持平台</h2>
        <ul className="flex flex-wrap gap-6 justify-center text-gray-700 mb-8">
          <li>Windows 10/11</li>
          <li>macOS 12+</li>
          <li>Linux (即将支持)</li>
        </ul>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-700 transition">下载免费版</button>
          <button className="bg-white border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-50 transition">购买专业版</button>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-blue-700">激活流程</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>购买专业版后，获取激活码</li>
          <li>在软件内输入激活码，解锁全部功能</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4 text-blue-700">常见问题 FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-1">Q: 免费版和专业版有何区别？</p>
            <p className="text-gray-500">A: 免费版有时长/功能限制，专业版无限制。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-1">Q: 下载后如何安装？</p>
            <p className="text-gray-500">A: 按平台指引一步安装。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
