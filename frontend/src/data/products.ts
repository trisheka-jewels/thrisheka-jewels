// // Product images
// import necklace1 from "@/assets/products/necklace-1.jpg";
// import necklace2 from "@/assets/products/necklace-2.jpg";
// import necklacelace3 from "@/assets/products/necklace-3.jpg";
// import earring1 from "@/assets/products/earring-1.jpg";
// import earring2 from "@/assets/products/earring-2.jpg";
// import earring3 from "@/assets/products/earring-3.jpg";
// import bangle1 from "@/assets/products/bangle-1.jpg";
// import bangle2 from "@/assets/products/bangle-2.jpg";
// import vaddanam1 from "@/assets/products/vaddanam-1.jpg";
// import vaddanam2 from "@/assets/products/vaddanam-2.jpg";
// import accessory1 from "@/assets/products/accessory-1.jpg";
// import accessory2 from "@/assets/products/accessory-2.jpg";
// import bridal1 from "@/assets/products/bridal-1.jpg";
// import bridal2 from "@/assets/products/bridal-2.jpg";

// export interface Product {
//   id: number | string;
//   name: string;
//   description?: string;
//   price: number;
//   discount_price?: number | null;
//   is_out_of_stock?: boolean;
//   image: string;
//   category: string;
// }

// /* 🔹 FALLBACK PRODUCTS (used if API fails) */
// export const products: Product[] = [
//   {
//     id: "necklace-1",
//     name: "Temple Lakshmi Necklace",
//     description: "Handcrafted temple jewellery with Goddess Lakshmi motif",
//     price: 12500,
//     discount_price: 9900,
//     is_out_of_stock: false,
//     image: necklace1,
//     category: "necklaces",
//   },
//   {
//     id: "necklace-2",
//     name: "Peacock Choker Set",
//     description: "Elegant peacock design choker with matching earrings",
//     price: 8900,
//     discount_price: null,
//     is_out_of_stock: false,
//     image: necklace2,
//     category: "necklaces",
//   },
//   {
//     id: "necklace-3",
//     name: "Mango Mala Long Chain",
//     description: "Traditional mango design long necklace",
//     price: 15800,
//     discount_price: 13500,
//     is_out_of_stock: true,
//     image: necklacelace3,
//     category: "necklaces",
//   },

//   {
//     id: "earring-1",
//     name: "Chandbali Jhumkas",
//     description: "Classic chandbali style jhumka earrings",
//     price: 4500,
//     discount_price: null,
//     is_out_of_stock: false,
//     image: earring1,
//     category: "earrings",
//   },
//   {
//     id: "earring-2",
//     name: "Kemp Stone Studs",
//     description: "Traditional kemp stone studded earrings",
//     price: 3200,
//     discount_price: 2800,
//     is_out_of_stock: false,
//     image: earring2,
//     category: "earrings",
//   },
//   {
//     id: "earring-3",
//     name: "Pearl Drop Jhumkas",
//     description: "Elegant pearl drop jhumka earrings",
//     price: 5600,
//     discount_price: null,
//     is_out_of_stock: true,
//     image: earring3,
//     category: "earrings",
//   },

//   {
//     id: "bangle-1",
//     name: "Temple Bangle Set",
//     description: "Set of 4 temple design silver bangles",
//     price: 6800,
//     discount_price: 6200,
//     is_out_of_stock: false,
//     image: bangle1,
//     category: "bangles",
//   },
//   {
//     id: "bangle-2",
//     name: "Oxidized Silver Kada",
//     description: "Handcrafted oxidized silver kada bangle",
//     price: 2900,
//     discount_price: null,
//     is_out_of_stock: false,
//     image: bangle2,
//     category: "bangles",
//   },

