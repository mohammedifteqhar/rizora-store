"use client";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { addToCart } = useCart();
  return (
    <button onClick={() => addToCart(product)} className="mt-8 bg-charcoal px-8 py-3 text-white">
      Add to Cart
    </button>
  );
}