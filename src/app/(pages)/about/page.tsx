import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
        关于 Whisperly
      </h1>
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-700">产品理念</h2>
          <p className="text-gray-700">
            Whisperly 致力于为音频内容创作者、企业和自媒体提供安全、高效、一次性付费的本地音频转录工具。我们相信隐私和高性价比同样重要。
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-700">团队介绍</h2>
          <p className="text-gray-700">
            由一群热爱音频与 AI 技术的开发者组成，专注于提升音频转录体验。
          </p>
        </div>
      </section>
      <section className="mb-12">
        <div className="bg-blue-50 rounded-lg shadow p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-700">适用人群</h2>
          <ul className="list-disc pl-6 text-gray-700 text-left">
            <li>播客主播</li>
            <li>企业培训/会议录音处理</li>
            <li>自媒体视频创作者</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-2 text-blue-700">联系我们</h2>
          <p className="text-gray-700 mb-2">
            加入官方社群，获取技术支持与最新资讯。
          </p>
          <div className="border rounded p-4 bg-gray-50 text-gray-500">
            [社群二维码/联系方式占位]
          </div>
        </div>
      </section>
    </main>
  );
}
