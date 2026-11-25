import Link from "next/link";

const posts = [
  {
    title: "How to Choose Wall Art for Your Living Room",
    text: "Start with the wall, not the piece. A large wall needs a large canvas, a small wall needs one clear piece, not many small ones.",
    image: "/products/triple-rush-resin-canvas.jpg",
  },
  {
    title: "Caring for Resin Canvas",
    text: "Resin canvas is easy to care for. Wipe it with a dry cloth, keep it out of direct rain, and it will keep its shine for years.",
    image: "/products/sapphire-drift-resin-canvas.jpg",
  },
  {
    title: "Clocks as Wall Art",
    text: "A wall clock can be the centre of a wall. Choose one that matches your room, hang it at eye level, and let it do the talking.",
    image: "/products/grand-prix-racer-wall-clock.jpg",
  },
];

export default function JournalPage() {
  return (
    <main className="w-full overflow-x-hidden bg-cream px-4 py-12 text-charcoal sm:px-6 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <div className="mt-6 flex justify-center">
        <p className="rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.3em] text-gold shadow-sm">FROM THE JOURNAL</p>
      </div>
      <h1 className="mt-6 text-center font-serif text-4xl">Journal</h1>
      <p className="mt-2 text-center text-gray-500">Simple ideas for choosing, hanging and caring for wall decor.</p>
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="flex flex-col overflow-hidden rounded-3xl border border-[#E6DFD5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-serif text-xl leading-snug">{post.title}</h2>
              <p className="mt-3 flex-1 text-sm text-gray-600">{post.text}</p>
              <Link href="/shop" className="mt-6 inline-block font-semibold text-gold hover:underline">Shop the Collection →</Link>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/book" className="rounded-full bg-gold px-8 py-3 font-semibold text-charcoal">Book a Free Consultation</Link>
      </div>
    </main>
  );
}