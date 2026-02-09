// import { motion } from 'framer-motion';
// import { Layout } from '@/components/layout/Layout';
// import { Gem, Shield, Heart, Award } from 'lucide-react';

// const values = [
//   {
//     icon: Gem,
//     title: '925 Sterling Silver',
//     description: 'Every piece is crafted from authentic 925 sterling silver, ensuring lasting quality and value.',
//   },
//   {
//     icon: Shield,
//     title: 'BIS Hallmark Certified',
//     description: 'All our jewellery carries the BIS Hallmark certification, your guarantee of purity.',
//   },
//   {
//     icon: Heart,
//     title: 'Handcrafted with Love',
//     description: 'Each piece is meticulously handcrafted by skilled artisans preserving traditional techniques.',
//   },
//   {
//     icon: Award,
//     title: 'Trusted Since Generations',
//     description: 'Building trust through quality and authenticity, serving families across Karnataka.',
//   },
// ];

// export default function About() {
//   return (
//     <Layout>
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
//               Thrisheka Jewels is born from a passion for preserving the timeless beauty of 
//               South Indian temple jewellery. Our journey began with a simple mission: to bring 
//               authentic, handcrafted silver jewellery to modern women while honoring traditional 
//               craftsmanship.
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
//                   src="/placeholder.svg"
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
//                   At Thrisheka Jewels, every piece tells a story. Our master artisans, 
//                   carrying forward generations of expertise, meticulously handcraft each 
//                   ornament using time-honored techniques passed down through centuries.
//                 </p>
//                 <p>
//                   From the intricate temple designs of Lakshmi pendants to the delicate 
//                   filigree work in our jhumkas, we ensure that every detail reflects the 
//                   rich heritage of South Indian jewellery making.
//                 </p>
//                 <p>
//                   Based in Ballari, Karnataka, we take pride in supporting local artisan 
//                   communities while bringing their exceptional work to customers nationwide.
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
//               We understand that when you invest in silver jewellery, you deserve nothing 
//               but the best. That's why every piece at Thrisheka Jewels is crafted from 
//               genuine 925 sterling silver – that's 92.5% pure silver, the international 
//               standard for premium silver jewellery.
//             </p>
//             <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full">
//               <Shield className="w-5 h-5" />
//               <span className="font-semibold">BIS Hallmark Certified</span>
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
//     </Layout>
//   );
// }


import { motion } from "framer-motion";
import { Gem, Shield, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "925 Sterling Silver",
    description:
      "Every piece is crafted from authentic 925 sterling silver, ensuring lasting quality and value.",
  },
  {
    icon: Shield,
    title: "BIS Hallmark Certified",
    description:
      "All our jewellery carries the BIS Hallmark certification, your guarantee of purity.",
  },
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description:
      "Each piece is meticulously handcrafted by skilled artisans preserving traditional techniques.",
  },
  {
    icon: Award,
    title: "Trusted Since Generations",
    description:
      "Building trust through quality and authenticity, serving families across Karnataka.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30 -mt-32 md:-mt-28 pt-40 md:pt-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thrisheka Jewels is born from a passion for preserving the timeless
              beauty of South Indian temple jewellery. Our journey began with a
              simple mission: to bring authentic, handcrafted silver jewellery
              to modern women while honoring traditional craftsmanship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Thrisheka Jewels Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
                The Art of Craftsmanship
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Thrisheka Jewels, every piece tells a story. Our master
                  artisans, carrying forward generations of expertise,
                  meticulously handcraft each ornament using time-honored
                  techniques passed down through centuries.
                </p>
                <p>
                  From the intricate temple designs of Lakshmi pendants to the
                  delicate filigree work in our jhumkas, we ensure that every
                  detail reflects the rich heritage of South Indian jewellery
                  making.
                </p>
                <p>
                  Based in Ballari, Karnataka, we take pride in supporting local
                  artisan communities while bringing their exceptional work to
                  customers nationwide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 925 Promise */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
              Our 925 Purity Promise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We understand that when you invest in silver jewellery, you deserve
              nothing but the best. That's why every piece at Thrisheka Jewels is
              crafted from genuine 925 sterling silver – the international
              standard for premium silver jewellery.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">
                BIS Hallmark Certified
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Why Choose Thrisheka Jewels
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your trust is our most valued possession
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-md"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
