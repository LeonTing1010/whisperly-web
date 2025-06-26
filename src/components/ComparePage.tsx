import React from "react";

export default function ComparePage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
        产品对比与市场分析
      </h1>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">功能对比表</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg bg-white shadow text-center">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3 border">功能</th>
                <th className="p-3 border">Whisperly 免费版</th>
                <th className="p-3 border">Whisperly 专业版</th>
                <th className="p-3 border">TurboScribe</th>
                <th className="p-3 border">Adobe Podcast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">本地处理</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">❌</td>
                <td className="border p-2">❌</td>
              </tr>
              <tr>
                <td className="border p-2">一次性付费</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">❌</td>
                <td className="border p-2">❌</td>
              </tr>
              <tr>
                <td className="border p-2">多语言支持</td>
                <td className="border p-2">部分</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">✔️</td>
              </tr>
              <tr>
                <td className="border p-2">专业降噪</td>
                <td className="border p-2">❌</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">部分</td>
                <td className="border p-2">✔️</td>
              </tr>
              <tr>
                <td className="border p-2">价格</td>
                <td className="border p-2">免费</td>
                <td className="border p-2">¥299/终身</td>
                <td className="border p-2">$10/月</td>
                <td className="border p-2">$240/年</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2 text-blue-700">用户推荐</h3>
          <ul className="list-disc pl-6 text-gray-700 text-left">
            <li>免费版：轻度用户、体验者</li>
            <li>专业版：播客主、企业、视频创作者</li>
          </ul>
        </div>
        <div className="bg-blue-50 rounded-lg p-8 shadow flex flex-col items-center">
          <h3 className="text-xl font-bold mb-2 text-blue-700">竞品分析</h3>
          <ul className="list-disc pl-6 text-gray-700 text-left">
            <li>TurboScribe：订阅制，云端处理，隐私风险</li>
            <li>Adobe Podcast：专业但价格高，需整套订阅</li>
            <li>ElevenLabs：功能强大但价格昂贵，复杂度高</li>
          </ul>
        </div>
      </section>
      <section className="mb-12">
        <div className="bg-white rounded-lg shadow p-8">
          <h3 className="text-xl font-bold mb-2 text-blue-700">失败案例分析</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>开源工具用户体验差，门槛高</li>
            <li>一次性付费工具缺乏持续更新导致流失</li>
            <li>独立开发者产品获客难，技术难度大</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
