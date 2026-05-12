export type Product = {
  id: string;
  name: string;
  subtitle: string;
  collection: string;
  price: number;
  priceLabel: string;
  description: string;
  details: string[];
  sizes: string[];
  image: string;
  gallery: string[];
  limited?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Architectural Wool Topcoat",
    subtitle: "Anthracite",
    collection: "NEW ARRIVAL / WINTER 24",
    price: 1850,
    priceLabel: "$1,850.00",
    description:
      "Hand-crafted in Italy from premium virgin wool. Features an oversized silhouette with dropped shoulders and architectural lapels.",
    details: [
      "100% Virgin Wool",
      "Silk Lined Interior",
      "Concealed Button Fastening",
      "Dry Clean Only",
    ],
    sizes: ["IT 46", "IT 48", "IT 50", "IT 52"],
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop",
    ],
    limited: true,
  },
  {
    id: "2",
    name: "Tailored Poplin Shirt",
    subtitle: "Signature White",
    collection: "ESSENTIAL COLLECTION",
    price: 345,
    priceLabel: "$345.00",
    description:
      "A refined poplin shirt cut from fine Italian cotton, designed with a clean architectural silhouette for effortless formal wear.",
    details: [
      "100% Italian Cotton",
      "Mother-of-Pearl Buttons",
      "Mitered Cuffs",
      "Machine Wash Cold",
    ],
    sizes: ["46", "48", "50", "52"],
    image:
      "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598559069352-3d8437b0d42c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "3",
    name: "Architectural Wool Trousers",
    subtitle: "Charcoal",
    collection: "TAILORING",
    price: 580,
    priceLabel: "$580.00",
    description:
      "Wide-leg wool trousers with a high-rise waist and pressed pleats — a study in modern tailoring.",
    details: [
      "Premium Wool Blend",
      "High-Rise Fit",
      "Pressed Pleats",
      "Dry Clean Only",
    ],
    sizes: ["46", "48", "50", "52"],
    image:
      "https://images.unsplash.com/photo-1594932224030-94005439401b?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594932224030-94005439401b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b2c4a82?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "4",
    name: "Modern Trench Coat",
    subtitle: "Desert Beige",
    collection: "OUTERWEAR",
    price: 1800,
    priceLabel: "$1,800.00",
    description:
      "A reimagined classic trench in water-resistant cotton gabardine with a relaxed contemporary cut.",
    details: [
      "Cotton Gabardine",
      "Water Resistant",
      "Detachable Belt",
      "Dry Clean Only",
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "5",
    name: "Textile Study 01",
    subtitle: "Gold Leaf Fabric",
    collection: "LIMITED EDITION",
    price: 450,
    priceLabel: "$450.00",
    description:
      "A wearable art piece. Hand-woven gold leaf fabric scarf, finished with hand-rolled edges.",
    details: [
      "Silk & Gold Leaf",
      "Hand-Rolled Edges",
      "Made in Italy",
      "Dry Clean Only",
    ],
    sizes: ["ONE SIZE"],
    image:
      "https://images.unsplash.com/photo-1550634163-4f9e1f576e2c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550634163-4f9e1f576e2c?q=80&w=1200&auto=format&fit=crop",
    ],
    limited: true,
  },
  {
    id: "6",
    name: "Minimalist Tote Bag",
    subtitle: "Obsidian Leather",
    collection: "ACCESSORIES",
    price: 950,
    priceLabel: "$950.00",
    description:
      "A spacious tote in supple full-grain leather, finished with palladium hardware and a suede-lined interior.",
    details: [
      "Full-Grain Leather",
      "Suede Lining",
      "Palladium Hardware",
      "Made in Florence",
    ],
    sizes: ["ONE SIZE"],
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
