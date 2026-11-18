"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, total } = useCart();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-serif">Checkout</h1>
      <p className="mt-2 text-sm text-gray-600">Demo only. No payment will be taken. Razorpay will be added in Phase 3.</p>
      {items.length === 0 ? (
        <p className="mt-8">Your cart is empty. <Link href="/shop" className="text-gold">Go to Shop</Link></p>
      ) : (
        <>
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between border border-[#E6DFD5] bg-white p-4">
                <p>{item.product.name} x {item.qty}</p>
                <p>Rs. {item.product.price * item.qty}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xl font-semibold">Total to pay: Rs. {total}</p>
          <button className="mt-8 bg-charcoal px-8 py-3 text-white">Place Order (Demo)</button>
        </>
      )}
    </main>
  );
}