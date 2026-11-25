"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-center text-charcoal sm:px-6 lg:px-12">
        <div className="mx-auto max-w-xl rounded-3xl border border-[#E6DFD5] bg-white p-8 shadow-sm">
          <p className="font-serif text-3xl">Your cart is empty</p>
          <p className="mt-4 text-gray-600">Add a piece to your cart first, then come back to checkout.</p>
          <Link href="/shop" className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-charcoal">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">CHECKOUT</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Checkout</h1>
      <p className="mt-2 text-center text-gray-500">Demo only. No payment will be taken. Real payment will be added in Phase 3.</p>
      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-xl">Order Summary</h2>
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center gap-4">
              <img src={item.product.image} alt={item.product.name} className="h-16 w-16 shrink-0 rounded-2xl object-cover" />
              <div className="flex-1">
                <p className="text-sm font-bold uppercase">{item.product.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.qty} x Rs. {item.product.price}</p>
              </div>
              <p className="font-bold">Rs. {item.product.price * item.qty}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-[#E6DFD5] pt-6">
          <p className="flex items-center justify-between text-xl font-bold">Total: <span>Rs. {total}</span></p>
          <p className="mt-2 text-sm text-gray-500">Free delivery in Bengaluru on orders over Rs. 999.</p>
        </div>
        <button className="mt-8 w-full rounded-full bg-gold px-8 py-4 font-semibold text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40">Place Order (Demo)</button>
        <p className="mt-4 text-center text-sm text-gray-500">Demo only. No payment will be taken.</p>
        <Link href="/cart" className="mt-3 block text-center text-sm font-semibold text-gold hover:underline">Back to Cart</Link>
      </div>
    </main>
  );
}