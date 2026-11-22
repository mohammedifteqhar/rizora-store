"use client";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <button onClick={() => addToCart(product)} className="mt-4 w-full rounded-full bg-charcoal px-8 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-lg hover:shadow-gold/40">
      Add to Cart
    </button>
  );
}