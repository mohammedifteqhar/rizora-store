"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="w-full border-b-2 border-gold bg-cream">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="flex w-full flex-col items-center justify-between gap-4 px-6 py-2 sm:flex-row lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-4">
          <img src="/logo.jpg" alt="Rizora logo" className="h-16 w-16 sm:h-24 sm:w-24" />
          <span className="bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-2xl leading-none text-transparent sm:text-4xl">RIZORA</span>
        </Link>
        <nav className="mx-auto flex w-fit flex-wrap justify-center gap-3 rounded-full border border-gold/60 px-4 py-2 text-[10px] sm:gap-6 sm:text-xs">
          <Link href="/shop" className="text-[#B9975B] transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">SHOP</Link>
          <Link href="/collections" className="text-[#B9975B] transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">COLLECTIONS</Link>
          <Link href="/artisan" className="text-[#B9975B] transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">ARTISAN</Link>
          <Link href="/journal" className="text-[#B9975B] transition-all duration-300 hover:text-gold hover:underline hover:underline-offset-4">JOURNAL</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-4">
          <Link href="/cart" className="text-xl">🛒</Link>
          <Link href="/book" className="text-xs">BOOK</Link>
          <button onClick={() => setLoginOpen(true)} className="rounded-full border border-gold/60 px-4 py-2 text-xs">LOGIN</button>
        </div>
      </div>
      {loginOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-80 bg-cream p-6 shadow-lg">
          <button onClick={() => setLoginOpen(false)} className="text-sm text-gold">Close X</button>
          <h2 className="mt-6 font-serif text-2xl">Login</h2>
          <p className="mt-2 text-sm text-gray-600">Login is demo only. Real login will be added in Phase 3.</p>
          <input type="email" placeholder="Email" className="mt-4 w-full rounded-md border border-[#E6DFD5] px-3 py-2" />
          <input type="password" placeholder="Password" className="mt-3 w-full rounded-md border border-[#E6DFD5] px-3 py-2" />
          <button className="mt-4 w-full rounded-full bg-gold px-8 py-3 text-charcoal">Login</button>
        </div>
      )}
    </header>
  );
}