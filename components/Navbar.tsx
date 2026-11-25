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
            <img src="/logo.jpg" alt="Rizora logo" className="h-20 w-20 shrink-0 object-contain lg:h-32 lg:w-32" />
            <span className="flex flex-col leading-none">
              <span className="bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-2xl font-semibold tracking-widest text-transparent lg:text-4xl">RIZORA</span>
              <span className="mt-1 text-[8px] font-semibold tracking-[0.2em] text-[#B9975B] lg:text-[10px]">WALL AND HOME DECOR</span>
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
            <Link href="/shop" className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </Link>
            <button onClick={() => setLoginOpen(true)} className="rounded-full bg-white px-5 py-3 text-xs font-semibold tracking-widest shadow-sm hover:text-gold">SIGN IN</button>
            <Link href="/cart" className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm" aria-label="Open cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M6 7h12l1.2 13.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 7z" /><path d="M9 10V6a3 3 0 0 1 6 0v4" /></svg>
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link href="/shop" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            </Link>
            <Link href="/cart" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm" aria-label="Open cart">
              <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M6 7h12l1.2 13.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 7z" /><path d="M9 10V6a3 3 0 0 1 6 0v4" /></svg>
            </Link>
            <button onClick={() => setMenuOpen(true)} className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full bg-white shadow-sm" aria-label="Open menu">
              <span className="h-0.5 w-5 bg-[#B45309]" />
              <span className="h-0.5 w-5 bg-[#B45309]" />
              <span className="h-0.5 w-5 bg-[#B45309]" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-50 flex justify-end bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setMenuOpen(false)}>
        <div className={`flex h-full w-4/5 max-w-xs flex-col bg-[#FBEEDC] p-4 shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between">
            <img src="/logo.jpg" alt="Rizora logo" className="h-14 w-14 object-contain" />
            <button onClick={() => setMenuOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg shadow-sm" aria-label="Close menu">X</button>
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-full bg-white px-4 py-2.5 text-sm shadow-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5 shrink-0"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
            <input type="text" placeholder="Search decor..." className="w-full bg-transparent text-sm outline-none" />
          </div>
          <nav className="mt-4 flex flex-col gap-1.5">
            <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 text-base font-semibold text-[#B45309] shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></svg></span> Home <span className="ml-auto h-2 w-2 rounded-full bg-[#B45309]" />
            </Link>
            <Link href="/shop" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M6 7h12l1.2 13.2a1 1 0 0 1-1 1.1H5.8a1 1 0 0 1-1-1.1L6 7z" /><path d="M9 10V6a3 3 0 0 1 6 0v4" /></svg></span> Shop <span className="ml-auto">∨</span>
            </Link>
            <Link href="/collections" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="m3 17 5-4 4 3 4-3 5 4" /></svg></span> Collections
            </Link>
            <Link href="/artisan" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 3l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 8.3l5-.7L12 3z" /></svg></span> Artisan
            </Link>
            <Link href="/journal" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" /><path d="M19 19H6a2 2 0 0 0-2 2" /></svg></span> Journal
            </Link>
            <Link href="/book" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6DFD5] bg-white"><svg viewBox="0 0 24 24" fill="none" stroke="#8C6D1F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18" /></svg></span> Book
            </Link>
          </nav>
          <div className="mt-auto pt-4">
            <Link href="/book" onClick={() => setMenuOpen(false)} className="block w-full rounded-full bg-gold px-6 py-3 text-center text-sm font-semibold tracking-widest text-charcoal">BOOK</Link>
            <button onClick={openLogin} className="mt-2 block w-full rounded-full bg-[#B45309] px-6 py-3 text-center text-sm font-semibold tracking-widest text-white">SIGN IN / LOGIN</button>
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