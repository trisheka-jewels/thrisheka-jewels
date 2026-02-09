// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { ProductCard } from '@/components/product/ProductCard';
// import { products } from '@/data/products';

// // Show first 6 products as featured
// const featuredProducts = products.slice(0, 6);

// export function FeaturedCollections() {
//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             Featured Collections
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Discover our handpicked selection of exquisite jewellery
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-12"
//         >
//           <Link to="/collections">
//             <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
//               Explore All Collections
//               <ArrowRight className="w-4 h-4" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ProductCard } from "@/components/product/ProductCard";
// import { products as LOCAL_PRODUCTS } from "@/data/products";
// import { useEffect, useState } from "react";

// export function FeaturedCollections() {
//   const [featured, setFeatured] = useState(LOCAL_PRODUCTS.slice(0, 6));

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/auth/featured-products/")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setFeatured(data);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             Featured Collections
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Discover our handpicked selection of exquisite jewellery
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
//           {featured.map((product: any) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="text-center mt-12"
//         >
//           <Link to="/collections">
//             <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
//               Explore All Collections
//               <ArrowRight className="w-4 h-4" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { products as LOCAL_PRODUCTS } from "@/data/products";
import { useEffect, useState } from "react";

export function FeaturedCollections() {
  const [featuredProducts, setFeaturedProducts] = useState(
    LOCAL_PRODUCTS.slice(0, 6)
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/featured-products/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setFeaturedProducts(data);
        }
      })
      .catch(() => {
        // keep local fallback
      });
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of exquisite jewellery
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {featuredProducts.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/collections">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 gap-2"
            >
              Explore All Collections
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
