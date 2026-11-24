"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <main>
      <section className="relative h-[55vh] overflow-hidden bg-charcoal sm:h-[70vh]">
        <video ref={videoRef} autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="text-xs tracking-[0.3em] text-[#E8C874] sm:text-sm">WALL AND HOME DECOR</p>
          <h1 className="mt-4 bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-5xl text-transparent sm:text-6xl">RIZORA</h1>
          <p className="mt-4 max-w-xl text-sm text-white sm:text-base">Elegant wall art, mirrors, and home decor from Bengaluru.</p>
          <Link href="/shop" className="mt-8 rounded-full bg-gold px-6 py-3 text-sm text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40 sm:px-8 sm:text-base">VIEW COLLECTION</Link>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Curated Masterpieces</h2>
        <p className="mt-2 text-center text-gray-500">Our best sellers, hand-finished.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group flex h-full flex-col rounded-lg border border-[#E6DFD5] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
              <Link href={`/shop/${product.id}`}>
                <img src={product.image} alt={product.name} className="h-48 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105" />
                <p className="mt-4 text-xs tracking-widest text-gold">{product.category}</p>
                <h3 className="mt-2 min-h-[3.5rem] font-serif text-xl leading-snug">{product.name}</h3>
              </Link>
              <p className="mt-4 font-semibold">Rs. {product.price}</p>
              <div className="mt-auto pt-4">
                <AddToCart product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">Why Rizora</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-[#E6DFD5] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Hand-finished</h3>
            <p className="mt-2 text-sm text-gray-600">Every piece is checked and finished by hand.</p>
          </div>
          <div className="rounded-lg border border-[#E6DFD5] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Free delivery over Rs. 999</h3>
            <p className="mt-2 text-sm text-gray-600">Free delivery in Bengaluru on orders over Rs. 999.</p>
          </div>
          <div className="rounded-lg border border-[#E6DFD5] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Free consultation</h3>
            <p className="mt-2 text-sm text-gray-600">Book a free consultation to choose the right piece for your wall.</p>
          </div>
        </div>
      </section>
    </main>
  );
}