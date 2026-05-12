import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="mb-8 text-4xl font-bold">
        GENBA
      </h1>

      <div className="space-y-4">
        <Link
          href="/terms"
          className="block text-blue-600 underline"
        >
          利用規約
        </Link>

        <Link
          href="/privacy"
          className="block text-blue-600 underline"
        >
          プライバシーポリシー
        </Link>

        <Link
          href="/contact"
          className="block text-blue-600 underline"
        >
          お問い合わせ
        </Link>
      </div>
    </main>
  );
}