import React from "react";

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">定价与购买</h1>
      <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center border border-blue-100">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">免费版</h2>
          <p className="mb-4 text-gray-500">适合轻度体验，基础功能</p>
          <div className="text-3xl font-extrabold mb-4">¥0</div>
          <ul className="list-disc pl-6 text-gray-700 mb-6 text-left">
            <li>本地转录</li>
            <li>有限时长/功能</li>
            <li>隐私保障</li>
          </ul>
          <a href="/download" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">免费下载</a>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-8 flex flex-col items-center border-2 border-blue-600 scale-105">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">专业版</h2>
          <p className="mb-4 text-gray-500">适合专业创作者/企业</p>
          <div className="text-3xl font-extrabold mb-4 text-blue-700">¥299</div>
          <ul className="list-disc pl-6 text-gray-700 mb-6 text-left">
            <li>无限时长/批量处理</li>
            <li>更高准确率</li>
            <li>专属技术支持</li>
            <li>终身免费升级</li>
          </ul>
          <a href="/download" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">立即购买</a>
        </div>
        <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center border border-blue-100">
          <h2 className="text-2xl font-bold mb-2 text-blue-700">企业定制</h2>
          <p className="mb-4 text-gray-500">大客户/特殊需求</p>
          <div className="text-3xl font-extrabold mb-4">定制报价</div>
          <ul className="list-disc pl-6 text-gray-700 mb-6 text-left">
            <li>API/私有化部署</li>
            <li>专属功能定制</li>
            <li>专属服务</li>
          </ul>
          <a href="mailto:support@whisperly.com" className="bg-blue-100 text-blue-700 px-6 py-2 rounded font-semibold hover:bg-blue-200 transition">联系咨询</a>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4 text-blue-700">价格对比</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded-lg bg-white shadow text-center">
            <thead className="bg-blue-50">
              <tr>
                <th className="p-3 border">产品</th>
                <th className="p-3 border">Whisperly 专业版</th>
                <th className="p-3 border">TurboScribe</th>
                <th className="p-3 border">Adobe Podcast</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">价格</td>
                <td className="border p-2">¥299/终身</td>
                <td className="border p-2">$10/月</td>
                <td className="border p-2">$240/年</td>
              </tr>
              <tr>
                <td className="border p-2">本地处理</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">❌</td>
                <td className="border p-2">❌</td>
              </tr>
              <tr>
                <td className="border p-2">终身升级</td>
                <td className="border p-2">✔️</td>
                <td className="border p-2">❌</td>
                <td className="border p-2">❌</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-4 text-blue-700">常见问题 FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-1">Q: 购买后如何激活？</p>
            <p className="text-gray-500">A: 支付后获取激活码，软件内输入即可。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-1">Q: 可以退款吗？</p>
            <p className="text-gray-500">A: 7天内无理由退款。</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="font-semibold mb-1">Q: 后续升级收费吗？</p>
            <p className="text-gray-500">A: 终身免费升级。</p>
          </div>
        </div>
      </section>
    </main>
  );
}
