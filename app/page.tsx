"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-cream text-charcoal">
      <section className="relative h-[55vh] overflow-hidden sm:h-[70vh]">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 text-left sm:px-12">
          <p className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.3em] text-[#E8C874] sm:text-xs">RIZORA LUXURY WALL DECOR <span className="h-px w-12 bg-[#E8C874]" /></p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-6xl">An Artful Touch<br />to Everyday <span className="italic text-[#E8C874]">Living.</span></h1>
          <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">Discover handcrafted decor that brings timeless beauty to your space.</p>
          <Link href="/shop" className="mt-6 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-widest text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40">EXPLORE COLLECTION →</Link>
        </div>
      </section>

      <div className="bg-charcoal px-4 py-3 text-center text-xs font-semibold tracking-[0.2em] text-gold sm:text-sm">
        HAND-FINISHED IN BENGALURU • FREE DELIVERY IN BENGALURU OVER RS. 999 • MADE IN BENGALURU
      </div>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
        <div className="flex justify-center">
          <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">✦ EXPLORE OUR RANGE ✦</p>
        </div>
        <h2 className="mt-6 text-center font-serif text-4xl">Shop by <span className="text-gold">Category</span></h2>
        <p className="mt-2 text-center text-gray-500">Hand-finished pieces, crafted for every wall and every room.</p>
        <div className="mt-10 flex justify-center gap-6 overflow-x-auto sm:gap-10">
          <Link href="/shop" className="group flex shrink-0 flex-col items-center">
            <img src="/products/sapphire-drift-resin-canvas.jpg" alt="Canvas" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36" />
            <span className="mt-4 text-sm font-bold tracking-widest">CANVAS</span>
          </Link>
          <Link href="/shop" className="group flex shrink-0 flex-col items-center">
            <img src="/products/midnight-river-clock.jpg" alt="Clocks" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36" />
            <span className="mt-4 text-sm font-bold tracking-widest">CLOCKS</span>
          </Link>
          <Link href="/shop" className="group flex shrink-0 flex-col items-center">
            <img src="/products/triple-rush-resin-canvas.jpg" alt="All Pieces" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-36 sm:w-36" />
            <span className="mt-4 text-sm font-bold tracking-widest">ALL PIECES</span>
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/shop" className="rounded-full bg-white px-8 py-3 font-semibold tracking-widest text-gold shadow-sm">VIEW ALL PIECES</Link>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
        <div className="flex justify-center">
          <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">✦ HANDPICKED FOR YOU ✦</p>
        </div>
        <h2 className="mt-6 text-center font-serif text-4xl">Featured <span className="text-gold">Products</span></h2>
        <div className="mt-6 flex justify-center">
          <Link href="/shop" className="rounded-full bg-white px-8 py-3 font-semibold tracking-widest text-gold shadow-sm">EXPLORE ALL</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group flex h-full flex-col rounded-3xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20 sm:p-4">
              <Link href={`/shop/${product.id}`}>
                <img src={product.image} alt={product.name} className="h-40 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48" />
              </Link>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{product.category}</p>
              <Link href={`/shop/${product.id}`}>
                <h3 className="mt-1 min-h-[3rem] text-sm font-bold uppercase leading-snug sm:min-h-[3.5rem] sm:text-base">{product.name}</h3>
              </Link>
              <p className="mt-2 text-lg font-bold">Rs. {product.price}</p>
              <div className="mt-auto pt-4">
                <AddToCart product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
        <h2 className="text-center font-serif text-4xl">Why <span className="text-gold">Rizora</span></h2>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Hand-finished</h3>
            <p className="mt-2 text-sm text-gray-600">Every piece is finished by hand in Bengaluru, checked before packing.</p>
          </div>
          <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Free delivery over Rs. 999</h3>
            <p className="mt-2 text-sm text-gray-600">Free delivery in Bengaluru on orders over Rs. 999.</p>
          </div>
          <div className="rounded-3xl border border-[#E6DFD5] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl">Free consultation</h3>
            <p className="mt-2 text-sm text-gray-600">Book a free consultation and we will help you choose the right piece for your wall.</p>
          </div>
        </div>
      </section>
    </main>
  );
}