"use client";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, total, updateQty, removeFromCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
        <h1 className="font-serif text-3xl sm:text-4xl">Your Cart</h1>
        <p className="mt-4">Your cart is empty.</p>
        <Link href="/shop" className="mt-4 inline-block text-gold">Continue Shopping</Link>
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <h1 className="mt-6 border-b-2 border-gold pb-4 font-serif text-3xl sm:text-4xl">Your Cart</h1>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={item.product.id} className="flex flex-col gap-4 border border-[#E6DFD5] bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <img src={item.product.image} alt={item.product.name} className="h-20 w-20 shrink-0 rounded-md object-cover" />
              <div>
                <p className="font-serif text-lg sm:text-xl">{item.product.name}</p>
                <p className="text-sm text-gray-600">Rs. {item.product.price} each</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-gold/60">
                <button onClick={() => updateQty(item.product.id, item.qty - 1)} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Decrease quantity">-</button>
                <span className="w-8 text-center font-semibold">{item.qty}</span>
                <button onClick={() => updateQty(item.product.id, item.qty + 1)} className="px-3 py-1 text-lg text-gold transition-all duration-300 hover:text-charcoal active:scale-90" aria-label="Increase quantity">+</button>
              </div>
              <p className="font-semibold">Rs. {item.product.price * item.qty}</p>
              <button onClick={() => removeFromCart(item.product.id)} className="text-sm text-red-600 transition-all duration-300 hover:underline">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xl font-semibold">Total: Rs. {total}</p>
      <Link href="/checkout" className="mt-4 inline-block w-full rounded-full bg-charcoal px-8 py-3 text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-charcoal hover:shadow-lg hover:shadow-gold/40 sm:w-auto">Go to Checkout</Link>
    </main>
  );
}