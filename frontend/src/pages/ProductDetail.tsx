// // pages/ProductDetail.tsx
// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Plus, Minus, ShoppingCart, ChevronLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { toast } from "sonner";
// import InnerImageZoom from "react-inner-image-zoom";
// // import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import "react-inner-image-zoom/lib/styles.min.css";
// import { products as LOCAL_PRODUCTS } from "@/data/products";
// import type { Product } from "@/data/products";

// export default function ProductDetail() {
//   const { id } = useParams<{ id: string }>();
//   const [product, setProduct] = useState<Product | null>(null);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart();
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   useEffect(() => {
//     // Try to fetch from API first
//     fetch(`${API_BASE_URL}/api/auth/products/${id}/`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Not found");
//         return res.json();
//       })
//       .then((data) => setProduct(data))
//       .catch(() => {
//         // Fallback to local products
//         const localProduct = LOCAL_PRODUCTS.find((p) => String(p.id) === id);
//         if (localProduct) {
//           setProduct(localProduct);
//         }
//       });
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <p className="text-muted-foreground">Loading product...</p>
//       </div>
//     );
//   }

//   const images = product.images && product.images.length > 0 
//     ? product.images 
//     : [product.image];

//   const handleAddToCart = () => {
//     if (product.is_out_of_stock) {
//       toast.error("This product is out of stock");
//       return;
//     }

//     for (let i = 0; i < quantity; i++) {
//       addItem({
//         id: product.id,
//         name: product.name,
//         price: product.discount_price || product.price,
//         image: product.image,
//       });
//     }

//     toast.success(`${quantity} × ${product.name} added to cart`);
//   };

//   const formatPrice = (price: number) =>
//     new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(price);

//   const discountPercentage = product.discount_price
//     ? Math.round(((product.price - product.discount_price) / product.price) * 100)
//     : 0;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Back Button */}
//       <Link to="/collections">
//         <Button variant="ghost" className="mb-6">
//           <ChevronLeft className="w-4 h-4 mr-2" />
//           Back to Collections
//         </Button>
//       </Link>

//       <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//         {/* Image Gallery */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Main Image with Zoom */}
//           <div className="bg-muted rounded-xl overflow-hidden mb-4 aspect-square">
//             <InnerImageZoom
//               src={images[selectedImageIndex]}
//               zoomSrc={images[selectedImageIndex]}
//               zoomType="hover"
//               zoomScale={1.5}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Thumbnail Images */}
//           {images.length > 1 && (
//             <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
//               {images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedImageIndex(idx)}
//                   className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
//                     idx === selectedImageIndex
//                       ? "border-primary scale-95"
//                       : "border-transparent hover:border-muted-foreground/30"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt={`${product.name} - ${idx + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           )}
//         </motion.div>

//         {/* Product Details */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col"
//         >
//           {/* Product Name */}
//           <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
//             {product.name}
//           </h1>

//           {/* Price */}
//           <div className="mb-6">
//             {product.discount_price ? (
//               <div className="flex items-baseline gap-3 flex-wrap">
//                 <span className="text-3xl md:text-4xl font-bold text-primary">
//                   {formatPrice(product.discount_price)}
//                 </span>
//                 <span className="text-xl line-through text-muted-foreground">
//                   {formatPrice(product.price)}
//                 </span>
//                 <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded text-sm font-semibold">
//                   {discountPercentage}% OFF
//                 </span>
//               </div>
//             ) : (
//               <span className="text-3xl md:text-4xl font-bold text-primary">
//                 {formatPrice(product.price)}
//               </span>
//             )}
//           </div>

//           {/* Stock Status */}
//           <div className="mb-6">
//             {product.is_out_of_stock ? (
//               <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
//                 Out of Stock
//               </span>
//             ) : (
//               <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
//                 In Stock
//               </span>
//             )}
//           </div>

//           {/* Description */}
//           {product.description && (
//             <div className="mb-8">
//               <h2 className="text-lg font-semibold mb-2">Description</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 {product.description}
//               </p>
//             </div>
//           )}

//           {/* Quantity Selector */}
//           {!product.is_out_of_stock && (
//             <div className="mb-8">
//               <h2 className="text-lg font-semibold mb-3">Quantity</h2>
//               <div className="flex items-center gap-4">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   disabled={quantity <= 1}
//                 >
//                   <Minus className="w-4 h-4" />
//                 </Button>
//                 <span className="text-xl font-semibold min-w-[3rem] text-center">
//                   {quantity}
//                 </span>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => setQuantity(Math.min(10, quantity + 1))}
//                   disabled={quantity >= 10}
//                 >
//                   <Plus className="w-4 h-4" />
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* Add to Cart Button */}
//           <Button
//             onClick={handleAddToCart}
//             disabled={product.is_out_of_stock}
//             size="lg"
//             className="w-full md:w-auto text-lg py-6 px-8"
//           >
//             <ShoppingCart className="w-5 h-5 mr-2" />
//             {product.is_out_of_stock ? "Out of Stock" : "Add to Cart"}
//           </Button>

//           {/* Additional Info */}
//           <div className="mt-8 pt-8 border-t space-y-3 text-sm text-muted-foreground">
//             <p>✓ Handcrafted with premium materials</p>
//             <p>✓ Free shipping on orders above ₹10,000</p>
//             <p>✓ 7-day return policy</p>
//             <p>✓ Authentic South Indian craftsmanship</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// pages/ProductDetail.tsx
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Plus, 
  Minus, 
  ShoppingCart, 
  ChevronLeft, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { products as LOCAL_PRODUCTS } from "@/data/products";
import type { Product } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    // Try to fetch from API first
    fetch(`${API_BASE_URL}/api/auth/products/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => {
        // Fallback to local products
        const localProduct = LOCAL_PRODUCTS.find((p) => String(p.id) === id);
        if (localProduct) {
          setProduct(localProduct);
        }
      });
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground">Loading product...</p>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const handleAddToCart = () => {
    if (product.is_out_of_stock) {
      toast.error("This product is out of stock");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.discount_price || product.price,
        image: product.image,
      });
    }

    toast.success(`${quantity} × ${product.name} added to cart`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const discountPercentage = product.discount_price
    ? Math.round(((product.price - product.discount_price) / product.price) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/collections">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Collections
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main Image with Pinch to Zoom */}
          <div className="bg-muted rounded-xl overflow-hidden mb-4 border border-border shadow-sm relative group">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              centerOnInit={true}
              wheel={{ step: 0.2 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="relative flex items-center justify-center bg-white aspect-square cursor-grab active:cursor-grabbing">
                    <TransformComponent
                      wrapperStyle={{ width: "100%", height: "100%" }}
                      contentStyle={{ width: "100%", height: "100%" }}
                    >
                      <img
                        src={images[selectedImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </TransformComponent>
                  </div>

                  {/* Desktop Controls (visible on hover) */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-white/80 hover:bg-white shadow-sm"
                      onClick={() => zoomIn()}
                    >
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-white/80 hover:bg-white shadow-sm"
                      onClick={() => zoomOut()}
                    >
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-8 w-8 bg-white/80 hover:bg-white shadow-sm"
                      onClick={() => resetTransform()}
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          {/* Thumbnail Images */}
          {images.length > 1 && (
            <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    idx === selectedImageIndex
                      ? "border-primary scale-95"
                      : "border-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} - ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          {/* Product Name */}
          <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <div className="mb-6">
            {product.discount_price ? (
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {formatPrice(product.discount_price)}
                </span>
                <span className="text-xl line-through text-muted-foreground">
                  {formatPrice(product.price)}
                </span>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded text-sm font-semibold">
                  {discountPercentage}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl md:text-4xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.is_out_of_stock ? (
              <span className="inline-block bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            ) : (
              <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                In Stock
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Quantity Selector */}
          {!product.is_out_of_stock && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Quantity</h2>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-xl font-semibold min-w-[3rem] text-center">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                  disabled={quantity >= 10}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={product.is_out_of_stock}
            size="lg"
            className="w-full md:w-auto text-lg py-6 px-8"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            {product.is_out_of_stock ? "Out of Stock" : "Add to Cart"}
          </Button>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t space-y-3 text-sm text-muted-foreground">
            <p>✓ Handcrafted with premium materials</p>
            <p>✓ Free shipping on orders above ₹2,000</p>
            {/* <p>✓ 7-day return policy</p> */}
            <p>✓ Authentic South Indian craftsmanship</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
