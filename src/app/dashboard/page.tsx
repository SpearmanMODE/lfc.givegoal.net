// src/app/dashboard/page.tsx
"use client";

import { useState } from "react";

export default function Dashboard() {
  const tabs = ["Campaigns", "Rewards", "Badges", "Impact"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Your GiveGoal Dashboard</h1>

      <div className="flex gap-3 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-full font-semibold ${
              active === t
                ? "bg-red-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="bg-white text-black rounded-lg p-4 min-h-[200px]">
        <p className="text-lg font-medium">{active} (mock data)</p>
      </section>

      <div className="mt-10 text-center">
        <a
          href="/matchday-pk"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full"
        >
          Matchday PK
        </a>
      </div>
    </main>
  );
}

