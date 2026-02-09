import { motion } from 'framer-motion';
import { Shield, Award, RefreshCcw, Truck, Wallet } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    label: '925 Sterling Silver',
  },
  {
    icon: Award,
    label: 'BIS Hallmark',
  },
  {
    icon: RefreshCcw,
    label: '7-Day Returns',
  },
  {
    icon: Truck,
    label: 'Free Shipping ₹2000+',
  },
  {
    icon: Wallet,
    label: 'COD Available',
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <badge.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium whitespace-nowrap">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
