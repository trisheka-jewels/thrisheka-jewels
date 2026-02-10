// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { toast } from "sonner";
// import { Lock, Smartphone } from "lucide-react";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const placeOrder = () => {
//     if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     const message = `
// New Jewellery Order
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}, ${form.city} - ${form.pincode}

// Items:
// ${items.map((i) => `${i.name} x ${i.quantity}`).join("\n")}

// Total: ₹${total}
// `;

//     window.open(
//       `https://wa.me/917411716118?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );

//     clearCart();
//     toast.success("Order sent successfully!");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 py-20">
//         <div className="max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-10">
//             Checkout
//           </h1>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* FORM */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 space-y-5">
//               <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

//               <input className="input" name="name" placeholder="Full Name" onChange={handleChange} />
//               <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange} />
//               <input className="input" name="city" placeholder="City" onChange={handleChange} />
//               <input className="input" name="pincode" placeholder="Pincode" onChange={handleChange} />
//               <textarea className="input h-24" name="address" placeholder="Full Address" onChange={handleChange} />

//               <Button className="w-full text-lg" onClick={placeOrder}>
//                 <Smartphone className="w-5 h-5 mr-2" />
//                 Order via WhatsApp
//               </Button>
//             </div>

//             {/* PAYMENT BOX */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>
//                 <p className="text-muted-foreground mb-6">
//                   Online payments are coming soon.
//                   For now, place order through WhatsApp.
//                 </p>

//                 <div className="border rounded-xl p-4 mb-6">
//                   <p className="font-semibold mb-1">Total Amount</p>
//                   <p className="text-3xl font-bold text-primary">₹{total}</p>
//                 </div>

//                 <Button disabled className="w-full text-lg opacity-60">
//                   <Lock className="w-5 h-5 mr-2" />
//                   Pay Online (Coming Soon)
//                 </Button>
//               </div>

//               <p className="text-center text-xs text-muted-foreground mt-6">
//                 Secured payments powered by Razorpay (launching soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { toast } from "sonner";
// import { Lock, Smartphone, Tag } from "lucide-react";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const applyPromo = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/auth/apply-promo/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ code: promo, total: total }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error);
//         return;
//       }

//       setDiscount(data.discount);
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     }
//   };

//   const finalTotal = total - discount;

//   const placeOrder = () => {
//     if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     const message = `
// New Jewellery Order
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}, ${form.city} - ${form.pincode}

// Items:
// ${items.map((i) => `${i.name} x ${i.quantity}`).join("\n")}

// Subtotal: ₹${total}
// Discount: ₹${discount}
// Final Total: ₹${finalTotal}
// `;

//     window.open(
//       `https://wa.me/917411716118?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );

//     clearCart();
//     toast.success("Order sent successfully!");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 py-20">
//         <div className="max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-10">
//             Checkout
//           </h1>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* FORM */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 space-y-5">
//               <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

//               <input className="input" name="name" placeholder="Full Name" onChange={handleChange} />
//               <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange} />
//               <input className="input" name="city" placeholder="City" onChange={handleChange} />
//               <input className="input" name="pincode" placeholder="Pincode" onChange={handleChange} />
//               <textarea className="input h-24" name="address" placeholder="Full Address" onChange={handleChange} />

//               <Button className="w-full text-lg" onClick={placeOrder}>
//                 <Smartphone className="w-5 h-5 mr-2" />
//                 Order via WhatsApp
//               </Button>
//             </div>

//             {/* PAYMENT BOX */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>

//                 {/* PROMO */}
//                 <div className="mb-6">
//                   <p className="font-medium mb-2 flex items-center gap-1">
//                     <Tag className="w-4 h-4" /> Promo Code
//                   </p>
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       placeholder="Enter promo code"
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button variant="outline" onClick={applyPromo}>
//                       Apply
//                     </Button>
//                   </div>
//                 </div>

//                 {/* TOTAL */}
//                 <div className="border rounded-xl p-4 mb-6">
//                   <p className="font-semibold mb-1">Total Amount</p>
//                   <p className="text-3xl font-bold text-primary">
//                     ₹{finalTotal}
//                   </p>

//                   {discount > 0 && (
//                     <p className="text-green-600 text-sm mt-1">
//                       You saved ₹{discount}
//                     </p>
//                   )}
//                 </div>

//                 <Button disabled className="w-full text-lg opacity-60">
//                   <Lock className="w-5 h-5 mr-2" />
//                   Pay Online (Coming Soon)
//                 </Button>
//               </div>

//               <p className="text-center text-xs text-muted-foreground mt-6">
//                 Secured payments powered by Razorpay (launching soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { toast } from "sonner";
// import { Lock, Smartphone, Tag } from "lucide-react";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   // ---------------- PROMO ----------------
//   const applyPromo = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/api/auth/apply-promo/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ code: promo, total }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error);
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo);
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     }
//   };

