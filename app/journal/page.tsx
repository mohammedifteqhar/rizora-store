export default function JournalPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-serif">Journal</h1>
      <p className="mt-2 text-gray-600">Ideas for your walls.</p>
      <div className="mt-8 space-y-4">
        <div className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">How to choose art for a living room</h2>
          <p className="mt-2 text-sm text-gray-600">Start with size, then colour, then light.</p>
        </div>
        <div className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Gold accents without going over the top</h2>
          <p className="mt-2 text-sm text-gray-600">One gold piece is enough to warm a room.</p>
        </div>
        <div className="border border-[#E6DFD5] bg-white p-6">
          <h2 className="font-serif text-xl">Mirrors that make a small room feel bigger</h2>
          <p className="mt-2 text-sm text-gray-600">Place them opposite a window for more light.</p>
        </div>
      </div>
    </main>
  );
}