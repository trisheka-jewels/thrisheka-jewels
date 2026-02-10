// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Category images
// import necklacesImg from '@/assets/categories/necklaces.jpg';
// import earringsImg from '@/assets/categories/earrings.jpg';
// import banglesImg from '@/assets/categories/bangles.jpg';
// import vaddanamsImg from '@/assets/categories/vaddanams.jpg';
// import accessoriesImg from '@/assets/categories/accessories.jpg';
// import bridalImg from '@/assets/categories/bridal.jpg';

// const categories = [
//   {
//     name: 'Necklaces',
//     slug: 'necklaces',
//     image: necklacesImg,
//     description: 'Elegant temple necklaces',
//   },
//   {
//     name: 'Earrings',
//     slug: 'earrings',
//     image: earringsImg,
//     description: 'Traditional jhumkas & studs',
//   },
//   {
//     name: 'Bangles',
//     slug: 'bangles',
//     image: banglesImg,
//     description: 'Handcrafted silver bangles',
//   },
//   {
//     name: 'Vaddanams',
//     slug: 'vaddanams',
//     image: vaddanamsImg,
//     description: 'Bridal hip belts',
//   },
//   {
//     name: 'Other Accessories',
//     slug: 'accessories',
//     image: accessoriesImg,
//     description: 'Nose pins, chains & more',
//   },
//   {
//     name: 'Combo Sets',
//     slug: 'bridal',
//     image: bridalImg,
//     description: 'Complete bridal sets',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// export function ShopByCategory() {
//   return (
//     <section className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             Shop By Category
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our curated collection of traditional South Indian jewellery
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
//         >
//           {categories.map((category) => (
//             <motion.div key={category.slug} variants={itemVariants}>
//               <Link
//                 to={`/category/${category.slug}`}
//                 className="group block"
//               >
//                 <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                   {/* Image Container */}
//                   <div className="aspect-[4/3] overflow-hidden bg-muted">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

//                   {/* Overlay Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                   {/* Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
//                     <h3 className="text-lg md:text-xl font-heading font-semibold mb-1">
//                       {category.name}
//                     </h3>
//                     <p className="text-white/80 text-xs md:text-sm hidden sm:block">
//                       {category.description}
//                     </p>
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // NEW client images (old ones untouched)
// import necklacesImg from '@/assets/categories/client-necklaces.jpg';
// import earringsImg from '@/assets/categories/client-earrings.jpg';
// import banglesImg from '@/assets/categories/client-bangles.jpg';
// import vaddanamsImg from '@/assets/categories/client-vaddanams.jpg';
// import accessoriesImg from '@/assets/categories/client-accessories.jpg';
// import bridalImg from '@/assets/categories/client-bridal.jpg';

// const categories = [
//   {
//     name: 'Necklaces',
//     slug: 'necklaces',
//     image: necklacesImg,
//     description: 'Elegant temple necklaces',
//   },
//   {
//     name: 'Earrings',
//     slug: 'earrings',
//     image: earringsImg,
//     description: 'Traditional jhumkas & studs',
//   },
//   {
//     name: 'Bangles',
//     slug: 'bangles',
//     image: banglesImg,
//     description: 'Handcrafted silver bangles',
//   },
//   {
//     name: 'Vaddanams',
//     slug: 'vaddanams',
//     image: vaddanamsImg,
//     description: 'Bridal hip belts',
//   },
//   {
//     name: 'Other Accessories',
//     slug: 'accessories',
//     image: accessoriesImg,
//     description: 'Nose pins, chains & more',
//   },
//   {
//     name: 'Combo Sets',
//     slug: 'bridal',
//     image: bridalImg,
//     description: 'Complete bridal sets',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// export function ShopByCategory() {
//   return (
//     <section className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             Shop By Category
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our curated collection of traditional South Indian jewellery
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
//         >
//           {categories.map((category) => (
//             <motion.div key={category.slug} variants={itemVariants}>
//               <Link to={`/category/${category.slug}`} className="group block">
//                 <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                   {/* Image */}
//                   <div className="aspect-[4/3] overflow-hidden bg-muted">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                   {/* Text */}
//                   <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
//                     <h3 className="text-lg md:text-xl font-heading font-semibold mb-1">
//                       {category.name}
//                     </h3>
//                     <p className="text-white/80 text-xs md:text-sm hidden sm:block">
//                       {category.description}
//                     </p>
//                   </div>