//   const removePromo = () => {
//     setDiscount(0);
//     setPromo("");
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = total - discount;

//   // ---------------- ORDER ----------------
//   const placeOrder = () => {
//     if (!form.name || !form.phone || !form.address || !form.city || !form.pincode) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     const message = `
// New Jewellery Order
// Name: ${form.name}
// Phone: ${form.phone}
// Address: ${form.address}, ${form.city} - ${form.pincode}

// Items:
// ${items.map((i) => `${i.name} x ${i.quantity}`).join("\n")}

// Subtotal: ₹${total}
// Discount: ₹${discount}
// Final Total: ₹${finalTotal}
// `;

//     window.open(
//       `https://wa.me/917411716118?text=${encodeURIComponent(message)}`,
//       "_blank"
//     );

//     clearCart();
//     toast.success("Order sent successfully!");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-50 to-rose-100 py-20">
//         <div className="max-w-4xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-10">
//             Checkout
//           </h1>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* FORM */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 space-y-5">
//               <h2 className="text-xl font-semibold mb-4">Delivery Details</h2>

//               <input className="input" name="name" placeholder="Full Name" onChange={handleChange} />
//               <input className="input" name="phone" placeholder="Phone Number" onChange={handleChange} />
//               <input className="input" name="city" placeholder="City" onChange={handleChange} />
//               <input className="input" name="pincode" placeholder="Pincode" onChange={handleChange} />
//               <textarea className="input h-24" name="address" placeholder="Full Address" onChange={handleChange} />

//               <Button className="w-full text-lg" onClick={placeOrder}>
//                 <Smartphone className="w-5 h-5 mr-2" />
//                 Order via WhatsApp
//               </Button>
//             </div>

//             {/* PAYMENT */}
//             <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-xl font-semibold mb-4">Payment</h2>

//                 {/* PROMO */}
//                 <div className="mb-6">
//                   <p className="font-medium mb-2 flex items-center gap-1">
//                     <Tag className="w-4 h-4" /> Promo Code
//                   </p>

//                   {!appliedCode ? (
//                     <div className="flex gap-2">
//                       <input
//                         type="text"
//                         placeholder="Enter promo code"
//                         value={promo}
//                         onChange={(e) => setPromo(e.target.value)}
//                         className="flex-1 border rounded-lg px-3 py-2"
//                       />
//                       <Button variant="outline" onClick={applyPromo}>
//                         Apply
//                       </Button>
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                       <span className="text-green-700 font-semibold">
//                         Applied: {appliedCode}
//                       </span>
//                       <Button
//                         size="sm"
//                         variant="destructive"
//                         onClick={removePromo}
//                       >
//                         Remove
//                       </Button>
//                     </div>
//                   )}
//                 </div>

//                 {/* TOTAL */}
//                 <div className="border rounded-xl p-4 mb-6">
//                   <p className="font-semibold mb-1">Total Amount</p>
//                   <p className="text-3xl font-bold text-primary">
//                     ₹{finalTotal}
//                   </p>

//                   {discount > 0 && (
//                     <p className="text-green-600 text-sm mt-1">
//                       You saved ₹{discount}
//                     </p>
//                   )}
//                 </div>

//                 <Button disabled className="w-full text-lg opacity-60">
//                   <Lock className="w-5 h-5 mr-2" />
//                   Pay Online (Coming Soon)
//                 </Button>
//               </div>

//               <p className="text-center text-xs text-muted-foreground mt-6">
//                 Secured payments powered by Razorpay (launching soon)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import { Lock, CreditCard, MapPin, User, Phone } from "lucide-react";
// import { toast } from "sonner";

// export default function Checkout() {
//   const { items, total } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handlePay = () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     toast("Payment gateway integration coming next 🚀");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           {/* HEADER */}
//           <h1 className="text-4xl font-heading font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT SECTION */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* DELIVERY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="input pl-10"
//                     />
//                   </div>

//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="input pl-10"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />
//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               {/* PAYMENT */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-primary" />
//                   Payment Method
//                 </h2>

//                 <div className="border border-primary/30 rounded-xl p-5 flex items-center justify-between bg-primary/5">
//                   <div>
//                     <p className="font-semibold">Online Payment</p>
//                     <p className="text-sm text-muted-foreground">
//                       UPI, Cards, Netbanking, Wallets
//                     </p>
//                   </div>

//                   <Lock className="text-primary w-6 h-6" />
//                 </div>

//                 <Button
//                   className="w-full mt-6 text-lg"
//                   onClick={handlePay}
//                 >
//                   <Lock className="w-5 h-5 mr-2" />
//                   Proceed to Pay
//                 </Button>

