import Link from "next/link";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/shop" className="text-sm text-gold">← Back to Shop</Link>
      <p className="mt-8 text-xs tracking-widest text-gold">{product.category}</p>
      <h1 className="mt-2 text-4xl font-serif">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-6 text-2xl font-semibold">Rs. {product.price}</p>
      <AddToCart product={product} />
    </main>
  );
}
