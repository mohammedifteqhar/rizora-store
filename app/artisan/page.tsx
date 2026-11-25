import Link from "next/link";

export default function ArtisanPage() {
  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">THE RIZORA DIFFERENCE</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Our <span className="text-gold">Artisan Story</span></h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-gray-500">Every piece is made by hand in Bengaluru, in small batches, and checked before it leaves for your wall.</p>

      <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#E6DFD5] bg-white shadow-sm">
        <img src="/products/midnight-river-clock.jpg" alt="Hand-finished Rizora wall clock" className="h-64 w-full object-cover sm:h-80" />
        <div className="p-6 text-center">
          <p className="font-serif text-xl">Hand-finished, not mass-made</p>
          <p className="mt-2 text-sm text-gray-600">Resin, wood and gold, finished by hand, one piece at a time.</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm">
          <p className="font-serif text-3xl text-gold">01</p>
          <h2 className="mt-3 font-serif text-xl">Crafted With Care</h2>
          <p className="mt-2 text-sm text-gray-600">Every piece is checked and finished by hand, so no two pieces are exactly alike.</p>
        </div>
        <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm">
          <p className="font-serif text-3xl text-gold">02</p>
          <h2 className="mt-3 font-serif text-xl">Small Batch</h2>
          <p className="mt-2 text-sm text-gray-600">We make pieces in small batches, so the quality stays high and the designs stay special.</p>
        </div>
        <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm">
          <p className="font-serif text-3xl text-gold">03</p>
          <h2 className="mt-3 font-serif text-xl">Checked Before Packing</h2>
          <p className="mt-2 text-sm text-gray-600">Each piece is checked before packing, and delivered free in Bengaluru on orders over Rs. 999.</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/shop" className="rounded-full bg-gold px-8 py-3 font-semibold text-charcoal">Shop the Collection</Link>
      </div>
    </main>
  );
}