//                 <p className="text-xs text-muted-foreground text-center mt-3">
//                   Payments are 100% secure & encrypted
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT SECTION */}
//             <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 h-fit sticky top-24">
//               <h2 className="text-xl font-semibold mb-6">
//                 Order Summary
//               </h2>

//               <div className="space-y-4 mb-6">
//                 {items.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex justify-between text-sm"
//                   >
//                     <span>
//                       {item.name} × {item.quantity}
//                     </span>
//                     <span>₹{item.price * item.quantity}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t pt-4 space-y-2">
//                 <div className="flex justify-between text-sm">
//                   <span>Subtotal</span>
//                   <span>₹{total}</span>
//                 </div>

//                 <div className="flex justify-between font-bold text-lg">
//                   <span>Total</span>
//                   <span className="text-primary">₹{total}</span>
//                 </div>
//               </div>

//               <p className="text-xs text-center text-muted-foreground mt-6">
//                 By placing your order, you agree to our terms & conditions
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";
// import { toast } from "sonner";

// export default function Checkout() {
//   const { items, total } = useCart();

//   /* ---------------- FORM ---------------- */
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   /* ---------------- PROMO ---------------- */
//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* ✅ BACKEND PROMO VALIDATION (LIKE YOUR OLD CODE) */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);

//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/apply-promo/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             code: promo.trim(),
//             total: total,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());

//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch (error) {
//       toast.error("Server error. Try again.");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = Math.max(total - discount, 0);

//   /* ---------------- PAYMENT ---------------- */
//   const handlePay = () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     toast.success("Payment gateway integration next 🚀");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* DELIVERY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="input pl-10"
//                     />
//                   </div>

//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="input pl-10"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               {/* PAYMENT */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-primary" />
//                   Payment Method
//                 </h2>

//                 <div className="border border-primary/30 rounded-xl p-5 flex items-center justify-between bg-primary/5">
//                   <div>
//                     <p className="font-semibold">Online Payment</p>
//                     <p className="text-sm text-muted-foreground">
//                       UPI, Cards, Netbanking, Wallets
//                     </p>
//                   </div>
//                   <Lock className="w-6 h-6 text-primary" />
//                 </div>

//                 <Button className="w-full mt-6 text-lg" onClick={handlePay}>
//                   <Lock className="w-5 h-5 mr-2" />
//                   Proceed to Pay ₹{finalTotal}
//                 </Button>

//                 <p className="text-xs text-muted-foreground text-center mt-3">
//                   100% secure payments powered by Razorpay (coming soon)
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6 sticky top-24">
//               {/* PROMO */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5 text-primary" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button
//                       variant="outline"
//                       onClick={applyPromo}
//                       disabled={loadingPromo}
//                     >
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="flex items-center gap-1 text-green-700 font-semibold">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button
//                       size="sm"
//                       variant="destructive"
//                       onClick={removePromo}
//                     >
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               {/* SUMMARY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6">
//                   Order Summary
//                 </h2>

//                 <div className="space-y-4 mb-6">
//                   {items.map((item) => (
//                     <div key={item.id} className="flex justify-between text-sm">
//                       <span>
//                         {item.name} × {item.quantity}
//                       </span>
//                       <span>
//                         ₹{item.price * item.quantity}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t pt-4 space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Subtotal</span>
//                     <span>₹{total}</span>
//                   </div>

//                   {discount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600">
//                       <span>Discount</span>
//                       <span>-₹{discount}</span>
//                     </div>
//                   )}

//                   <div className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span className="text-primary">
//                       ₹{finalTotal}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";
// import { toast } from "sonner";

// export default function Checkout() {
//   const { items, total } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* ---------- PROMO (BACKEND) ---------- */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);
//       const res = await fetch("http://127.0.0.1:8000/api/auth/apply-promo/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ code: promo.trim(), total }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = Math.max(total - discount, 0);

//   const handlePay = () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     toast.success("Ready for payment gateway 🚀");
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* DELIVERY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   {/* FULL NAME */}
//                   <div className="flex items-center border rounded-lg px-3">
//                     <User className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   {/* PHONE */}
//                   <div className="flex items-center border rounded-lg px-3">
//                     <Phone className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               {/* PAYMENT */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-primary" />
//                   Payment Method
//                 </h2>

//                 <div className="border border-primary/30 rounded-xl p-5 flex items-center justify-between bg-primary/5">
//                   <div>
//                     <p className="font-semibold">Online Payment</p>
//                     <p className="text-sm text-muted-foreground">
//                       UPI, Cards, Netbanking, Wallets
//                     </p>
//                   </div>
//                   <Lock className="w-6 h-6 text-primary" />
//                 </div>