//                   {/* Border hover */}
//                   <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// // Client category images
// import necklacesImg from '@/assets/categories/client-necklaces.jpg';
// import earringsImg from '@/assets/categories/client-earrings.jpg';
// import banglesImg from '@/assets/categories/client-bangles.jpg';
// import vaddanamsImg from '@/assets/categories/client-vaddanams.jpg';
// import accessoriesImg from '@/assets/categories/client-accessories.jpg';
// import bridalImg from '@/assets/categories/client-bridal.jpg';

// const categories = [
//   {
//     name: 'Necklaces',
//     slug: 'necklaces',
//     image: necklacesImg,
//     description: 'Elegant temple necklaces',
//   },
//   {
//     name: 'Earrings',
//     slug: 'earrings',
//     image: earringsImg,
//     description: 'Traditional jhumkas & studs',
//   },
//   {
//     name: 'Bangles',
//     slug: 'bangles',
//     image: banglesImg,
//     description: 'Handcrafted silver bangles',
//   },
//   {
//     name: 'Vaddanams',
//     slug: 'vaddanams',
//     image: vaddanamsImg,
//     description: 'Bridal hip belts',
//   },
//   {
//     name: 'Other Accessories',
//     slug: 'accessories',
//     image: accessoriesImg,
//     description: 'Nose pins, chains & more',
//   },
//   {
//     name: 'Combo Sets',
//     slug: 'bridal',
//     image: bridalImg,
//     description: 'Complete bridal sets',
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 },
//   },
// };

// export function ShopByCategory() {
//   return (
//     <section className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             Shop By Category
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore our curated collection of traditional South Indian jewellery
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
//         >
//           {categories.map((category) => (
//             <motion.div key={category.slug} variants={itemVariants}>
//               <Link to={`/category/${category.slug}`} className="group block">
//                 <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                   <div className="aspect-[4/3] overflow-hidden bg-muted">
//                     <img
//                       src={category.image}
//                       alt={category.name}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                   </div>

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                   <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
//                     <h3 className="text-lg md:text-xl font-heading font-semibold mb-1">
//                       {category.name}
//                     </h3>
//                     <p className="text-white/80 text-xs md:text-sm hidden sm:block">
//                       {category.description}
//                     </p>
//                   </div>

//                   <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Default fallback images
import necklacesImg from "@/assets/categories/client-necklaces.jpg";
import earringsImg from "@/assets/categories/client-earrings.jpg";
import banglesImg from "@/assets/categories/client-bangles.jpg";
import vaddanamsImg from "@/assets/categories/client-vaddanams.jpg";
import accessoriesImg from "@/assets/categories/client-accessories.jpg";
import bridalImg from "@/assets/categories/client-bridal.jpg";

interface Category {
  id?: number;
  name: string;
  slug: string;
  image: string;
  description: string;
}

const DEFAULT_CATEGORIES: Category[] = [
  {
    name: "Necklaces",
    slug: "necklaces",
    image: necklacesImg,
    description: "Elegant temple necklaces",
  },
  {
    name: "Earrings",
    slug: "earrings",
    image: earringsImg,
    description: "Traditional jhumkas & studs",
  },
  {
    name: "Bangles",
    slug: "bangles",
    image: banglesImg,
    description: "Handcrafted silver bangles",
  },
  {
    name: "Vaddanams",
    slug: "vaddanams",
    image: vaddanamsImg,
    description: "Bridal hip belts",
  },
  {
    name: "Other Accessories",
    slug: "accessories",
    image: accessoriesImg,
    description: "Nose pins, chains & more",
  },
  {
    name: "Combo Sets",
    slug: "bridal",
    image: bridalImg,
    description: "Complete bridal sets",
  },
];

export function ShopByCategory() {
  const [categories, setCategories] = useState<Category[]>(DEFAULT_CATEGORIES);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/auth/categories/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategories(data);
        }
      })
      .catch(() => {
        // keep defaults
      });
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            Shop By Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of traditional South Indian jewellery
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/category/${category.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl font-heading font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm hidden sm:block">
                      {category.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
