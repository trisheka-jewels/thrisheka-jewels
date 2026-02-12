// import { motion } from 'framer-motion';
// import { Shield, Award, Gem, Heart, Truck, RefreshCcw } from 'lucide-react';

// const features = [
//   // {
//   //   icon: Gem,
//   //   title: '925 Sterling Silver',
//   //   description: 'All our silver jewellery is made with certified 925 sterling silver',
//   // },
//   {
//     icon: Award,
//     title: 'Exceptional Quality',
//     description: 'Every piece is crafted with exceptional quality',
//   },
//   {
//     icon: Heart,
//     title: 'Handcrafted with Love',
//     description: 'Each piece is meticulously crafted by skilled artisans',
//   },
//   // {
//   //   icon: RefreshCcw,
//   //   title: '7-Day Returns',
//   //   description: 'Easy returns within 7 days if you are not satisfied',
//   // },
//   {
//     icon: Truck,
//     title: 'Free Shipping',
//     description: 'Free shipping on orders above ₹2000',
//   },
//   // {
//   //   icon: Shield,
//   //   title: 'COD Available',
//   //   description: 'Cash on delivery available for your convenience',
//   // },
// ];

// export function WhyChooseUs() {
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
//             Why Choose Us
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Experience the difference of authentic South Indian jewellery
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50">
//                 <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
//                   <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
//                 </div>
//                 <h3 className="font-heading font-semibold text-lg mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Award, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Exceptional Quality",
    description:
      "Every piece is crafted with premium materials and strict quality standards.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description:
      "Meticulously designed and handcrafted by skilled artisans with passion.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Enjoy free shipping on all orders above ₹2000 across India.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fff7ed] via-white to-[#fff1f2] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest text-primary uppercase font-medium">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mt-3 mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience timeless elegance and authentic craftsmanship in every
            piece you wear.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 text-center border border-border/40 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Decorative Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6 group-hover:bg-primary transition-all duration-500">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="relative font-heading font-semibold text-xl mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
    </section>
  );
}

