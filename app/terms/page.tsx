export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 leading-7">
      <h1 className="text-2xl font-bold mb-4">
        利用規約
      </h1>

      <p>
        本規約は、GENBA（以下、「本サービス」）の
        利用条件を定めるものです。
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">
        禁止事項
      </h2>

      <ul className="list-disc pl-6">
        <li>法令違反行為</li>
        <li>不正アクセス</li>
        <li>他ユーザーへの迷惑行為</li>
        <li>虚偽情報の投稿</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">
        免責事項
      </h2>

      <p>
        本サービスは、正確性・安全性・継続性を
        保証するものではありません。
      </p>

      <p>
        本サービス利用によって生じた損害について、
        運営者は責任を負いません。
      </p>
      <p className="mt-4">
        システム障害、通信障害、データ消失その他の問題により利用者に責任が生じた場合でも、
        運営者は故意または重過失がある場合を除き責任を負いません。
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">
        サービス変更・停止
      </h2>

      <p>
        運営者は、必要に応じて本サービスを
        変更・停止できるものとします。
      </p>

      <p className="mt-8 text-sm text-gray-500">
        制定日：2026年5月11日
      </p>
    </main>
  );
}