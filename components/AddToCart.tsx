"use client";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();

  function handleAdd() {
    addToCart(product);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(100);
    }
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.frequency.value = 880;
      gain.gain.value = 0.1;
      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.15);
    } catch {
      // If the browser blocks sound, the vibration and the cart update still work
    }
  }

  return (
    <button onClick={handleAdd} className="mt-4 w-full rounded-full bg-charcoal px-8 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-lg hover:shadow-gold/40">
      Add to Cart
    </button>
  );
}