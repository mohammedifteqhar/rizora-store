"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, total, updateQty, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
        <div className="flex justify-center">
          <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">YOUR BAG</p>
        </div>
        <h1 className="mt-6 text-center font-serif text-4xl">Your Cart</h1>
        <p className="mt-4 text-center">Your cart is empty.</p>
        <div className="mt-6 flex justify-center">
          <Link href="/shop" className="rounded-full bg-gold px-8 py-3 font-semibold text-charcoal">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">YOUR BAG</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Your Cart</h1>
      <p className="mt-2 text-center text-gray-500">{items.length} {items.length === 1 ? "item" : "items"} selected.</p>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex flex-col gap-4 rounded-3xl border border-[#E6DFD5] bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img src={item.product.image} alt={item.product.name} className="h-20 w-20 shrink-0 rounded-2xl object-cover" />
              <div>
                <p className="text-sm font-bold uppercase sm:text-base">{item.product.name}</p>
                <p className="mt-1 text-xs font-semibold tracking-widest text-gold">{item.product.category.toUpperCase()}</p>
                <p className="mt-1 text-sm text-gray-600">Rs. {item.product.price} each</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-gold/60">
                <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Decrease quantity">-</button>
                <span className="w-8 text-center font-semibold">{item.qty}</span>
                <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Increase quantity">+</button>
              </div>
              <p className="font-bold">Rs. {item.product.price * item.qty}</p>
              <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-red-600 transition-all duration-300 hover:underline">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm">
        <p className="flex items-center justify-between text-xl font-bold">Total: <span>Rs. {total}</span></p>
        <p className="mt-2 text-sm text-gray-500">Free delivery in Bengaluru on orders over Rs. 999.</p>
        <Link href="/checkout" className="mt-6 block w-full rounded-full bg-gold px-8 py-4 text-center font-semibold text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40">Go to Checkout</Link>
        <Link href="/shop" className="mt-3 block text-center text-sm font-semibold text-gold hover:underline">Continue Shopping</Link>
      </div>
    </main>
  );
}