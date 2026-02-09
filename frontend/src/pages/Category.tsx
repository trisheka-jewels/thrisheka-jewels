// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Layout } from '@/components/layout/Layout';
// import { ProductCard } from '@/components/product/ProductCard';
// import { products, categories } from '@/data/products';

// export default function Category() {
//   const { slug } = useParams<{ slug: string }>();

//   const category = categories.find(c => c.slug === slug);
//   const categoryProducts = products.filter(p => p.category === slug);

//   if (!category) {
//     return (
//       <Layout>
//         <div className="container mx-auto px-4 text-center pb-16">
//           <h1 className="text-4xl font-heading font-semibold mb-4">Category Not Found</h1>
//           <p className="text-muted-foreground">The category you're looking for doesn't exist.</p>
//         </div>
//       </Layout>
//     );
//   }

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
//             {category.name}
//           </h1>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our exquisite collection of {category.name.toLowerCase()}
//           </p>
//         </motion.div>

//         {/* Products Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//         >
//           {categoryProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </motion.div>

//         {categoryProducts.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-muted-foreground">No products found in this category.</p>
//           </div>
//         )}
//       </div>
//     </Layout>
//   );
// }


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://127.0.0.1:8000/api/auth/category/${slug}/`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4 capitalize">
          {slug?.replace("-", " ")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our exquisite collection of {slug?.replace("-", " ")}
        </p>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {!loading && products.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
