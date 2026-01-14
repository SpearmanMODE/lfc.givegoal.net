// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      <img
        src="/gglogo.jpg"
        alt="GiveGoal Logo"
        className="mx-auto mb-8"
        style={{ maxWidth: "300px" }}
      />
      <h1 className="text-xl font-normal mb-6">
        <span className="font-bold">Play Together.</span> Give Together. Live Together.
      </h1>
      <Link href="/login">
        <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-bold">
          Client Login
        </button>
      </Link>
    </main>
  );
}
