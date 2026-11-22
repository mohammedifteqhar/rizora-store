"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function playChime() {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const notes = [523.25, 783.99];
      notes.forEach((freq, i) => {
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.type = "sine";
        oscillator.frequency.value = freq;
        const start = ctx.currentTime + i * 0.12;
        gain.gain.setValueAtTime(0, start);
        gain.gain.linearRampToValueAtTime(0.05, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.4);
        oscillator.start(start);
        oscillator.stop(start + 0.45);
      });
    } catch {
      // If the browser blocks sound, the vibration and the cart update still work
    }
  }

  function handleAdd() {
    addToCart(product);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(50);
    }
    playChime();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button onClick={handleAdd} className={`mt-4 w-full rounded-full px-8 py-3 transition-all duration-300 active:scale-95 ${added ? "scale-105 bg-gold text-charcoal shadow-lg shadow-gold/40" : "bg-charcoal text-white hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-lg hover:shadow-gold/40"}`}>
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}