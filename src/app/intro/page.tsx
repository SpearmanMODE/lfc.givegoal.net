// File: src/app/intro/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-red-500">
          How It Works
        </h1>

        <p className="text-lg text-center mb-8">
          This mock microsite demonstrates how <span className="font-bold">GiveGoal</span> can be integrated into the official LFC App to power fan-driven community impact on matchday.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-neutral-900 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">1. LFC App Entry</h2>
            <p className="text-sm">Fans open the official LFC App and tap the new <strong>GiveGoal</strong> tab from the bottom nav.</p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">2. Fan Dashboard</h2>
            <p className="text-sm">Fans view their dashboard: upcoming challenges, badges, donations, rewards, and match activations.</p>
          </div>

          <div className="bg-neutral-900 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">3. Halftime PK Game</h2>
            <p className="text-sm">At halftime, fans donate $1 on behalf of friends to power up avatars and compete for good — striker vs keeper!</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/dashboard">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full text-white font-bold">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