//                 <Button className="w-full mt-6 text-lg" onClick={handlePay}>
//                   <Lock className="w-5 h-5 mr-2" />
//                   Proceed to Pay ₹{finalTotal}
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6 sticky top-24">
//               {/* PROMO */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5 text-primary" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button
//                       variant="outline"
//                       onClick={applyPromo}
//                       disabled={loadingPromo}
//                     >
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="flex items-center gap-1 text-green-700 font-semibold">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button size="sm" variant="destructive" onClick={removePromo}>
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               {/* SUMMARY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

//                 <div className="space-y-4 mb-6">
//                   {items.map((item) => (
//                     <div key={item.id} className="flex justify-between text-sm">
//                       <span>{item.name} × {item.quantity}</span>
//                       <span>₹{item.price * item.quantity}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t pt-4 space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Subtotal</span>
//                     <span>₹{total}</span>
//                   </div>

//                   {discount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600">
//                       <span>Discount</span>
//                       <span>-₹{discount}</span>
//                     </div>
//                   )}

//                   <div className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span className="text-primary">₹{finalTotal}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";
// import { toast } from "sonner";
// import { loadRazorpay } from "@/lib/razorpay";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     state: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [loadingPay, setLoadingPay] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* ---------- PROMO (BACKEND) ---------- */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);
//       const res = await fetch("http://127.0.0.1:8000/api/auth/apply-promo/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ code: promo.trim(), total }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = Math.max(total - discount, 0);

//   /* ---------- PAYMENT ---------- */
//   const handlePay = async () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     setLoadingPay(true);

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       toast.error("Razorpay failed to load");
//       setLoadingPay(false);
//       return;
//     }

//     try {
//       // 1️⃣ Create order in backend
//       const res = await fetch("http://127.0.0.1:8000/api/auth/create-order/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           phone: form.phone,
//           address: form.address,
//           city: form.city,
//           state: form.state,
//           pincode: form.pincode,
//           items,
//           subtotal: total,
//           discount,
//           total: finalTotal,
//         }),
//       });

//       const order = await res.json();

//       if (!res.ok) {
//         toast.error(order.error || "Failed to create order");
//         setLoadingPay(false);
//         return;
//       }

//       // 2️⃣ Razorpay options
//       const options = {
//         key: "rzp_test_SBBe23J2gnGlcp", // 🔴 YOUR TEST KEY ID
//         amount: order.amount,
//         currency: "INR",
//         name: "Thrisheka Jewels",
//         description: "Jewellery Purchase",
//         order_id: order.order_id,

//         handler: async function (response: any) {
//           // 3️⃣ Verify payment
//           const verifyRes = await fetch(
//             "http://127.0.0.1:8000/api/verify-payment/",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Payment successful!");
//             clearCart();
//             // navigate("/order-success"); // optional
//           } else {
//             toast.error("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: form.name,
//           contact: form.phone,
//         },

//         theme: {
//           color: "#d97706",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch {
//       toast.error("Payment failed");
//     } finally {
//       setLoadingPay(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* DELIVERY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="flex items-center border rounded-lg px-3">
//                     <User className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   <div className="flex items-center border rounded-lg px-3">
//                     <Phone className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="state"
//                     placeholder="State"
//                     onChange={handleChange}
//                     className="input md:col-span-2"
//                   />

//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               {/* PAYMENT */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <CreditCard className="w-5 h-5 text-primary" />
//                   Payment Method
//                 </h2>

//                 <div className="border border-primary/30 rounded-xl p-5 flex items-center justify-between bg-primary/5">
//                   <div>
//                     <p className="font-semibold">Online Payment</p>
//                     <p className="text-sm text-muted-foreground">
//                       UPI, Cards, Netbanking, Wallets
//                     </p>
//                   </div>
//                   <Lock className="w-6 h-6 text-primary" />
//                 </div>

//                 <Button
//                   className="w-full mt-6 text-lg"
//                   onClick={handlePay}
//                   disabled={loadingPay}
//                 >
//                   <Lock className="w-5 h-5 mr-2" />
//                   {loadingPay
//                     ? "Processing..."
//                     : `Proceed to Pay ₹${finalTotal}`}
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6 sticky top-24">
//               {/* PROMO */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5 text-primary" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button
//                       variant="outline"
//                       onClick={applyPromo}
//                       disabled={loadingPromo}
//                     >
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="flex items-center gap-1 text-green-700 font-semibold">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button size="sm" variant="destructive" onClick={removePromo}>
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>

//               {/* SUMMARY */}
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

