import Link from "next/link";

const collections = [
  { name: "Canvas", description: "Gold botanical canvas art.", href: "/shop" },
  { name: "Metal", description: "Brass and bronze wall accents.", href: "/shop" },
  { name: "Mirrors", description: "Gold mirrors for hallways.", href: "/shop" },
  { name: "Boho", description: "Soft tapestries and calm textures.", href: "/shop" },
];

export default function CollectionsPage() {
  return (
    <main className="w-full px-6 py-12 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <h1 className="mt-6 border-b-2 border-gold pb-4 font-serif text-4xl text-gold">Collections</h1>
      <p className="mt-6 text-gray-600">Browse by style.</p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <Link key={collection.name} href={collection.href} className="rounded-lg border border-[#E6DFD5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl text-gold">{collection.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{collection.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}