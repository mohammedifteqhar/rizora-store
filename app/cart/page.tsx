"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-serif">Your Cart</h1>
        <p className="mt-4">Your cart is empty.</p>
        <Link href="/shop" className="mt-4 inline-block text-gold">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-serif">Your Cart</h1>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex justify-between border border-[#E6DFD5] bg-white p-4">
            <p>{item.product.name} x {item.qty}</p>
            <p>Rs. {item.product.price * item.qty}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xl font-semibold">Total: Rs. {total}</p>
      <Link href="/checkout" className="mt-4 inline-block bg-charcoal px-8 py-3 text-white">Go to Checkout</Link>
    </main>
  );
}