import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 8105840438', '+91 7411716118'],
    action: 'tel:+918105840438',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['tuglaksuma@gmail.com'],
    action: 'mailto:tuglaksuma@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: ['Ramanjinaya Nagar', 'Behind Indian Bank, Belgal Cross', 'Ballari, Karnataka'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday – Saturday: 11:00 AM – 10:00 PM', 'Sunday: Holiday'],
  },
];

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/917794941645?text=Hi! I am interested in Thrisheka Jewels.', '_blank');
  };

  return (
    <Layout>
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
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our jewellery? We'd love to hear from you. 
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {info.action && i === 0 ? (
                        <a href={info.action} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-primary/5 rounded-2xl p-8 md:p-12"
          >
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
              Prefer WhatsApp?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Chat with us directly on WhatsApp for quick responses, order updates, 
              and personalized jewellery recommendations.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#22c55e] text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
              Visit Our Store
            </h2>
            <p className="text-muted-foreground">
              Come see our complete collection in person
            </p>
          </motion.div>

          <div className="aspect-[16/9] md:aspect-[21/9] bg-muted rounded-2xl overflow-hidden">
            {/* Map placeholder - can be replaced with actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Map coming soon</p>
                <p className="text-sm">Ramanjinaya Nagar, Ballari, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
