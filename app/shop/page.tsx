import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-serif text-charcoal">Shop</h1>
      <p className="mt-2 text-gray-600">Curated wall decor pieces.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`} className="rounded-lg border border-[#E6DFD5] bg-white p-4">
            <img src={product.image} alt={product.name} className="h-48 w-full rounded-md object-cover" />
            <p className="mt-4 text-xs tracking-widest text-gold">{product.category}</p>
            <h2 className="mt-2 font-serif text-xl">{product.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            <p className="mt-4 font-semibold">Rs. {product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}