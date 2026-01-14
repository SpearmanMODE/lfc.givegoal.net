// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && password) {
      router.push("/intro");
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <img
          src="/gggoldhrt.jpg"
          alt="GiveGoal Gold Heart"
          className="mx-auto"
          style={{ maxWidth: "260px" }}
        />
        <h1 className="text-2xl text-white font-bold">LFC x GiveGoal Login</h1>

        <form
          onSubmit={handleLogin}
          className="bg-white text-black p-6 rounded-lg shadow space-y-4"
        >
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-bold"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}





