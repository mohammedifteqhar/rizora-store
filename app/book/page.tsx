"use client";
import { useState } from "react";

export default function BookPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <main className="mx-auto max-w-2xl px-6 py-12 text-center">
        <h1 className="text-4xl font-serif">Thank you</h1>
        <p className="mt-4">Your booking request has been received. We will call you back.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-4xl font-serif">Book a Consultation</h1>
      <p className="mt-2 text-gray-600">Tell us about your wall, we will help you choose.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input required placeholder="Your name" className="w-full border border-[#E6DFD5] bg-white p-3" />
        <input required type="tel" placeholder="Phone number" className="w-full border border-[#E6DFD5] bg-white p-3" />
        <input required type="email" placeholder="Email" className="w-full border border-[#E6DFD5] bg-white p-3" />
        <input required type="date" className="w-full border border-[#E6DFD5] bg-white p-3" />
        <textarea required placeholder="Tell us about your space" rows={4} className="w-full border border-[#E6DFD5] bg-white p-3" />
        <button type="submit" className="bg-charcoal px-8 py-3 text-white">Send Booking Request</button>
      </form>
      <p className="mt-4 text-sm text-gray-500">Demo only. Requests are not stored yet.</p>
    </main>
  );
}