//                 <div className="space-y-4 mb-6">
//                   {items.map((item) => (
//                     <div key={item.id} className="flex justify-between text-sm">
//                       <span>{item.name} × {item.quantity}</span>
//                       <span>₹{item.price * item.quantity}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="border-t pt-4 space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Subtotal</span>
//                     <span>₹{total}</span>
//                   </div>

//                   {discount > 0 && (
//                     <div className="flex justify-between text-sm text-green-600">
//                       <span>Discount</span>
//                       <span>-₹{discount}</span>
//                     </div>
//                   )}

//                   <div className="flex justify-between font-bold text-lg">
//                     <span>Total</span>
//                     <span className="text-primary">₹{finalTotal}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   CreditCard,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";
// import { toast } from "sonner";
// import { loadRazorpay } from "@/lib/razorpay";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     state: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [loadingPay, setLoadingPay] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* ================= PROMO ================= */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/apply-promo/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ code: promo.trim(), total }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = Math.max(total - discount, 0);

//   /* ================= PAYMENT ================= */
//   const handlePay = async () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     setLoadingPay(true);

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       toast.error("Razorpay SDK failed to load");
//       setLoadingPay(false);
//       return;
//     }

//     try {
//       /* 1️⃣ CREATE ORDER */
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/create-order/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: form.name,
//             phone: form.phone,
//             address: form.address,
//             city: form.city,
//             state: form.state,
//             pincode: form.pincode,
//             items,
//             subtotal: total,
//             discount,
//             total: finalTotal,
//           }),
//         }
//       );

//       const order = await res.json();

//       if (!res.ok) {
//         toast.error(order.error || "Failed to create order");
//         setLoadingPay(false);
//         return;
//       }

//       /* 2️⃣ RAZORPAY OPTIONS */
//       const options = {
//         key: "rzp_test_SBBe23J2gnGlcp", // ✅ KEY ID ONLY
//         amount: order.amount,
//         currency: "INR",
//         name: "Thrisheka Jewels",
//         description: "Jewellery Purchase",
//         order_id: order.order_id,

//         handler: async function (response: any) {
//           /* 3️⃣ VERIFY PAYMENT */
//           const verifyRes = await fetch(
//             "http://127.0.0.1:8000/api/auth/verify-payment/",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Payment successful!");
//             clearCart();
//             // navigate("/order-success"); // optional
//           } else {
//             toast.error("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: form.name,
//           contact: form.phone,
//         },

//         theme: {
//           color: "#d97706",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (err) {
//       toast.error("Payment failed");
//     } finally {
//       setLoadingPay(false);
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-heading font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* DELIVERY */}
//               <div className="bg-white/90 rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="flex items-center border rounded-lg px-3">
//                     <User className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   <div className="flex items-center border rounded-lg px-3">
//                     <Phone className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none bg-transparent"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />

//                   <input
//                     name="state"
//                     placeholder="State"
//                     onChange={handleChange}
//                     className="input md:col-span-2"
//                   />

//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               {/* PAYMENT */}
//               <div className="bg-white/90 rounded-2xl shadow-xl p-8">
//                 <Button
//                   className="w-full text-lg"
//                   onClick={handlePay}
//                   disabled={loadingPay}
//                 >
//                   <Lock className="w-5 h-5 mr-2" />
//                   {loadingPay
//                     ? "Processing..."
//                     : `Proceed to Pay ₹${finalTotal}`}
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6 sticky top-24">
//               {/* PROMO */}
//               <div className="bg-white/90 rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5 text-primary" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button
//                       variant="outline"
//                       onClick={applyPromo}
//                       disabled={loadingPromo}
//                     >
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex items-center justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="flex items-center gap-1 text-green-700 font-semibold">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button size="sm" variant="destructive" onClick={removePromo}>
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";
// import { toast } from "sonner";
// import { loadRazorpay } from "@/lib/razorpay";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     state: "",
//   });

//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [loadingPay, setLoadingPay] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   /* ================= PROMO ================= */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/apply-promo/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ code: promo.trim(), total }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   const finalTotal = Math.max(total - discount, 0);

//   /* ================= PAYMENT ================= */
//   const handlePay = async () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     setLoadingPay(true);

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       toast.error("Razorpay SDK failed to load");
//       setLoadingPay(false);
//       return;
//     }

//     try {
//       /* 1️⃣ CREATE ORDER */
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/create-order/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: form.name,
//             phone: form.phone,
//             address: form.address,
//             city: form.city,
//             state: form.state,
//             pincode: form.pincode,
//             items,
//             subtotal: total,
//             discount,
//             total: finalTotal,
//           }),
//         }
//       );

//       const order = await res.json();

//       if (!res.ok) {
//         toast.error(order.error || "Failed to create order");
//         setLoadingPay(false);
//         return;
//       }

