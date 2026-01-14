// app/dashboard/page.tsx
"use client";


import { useState } from "react";


const tabs = ["Campaigns", "Rewards", "Badges", "Impact"];


export default function Dashboard() {
const [activeTab, setActiveTab] = useState("Campaigns");


return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-4">Your GiveGoal Dashboard</h1>


<div className="flex space-x-4 mb-6">
{tabs.map((tab) => (
<button
key={tab}
onClick={() => setActiveTab(tab)}
className={`px-4 py-2 rounded-full font-semibold transition border ${
activeTab === tab
? "bg-red-600 text-white"
: "bg-white text-black"
}`}
>
{tab}
</button>
))}
</div>


<div className="bg-white text-black rounded-lg p-4 min-h-[200px]">
<p className="text-lg">Showing: {activeTab}</p>
<p className="text-sm text-gray-600 mt-2">[Mock content for {activeTab} will appear here]</p>
</div>


<div className="mt-10 text-center">
<a
href="/matchday-pk"
className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full text-lg"
>
Go to MATCHDAY-PK
</a>
</div>
</div>
);
}
