// src/app/intro/page.tsx

export default function IntroPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">How It Works</h1>

      <p className="text-lg mb-6">
        This mock demonstrates how GiveGoal can integrate with the LFC app
        to power real‑time, fan‑driven impact.
      </p>

      <ol className="list-decimal space-y-3 ml-6">
        <li>Fans open the LFC app and select the GiveGoal tab.</li>
        <li>They see their campaign, rewards, badges & impact dashboard.</li>
        <li>On matchday, they participate in the Penalty Kick Game.</li>
      </ol>
      
      <div className="mt-8 text-center">
        <a
          href="/dashboard"
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full"
        >
          Go to Dashboard
        </a>
      </div>
    </main>
  );
}

