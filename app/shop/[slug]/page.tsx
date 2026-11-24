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
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <Link href="/shop" className="text-sm text-gold">← Back to Shop</Link>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <img src={product.image} alt={product.name} className="h-64 w-full rounded-lg object-cover sm:h-96" />
          <div className="mt-4 flex gap-3">
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-md border-2 border-gold object-cover sm:h-20 sm:w-20" />
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-md border border-[#E6DFD5] object-cover opacity-70 sm:h-20 sm:w-20" />
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-md border border-[#E6DFD5] object-cover opacity-70 sm:h-20 sm:w-20" />
          </div>
          <p className="mt-2 text-center text-sm text-gray-500">Click to see full view</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-gold">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-gold sm:text-3xl">Rs. {product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Inclusive of all taxes</p>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <div className="mt-6 rounded-lg border border-[#E6DFD5] bg-white p-4">
            <p className="text-sm font-semibold">In stock</p>
            <p className="mt-1 text-sm text-gray-600">Free delivery in Bengaluru on orders over Rs. 999</p>
            <p className="mt-1 text-sm text-gray-600">Hand-finished, checked before packing</p>
          </div>
          <div className="mt-6">
            <AddToCart product={product} />
            <Link href="/checkout" className="mt-3 block w-full rounded-full bg-charcoal px-8 py-3 text-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8C6D1F] hover:shadow-lg hover:shadow-gold/40">Buy Now</Link>
            <p className="mt-3 text-center text-sm text-gray-500">Demo only. No payment will be taken.</p>
          </div>
        </div>
      </div>
    </main>
  );
}