//       /* 2️⃣ RAZORPAY OPTIONS */
//       const options = {
//         key: "rzp_test_SBBe23J2gnGlcp", // ✅ TEST KEY ID ONLY
//         amount: order.amount,
//         currency: "INR",
//         name: "Thrisheka Jewels",
//         description: "Jewellery Purchase",
//         order_id: order.order_id,

//         handler: async function (response: any) {
//           /* 3️⃣ VERIFY PAYMENT */
//           const verifyRes = await fetch(
//             "http://127.0.0.1:8000/api/auth/verify-payment/",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Payment successful!");
//             clearCart();

//             // ✅ Redirect to Home after success
//             setTimeout(() => {
//               navigate("/");
//             }, 1500);
//           } else {
//             toast.error("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: form.name,
//           contact: form.phone,
//         },

//         theme: {
//           color: "#d97706",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch {
//       toast.error("Payment failed");
//     } finally {
//       setLoadingPay(false);
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <div className="flex items-center border rounded-lg px-3">
//                     <User className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="name"
//                       placeholder="Full Name"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none"
//                     />
//                   </div>

//                   <div className="flex items-center border rounded-lg px-3">
//                     <Phone className="w-5 h-5 text-muted-foreground" />
//                     <input
//                       name="phone"
//                       placeholder="Phone Number"
//                       onChange={handleChange}
//                       className="w-full px-3 py-3 outline-none"
//                     />
//                   </div>

//                   <input
//                     name="city"
//                     placeholder="City"
//                     onChange={handleChange}
//                     className="input"
//                   />
//                   <input
//                     name="pincode"
//                     placeholder="Pincode"
//                     onChange={handleChange}
//                     className="input"
//                   />
//                   <input
//                     name="state"
//                     placeholder="State"
//                     onChange={handleChange}
//                     className="input md:col-span-2"
//                   />
//                   <textarea
//                     name="address"
//                     placeholder="Full Address"
//                     onChange={handleChange}
//                     className="input md:col-span-2 h-28"
//                   />
//                 </div>
//               </div>

//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <Button
//                   className="w-full text-lg"
//                   onClick={handlePay}
//                   disabled={loadingPay}
//                 >
//                   <Lock className="w-5 h-5 mr-2" />
//                   {loadingPay
//                     ? "Processing..."
//                     : `Proceed to Pay ₹${finalTotal}`}
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button
//                       variant="outline"
//                       onClick={applyPromo}
//                       disabled={loadingPromo}
//                     >
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="text-green-700 font-semibold flex items-center gap-1">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button
//                       size="sm"
//                       variant="destructive"
//                       onClick={removePromo}
//                     >
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Layout } from "@/components/layout/Layout";
// import { Button } from "@/components/ui/button";
// import { useCart } from "@/hooks/useCart";
// import {
//   Lock,
//   MapPin,
//   User,
//   Phone,
//   Tag,
//   CheckCircle,
//   XCircle,
//   Building,
//   Map,
//   Hash,
// } from "lucide-react";
// import { toast } from "sonner";
// import { loadRazorpay } from "@/lib/razorpay";

// export default function Checkout() {
//   const { items, total, clearCart } = useCart();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     city: "",
//     pincode: "",
//     state: "",
//   });

//   /* PROMO */
//   const [promo, setPromo] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [appliedCode, setAppliedCode] = useState<string | null>(null);
//   const [loadingPromo, setLoadingPromo] = useState(false);

//   /* PAYMENT */
//   const [loadingPay, setLoadingPay] = useState(false);

//   const handleChange = (e: any) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const finalTotal = Math.max(total - discount, 0);

//   /* ================= PROMO ================= */
//   const applyPromo = async () => {
//     if (!promo.trim()) {
//       toast.error("Enter a promo code");
//       return;
//     }

//     try {
//       setLoadingPromo(true);
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/apply-promo/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ code: promo.trim(), total }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.error || "Invalid promo code");
//         return;
//       }

//       setDiscount(data.discount);
//       setAppliedCode(promo.trim().toUpperCase());
//       toast.success(`Promo applied! You saved ₹${data.discount}`);
//     } catch {
//       toast.error("Server error");
//     } finally {
//       setLoadingPromo(false);
//     }
//   };

//   const removePromo = () => {
//     setPromo("");
//     setDiscount(0);
//     setAppliedCode(null);
//     toast("Promo removed");
//   };

//   /* ================= PAYMENT ================= */
//   const handlePay = async () => {
//     if (!Object.values(form).every(Boolean)) {
//       toast.error("Please fill all delivery details");
//       return;
//     }

//     setLoadingPay(true);

//     const loaded = await loadRazorpay();
//     if (!loaded) {
//       toast.error("Razorpay SDK failed to load");
//       setLoadingPay(false);
//       return;
//     }

