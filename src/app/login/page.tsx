// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock auth logic
    if (username === "fan" && password === "lfc") {
      router.push("/intro");
    } else {
      setError("Invalid credentials. Try fan / lfc.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <Image
          src="/gggoldhrt.jpg"
          alt="GiveGoal Gold Heart"
          width={400}
          height={400}
          className="mx-auto"
        />
        <h1 className="text-2xl text-white font-bold">
          LFC x GiveGoal Login
        </h1>
        <form
          onSubmit={handleLogin}
          className="space-y-4 text-left bg-white p-6 rounded-lg shadow"
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
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}




