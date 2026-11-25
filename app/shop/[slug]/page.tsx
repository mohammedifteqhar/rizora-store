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

  const related = [
    ...products.filter((p) => p.category === product.category && p.id !== product.id),
    ...products.filter((p) => p.category !== product.category && p.id !== product.id),
  ].slice(0, 2);

  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 pb-40 pt-12 text-charcoal sm:px-6 lg:px-12 lg:pb-12">
      <Link href="/shop" className="text-sm font-semibold text-gold">← Back to Shop</Link>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <img src={product.image} alt={product.name} className="h-64 w-full rounded-3xl object-cover shadow-sm sm:h-96" />
          <div className="mt-4 flex gap-3">
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl border-2 border-gold object-cover sm:h-20 sm:w-20" />
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl border border-[#E6DFD5] object-cover opacity-70 sm:h-20 sm:w-20" />
            <img src={product.image} alt={product.name} className="h-16 w-16 rounded-xl border border-[#E6DFD5] object-cover opacity-70 sm:h-20 sm:w-20" />
          </div>
          <p className="mt-2 text-center text-sm text-gray-500">Click to see full view</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-gold">{product.category.toUpperCase()}</p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold text-gold sm:text-3xl">Rs. {product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Inclusive of all taxes</p>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <div className="mt-6 rounded-2xl border border-[#E6DFD5] bg-white p-4 shadow-sm">
            <p className="text-sm font-semibold">In stock</p>
            <p className="mt-1 text-sm text-gray-600">Free delivery in Bengaluru on orders over Rs. 999</p>
            <p className="mt-1 text-sm text-gray-600">Hand-finished, checked before packing</p>
          </div>
          <div className="mt-6">
            <AddToCart product={product} />
            <Link href="/checkout" className="mt-3 block w-full rounded-full bg-charcoal px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8C6D1F] hover:shadow-lg hover:shadow-gold/40">Buy Now</Link>
            <p className="mt-3 text-center text-sm text-gray-500">Demo only. No payment will be taken.</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">About this piece</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#E6DFD5] bg-white p-5 shadow-sm">
            <h3 className="font-semibold">The Piece</h3>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          </div>
          <div className="rounded-2xl border border-[#E6DFD5] bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Size and Material</h3>
            <p className="mt-2 text-sm text-gray-600">Category: {product.category}. Hand-finished, checked before packing.</p>
          </div>
          <div className="rounded-2xl border border-[#E6DFD5] bg-white p-5 shadow-sm">
            <h3 className="font-semibold">Care and Hanging</h3>
            <p className="mt-2 text-sm text-gray-600">Hang with a strong wall hook. Wipe with a dry cloth.</p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">You Might Also Like</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-2">
          {related.map((item) => (
            <div key={item.id} className="group flex h-full flex-col rounded-3xl border border-[#E6DFD5] bg-white p-3 shadow-sm sm:p-4">
              <Link href={`/shop/${item.id}`}>
                <img src={item.image} alt={item.name} className="h-40 w-full rounded-2xl object-cover sm:h-48" />
                <p className="mt-4 text-xs font-semibold tracking-widest text-gold">{item.category.toUpperCase()}</p>
                <h3 className="mt-2 min-h-[3rem] text-sm font-bold uppercase leading-snug sm:text-base">{item.name}</h3>
              </Link>
              <p className="mt-2 font-semibold">Rs. {item.price}</p>
              <div className="mt-auto pt-4">
                <AddToCart product={item} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-[#E6DFD5] bg-white px-4 py-3 shadow-lg lg:hidden">
        <p className="shrink-0 text-lg font-bold">Rs. {product.price}</p>
        <div className="w-56">
          <AddToCart product={product} />
        </div>
      </div>
    </main>
  );
}