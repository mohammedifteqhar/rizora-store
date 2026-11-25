import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-cream text-charcoal">
      <div className="grid w-full grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-3xl font-semibold tracking-widest text-transparent">RIZORA</p>
          <p className="mt-1 text-xs font-semibold tracking-[0.3em] text-[#B9975B]">WALL DECOR</p>
          <p className="mt-4 text-sm text-gray-600">We believe great wall decor should be enjoyed by everyone. Every piece is hand-finished in Bengaluru, checked before packing, and made to last on your wall.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">Hand-Finished</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">Small Batch</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-sm">Made in Bengaluru</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-widest">EXPLORE</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-gold">Shop All</Link></li>
            <li><Link href="/collections" className="hover:text-gold">Collections</Link></li>
            <li><Link href="/artisan" className="hover:text-gold">Artisan</Link></li>
            <li><Link href="/journal" className="hover:text-gold">Journal</Link></li>
            <li><Link href="/book" className="hover:text-gold">Book a Consultation</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-widest">HELP</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/cart" className="hover:text-gold">Your Cart</Link></li>
            <li><Link href="/shop" className="hover:text-gold">Shop All Pieces</Link></li>
            <li><Link href="/book" className="hover:text-gold">Free Consultation</Link></li>
            <li>Bengaluru, India</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl">Need help choosing?</h3>
          <p className="mt-2 text-sm text-gray-600">Book a free consultation and we will help you choose the right piece for your wall.</p>
          <Link href="/book" className="mt-4 block w-full rounded-full bg-gold px-8 py-3 text-center font-semibold text-charcoal">Book a Free Consultation</Link>
          <p className="mt-3 text-center text-xs text-gray-500">Free delivery in Bengaluru on orders over Rs. 999.</p>
        </div>
      </div>
      <div className="border-t border-[#E6DFD5] px-4 py-4 text-center text-xs text-gray-500 sm:px-6 lg:px-12">
        © 2026 Rizora Wall Decor. All rights reserved.
      </div>
    </footer>
  );
}