// app/intro/page.tsx
import Image from "next/image";
import Link from "next/link";


export default function Intro() {
return (
<div className="p-6 space-y-6 max-w-3xl mx-auto">
<h1 className="text-3xl font-bold mb-2">How It Works</h1>
<p className="text-lg">This mock demonstrates how GiveGoal can integrate into the official LFC app to power real-time, fan-driven impact during matches.</p>


<div className="space-y-4">
<div>
<h2 className="text-xl font-semibold mb-1">1. LFC App Entry</h2>
<p className="text-sm">Fans open the official LFC App and navigate to the new <strong>GiveGoal</strong> tab from the main navigation.</p>
</div>


<div>
<h2 className="text-xl font-semibold mb-1">2. Fan Dashboard</h2>
<p className="text-sm">Inside the GiveGoal tab, fans access their personalized dashboard showing campaign progress, impact, and upcoming matchday activations.</p>
</div>


<div>
<h2 className="text-xl font-semibold mb-1">3. Halftime PK Game</h2>
<p className="text-sm">During matchday, fans participate in the penalty kick game by powering up avatars with donations and competing to score goals or make saves!</p>
</div>
</div>


<div className="text-center mt-10">
<Link href="/dashboard">
<button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-bold">
View GiveGoal Dashboard
</button>
</Link>
</div>
</div>
);
}
