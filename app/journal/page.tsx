const posts = [
  { title: "How to choose art for a living room", description: "Start with size, then colour, then light." },
  { title: "Gold accents without going over the top", description: "One gold piece is enough to warm a room." },
  { title: "Mirrors that make a small room feel bigger", description: "Place them opposite a window for more light." },
];

export default function JournalPage() {
  return (
    <main className="w-full px-6 py-12 lg:px-12">
      <div className="h-1 w-full bg-gradient-to-r from-[#8C6D1F] via-[#C9A227] to-[#E8C874]" />
      <h1 className="mt-6 border-b-2 border-gold pb-4 font-serif text-4xl text-gold">Journal</h1>
      <p className="mt-6 text-gray-600">Ideas for your walls.</p>
      <div className="mt-8 grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="rounded-lg border border-[#E6DFD5] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
            <h3 className="font-serif text-xl text-gold">{post.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}