import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#E6DFD5] bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-widest text-gold">RIZORA</Link>
        <nav className="flex gap-8 text-sm tracking-widest">
          <Link href="/shop">SHOP</Link>
          <Link href="/collections">COLLECTIONS</Link>
          <Link href="/artisan">ARTISAN</Link>
          <Link href="/journal">JOURNAL</Link>
          <Link href="/cart">CART</Link>
          <Link href="/book">BOOK</Link>
        
        </nav>
      </div>
    </header>
  );
}