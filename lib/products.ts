export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "gilded-botanicals-canvas",
    name: "Gilded Botanicals Canvas",
    price: 4500,
    category: "Canvas",
    description: "Gold botanical canvas art for living rooms.",
  },
  {
    id: "minimalist-brass-wall-accent",
    name: "Minimalist Brass Wall Accent",
    price: 6200,
    category: "Metal",
    description: "Minimal brass wall accent with a clean finish.",
  },
  {
    id: "celestial-arch-tapestry",
    name: "Celestial Arch Tapestry",
    price: 3100,
    category: "Boho",
    description: "Soft arch tapestry for bedrooms and reading corners.",
  },
  {
    id: "gilded-scallop-gold-mirror",
    name: "Gilded Scallop Gold Mirror",
    price: 2400,
    category: "Mirrors",
    description: "Scallop gold mirror for hallways and dressing areas.",
  },
];