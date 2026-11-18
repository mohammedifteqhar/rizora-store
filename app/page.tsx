"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/lib/products";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const fadeTimer = useRef<number | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  function fadeAudio(target: number) {
    if (!audioRef.current) return;
    if (fadeTimer.current) window.clearInterval(fadeTimer.current);
    const audio = audioRef.current;
    fadeTimer.current = window.setInterval(() => {
      if (!audio) return;
      if (target > audio.volume) {
        audio.volume = Math.min(target, audio.volume + 0.01);
        if (audio.volume >= target) {
          if (fadeTimer.current) window.clearInterval(fadeTimer.current);
        }
      } else {
        audio.volume = Math.max(target, audio.volume - 0.01);
        if (audio.volume <= target) {
          if (fadeTimer.current) window.clearInterval(fadeTimer.current);
          if (target === 0) audio.pause();
        }
      }
    }, 100);
  }

  useEffect(() => {
    if (!audioRef.current) return;
    if (soundOn && heroVisible) {
      audioRef.current.play();
      fadeAudio(0.1);
    } else {
      fadeAudio(0);
    }
    return () => {
      if (fadeTimer.current) window.clearInterval(fadeTimer.current);
    };
  }, [soundOn, heroVisible]);

  useEffect(() => {
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  function toggleSound() {
    setSoundOn(!soundOn);
  }

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <section ref={heroRef} className="relative overflow-hidden px-6 py-24 text-center text-white">
        <video ref={videoRef} autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80" className="absolute inset-0 h-full w-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative">
          <p className="text-sm tracking-widest text-gold">WALL AND HOME DECOR</p>
          <h1 className="mt-4 bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874] bg-clip-text font-serif text-6xl font-semibold tracking-widest text-transparent">RIZORA</h1>
          <p className="mt-4 text-lg text-gray-300">Elegant wall art, mirrors, and home decor from Bengaluru.</p>
          <Link href="/shop" className="mt-8 inline-block bg-gold px-8 py-3 text-charcoal">VIEW COLLECTION</Link>
        </div>
        <button onClick={toggleSound} className="absolute bottom-4 right-4 z-10 rounded-full border border-gold px-4 py-2 text-sm text-gold">
          {soundOn ? "Sound Off" : "Sound On"}
        </button>
        <audio ref={audioRef} src="/soft-ambient.mp3" loop />
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
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-center text-3xl font-serif">Why Rizora</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="border border-[#E6DFD5] bg-white p-6 text-center">
            <h3 className="font-serif text-xl text-gold">Hand-finished</h3>
            <p className="mt-2 text-sm text-gray-600">Every piece is checked by hand before it is packed.</p>
          </div>
          <div className="border border-[#E6DFD5] bg-white p-6 text-center">
            <h3 className="font-serif text-xl text-gold">Free delivery over Rs. 999</h3>
            <p className="mt-2 text-sm text-gray-600">Free delivery in Bengaluru on orders over Rs. 999.</p>
          </div>
          <div className="border border-[#E6DFD5] bg-white p-6 text-center">
            <h3 className="font-serif text-xl text-gold">Free consultation</h3>
            <p className="mt-2 text-sm text-gray-600">Book a free consultation and we will help you choose.</p>
          </div>
        </div>
      </section>
    </main>
  );
}