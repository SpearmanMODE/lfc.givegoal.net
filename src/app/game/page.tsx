// src/app/game/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const mockFriends = ["Alex", "Jordan", "Taylor", "Morgan", "Chris", "Sam"];

export default function MatchdayPKGame() {
  const [step, setStep] = useState(1);
  const [friends, setFriends] = useState<string[]>([]);
  const [currentFriend, setCurrentFriend] = useState("");
  const [power, setPower] = useState(0);
  const [downlineCount, setDownlineCount] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  const [result, setResult] = useState("");

  const handleAddFriend = () => {
    if (currentFriend.trim() && friends.length < 3) {
      const updatedFriends = [...friends, currentFriend.trim()];
      setFriends(updatedFriends);
      setPower(updatedFriends.length * 33);
      setCurrentFriend("");
      if (updatedFriends.length === 3) {
        simulateDownline();
        setTimeout(() => {
          const outcome = Math.random() < 0.5 ? "GOAL!" : "SAVED!";
          setResult(outcome);
          setGameDone(true);
        }, 1000);
      }
    }
  };

  const simulateDownline = () => {
    const downline = 3 + 9 + Math.floor(Math.random() * 10); // Simulate 3 → 9 → few more
    setDownlineCount(downline);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6 text-center">
      <h1 className="text-3xl font-bold">Matchday PK Challenge</h1>

      {!gameDone ? (
        <>
          <p className="text-lg">
            Power up your striker by donating $1 on behalf of 3 friends
          </p>

          <div className="bg-white p-4 rounded-lg shadow text-black max-w-md mx-auto">
            <input
              type="text"
              value={currentFriend}
              onChange={(e) => setCurrentFriend(e.target.value)}
              placeholder="Enter friend name"
              className="w-full px-4 py-2 border rounded mb-2"
            />
            <button
              onClick={handleAddFriend}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
              disabled={friends.length >= 3}
            >
              Donate $1 & Power Up
            </button>

            <p className="mt-2 text-sm text-gray-700">
              {friends.length}/3 friends added
            </p>

            <div className="mt-4">
              <div className="h-4 bg-gray-300 rounded-full">
                <div
                  className="h-4 bg-green-500 rounded-full"
                  style={{ width: `${power}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">Power Level: {power}%</p>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400">{result}</h2>
          <p className="text-lg">
            You donated $3 and started a downline of <strong>{downlineCount}</strong> donors!
          </p>
          <p className="text-md text-green-400">You’re ranked #2 out of 430 fans at this match.</p>

          <div className="bg-white text-black p-4 rounded-lg max-w-md mx-auto">
            <h3 className="font-bold text-lg mb-2">VIP Reward Preview</h3>
            <ul className="text-left list-disc pl-6">
              <li>Post-match locker room tour</li>
              <li>Meet & greet with LFC legends</li>
              <li>50,000 FanCash bonus</li>
            </ul>
          </div>

          <Link href="/dashboard">
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold">
              Return to Dashboard
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
