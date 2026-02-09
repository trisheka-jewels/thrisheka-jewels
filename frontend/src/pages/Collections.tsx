// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Layout } from '@/components/layout/Layout';
// import { ProductCard } from '@/components/product/ProductCard';
// import { products, categories } from '@/data/products';
// import { cn } from '@/lib/utils';

// const filterOptions = [
//   { slug: 'all', name: 'All' },
//   ...categories,
// ];

// export default function Collections() {
//   const [activeCategory, setActiveCategory] = useState('all');

//   const filteredProducts = activeCategory === 'all'
//     ? products
//     : products.filter(p => p.category === activeCategory);

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 pb-16">
//         {/* Page Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-10"
//         >
//           <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             All Collections
//           </h1>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our complete range of handcrafted South Indian jewellery
//           </p>
//         </motion.div>

//         {/* Filter Tabs */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
//         >
//           {filterOptions.map((category) => (
//             <button
//               key={category.slug}
//               onClick={() => setActiveCategory(category.slug)}
//               className={cn(
//                 'px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300',
//                 activeCategory === category.slug
//                   ? 'bg-primary text-primary-foreground shadow-md'
//                   : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
//               )}
//             >
//               {category.name}
//             </button>
//           ))}
//         </motion.div>

//         {/* Products Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//         >
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </motion.div>

//         {filteredProducts.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-muted-foreground">No products found in this category.</p>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }


import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { products as LOCAL_PRODUCTS, categories as LOCAL_CATEGORIES } from "@/data/products";
import { cn } from "@/lib/utils";

interface Category {
  id?: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category__slug?: string;
  category?: string;
}

export default function Collections() {
  const [categories, setCategories] = useState<Category[]>([
    { slug: "all", name: "All" },
    ...LOCAL_CATEGORIES,
  ]);

  const [products, setProducts] = useState<Product[]>(LOCAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState("all");

  // Fetch categories
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/categories/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategories([{ slug: "all", name: "All" }, ...data]);
        }
      })
      .catch(() => {});
  }, []);

  // Fetch all products
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/featured-products/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {});
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (p) =>
            p.category__slug === activeCategory || p.category === activeCategory
        );

  return (
    <Layout>
      <div className="container mx-auto px-4 pb-16">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            All Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of handcrafted South Indian jewellery
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                activeCategory === category.slug
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
