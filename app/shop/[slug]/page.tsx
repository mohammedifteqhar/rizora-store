import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export const instant = false;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/shop" className="text-sm text-gold">← Back to Shop</Link>
      <img src={product.image} alt={product.name} className="mx-auto mt-8 h-64 w-full max-w-xl rounded-lg object-cover sm:h-80" />
      <p className="mt-4 text-xs tracking-widest text-gold">{product.category}</p>
      <h1 className="mt-2 text-4xl font-serif">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-6 text-2xl font-semibold">Rs. {product.price}</p>
      <AddToCart product={product} />
    </main>
  );
}