//   {
//     id: "vaddanam-1",
//     name: "Bridal Vaddanam",
//     description: "Exquisite bridal hip belt with temple motifs",
//     price: 28500,
//     discount_price: 25000,
//     is_out_of_stock: false,
//     image: vaddanam1,
//     category: "vaddanams",
//   },
//   {
//     id: "vaddanam-2",
//     name: "Pearl Chain Vaddanam",
//     description: "Elegant pearl chain waist belt",
//     price: 18900,
//     discount_price: null,
//     is_out_of_stock: true,
//     image: vaddanam2,
//     category: "vaddanams",
//   },

//   {
//     id: "accessory-1",
//     name: "Nose Pin Set",
//     description: "Set of 3 traditional nose pins",
//     price: 1200,
//     discount_price: null,
//     is_out_of_stock: false,
//     image: accessory1,
//     category: "accessories",
//   },
//   {
//     id: "accessory-2",
//     name: "Hair Chain Mathapatti",
//     description: "Traditional bridal hair chain",
//     price: 7500,
//     discount_price: 6999,
//     is_out_of_stock: false,
//     image: accessory2,
//     category: "accessories",
//   },

//   {
//     id: "bridal-1",
//     name: "Complete Bridal Set",
//     description:
//       "Full bridal jewellery set with necklace, earrings, bangles",
//     price: 85000,
//     discount_price: 79999,
//     is_out_of_stock: false,
//     image: bridal1,
//     category: "bridal",
//   },
//   {
//     id: "bridal-2",
//     name: "South Indian Bridal Collection",
//     description:
//       "Traditional South Indian bridal jewellery ensemble",
//     price: 125000,
//     discount_price: null,
//     is_out_of_stock: false,
//     image: bridal2,
//     category: "bridal",
//   },
// ];

// /* 🔹 FALLBACK CATEGORIES */
// export const categories = [
//   { slug: "necklaces", name: "Necklaces" },
//   { slug: "earrings", name: "Earrings" },
//   { slug: "bangles", name: "Bangles" },
//   { slug: "vaddanams", name: "Vaddanams" },
//   { slug: "accessories", name: "Other Accessories" },
//   { slug: "bridal", name: "Premium Bridal" },
// ];

// data/products.ts
import necklace1 from "@/assets/products/necklace-1.jpg";
import necklace2 from "@/assets/products/necklace-2.jpg";
import necklace3 from "@/assets/products/necklace-3.jpg";
import earring1 from "@/assets/products/earring-1.jpg";
import earring2 from "@/assets/products/earring-2.jpg";
import earring3 from "@/assets/products/earring-3.jpg";
import bangle1 from "@/assets/products/bangle-1.jpg";
import bangle2 from "@/assets/products/bangle-2.jpg";
import vaddanam1 from "@/assets/products/vaddanam-1.jpg";
import vaddanam2 from "@/assets/products/vaddanam-2.jpg";
import accessory1 from "@/assets/products/accessory-1.jpg";
import accessory2 from "@/assets/products/accessory-2.jpg";
import bridal1 from "@/assets/products/bridal-1.jpg";
import bridal2 from "@/assets/products/bridal-2.jpg";

export interface Product {
  id: number | string;
  name: string;
  description?: string;
  price: number;
  discount_price?: number | null;
  is_out_of_stock?: boolean;
  image: string; // Primary image for backward compatibility
  images?: string[]; // Multiple images array
  category: string;
}

