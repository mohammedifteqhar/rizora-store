import Link from "next/link";
import { products } from "@/lib/products";
import AddToCart from "@/components/AddToCart";

export default function ShopPage() {
  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <h1 className="mt-6 border-b-2 border-gold pb-4 font-serif text-3xl text-gold sm:text-4xl">Shop</h1>
      <p className="mt-4 text-sm text-gray-600">{products.length} products, hand-finished.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="group flex h-full flex-col rounded-lg border border-[#E6DFD5] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <Link href={`/shop/${product.id}`}>
              <img src={product.image} alt={product.name} className="h-48 w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105" />
              <p className="mt-4 text-xs tracking-widest text-gold">{product.category}</p>
              <h3 className="mt-2 min-h-[3.5rem] font-serif text-xl leading-snug">{product.name}</h3>
            </Link>
            <p className="mt-4 font-semibold">Rs. {product.price}</p>
            <div className="mt-auto pt-4">
              <AddToCart product={product} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}