// import { Plus } from "lucide-react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { toast } from "sonner";
// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import type { Product } from "@/data/products";

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   const { addItem } = useCart();
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   // Get images array or fallback to single image
//   const images = product.images && product.images.length > 0 
//     ? product.images 
//     : [product.image];

//   // Auto-scroll images on hover
//   useEffect(() => {
//     if (isHovering && images.length > 1) {
//       timerRef.current = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % images.length);
//       }, 1500); // Change image every 1.5 seconds
//     } else {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//       setCurrentImageIndex(0); // Reset to first image when not hovering
//     }

//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//       }
//     };
//   }, [isHovering, images.length]);

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault(); // Prevent navigation
//     e.stopPropagation(); // Stop event bubbling

//     if (product.is_out_of_stock) {
//       toast.error("This product is out of stock");
//       return;
//     }

//     addItem({
//       id: product.id,
//       name: product.name,
//       price: product.discount_price || product.price,
//       image: product.image,
//     });

//     toast.success(`${product.name} added to cart`);
//   };

//   const formatPrice = (price: number) =>
//     new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(price);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4 }}
//       className="group"
//     >
//       <Link to={`/product/${product.id}`}>
//         <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative">
//           {/* OUT OF STOCK BADGE */}
//           {product.is_out_of_stock && (
//             <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
//               Out of Stock
//             </span>
//           )}

//           {/* IMAGE CAROUSEL */}
//           <div
//             className="aspect-square overflow-hidden bg-muted relative"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <img
//               src={images[currentImageIndex]}
//               alt={`${product.name} - ${currentImageIndex + 1}`}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Image indicators (dots) */}
//             {images.length > 1 && (
//               <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
//                 {images.map((_, idx) => (
//                   <div
//                     key={idx}
//                     className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
//                       idx === currentImageIndex
//                         ? "bg-white w-4"
//                         : "bg-white/50"
//                     }`}
//                   />
//                 ))}
//               </div>
//             )}

//             {/* QUICK ADD */}
//             {!product.is_out_of_stock && (
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <Button
//                   onClick={handleAddToCart}
//                   className="bg-primary text-primary-foreground hover:bg-primary/90"
//                 >
//                   <Plus className="w-4 h-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* DETAILS */}
//           <div className="p-4">
//             <h3 className="font-heading font-semibold text-lg mb-1 line-clamp-1 hover:text-primary transition-colors">
//               {product.name}
//             </h3>

//             {product.description && (
//               <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
//                 {product.description}
//               </p>
//             )}

//             <div className="flex items-center justify-between">
//               {/* PRICE */}
//               <div>
//                 {product.discount_price ? (
//                   <>
//                     <span className="text-primary font-semibold text-lg">
//                       {formatPrice(product.discount_price)}
//                     </span>
//                     <span className="text-sm line-through text-muted-foreground ml-2">
//                       {formatPrice(product.price)}
//                     </span>
//                   </>
//                 ) : (
//                   <span className="text-primary font-semibold text-lg">
//                     {formatPrice(product.price)}
//                   </span>
//                 )}
//               </div>

//               <Button
//                 size="sm"
//                 variant="outline"
//                 onClick={handleAddToCart}
//                 disabled={product.is_out_of_stock}
//                 className="md:hidden"
//               >
//                 <Plus className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

// components/product/ProductCard.tsx
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get images array or fallback to single image
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  // Auto-scroll images automatically
  useEffect(() => {
    // Only set interval if there are multiple images
    if (images.length <= 1) return;

    // Random start delay between 0-2000ms to prevent all cards from flipping at once
    const randomDelay = Math.floor(Math.random() * 2000);
    
    let interval: NodeJS.Timeout;

    const startLoop = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds
    }, randomDelay);

    return () => {
      clearTimeout(startLoop);
      if (interval) clearInterval(interval);
    };
  }, [images.length]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();

    if (product.is_out_of_stock) {
      toast.error("This product is out of stock");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.discount_price || product.price,
      image: product.image,
    });

    toast.success(`${product.name} added to cart`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group h-full"
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative h-full flex flex-col">
          {/* OUT OF STOCK BADGE */}
          {product.is_out_of_stock && (
            <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10 font-medium">
              Out of Stock
            </span>
          )}

          {/* IMAGE CAROUSEL */}
          <div className="aspect-square overflow-hidden bg-muted relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${product.name} - View ${currentImageIndex + 1}`}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
            </AnimatePresence>

            {/* Image indicators (dots) */}
            {images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-[1px] ${
                      idx === currentImageIndex
                        ? "bg-white w-4 opacity-100"
                        : "bg-white/60 w-1.5 opacity-70"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* QUICK ADD OVERLAY */}
            {!product.is_out_of_stock && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <Button
                  onClick={handleAddToCart}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            )}
          </div>

          {/* DETAILS */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-heading font-semibold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {product.description && (
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2 flex-grow">
                {product.description}
              </p>
            )}

            <div className="flex items-center justify-between mt-auto pt-2">
              <div>
                {product.discount_price ? (
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="text-primary font-semibold text-lg">
                      {formatPrice(product.discount_price)}
                    </span>
                    <span className="text-xs sm:text-sm line-through text-muted-foreground">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ) : (
                  <span className="text-primary font-semibold text-lg">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Mobile Quick Add Button */}
              <Button
                size="icon"
                variant="outline"
                onClick={handleAddToCart}
                disabled={product.is_out_of_stock}
                className="md:hidden h-8 w-8 rounded-full"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
