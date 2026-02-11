// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
// import { Layout } from '@/components/layout/Layout';
// import { Button } from '@/components/ui/button';
// import { useCart } from '@/hooks/useCart';

// export default function Cart() {
//   const { items, total, updateQuantity, removeItem, clearCart } = useCart();

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       maximumFractionDigits: 0,
//     }).format(price);
//   };

//   const shipping = total >= 2000 ? 0 : 99;
//   const grandTotal = total + shipping;

//   if (items.length === 0) {
//     return (
//       <Layout>
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center py-16"
//           >
//             <ShoppingBag className="w-20 h-20 text-muted-foreground/50 mx-auto mb-6" />
//             <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
//               Your Cart is Empty
//             </h1>
//             <p className="text-muted-foreground mb-8">
//               Looks like you haven't added any jewellery yet.
//             </p>
//             <Link to="/collections">
//               <Button size="lg" className="bg-primary text-primary-foreground">
//                 <ShoppingBag className="w-5 h-5 mr-2" />
//                 Start Shopping
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 pb-16">
//         {/* Back Link */}
//         <Link
//           to="/collections"
//           className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Continue Shopping
//         </Link>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-heading font-semibold mb-8"
//         >
//           Shopping Cart
//         </motion.h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-4">
//             {items.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="flex gap-4 bg-card rounded-xl p-4 shadow-md"
//               >
//                 {/* Image */}
//                 <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Details */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-heading font-semibold text-lg mb-1 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-primary font-semibold">
//                     {formatPrice(item.price)}
//                   </p>

//                   {/* Quantity Controls */}
//                   <div className="flex items-center gap-3 mt-3">
//                     <div className="flex items-center border border-border rounded-lg">
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                         className="p-2 hover:bg-muted transition-colors rounded-l-lg"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                         className="p-2 hover:bg-muted transition-colors rounded-r-lg"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>
//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Item Total */}
//                 <div className="text-right hidden sm:block">
//                   <p className="text-muted-foreground text-sm">Total</p>
//                   <p className="font-semibold text-lg">
//                     {formatPrice(item.price * item.quantity)}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}

//             {/* Clear Cart */}
//             <div className="flex justify-end pt-4">
//               <Button
//                 variant="outline"
//                 onClick={clearCart}
//                 className="text-destructive border-destructive hover:bg-destructive/10"
//               >
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Clear Cart
//               </Button>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-card rounded-xl p-6 shadow-md h-fit lg:sticky lg:top-40"
//           >
//             <h2 className="font-heading font-semibold text-xl mb-6">
//               Order Summary
//             </h2>

//             <div className="space-y-4 mb-6">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span className="font-medium">{formatPrice(total)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span className="font-medium">
//                   {shipping === 0 ? (
//                     <span className="text-success">Free</span>
//                   ) : (
//                     formatPrice(shipping)
//                   )}
//                 </span>
//               </div>
//               {shipping > 0 && (
//                 <p className="text-sm text-muted-foreground">
//                   Add {formatPrice(2000 - total)} more for free shipping
//                 </p>
//               )}
//               <div className="border-t border-border pt-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-lg">Total</span>
//                   <span className="font-semibold text-lg text-primary">
//                     {formatPrice(grandTotal)}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <Button className="w-full bg-primary text-primary-foreground" size="lg">
//               Proceed to Checkout
//             </Button>

//             <p className="text-center text-muted-foreground text-sm mt-4">
//               Secure checkout powered by Stripe
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </Layout>
//   );
// }


// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";

// export default function Cart() {
//   const { items, total, updateQuantity, removeItem, clearCart } = useCart();

//   const formatPrice = (price: number) =>
//     new Intl.NumberFormat("en-IN", {
//       style: "currency",
//       currency: "INR",
//       maximumFractionDigits: 0,
//     }).format(price);

//   const shipping = total >= 2000 ? 0 : 99;
//   const grandTotal = total + shipping;

//   if (items.length === 0) {
//     return (
//       <Layout>
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center py-16"
//           >
//             <ShoppingBag className="w-20 h-20 text-muted-foreground/50 mx-auto mb-6" />
//             <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
//               Your Cart is Empty
//             </h1>
//             <p className="text-muted-foreground mb-8">
//               Looks like you haven't added any jewellery yet.
//             </p>
//             <Link to="/collections">
//               <Button size="lg" className="bg-primary text-primary-foreground">
//                 <ShoppingBag className="w-5 h-5 mr-2" />
//                 Start Shopping
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div className="container mx-auto px-4 pb-16">
//         {/* Back */}
//         <Link
//           to="/collections"
//           className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
//         >
//           <ArrowLeft className="w-4 h-4 mr-2" />
//           Continue Shopping
//         </Link>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-heading font-semibold mb-8"
//         >
//           Shopping Cart
//         </motion.h1>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* ITEMS */}
//           <div className="lg:col-span-2 space-y-4">
//             {items.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="flex gap-4 bg-card rounded-xl p-4 shadow-md"
//               >
//                 {/* Image */}
//                 <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-heading font-semibold text-lg mb-1 truncate">
//                     {item.name}
//                   </h3>
//                   <p className="text-primary font-semibold">
//                     {formatPrice(item.price)}
//                   </p>

