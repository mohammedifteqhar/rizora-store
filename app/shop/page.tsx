"use client";
import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("newest");

  const categories = ["All", "Canvas", "Clocks"];

  let shown = category === "All" ? products : products.filter((p) => p.category === category);
  if (sort === "low") shown = [...shown].sort((a, b) => a.price - b.price);
  if (sort === "high") shown = [...shown].sort((a, b) => b.price - a.price);

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">THE COLLECTION</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Shop All <span className="text-gold">Pieces</span></h1>
      <p className="mt-2 text-center text-gray-500">{products.length} pieces, hand-finished in Bengaluru.</p>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${category === c ? "bg-gold text-charcoal" : "bg-white text-charcoal hover:text-gold"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSort("newest")} className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm ${sort === "newest" ? "bg-charcoal text-white" : "bg-white hover:text-gold"}`}>Newest</button>
          <button onClick={() => setSort("low")} className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm ${sort === "low" ? "bg-charcoal text-white" : "bg-white hover:text-gold"}`}>Price: Low to High</button>
          <button onClick={() => setSort("high")} className={`rounded-full px-5 py-2 text-sm font-semibold shadow-sm ${sort === "high" ? "bg-charcoal text-white" : "bg-white hover:text-gold"}`}>Price: High to Low</button>
        </div>
      </div>

      <p className="mt-6 text-sm text-gray-500">{shown.length} pieces showing.</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {shown.map((product) => (
          <div key={product.id} className="group flex h-full flex-col rounded-3xl border border-[#E6DFD5] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20 sm:p-4">
            <Link href={`/shop/${product.id}`}>
              <img src={product.image} alt={product.name} className="h-40 w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48" />
              <p className="mt-4 text-xs font-semibold tracking-widest text-gold">{product.category.toUpperCase()}</p>
              <h3 className="mt-2 min-h-[3rem] text-sm font-bold uppercase leading-snug sm:min-h-[3.5rem] sm:text-base">{product.name}</h3>
            </Link>
            <p className="mt-2 font-semibold">Rs. {product.price}</p>
            <div className="mt-auto pt-4">
              <AddToCart product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}