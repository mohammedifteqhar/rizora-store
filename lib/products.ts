export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "gilded-botanicals-canvas",
    name: "Gilded Botanicals Canvas",
    price: 4500,
    category: "Canvas",
    description: "Gold botanical canvas art for living rooms.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
  },
  {
    id: "minimalist-brass-wall-accent",
    name: "Minimalist Brass Wall Accent",
    price: 6200,
    category: "Metal",
    description: "Minimal brass wall accent with a clean finish.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "celestial-arch-tapestry",
    name: "Celestial Arch Tapestry",
    price: 3100,
    category: "Boho",
    description: "Soft arch tapestry for bedrooms and reading corners.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
  },
  {
    id: "gilded-scallop-gold-mirror",
    name: "Gilded Scallop Gold Mirror",
    price: 2400,
    category: "Mirrors",
    description: "Scallop gold mirror for hallways and dressing areas.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
  },
];