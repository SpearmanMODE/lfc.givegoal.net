// File: src/app/dashboard/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-10">
      <h1 className="text-3xl font-bold text-center text-red-500">
        Your GiveGoal Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Campaign Card 1 */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-white">🌍 Walk to Anfield</h2>
          <p className="text-sm text-gray-300">
            Fans pledged to walk or bike to the match instead of driving. You earned 50 Impact Points!
          </p>
          <p className="text-green-400 text-sm">CO₂ Saved: 2.4kg</p>
        </div>

        {/* Campaign Card 2 */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-white">♻️ Plastic-Free Challenge</h2>
          <p className="text-sm text-gray-300">
            Fans pledged to avoid single-use plastics this week. 40,000 bottles diverted from landfills!
          </p>
          <p className="text-green-400 text-sm">Impact Points: 75</p>
        </div>

        {/* Campaign Card 3 */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-white">🧤 Halftime PK Game</h2>
          <p className="text-sm text-gray-300">
            You powered up the LFC striker with $3 in matched donations. Goal scored! +100 Fan Cash.
          </p>
          <p className="text-yellow-400 text-sm">Matched Donations: £5.00</p>
        </div>

        {/* Campaign Card 4 */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-white">🤝 Volunteer Impact</h2>
          <p className="text-sm text-gray-300">
            You pledged 2 hours at your local food bank. That’s equivalent to 60 meals served.
          </p>
          <p className="text-green-400 text-sm">Points Earned: 120</p>
        </div>

        {/* Campaign Card 5 */}
        <div className="bg-neutral-900 p-6 rounded-lg shadow space-y-4">
          <h2 className="text-xl font-bold text-white">🎁 Invite & Multiply</h2>
          <p className="text-sm text-gray-300">
            You invited 3 friends to GiveGoal. 2 accepted and made a pledge. Ripple activated!
          </p>
          <p className="text-blue-400 text-sm">Ripple Impact Bonus: 30</p>
        </div>
      </div>

      <div className="text-center pt-10">
        <Link href="/game">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full">
            🚀 Launch MATCHDAY-PK Game
          </button>
        </Link>

        <p className="text-sm text-gray-400 mt-4">
          Dashboard is mock-only for demo purposes.
        </p>
      </div>
    </div>
  );
}


