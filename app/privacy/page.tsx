export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl p-6 leading-7">
      <h1 className="text-2xl font-bold mb-4">
        プライバシーポリシー
      </h1>

      <p>
        GENBA（以下、「本サービス」）は
        工場等の交代勤務現場において
        業務連絡、異常報告、チャット機能等を
        提供するため、ユーザー情報を取得・利用します。
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">
        取得する情報
      </h2>

      <ul className="list-disc pl-6">
        <li>メールアドレス</li>
        <li>表示名</li>
        <li>部署情報</li>
        <li>投稿内容</li>
        <li>画像データ</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">
        利用目的
        <li>画像投稿</li>
        <li>現場の異常報告や設備状況を共有する為写真を添付する機能で
          写真を使用します。
        </li>
      </h2>

      <ul className="list-disc pl-6">
        <li>本人確認</li>
        <li>業務連絡機能の提供</li>
        <li>異常報告・チャット機能の提供</li>
        <li>サービス改善</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">
        第三者提供
      </h2>

      <p>
        法令に基づく場合を除き、
        ユーザー情報を第三者へ提供しません。
      </p>

      <p className="mt-8 text-sm text-gray-500">
        制定日：2026年5月11日
      </p>
    </main>
  );
}