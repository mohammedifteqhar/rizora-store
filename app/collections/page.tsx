import Link from "next/link";

export default function CollectionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-serif">Collections</h1>
      <p className="mt-2 text-gray-600">Browse by style.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link href="/shop" className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Canvas</h2>
          <p className="mt-2 text-sm text-gray-600">Gold botanical canvas art.</p>
        </Link>
        <Link href="/shop" className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Metal</h2>
          <p className="mt-2 text-sm text-gray-600">Brass and bronze wall accents.</p>
        </Link>
        <Link href="/shop" className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Mirrors</h2>
          <p className="mt-2 text-sm text-gray-600">Gold mirrors for hallways.</p>
        </Link>
        <Link href="/shop" className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Boho</h2>
          <p className="mt-2 text-sm text-gray-600">Soft tapestries and calm textures.</p>
        </Link>
      </div>
    </main>
  );
}