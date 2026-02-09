// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Priya Sharma',
//     location: 'Bangalore',
//     rating: 5,
//     text: 'Absolutely stunning jewellery! The craftsmanship is exceptional and the designs are truly authentic. My bridal set was exactly what I dreamed of.',
//     image: '/placeholder.svg',
//   },
//   {
//     id: 2,
//     name: 'Lakshmi Devi',
//     location: 'Chennai',
//     rating: 5,
//     text: 'Thrisheka Jewels has the best collection of temple jewellery. The quality is outstanding and the customer service is excellent.',
//     image: '/placeholder.svg',
//   },
//   {
//     id: 3,
//     name: 'Anjali Reddy',
//     location: 'Hyderabad',
//     rating: 5,
//     text: 'I bought earrings and a necklace set for my wedding. Everyone complimented the beautiful designs. Highly recommend!',
//     image: '/placeholder.svg',
//   },
//   {
//     id: 4,
//     name: 'Kavitha Nair',
//     location: 'Kerala',
//     rating: 5,
//     text: 'The attention to detail in every piece is remarkable. These are heirloom pieces that I will pass down to my daughter.',
//     image: '/placeholder.svg',
//   },
// ];

// export function Testimonials() {
//   const [current, setCurrent] = useState(0);

//   const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
//   const next = () => setCurrent((c) => (c + 1) % testimonials.length);

//   return (
//     <section className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//             What Our Customers Say
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Real stories from our valued customers
//           </p>
//         </motion.div>

//         <div className="relative max-w-4xl mx-auto">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={{ duration: 0.4 }}
//               className="bg-card rounded-2xl p-8 md:p-12 shadow-lg"
//             >
//               <Quote className="h-12 w-12 text-primary/20 mb-6" />
              
//               <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-body">
//                 "{testimonials[current].text}"
//               </p>

//               <div className="flex items-center gap-4">
//                 <div className="h-14 w-14 rounded-full bg-muted overflow-hidden">
//                   <img
//                     src={testimonials[current].image}
//                     alt={testimonials[current].name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-heading font-semibold text-lg">
//                     {testimonials[current].name}
//                   </h4>
//                   <p className="text-muted-foreground text-sm">
//                     {testimonials[current].location}
//                   </p>
//                 </div>
//                 <div className="ml-auto flex gap-1">
//                   {[...Array(testimonials[current].rating)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-primary text-primary" />
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Navigation */}
//           <button
//             onClick={prev}
//             className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
//           >
//             <ChevronLeft className="h-6 w-6" />
//           </button>
//           <button
//             onClick={next}
//             className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-secondary transition-colors"
//           >
//             <ChevronRight className="h-6 w-6" />
//           </button>

//           {/* Dots */}
//           <div className="flex justify-center gap-2 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   index === current ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import axios from "axios";

const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Bangalore",
    rating: 5,
    text:
      "Absolutely stunning jewellery! The craftsmanship is exceptional and the designs are truly authentic. My bridal set was exactly what I dreamed of.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Chennai",
    rating: 5,
    text:
      "Thrisheka Jewels has the best collection of temple jewellery. The quality is outstanding and the customer service is excellent.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Anjali Reddy",
    location: "Hyderabad",
    rating: 5,
    text:
      "I bought earrings and a necklace set for my wedding. Everyone complimented the beautiful designs. Highly recommend!",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Kavitha Nair",
    location: "Kerala",
    rating: 5,
    text:
      "The attention to detail in every piece is remarkable. These are heirloom pieces that I will pass down to my daughter.",
    image: "/placeholder.svg",
  },
];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/auth/testimonials/")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setTestimonials(res.data);
          setCurrent(0);
        }
      })
      .catch(() => {});
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from our valued customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="h-12 w-12 text-primary/20 mb-6" />

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-body">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-muted overflow-hidden">
                  <img
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].location}
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button onClick={prev} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-secondary transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button onClick={next} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background shadow-lg flex items-center justify-center hover:bg-secondary transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
