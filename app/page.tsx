"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.75;
    video.muted = true;
    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // If the browser blocks autoplay, the poster will show until the user clicks
      }
    };
    playVideo();
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-cream text-charcoal">
      <section className="relative h-[55vh] overflow-hidden bg-charcoal sm:h-[70vh]">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-[#E8C874]">RIZORA LUXURY WALL DECOR</p>
          <h1 className="mt-4 bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-5xl text-transparent sm:text-6xl">RIZORA</h1>
          <p className="mt-2 font-serif text-xl text-white sm:text-2xl">Art your walls will love</p>
          <p className="mt-2 max-w-xl text-sm text-white sm:text-base">Hand-finished resin canvas and clocks, made in Bengaluru.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link href="/shop" className="rounded-full bg-gold px-8 py-3 font-semibold text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40">SHOP NOW</Link>
            <Link href="/collections" className="rounded-full border border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-charcoal">VIEW COLLECTIONS</Link>
          </div>
        </div>
      </section>

      <div className="w-full bg-charcoal py-3 text-center text-xs font-semibold tracking-[0.2em] text-[#E8C874] sm:text-sm">
        HAND-FINISHED IN BENGALURU • FREE DELIVERY IN BENGALURU OVER RS. 999 • MADE IN BENGALURU
      </div>

      <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
        <div className="flex justify-center">
          <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">✦ EXPLORE OUR RANGE ✦</p>
        </div>
        <h2 className="mt-6 text-center font-serif text-4xl">Shop by <span className="text-gold">Category</span></h2>
        <p className="mt-2 text-center text-gray-500">Hand-finished pieces, crafted for every wall and every room.</p>
        <div className="mt-8 flex justify-start gap-6 overflow-x-auto pb-2 sm:justify-center">
          <Link href="/shop" className="flex shrink-0 flex-col items-center">
            <img src="/products/sapphire-drift-resin-canvas.jpg" alt="Canvas" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:h-36 sm:w-36" />
            <p className="mt-3 text-center text-sm font-bold tracking-widest">CANVAS</p>
          </Link>
          <Link href="/shop" className="flex shrink-0 flex-col items-center">
            <img src="/products/midnight-river-clock.jpg" alt="Clocks" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:h-36 sm:w-36" />
            <p className="mt-3 text-center text-sm font-bold tracking-widest">CLOCKS</p>
          </Link>
          <Link href="/shop" className="flex shrink-0 flex-col items-center">
            <img src="/products/triple-rush-resin-canvas.jpg" alt="All pieces" className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-md sm:h-36 sm:w-36" />
            <p className="mt-3 text-center text-sm font-bold tracking-widest">ALL PIECES</p>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/shop" className="rounded-full bg-white px-8 py-3 font-semibold tracking-widest text-gold shadow-sm">VIEW ALL PIECES</Link>
        </div>
      </section>

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-12">
        <div className="flex justify-center">
          <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">✦ HANDPICKED FOR YOU ✦</p>
        </div>
        <h2 className="mt-6 text-center font-serif text-4xl">Featured <span className="text-gold">Products</span></h2>
        <p className="mt-2 text-center text-gray-500">Our best sellers, hand-finished.</p>
        <div className="mt-8 flex justify-center">
          <Link href="/shop" className="rounded-full bg-white px-8 py-3 font-semibold tracking-widest text-gold shadow-sm">EXPLORE ALL</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group flex h-full flex-col rounded-3xl border border-[#E6DFD5] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20 sm:p-4">
              <Link href={`/shop/${product.id}`}>
                <img src={product.image} alt={product.name} className="h-40 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48" />
                <p className="mt-4 text-xs font-semibold tracking-widest text-gold">{product.category.toUpperCase()}</p>
                <h3 className="mt-2 min-h-[3rem] text-sm font-bold uppercase leading-snug sm:min-h-[3.5rem] sm:text-base">{product.name}</h3>
              </Link>
              <p className="mt-2 font-semibold">Rs. {product.price}</p>
              <div className="mt-auto pt-4">
                <AddToCart product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-4 pb-16 sm:px-6 lg:px-12">
        <h2 className="text-center font-serif text-4xl">Why Rizora</h2>
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