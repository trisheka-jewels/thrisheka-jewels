import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppCTA() {
  const whatsappLink = 'https://wa.me/918105840438?text=Hello!%20I%20am%20interested%20in%20your%20jewellery%20collection.';

  return (
    <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-6">
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
            Join Our WhatsApp Community
          </h2>
          <p className="text-muted-foreground mb-8">
            Get exclusive updates on new arrivals, special offers, and personalized recommendations directly on WhatsApp.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full px-8 bg-green-600 hover:bg-green-700 text-white gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