//     try {
//       const res = await fetch(
//         "http://127.0.0.1:8000/api/auth/create-order/",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...form,
//             items,
//             subtotal: total,
//             discount,
//           }),
//         }
//       );

//       const order = await res.json();

//       if (!res.ok) {
//         toast.error(order.error || "Failed to create order");
//         setLoadingPay(false);
//         return;
//       }

//       const options = {
//         key: "rzp_test_SBBe23J2gnGlcp",
//         amount: order.amount,
//         currency: "INR",
//         name: "Thrisheka Jewels",
//         description: "Jewellery Purchase",
//         order_id: order.order_id,

//         handler: async function (response: any) {
//           const verifyRes = await fetch(
//             "http://127.0.0.1:8000/api/auth/verify-payment/",
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(response),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             toast.success("Payment successful!");
//             clearCart();
//             setTimeout(() => navigate("/"), 1500);
//           } else {
//             toast.error("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: form.name,
//           contact: form.phone,
//         },

//         theme: { color: "#d97706" },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch {
//       toast.error("Payment failed");
//     } finally {
//       setLoadingPay(false);
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
//         <div className="max-w-6xl mx-auto px-4">
//           <h1 className="text-4xl font-bold text-center mb-12">
//             Secure Checkout
//           </h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT */}
//             <div className="lg:col-span-2 space-y-8">
//               {/* ADDRESS */}
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
//                   <MapPin className="w-5 h-5" />
//                   Delivery Information
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-5">
//                   <Input icon={<User />} name="name" placeholder="Full Name" onChange={handleChange} />
//                   <Input icon={<Phone />} name="phone" placeholder="Phone Number" onChange={handleChange} />
//                   <Input icon={<Building />} name="city" placeholder="City" onChange={handleChange} />
//                   <Input icon={<Hash />} name="pincode" placeholder="Pincode" onChange={handleChange} />
//                   <Input icon={<Map />} name="state" placeholder="State" onChange={handleChange} full />
//                   <TextArea icon={<MapPin />} name="address" placeholder="Full Address" onChange={handleChange} />
//                 </div>
//               </div>

//               {/* PAY */}
//               <div className="bg-white rounded-2xl shadow-xl p-8">
//                 <Button className="w-full text-lg" onClick={handlePay} disabled={loadingPay}>
//                   <Lock className="w-5 h-5 mr-2" />
//                   {loadingPay ? "Processing..." : `Proceed to Pay ₹${finalTotal}`}
//                 </Button>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl shadow-xl p-6">
//                 <h2 className="font-semibold mb-4 flex items-center gap-2">
//                   <Tag className="w-5 h-5" />
//                   Promo Code
//                 </h2>

//                 {!appliedCode ? (
//                   <div className="flex gap-2">
//                     <input
//                       value={promo}
//                       onChange={(e) => setPromo(e.target.value)}
//                       placeholder="Enter promo code"
//                       className="flex-1 border rounded-lg px-3 py-2"
//                     />
//                     <Button variant="outline" onClick={applyPromo} disabled={loadingPromo}>
//                       {loadingPromo ? "Checking..." : "Apply"}
//                     </Button>
//                   </div>
//                 ) : (
//                   <div className="flex justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
//                     <span className="text-green-700 font-semibold flex items-center gap-1">
//                       <CheckCircle className="w-4 h-4" />
//                       {appliedCode} Applied
//                     </span>
//                     <Button size="sm" variant="destructive" onClick={removePromo}>
//                       <XCircle className="w-4 h-4 mr-1" />
//                       Remove
//                     </Button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// /* ====== REUSABLE INPUT COMPONENTS ====== */
// const Input = ({ icon, name, placeholder, onChange, full = false }: any) => (
//   <div className={`flex items-center border rounded-lg px-3 ${full ? "md:col-span-2" : ""}`}>
//     {icon && <span className="text-muted-foreground w-5 h-5">{icon}</span>}
//     <input
//       name={name}
//       placeholder={placeholder}
//       onChange={onChange}
//       className="w-full px-3 py-3 outline-none"
//     />
//   </div>
// );

