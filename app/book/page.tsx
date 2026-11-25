"use client";
import { useState } from "react";
import Link from "next/link";

export default function BookPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-center text-charcoal sm:px-6 lg:px-12">
        <div className="mx-auto max-w-xl rounded-3xl border border-[#E6DFD5] bg-white p-8 shadow-sm">
          <p className="font-serif text-3xl">Thank you!</p>
          <p className="mt-4 text-gray-600">Your booking request has been received. We will contact you soon to confirm your free consultation.</p>
          <p className="mt-4 text-sm text-gray-500">Demo only. This booking is not stored yet.</p>
          <Link href="/shop" className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-charcoal">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">FREE CONSULTATION</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Book a <span className="text-gold">Consultation</span></h1>
      <p className="mx-auto mt-2 max-w-xl text-center text-gray-500">Tell us what you like, and we will help you choose the right piece for your wall. Free, no obligation.</p>
      <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#E6DFD5] bg-white p-6 shadow-sm sm:p-8">
        <label className="block text-sm font-semibold">Your Name</label>
        <input required type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-[#E6DFD5] bg-cream p-3 outline-none focus:border-gold" />
        <label className="mt-5 block text-sm font-semibold">Phone</label>
        <input required type="tel" placeholder="Your phone number" className="mt-2 w-full rounded-2xl border border-[#E6DFD5] bg-cream p-3 outline-none focus:border-gold" />
        <label className="mt-5 block text-sm font-semibold">Email</label>
        <input required type="email" placeholder="Your email" className="mt-2 w-full rounded-2xl border border-[#E6DFD5] bg-cream p-3 outline-none focus:border-gold" />
        <label className="mt-5 block text-sm font-semibold">Preferred Date</label>
        <input required type="date" className="mt-2 w-full rounded-2xl border border-[#E6DFD5] bg-cream p-3 outline-none focus:border-gold" />
        <label className="mt-5 block text-sm font-semibold">Message</label>
        <textarea placeholder="Tell us about your wall, your room, and what you like" className="mt-2 w-full rounded-2xl border border-[#E6DFD5] bg-cream p-3 outline-none focus:border-gold" rows={4} />
        <button type="submit" className="mt-8 w-full rounded-full bg-gold px-8 py-4 font-semibold text-charcoal transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C9A227] hover:shadow-lg hover:shadow-gold/40">Book My Free Consultation</button>
        <p className="mt-4 text-center text-sm text-gray-500">Demo only. This booking is not stored yet.</p>
      </form>
    </main>
  );
}