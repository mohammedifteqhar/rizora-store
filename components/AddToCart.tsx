"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [qty, setQty] = useState(1);

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
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(50);
    }
    playChime();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="mt-4">
      <div className="mb-3 flex items-center justify-center gap-4">
        <span className="text-sm text-gray-600">Quantity:</span>
        <div className="flex items-center rounded-full border border-gold/60">
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Decrease quantity">-</button>
          <span className="w-8 text-center font-semibold">{qty}</span>
          <button type="button" onClick={() => setQty((q) => q + 1)} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button onClick={handleAdd} className={`w-full rounded-full px-8 py-3 transition-all duration-300 active:scale-95 ${added ? "scale-105 bg-[#8C6D1F] text-white shadow-lg shadow-gold/40" : "bg-gold text-charcoal hover:-translate-y-0.5 hover:bg-charcoal hover:text-white hover:shadow-lg hover:shadow-gold/40"}`}>
        {added ? `Added ${qty} to Cart ✓` : "Add to Cart"}
      </button>
    </div>
  );
}