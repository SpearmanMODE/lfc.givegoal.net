// src/app/login/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock login logic (always succeeds)
    if (username && password) {
      router.push('/intro'); // Redirect after "login"
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-sm shadow-lg space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Client Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-2 rounded text-white font-bold"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