//                   <div className="flex items-center gap-3 mt-3">
//                     <div className="flex items-center border border-border rounded-lg">
//                       <button
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity - 1)
//                         }
//                         className="p-2 hover:bg-muted transition-colors rounded-l-lg"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() =>
//                           updateQuantity(item.id, item.quantity + 1)
//                         }
//                         className="p-2 hover:bg-muted transition-colors rounded-r-lg"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                     </div>

//                     <button
//                       onClick={() => removeItem(item.id)}
//                       className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Item total */}
//                 <div className="text-right hidden sm:block">
//                   <p className="text-muted-foreground text-sm">Total</p>
//                   <p className="font-semibold text-lg">
//                     {formatPrice(item.price * item.quantity)}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}

//             <div className="flex justify-end pt-4">
//               <Button
//                 variant="outline"
//                 onClick={clearCart}
//                 className="text-destructive border-destructive hover:bg-destructive/10"
//               >
//                 <Trash2 className="w-4 h-4 mr-2" />
//                 Clear Cart
//               </Button>
//             </div>
//           </div>

//           {/* SUMMARY */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-card rounded-xl p-6 shadow-md h-fit lg:sticky lg:top-40"
//           >
//             <h2 className="font-heading font-semibold text-xl mb-6">
//               Order Summary
//             </h2>

//             <div className="space-y-4 mb-6">
//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span className="font-medium">
//                   {formatPrice(total)}
//                 </span>
//               </div>

//               <div className="flex justify-between">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span className="font-medium">
//                   {shipping === 0 ? (
//                     <span className="text-success">Free</span>
//                   ) : (
//                     formatPrice(shipping)
//                   )}
//                 </span>
//               </div>

//               {shipping > 0 && (
//                 <p className="text-sm text-muted-foreground">
//                   Add {formatPrice(2000 - total)} more for free shipping
//                 </p>
//               )}

//               <div className="border-t border-border pt-4">
//                 <div className="flex justify-between">
//                   <span className="font-semibold text-lg">Total</span>
//                   <span className="font-semibold text-lg text-primary">
//                     {formatPrice(grandTotal)}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* CONNECTED BUTTON */}
//             <Link to="/checkout">
//               <Button
//                 className="w-full bg-primary text-primary-foreground"
//                 size="lg"
//               >
//                 Proceed to Checkout
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </Layout>
//   );
// }


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  //const { items, total, updateQuantity, removeItem, clearCart } = useCart();
  const { items, total, shipping, grandTotal, updateQuantity, removeItem, clearCart } = useCart();


  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  //const shipping = total >= 2000 ? 0 : 99;
  //const grandTotal = total + shipping;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <ShoppingBag className="w-20 h-20 text-muted-foreground/50 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any jewellery yet.
          </p>
          <Link to="/collections">
            <Button size="lg" className="bg-primary text-primary-foreground">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Back */}
      <Link
        to="/collections"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Continue Shopping
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-heading font-semibold mb-8"
      >
        Shopping Cart
      </motion.h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4 bg-card rounded-xl p-4 shadow-md"
            >
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-lg mb-1 truncate">
                  {item.name}
                </h3>
                <p className="text-primary font-semibold">
                  {formatPrice(item.price)}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-2 hover:bg-muted transition-colors rounded-l-lg"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-2 hover:bg-muted transition-colors rounded-r-lg"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Item total */}
              <div className="text-right hidden sm:block">
                <p className="text-muted-foreground text-sm">Total</p>
                <p className="font-semibold text-lg">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-end pt-4">
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-destructive border-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        </div>

        {/* SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-xl p-6 shadow-md h-fit lg:sticky lg:top-40"
        >
          <h2 className="font-heading font-semibold text-xl mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">{formatPrice(total)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? (
                  <span className="text-success">Free</span>
                ) : (
                  formatPrice(shipping)
                )}
              </span>
            </div>

            {shipping > 0 && (
              <p className="text-sm text-muted-foreground">
                Add {formatPrice(2000 - total)} more for free shipping
              </p>
            )}

            <div className="border-t border-border pt-4">
              <div className="flex justify-between">
                <span className="font-semibold text-lg">Total</span>
                <span className="font-semibold text-lg text-primary">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>
          </div>

          <Link to="/checkout">
            <Button className="w-full bg-primary text-primary-foreground" size="lg">
              Proceed to Checkout
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
