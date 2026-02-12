import { motion } from 'framer-motion';
import { Shield, Award, Gem, Heart, Truck, RefreshCcw } from 'lucide-react';

const features = [
  // {
  //   icon: Gem,
  //   title: '925 Sterling Silver',
  //   description: 'All our silver jewellery is made with certified 925 sterling silver',
  // },
  {
    icon: Award,
    title: 'Exceptional Quality',
    description: 'Every piece is crafted with exceptional quality',
  },
  {
    icon: Heart,
    title: 'Handcrafted with Love',
    description: 'Each piece is meticulously crafted by skilled artisans',
  },
  // {
  //   icon: RefreshCcw,
  //   title: '7-Day Returns',
  //   description: 'Easy returns within 7 days if you are not satisfied',
  // },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on orders above ₹2000',
  },
  // {
  //   icon: Shield,
  //   title: 'COD Available',
  //   description: 'Cash on delivery available for your convenience',
  // },
];

export function WhyChooseUs() {
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
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of authentic South Indian jewellery
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border/50">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
