"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginMessage("Login is demo only. Real login will be added in Phase 3.");
  }

  return (
    <>
      <header className="border-b-2 border-gold bg-cream">
        <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-3 sm:grid sm:grid-cols-[auto_1fr_auto] sm:gap-4 sm:px-6 sm:py-2">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img src="/logo.jpg" alt="Rizora logo" className="h-16 w-16 shrink-0 object-contain sm:h-24 sm:w-24" />
            <span className="bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-2xl font-semibold leading-none tracking-widest text-transparent sm:text-4xl">RIZORA</span>
          </Link>
          <nav className="mx-auto flex w-fit flex-wrap justify-center gap-3 rounded-full border border-gold/60 px-4 py-2 text-[10px] tracking-widest text-[#B9975B] sm:gap-6 sm:px-6 sm:text-xs">
            <Link href="/shop" className="transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">SHOP</Link>
            <Link href="/collections" className="transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">COLLECTIONS</Link>
            <Link href="/artisan" className="transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">ARTISAN</Link>
            <Link href="/journal" className="transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">JOURNAL</Link>
          </nav>
          <div className="flex shrink-0 items-center justify-end gap-4 text-xs tracking-widest text-[#B9975B]">
            <Link href="/cart" className="text-xl hover:text-gold">🛒</Link>
            <Link href="/book" className="hover:text-gold">BOOK</Link>
            <button onClick={() => setLoginOpen(true)} className="rounded-full border border-gold px-4 py-2 text-gold">LOGIN</button>
          </div>
        </div>
      </header>

      {loginOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="h-full w-full max-w-sm bg-cream p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">Login</h2>
              <button onClick={() => setLoginOpen(false)} className="text-xl">X</button>
            </div>
            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <input required type="email" placeholder="Email" className="w-full border border-[#E6DFD5] bg-white p-3" />
              <input required type="password" placeholder="Password" className="w-full border border-[#E6DFD5] bg-white p-3" />
              <button type="submit" className="w-full bg-charcoal px-8 py-3 text-white">Login</button>
            </form>
            {loginMessage && <p className="mt-4 text-sm text-gray-600">{loginMessage}</p>}
            <p className="mt-4 text-sm text-gray-500">Demo only. No account is created yet.</p>
          </div>
        </div>
      )}
    </>
  );
}