"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginMessage("Login is demo only. Real login will be added in Phase 3.");
  }

  function openLogin() {
    setMenuOpen(false);
    setLoginOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#E6DFD5] bg-[#FBEEDC]">
        <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
        <div className="flex w-full flex-nowrap items-center justify-between gap-2 px-3 py-1 lg:px-12">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <img src="/logo.jpg" alt="Rizora logo" className="h-26 w-26 shrink-0 object-contain lg:h-40 lg:w-40" />
            <span className="flex flex-col leading-none">
              <span className="bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-2xl font-semibold tracking-widest text-transparent lg:text-4xl">RIZORA</span>
              <span className="mt-1 text-[8px] font-semibold tracking-[0.3em] text-[#B9975B] lg:text-[10px]">WALL DECOR</span>
            </span>
          </Link>
          <nav className="mx-auto hidden w-fit items-center gap-6 rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-widest text-charcoal shadow-sm lg:flex">
            <Link href="/" className="hover:text-gold">HOME</Link>
            <Link href="/shop" className="hover:text-gold">SHOP</Link>
            <Link href="/collections" className="hover:text-gold">COLLECTIONS</Link>
            <Link href="/artisan" className="hover:text-gold">ARTISAN</Link>
            <Link href="/journal" className="hover:text-gold">JOURNAL</Link>
          </nav>
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Link href="/shop" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-label="Search">🔍</Link>
            <button onClick={() => setLoginOpen(true)} className="rounded-full bg-white px-5 py-3 text-xs font-semibold tracking-widest shadow-sm hover:text-gold">SIGN IN</button>
            <Link href="/cart" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-label="Open cart">🛒</Link>
          </div>
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link href="/shop" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-label="Search">🔍</Link>
            <Link href="/cart" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-label="Open cart">🛒</Link>
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full bg-white shadow-sm" aria-label="Open menu">
              <span className="h-0.5 w-5 bg-[#B45309]" />
              <span className="h-0.5 w-5 bg-[#B45309]" />
              <span className="h-0.5 w-5 bg-[#B45309]" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 flex justify-end bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMenuOpen(false)}>
        <div className={`flex h-full w-4/5 max-w-sm flex-col bg-[#FBEEDC] p-6 shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <img src="/logo.jpg" alt="Rizora logo" className="h-20 w-20 object-contain" />
            <button onClick={() => setMenuOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-sm" aria-label="Close menu">X</button>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
            <span>🔍</span>
            <input type="text" placeholder="Search decor..." className="w-full bg-transparent outline-none" />
          </div>
          <nav className="mt-6 flex flex-col gap-2">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 text-xl font-semibold text-[#B45309] shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">🏠</span> Home <span className="ml-auto h-2 w-2 rounded-full bg-[#B45309]" />
            </Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 text-xl font-semibold text-charcoal hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">🛍️</span> Shop <span className="ml-auto">∨</span>
            </Link>
            <Link href="/collections" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 text-xl font-semibold text-charcoal hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">🖼️</span> Collections
            </Link>
            <Link href="/artisan" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 text-xl font-semibold text-charcoal hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">✋</span> Artisan
            </Link>
            <Link href="/journal" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 text-xl font-semibold text-charcoal hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">📖</span> Journal
            </Link>
            <Link href="/book" onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-2xl px-4 py-3 text-xl font-semibold text-charcoal hover:bg-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DFD5] bg-white text-lg">📅</span> Book
            </Link>
          </nav>
          <div className="mt-auto pt-6">
            <Link href="/book" onClick={() => setMenuOpen(false)} className="block w-full rounded-full bg-gold px-8 py-4 text-center font-semibold tracking-widest text-charcoal">BOOK</Link>
            <button onClick={openLogin} className="mt-3 block w-full rounded-full bg-[#B45309] px-8 py-4 text-center font-semibold tracking-widest text-white">SIGN IN / LOGIN</button>
          </div>
        </div>
      </div>

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