"use client";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");
  const categories = ["All", "Canvas", "Clocks"];

  const filtered = products.filter((product) => category === "All" || product.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  return (
    <main className="w-full px-4 py-12 sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="flex justify-center">
        <p className="mt-6 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">✦ SHOP ✦</p>
      </div>
      <h1 className="mt-6 border-b-2 border-gold pb-4 text-center font-serif text-4xl text-gold">Shop All Pieces</h1>
      <p className="mt-4 text-center text-gray-500">{sorted.length} pieces, hand-finished in Bengaluru.</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${category === cat ? "bg-gold text-charcoal shadow-md" : "bg-white text-charcoal shadow-sm hover:bg-[#F3E8D3]"}`}>
            {cat === "All" ? "All Pieces" : cat}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <button onClick={() => setSort("newest")} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${sort === "newest" ? "bg-charcoal text-white" : "bg-white shadow-sm"}`}>Newest</button>
        <button onClick={() => setSort("low")} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${sort === "low" ? "bg-charcoal text-white" : "bg-white shadow-sm"}`}>Price: Low to High</button>
        <button onClick={() => setSort("high")} className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 ${sort === "high" ? "bg-charcoal text-white" : "bg-white shadow-sm"}`}>Price: High to Low</button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {sorted.map((product) => (
          <div key={product.id} className="group flex h-full flex-col rounded-3xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20 sm:p-4">
            <Link href={`/shop/${product.id}`}>
              <img src={product.image} alt={product.name} className="h-40 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48" />
            </Link>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{product.category}</p>
            <Link href={`/shop/${product.id}`}>
              <h3 className="mt-1 min-h-[3rem] text-sm font-bold uppercase leading-snug sm:min-h-[3.5rem] sm:text-base">{product.name}</h3>
            </Link>
            <p className="mt-2 text-lg font-bold">Rs. {product.price}</p>
            <div className="mt-auto pt-4">
              <AddToCart product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}