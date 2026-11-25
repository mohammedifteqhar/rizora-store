import Link from "next/link";
import { products } from "@/lib/products";

export default function CollectionsPage() {
  const canvas = products.filter((p) => p.category === "Canvas");
  const clocks = products.filter((p) => p.category === "Clocks");

  const collections = [
    {
      name: "Canvas",
      count: canvas.length,
      image: "/products/sapphire-drift-resin-canvas.jpg",
      text: "Resin canvas pieces, hand-finished in deep colours.",
    },
    {
      name: "Clocks",
      count: clocks.length,
      image: "/products/midnight-river-clock.jpg",
      text: "Wall clocks, hand-finished, made to be looked at.",
    },
    {
      name: "All Pieces",
      count: products.length,
      image: "/products/triple-rush-resin-canvas.jpg",
      text: "Every piece in the collection, canvas and clocks.",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">EXPLORE OUR RANGE</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Shop by <span className="text-gold">Category</span></h1>
      <p className="mt-2 text-center text-gray-500">Hand-finished pieces, crafted for every wall and every room.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {collections.map((collection) => (
          <Link key={collection.name} href="/shop" className="group flex flex-col items-center rounded-3xl border border-[#E6DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <img src={collection.image} alt={collection.name} className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-44 sm:w-44" />
            <h2 className="mt-6 text-xl font-bold uppercase tracking-widest">{collection.name}</h2>
            <p className="mt-2 text-sm font-semibold text-gold">{collection.count} pieces</p>
            <p className="mt-2 text-sm text-gray-600">{collection.text}</p>
            <span className="mt-6 rounded-full bg-gold px-6 py-2 text-sm font-semibold text-charcoal">View Collection</span>
          </Link>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/shop" className="rounded-full bg-white px-8 py-3 font-semibold tracking-widest text-gold shadow-sm">VIEW ALL PIECES</Link>
      </div>
    </main>
  );
}