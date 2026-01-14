// src/app/login/page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication
    if (username && password) {
      router.push("/intro"); // Redirect to /intro on success
    } else {
      alert("Please enter a username and password.");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">GiveGoal Login</h1>

        <div>
          <label className="block mb-1 font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold"
        >
          Log In
        </button>
      </form>
    </main>
  );
}