/* 🔹 FALLBACK PRODUCTS (used if API fails) */
export const products: Product[] = [
  {
    id: "necklace-1",
    name: "Temple Lakshmi Necklace",
    description: "Handcrafted temple jewellery with Goddess Lakshmi motif",
    price: 12500,
    discount_price: 9900,
    is_out_of_stock: false,
    image: necklace1,
    images: [necklace1, necklace2, necklace3], // Multiple images
    category: "necklaces",
  },
  {
    id: "necklace-2",
    name: "Peacock Choker Set",
    description: "Elegant peacock design choker with matching earrings",
    price: 8900,
    discount_price: null,
    is_out_of_stock: false,
    image: necklace2,
    images: [necklace2, necklace1],
    category: "necklaces",
  },
  {
    id: "necklace-3",
    name: "Mango Mala Long Chain",
    description: "Traditional mango design long necklace",
    price: 15800,
    discount_price: 13500,
    is_out_of_stock: true,
    image: necklace3,
    images: [necklace3, necklace1, necklace2],
    category: "necklaces",
  },
  {
    id: "earring-1",
    name: "Chandbali Jhumkas",
    description: "Classic chandbali style jhumka earrings",
    price: 4500,
    discount_price: null,
    is_out_of_stock: false,
    image: earring1,
    images: [earring1, earring2],
    category: "earrings",
  },
  {
    id: "earring-2",
    name: "Kemp Stone Studs",
    description: "Traditional kemp stone studded earrings",
    price: 3200,
    discount_price: 2800,
    is_out_of_stock: false,
    image: earring2,
    images: [earring2, earring1, earring3],
    category: "earrings",
  },
  {
    id: "earring-3",
    name: "Pearl Drop Jhumkas",
    description: "Elegant pearl drop jhumka earrings",
    price: 5600,
    discount_price: null,
    is_out_of_stock: true,
    image: earring3,
    images: [earring3, earring1],
    category: "earrings",
  },
  {
    id: "bangle-1",
    name: "Temple Bangle Set",
    description: "Set of 4 temple design silver bangles",
    price: 6800,
    discount_price: 6200,
    is_out_of_stock: false,
    image: bangle1,
    images: [bangle1, bangle2],
    category: "bangles",
  },
  {
    id: "bangle-2",
    name: "Oxidized Silver Kada",
    description: "Handcrafted oxidized silver kada bangle",
    price: 2900,
    discount_price: null,
    is_out_of_stock: false,
    image: bangle2,
    images: [bangle2, bangle1],
    category: "bangles",
  },
  {
    id: "vaddanam-1",
    name: "Bridal Vaddanam",
    description: "Exquisite bridal hip belt with temple motifs",
    price: 28500,
    discount_price: 25000,
    is_out_of_stock: false,
    image: vaddanam1,
    images: [vaddanam1, vaddanam2],
    category: "vaddanams",
  },
  {
    id: "vaddanam-2",
    name: "Pearl Chain Vaddanam",
    description: "Elegant pearl chain waist belt",
    price: 18900,
    discount_price: null,
    is_out_of_stock: true,
    image: vaddanam2,
    images: [vaddanam2, vaddanam1],
    category: "vaddanams",
  },
  {
    id: "accessory-1",
    name: "Nose Pin Set",
    description: "Set of 3 traditional nose pins",
    price: 1200,
    discount_price: null,
    is_out_of_stock: false,
    image: accessory1,
    images: [accessory1, accessory2],
    category: "accessories",
  },
  {
    id: "accessory-2",
    name: "Hair Chain Mathapatti",
    description: "Traditional bridal hair chain",
    price: 7500,
    discount_price: 6999,
    is_out_of_stock: false,
    image: accessory2,
    images: [accessory2, accessory1],
    category: "accessories",
  },
  {
    id: "bridal-1",
    name: "Complete Bridal Set",
    description: "Full bridal jewellery set with necklace, earrings, bangles",
    price: 85000,
    discount_price: 79999,
    is_out_of_stock: false,
    image: bridal1,
    images: [bridal1, bridal2],
    category: "bridal",
  },
  {
    id: "bridal-2",
    name: "South Indian Bridal Collection",
    description: "Traditional South Indian bridal jewellery ensemble",
    price: 125000,
    discount_price: null,
    is_out_of_stock: false,
    image: bridal2,
    images: [bridal2, bridal1],
    category: "bridal",
  },
];

/* 🔹 FALLBACK CATEGORIES */
export const categories = [
  { slug: "necklaces", name: "Necklaces" },
  { slug: "earrings", name: "Earrings" },
  { slug: "bangles", name: "Bangles" },
  { slug: "vaddanams", name: "Vaddanams" },
  { slug: "accessories", name: "Other Accessories" },
  { slug: "bridal", name: "Premium Bridal" },
];
