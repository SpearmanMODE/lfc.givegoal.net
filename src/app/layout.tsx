// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "GiveGoal × LFC Impact",
  description: "Fan‑powered change for good.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="p-4 border-b border-white/20 flex justify-between">
          <Link href="/" className="text-lg font-bold">GiveGoal × LFC</Link>
          <nav>
            <Link href="/login" className="mr-4 text-sm">Login</Link>
            <Link href="/intro" className="text-sm">Intro</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

