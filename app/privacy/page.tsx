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
      </h2>

      <ul className="list-disc pl-6">
        <li>本人確認</li>
        <li>業務連絡機能の提供</li>
        <li>異常報告・チャット機能の提供</li>
        <li>サービス改善</li>
      </ul>
     <h2 className="text-xl font-bold mt-6 mb-2">
      画像利用について
      </h2>

      <p>
        ユーザーが投稿した画像は、業務連絡や異常報告の目的で利用されます。
        これらの画像は、
        ユーザーの同意なしに第三者に提供されることはありません。
      </p>
      <h2 className="text-xl font-bold mt-6 mb-2">
        データの保存について
      </h2>
      <p>本アプリでは、ユーザーが投稿した引き継ぎ情報、異常報告、
      チャット内容、画像などのデータを、サービス提供および機能改善のために保存する場合があります。</p>
      <p>保存されたデータは、ユーザーの同意なしに第三者に提供されることはありません。
        認証及び
        アクセス制御を行ったうえで管理されます。
      </p>

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