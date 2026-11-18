import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section className="relative overflow-hidden px-6 py-24 text-center text-white">
        <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" className="absolute inset-0 h-full w-full object-cover">
          <source src="https://videos.pexels.com/video-files/7578546/7578546-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <p className="text-sm tracking-widest text-gold">WALL AND HOME DECOR</p>
          <h1 className="mt-4 text-6xl font-serif text-gold">RIZORA</h1>
          <p className="mt-4 text-lg text-gray-300">Elegant wall art, mirrors, and home decor from Bengaluru.</p>
          <Link href="/shop" className="mt-8 inline-block bg-gold px-8 py-3 text-charcoal">VIEW COLLECTION</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-serif">Curated Masterpieces</h2>
        <p className="mt-2 text-center text-gray-600">Our best sellers, hand-finished.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="rounded-lg border border-[#E6DFD5] bg-white p-4">
              <img src={product.image} alt={product.name} className="h-48 w-full rounded-md object-cover" />
              <p className="mt-4 text-xs tracking-widest text-gold">{product.category}</p>
              <h3 className="mt-2 font-serif text-xl">{product.name}</h3>
              <p className="mt-4 font-semibold">Rs. {product.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}