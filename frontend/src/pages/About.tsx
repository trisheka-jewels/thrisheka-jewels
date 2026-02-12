// import { motion } from "framer-motion";
// import { Gem, Shield, Heart, Award } from "lucide-react";

// const values = [
//   // {
//   //   icon: Gem,
//   //   title: "925 Sterling Silver",
//   //   description:
//   //     "Every piece is crafted from authentic 925 sterling silver, ensuring lasting quality and value.",
//   // },
//   // {
//   //   icon: Shield,
//   //   title: "BIS Hallmark Certified",
//   //   description:
//   //     "All our jewellery carries the BIS Hallmark certification, your guarantee of purity.",
//   // },
//   {
//     icon: Heart,
//     title: "Handcrafted with Love",
//     description:
//       "Each piece is meticulously handcrafted by skilled artisans preserving traditional techniques.",
//   },
//   {
//     icon: Award,
//     title: "Trusted Since Generations",
//     description:
//       "Building trust through quality and authenticity, serving families across Karnataka.",
//   },
// ];

// export default function About() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-16 bg-secondary/30 -mt-32 md:-mt-28 pt-40 md:pt-36">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
//               Our Story
//             </h1>
//             <p className="text-lg text-muted-foreground leading-relaxed">
//               Thrisheka Jewels is born from a passion for preserving the timeless
//               beauty of South Indian temple jewellery. Our journey began with a
//               simple mission: to bring authentic, handcrafted silver jewellery
//               to modern women while honoring traditional craftsmanship.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Brand Story */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
//                 <img
//                   src="/placeholder.png"
//                   alt="Thrisheka Jewels Craftsmanship"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
//                 The Art of Craftsmanship
//               </h2>
//               <div className="space-y-4 text-muted-foreground">
//                 <p>
//                   At Thrisheka Jewels, every piece tells a story. Our master
//                   artisans, carrying forward generations of expertise,
//                   meticulously handcraft each ornament using time-honored
//                   techniques passed down through centuries.
//                 </p>
//                 <p>
//                   From the intricate temple designs of Lakshmi pendants to the
//                   delicate filigree work in our jhumkas, we ensure that every
//                   detail reflects the rich heritage of South Indian jewellery
//                   making.
//                 </p>
//                 <p>
//                   Based in Ballari, Karnataka, we take pride in supporting local
//                   artisan communities while bringing their exceptional work to
//                   customers nationwide.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* 925 Promise */}
//       <section className="py-16 bg-primary/5">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
//               Our 925 Purity Promise
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               We understand that when you invest in silver jewellery, you deserve
//               nothing but the best. That's why every piece at Thrisheka Jewels is
//               crafted from genuine 925 sterling silver – the international
//               standard for premium silver jewellery.
//             </p>
//             <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full">
//               <Shield className="w-5 h-5" />
//               <span className="font-semibold">
//                 Exceptional Quality
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
//               Why Choose Thrisheka Jewels
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Your trust is our most valued possession
//             </p>
//           </motion.div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center p-6 bg-card rounded-xl shadow-md"
//               >
//                 <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <value.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-heading font-semibold text-lg mb-2">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { motion } from "framer-motion";
import { Shield, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description:
      "Each piece is meticulously handcrafted by skilled artisans, preserving centuries-old South Indian traditions.",
  },
  {
    icon: Award,
    title: "Trusted Since Generations",
    description:
      "Building trust through authenticity and quality, proudly serving families across Karnataka.",
  },
];

export default function About() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-24 bg-gradient-to-b from-[#fff7ed] via-white to-[#fff1f2] -mt-32 md:-mt-28 pt-44 md:pt-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm tracking-widest uppercase text-primary font-medium">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold mt-4 mb-6">
              Preserving Heritage, Crafting Elegance
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thrisheka Jewels was born from a passion to preserve the timeless
              beauty of South Indian temple jewellery. We bring authentic,
              handcrafted silver ornaments to modern women while honoring the
              legacy of traditional craftsmanship.
            </p>
          </motion.div>
        </div>

        {/* Decorative glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
      </section>

      {/* ================= BRAND STORY ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.png"
                  alt="Thrisheka Jewels Craftsmanship"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
                The Art of Craftsmanship
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  At Thrisheka Jewels, every ornament carries a story of
                  devotion and artistry. Our master craftsmen bring generations
                  of expertise to life through intricate detailing and
                  time-honored techniques.
                </p>
                <p>
                  From Lakshmi pendants to delicate filigree jhumkas, each
                  design reflects the richness of South Indian temple jewellery.
                </p>
                <p>
                  Based in Ballari, Karnataka, we proudly support local artisan
                  communities while delivering timeless elegance nationwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 925 PROMISE ================= */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Our Quality Promise
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Every piece at Thrisheka Jewels is crafted from genuine and original materials — the international standard for premium
              jewellery. We promise purity, durability, and lasting brilliance.
            </p>

            <div className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full shadow-lg">
              <Shield className="w-5 h-5" />
              <span className="font-semibold tracking-wide">
                Guaranteed Premium Quality
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Why Choose Thrisheka Jewels
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trust is our most valued possession.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm border border-border/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-all duration-500">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="relative font-heading font-semibold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="relative text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