// const TextArea = ({ icon, name, placeholder, onChange }: any) => (
//   <div className="flex border rounded-lg px-3 md:col-span-2">
//     {icon && <span className="text-muted-foreground mt-3 w-5 h-5">{icon}</span>}
//     <textarea
//       name={name}
//       placeholder={placeholder}
//       onChange={onChange}
//       className="w-full px-3 py-3 outline-none resize-none h-28"
//     />
//   </div>
// );

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import {
  Lock,
  MapPin,
  User,
  Phone,
  Tag,
  CheckCircle,
  XCircle,
  Building,
  Map,
  Hash,
} from "lucide-react";
import { toast } from "sonner";
import { loadRazorpay } from "@/lib/razorpay";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  });

  /* PROMO */
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [loadingPromo, setLoadingPromo] = useState(false);

  /* PAYMENT */
  const [loadingPay, setLoadingPay] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const finalTotal = Math.max(total - discount, 0);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  /* ================= PROMO ================= */
  const applyPromo = async () => {
    if (!promo.trim()) {
      toast.error("Enter a promo code");
      return;
    }

    try {
      setLoadingPromo(true);
      const res = await fetch(`${API_BASE_URL}/api/auth/apply-promo/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: promo.trim(), total }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Invalid promo code");
        return;
      }

      setDiscount(data.discount);
      setAppliedCode(promo.trim().toUpperCase());
      toast.success(`Promo applied! You saved ₹${data.discount}`);
    } catch {
      toast.error("Server error");
    } finally {
      setLoadingPromo(false);
    }
  };

  const removePromo = () => {
    setPromo("");
    setDiscount(0);
    setAppliedCode(null);
    toast("Promo removed");
  };

  /* ================= PAYMENT ================= */
  const handlePay = async () => {
    if (!Object.values(form).every(Boolean)) {
      toast.error("Please fill all delivery details");
      return;
    }

    setLoadingPay(true);

    const loaded = await loadRazorpay();
    if (!loaded) {
      toast.error("Razorpay SDK failed to load");
      setLoadingPay(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/create-order/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items,
          subtotal: total,
          discount,
        }),
      });

      const order = await res.json();

      if (!res.ok) {
        toast.error(order.error || "Failed to create order");
        setLoadingPay(false);
        return;
      }

      const options = {
        key: "rzp_test_SBBe23J2gnGlcp",
        amount: order.amount,
        currency: "INR",
        name: "Thrisheka Jewels",
        description: "Jewellery Purchase",
        order_id: order.order_id,

        handler: async function (response: any) {
          const verifyRes = await fetch(
            `${API_BASE_URL}/api/auth/verify-payment/`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            },
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            toast.success("Payment successful!");
            clearCart();
            setTimeout(() => navigate("/"), 1500);
          } else {
            toast.error("Payment verification failed");
          }
        },

        prefill: {
          name: form.name,
          contact: form.phone,
        },

        theme: { color: "#d97706" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch {
      toast.error("Payment failed");
    } finally {
      setLoadingPay(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#fff1f2] to-[#ffe4e6] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            {/* ADDRESS */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Delivery Information
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <Input
                  icon={<User />}
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <Input
                  icon={<Phone />}
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
                <Input
                  icon={<Building />}
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />
                <Input
                  icon={<Hash />}
                  name="pincode"
                  placeholder="Pincode"
                  onChange={handleChange}
                />
                <Input
                  icon={<Map />}
                  name="state"
                  placeholder="State"
                  onChange={handleChange}
                  full
                />
                <TextArea
                  icon={<MapPin />}
                  name="address"
                  placeholder="Full Address"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PAY */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <Button
                className="w-full text-lg"
                onClick={handlePay}
                disabled={loadingPay}
              >
                <Lock className="w-5 h-5 mr-2" />
                {loadingPay ? "Processing..." : `Proceed to Pay ₹${finalTotal}`}
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Promo Code
              </h2>

              {!appliedCode ? (
                <div className="flex gap-2">
                  <input
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 border rounded-lg px-3 py-2"
                  />
                  <Button
                    variant="outline"
                    onClick={applyPromo}
                    disabled={loadingPromo}
                  >
                    {loadingPromo ? "Checking..." : "Apply"}
                  </Button>
                </div>
              ) : (
                <div className="flex justify-between bg-green-50 border border-green-400 rounded-lg px-4 py-2">
                  <span className="text-green-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    {appliedCode} Applied
                  </span>
                  <Button size="sm" variant="destructive" onClick={removePromo}>
                    <XCircle className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ====== REUSABLE INPUT COMPONENTS ====== */
const Input = ({ icon, name, placeholder, onChange, full = false }: any) => (
  <div
    className={`flex items-center border rounded-lg px-3 ${full ? "md:col-span-2" : ""}`}
  >
    {icon && <span className="text-muted-foreground w-5 h-5">{icon}</span>}
    <input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-3 py-3 outline-none"
    />
  </div>
);

const TextArea = ({ icon, name, placeholder, onChange }: any) => (
  <div className="flex border rounded-lg px-3 md:col-span-2">
    {icon && <span className="text-muted-foreground mt-3 w-5 h-5">{icon}</span>}
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-3 py-3 outline-none resize-none h-28"
    />
  </div>
);
