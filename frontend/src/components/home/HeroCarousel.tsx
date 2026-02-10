// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Hero banner images
// import bridalBanner from '@/assets/hero/bridal-banner.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Premium Bridal Collection',
//     subtitle: 'Complete Bridal Sets',
//     image: bridalBanner,
//     link: '/category/bridal',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goTo = (index: number) => setCurrent(index);
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-4 flex items-center">
//             <div className="max-w-xl">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-primary-foreground/80 font-medium tracking-wider uppercase text-sm mb-4"
//               >
//                 {slides[current].subtitle}
//               </motion.p>
//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl md:text-6xl font-heading font-semibold leading-tight mb-8 text-white"
//               >
//                 {slides[current].title}
//               </motion.h2>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button size="lg" className="text-base px-8 py-6 rounded-full gradient-gold text-primary-foreground hover:opacity-90 transition-opacity">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-white" />
//       </button>
//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-white" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Hero banner images
// import bridalBanner from '@/assets/hero/bridal-banner.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Premium Bridal Collection',
//     subtitle: 'Complete Bridal Sets',
//     image: bridalBanner,
//     link: '/category/bridal',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goTo = (index: number) => setCurrent(index);
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover"
//           />

//           {/* Darker Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-4 flex items-center">
//             <div className="max-w-xl">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white font-semibold tracking-wider uppercase text-sm mb-4 drop-shadow-lg"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl md:text-6xl font-heading font-semibold leading-tight mb-8 text-white drop-shadow-xl"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button
//                     size="lg"
//                     className="text-base px-8 py-6 rounded-full gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
//                   >
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-yellow-400" />
//       </button>
//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-yellow-400" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Hero banner images
// import modelBanner from '@/assets/hero/model.webp'; // your image
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Premium Bridal Collection',
//     subtitle: 'Complete Bridal Sets',
//     image: modelBanner,
//     link: '/category/bridal',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goTo = (index: number) => setCurrent(index);
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

//           <div className="absolute inset-0 container mx-auto px-4 flex items-center">
//             <div className="max-w-xl">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white font-semibold tracking-wider uppercase text-sm mb-4 drop-shadow-lg"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl md:text-6xl font-heading font-semibold leading-tight mb-8 text-white drop-shadow-xl"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button
//                     size="lg"
//                     className="text-base px-8 py-6 rounded-full gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
//                   >
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-yellow-400" />
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-yellow-400" />
//       </button>

//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Hero banner images
// import modelBanner from '@/assets/hero/model.webp';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Premium Bridal Collection',
//     subtitle: 'Complete Bridal Sets',
//     image: modelBanner,
//     link: '/category/bridal',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goTo = (index: number) => setCurrent(index);
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-[45%_20%]"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-4 flex items-center">
//             <div className="max-w-xl">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white font-semibold tracking-wider uppercase text-sm mb-4 drop-shadow-lg"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl md:text-6xl font-heading font-semibold leading-tight mb-8 text-white drop-shadow-xl"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button
//                     size="lg"
//                     className="text-base px-8 py-6 rounded-full gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
//                   >
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-yellow-400" />
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-yellow-400" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// // Hero banner images
// import modelBanner from '@/assets/hero/model.webp';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Premium Bridal Collection',
//     subtitle: 'Complete Bridal Sets',
//     image: modelBanner,
//     link: '/category/bridal',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const goTo = (index: number) => setCurrent(index);
//   const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () => setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="relative h-[70vh] min-h-[500px] max-h-[700px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-[48%_18%] contrast-110 brightness-105 saturate-110"
//           />

//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-4 flex items-center backdrop-blur-[1px]">
//             <div className="max-w-xl">
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-white font-semibold tracking-wider uppercase text-sm mb-4 drop-shadow-lg"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-4xl md:text-6xl font-heading font-semibold leading-tight mb-8 text-white drop-shadow-xl"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button
//                     size="lg"
//                     className="text-base px-8 py-6 rounded-full gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
//                   >
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={prev}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronLeft className="h-6 w-6 text-yellow-400" />
//       </button>

//       <button
//         onClick={next}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
//       >
//         <ChevronRight className="h-6 w-6 text-yellow-400" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goTo(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner from '@/assets/hero/model-banner.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[65vh] min-h-[420px] max-h-[620px] overflow-hidden bg-[#f8efe7]">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-[70%_30%] brightness-105 saturate-110"
//           />

//           {/* Soft overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#f8efe7]/95 via-[#f8efe7]/70 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-[#4b2e2b]">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-3"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-lg mb-6 text-[#6b3f3a]"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-8 py-4 rounded-md shadow-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-[#7a3e2e]' : 'w-2 bg-[#7a3e2e]/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner1 from '@/assets/hero/model-banner1.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner1,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[65vh] min-h-[420px] max-h-[620px] overflow-hidden bg-[#f8efe7]">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="
//               w-full h-full object-cover
//               object-[65%_25%]
//               brightness-105 saturate-110
//             "
//           />

//           {/* Soft overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#f8efe7]/95 via-[#f8efe7]/70 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-[#4b2e2b]">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-3"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-lg mb-6 text-[#6b3f3a]"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-8 py-4 rounded-md shadow-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-[#7a3e2e]' : 'w-2 bg-[#7a3e2e]/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner from '@/assets/hero/model-banner2.jpeg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[65vh] min-h-[420px] max-h-[620px] overflow-hidden bg-[#f8efe7]">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="
//               w-full h-full object-cover
//               object-[50%_20%]
//               sm:object-[50%_25%]
//               md:object-[60%_30%]
//               lg:object-[65%_35%]
//             "
//           />

//           {/* Soft overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#f8efe7]/95 via-[#f8efe7]/70 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-[#4b2e2b]">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-3"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-lg mb-6 text-[#6b3f3a]"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-8 py-4 rounded-md shadow-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-[#7a3e2e]' : 'w-2 bg-[#7a3e2e]/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import modelBanner from '@/assets/hero/model-banner2.jpeg';

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   return (
//     <section className="relative h-[60vh] min-h-[380px] overflow-hidden bg-black">
//       <img
//         src={modelBanner}
//         alt="Banner"
//         className="
//           w-full h-full object-cover
//           object-[50%_20%]
//           sm:object-[50%_25%]
//           md:object-[60%_30%]
//           lg:object-[65%_35%]
//         "
//       />

//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//       <div className="absolute inset-0 flex items-center px-6">
//         <div className="max-w-xl text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">
//             Elegance You Can Wear
//           </h1>
//           <p className="text-lg mb-6">
//             Adorn Yourself with Timeless Beauty
//           </p>
//           <Link to="/collections">
//             <button className="bg-yellow-500 text-black px-6 py-3 rounded-md">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner from '@/assets/hero/model-banner2.jpeg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[65vh] min-h-[420px] max-h-[620px] overflow-hidden bg-black">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="
//               w-full h-full object-cover
//               object-[50%_45%]
//               sm:object-[50%_48%]
//               md:object-[50%_52%]
//               lg:object-[50%_55%]
//             "
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-white">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-bold leading-tight mb-3"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-lg mb-6"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-md shadow-lg">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-yellow-500' : 'w-2 bg-yellow-500/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { Link } from 'react-router-dom';

// import banner from '@/assets/hero/banner.jpg';

// export function HeroCarousel() {
//   return (
//     <section className="relative h-[60vh] min-h-[380px] overflow-hidden bg-black">
//       <img
//         src={banner}
//         alt="Hero Banner"
//         className="w-full h-full object-cover object-center"
//       />

//       <div className="absolute inset-0 bg-black/40" />

//       <div className="absolute inset-0 flex items-center px-6">
//         <div className="max-w-xl text-white">
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">
//             Elegance You Can Wear
//           </h1>
//           <p className="text-lg mb-6">
//             Adorn Yourself with Timeless Beauty
//           </p>
//           <Link to="/collections">
//             <button className="bg-yellow-500 text-black px-6 py-3 rounded-md">
//               Shop Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import heroBanner from '@/assets/hero/hero-banner.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: heroBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[65vh] min-h-[420px] max-h-[620px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background Image */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-center"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-white">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-lg mb-6 text-white/90"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#d4af37] hover:bg-[#b8962e] text-black px-8 py-4 rounded-full shadow-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/70"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/70"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-[#d4af37]' : 'w-2 bg-[#d4af37]/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { motion, AnimatePresence } from "framer-motion";

// import modelBanner from "@/assets/hero/hero-banner.jpg"; // your cropped image
// import necklacesBanner from "@/assets/hero/necklaces-banner.jpg";
// import earringsBanner from "@/assets/hero/earrings-banner.jpg";
// import banglesBanner from "@/assets/hero/bangles-banner.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Elegance You Can Wear",
//     subtitle: "Adorn Yourself with Timeless Beauty",
//     image: modelBanner,
//     link: "/collections",
//   },
//   {
//     id: 2,
//     title: "Exquisite Necklaces",
//     subtitle: "Temple & Traditional Designs",
//     image: necklacesBanner,
//     link: "/category/necklaces",
//   },
//   {
//     id: 3,
//     title: "Traditional Earrings",
//     subtitle: "Jhumkas & Chandbalis",
//     image: earringsBanner,
//     link: "/category/earrings",
//   },
//   {
//     id: 4,
//     title: "Elegant Bangles",
//     subtitle: "Handcrafted Temple Designs",
//     image: banglesBanner,
//     link: "/category/bangles",
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((c) => (c + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const prev = () =>
//     setCurrent((c) => (c - 1 + slides.length) % slides.length);
//   const next = () =>
//     setCurrent((c) => (c + 1) % slides.length);

//   return (
//     <section className="bg-[#fff7ef] py-6">
//       <div className="container mx-auto px-4">
//         <div className="relative overflow-hidden rounded-xl bg-[#f8efe7]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -40 }}
//               transition={{ duration: 0.6 }}
//               className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 p-6"
//             >
//               {/* LEFT TEXT */}
//               <div>
//                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4b2e2b] mb-2">
//                   {slides[current].title}
//                 </h2>
//                 <p className="text-[#6b3f3a] mb-5">
//                   {slides[current].subtitle}
//                 </p>
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-6 py-3 rounded-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </div>

//               {/* RIGHT IMAGE */}
//               <div className="flex justify-center md:justify-end">
//                 <img
//                   src={slides[current].image}
//                   alt={slides[current].title}
//                   className="max-h-[260px] md:max-h-[320px] w-auto object-contain"
//                 />
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Arrows */}
//           <button
//             onClick={prev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner from '@/assets/hero/hero-banner.jpg'; // your cropped banner
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance You Can Wear',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[52vh] md:h-[60vh] min-h-[360px] max-h-[520px] overflow-hidden bg-[#f8efe7]">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//           className="absolute inset-0"
//         >
//           {/* Background */}
//           <img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover object-center md:object-[60%_25%]"
//           />

//           {/* Soft overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#f8efe7]/95 via-[#f8efe7]/70 to-transparent" />

//           {/* Content */}
//           <div className="absolute inset-0 container mx-auto px-6 flex items-center">
//             <div className="max-w-xl text-[#4b2e2b]">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-3"
//               >
//                 {slides[current].title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="text-base md:text-lg mb-6 text-[#6b3f3a]"
//               >
//                 {slides[current].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <Link to={slides[current].link}>
//                   <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded-md shadow-md">
//                     Shop Now
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Arrows */}
//       <button
//         onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
//         className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={() => setCurrent((c) => (c + 1) % slides.length)}
//         className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
//       >
//         <ChevronRight />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 rounded-full transition-all ${
//               i === current ? 'w-6 bg-[#7a3e2e]' : 'w-2 bg-[#7a3e2e]/50'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import modelBanner from '@/assets/hero/hero-banner.jpg';
// import necklacesBanner from '@/assets/hero/necklaces-banner.jpg';
// import earringsBanner from '@/assets/hero/earrings-banner.jpg';
// import banglesBanner from '@/assets/hero/bangles-banner.jpg';

// const slides = [
//   {
//     id: 1,
//     title: 'Elegance That Speaks',
//     subtitle: 'Adorn Yourself with Timeless Beauty',
//     image: modelBanner,
//     link: '/collections',
//   },
//   {
//     id: 2,
//     title: 'Exquisite Necklaces',
//     subtitle: 'Temple & Traditional Designs',
//     image: necklacesBanner,
//     link: '/category/necklaces',
//   },
//   {
//     id: 3,
//     title: 'Traditional Earrings',
//     subtitle: 'Jhumkas & Chandbalis',
//     image: earringsBanner,
//     link: '/category/earrings',
//   },
//   {
//     id: 4,
//     title: 'Elegant Bangles',
//     subtitle: 'Handcrafted Temple Designs',
//     image: banglesBanner,
//     link: '/category/bangles',
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#f8efe7] py-6 md:py-12">
//       <div className="container mx-auto px-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
//           >
//             {/* TEXT */}
//             <div className="max-w-lg text-left">
//               <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4b2e2b] mb-3">
//                 {slides[current].title}
//               </h2>
//               <p className="text-base md:text-lg text-[#6b3f3a] mb-5">
//                 {slides[current].subtitle}
//               </p>
//               <Link to={slides[current].link}>
//                 <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded shadow">
//                   Shop Now
//                 </Button>
//               </Link>
//             </div>

//             {/* IMAGE */}
//             <div className="w-full md:w-[45%] flex justify-center">
//               <img
//                 src={slides[current].image}
//                 alt="Model"
//                 className="max-h-[320px] md:max-h-[420px] w-auto object-contain"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* DOTS */}
//         <div className="flex justify-center gap-2 mt-6">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === current ? 'w-6 bg-[#7a3e2e]' : 'w-2 bg-[#7a3e2e]/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// import modelBanner from "@/assets/hero/model-banner-square.jpg";
// import necklacesBanner from "@/assets/hero/necklaces-banner.jpg";
// import earringsBanner from "@/assets/hero/earrings-banner.jpg";
// import banglesBanner from "@/assets/hero/bangles-banner.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Elegance You Can Wear",
//     subtitle: "Adorn Yourself with Timeless Beauty",
//     image: modelBanner,
//     link: "/collections",
//   },
//   {
//     id: 2,
//     title: "Exquisite Necklaces",
//     subtitle: "Temple & Traditional Designs",
//     image: necklacesBanner,
//     link: "/category/necklaces",
//   },
//   {
//     id: 3,
//     title: "Traditional Earrings",
//     subtitle: "Jhumkas & Chandbalis",
//     image: earringsBanner,
//     link: "/category/earrings",
//   },
//   {
//     id: 4,
//     title: "Elegant Bangles",
//     subtitle: "Handcrafted Temple Designs",
//     image: banglesBanner,
//     link: "/category/bangles",
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#f8efe7] py-6 md:py-12">
//       <div className="container mx-auto px-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
//           >
//             {/* TEXT */}
//             <div className="max-w-lg text-left">
//               <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4b2e2b] mb-3">
//                 {slides[current].title}
//               </h2>
//               <p className="text-base md:text-lg text-[#6b3f3a] mb-5">
//                 {slides[current].subtitle}
//               </p>
//               <Link to={slides[current].link}>
//                 <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded shadow">
//                   Shop Now
//                 </Button>
//               </Link>
//             </div>

//             {/* IMAGE (SQUARE STYLE SAME AS OTHERS) */}
//             <div className="w-full md:w-[45%] flex justify-center">
//               <img
//                 src={slides[current].image}
//                 alt="Banner"
//                 className="max-h-[320px] md:max-h-[420px] w-auto object-contain"
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* DOTS */}
//         <div className="flex justify-center gap-2 mt-6">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === current
//                   ? "w-6 bg-[#7a3e2e]"
//                   : "w-2 bg-[#7a3e2e]/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // HERO IMAGES
// import modelBanner from "@/assets/hero/model-banner-square.jpg"; // your cropped image
// import necklacesBanner from "@/assets/hero/necklaces-banner.jpg";
// import earringsBanner from "@/assets/hero/earrings-banner.jpg";
// import banglesBanner from "@/assets/hero/bangles-banner.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Elegance You Can Wear",
//     subtitle: "Adorn Yourself with Timeless Beauty",
//     image: modelBanner,
//     link: "/collections",
//   },
//   {
//     id: 2,
//     title: "Exquisite Necklaces",
//     subtitle: "Temple & Traditional Designs",
//     image: necklacesBanner,
//     link: "/category/necklaces",
//   },
//   {
//     id: 3,
//     title: "Traditional Earrings",
//     subtitle: "Jhumkas & Chandbalis",
//     image: earringsBanner,
//     link: "/category/earrings",
//   },
//   {
//     id: 4,
//     title: "Elegant Bangles",
//     subtitle: "Handcrafted Temple Designs",
//     image: banglesBanner,
//     link: "/category/bangles",
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#f8efe7] py-6 md:py-12">
//       <div className="container mx-auto px-4">

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
//           >
//             {/* TEXT */}
//             <div className="max-w-lg text-left">
//               <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4b2e2b] mb-3">
//                 {slides[current].title}
//               </h2>

//               <p className="text-base md:text-lg text-[#6b3f3a] mb-5">
//                 {slides[current].subtitle}
//               </p>

//               <Link to={slides[current].link}>
//                 <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded shadow">
//                   Shop Now
//                 </Button>
//               </Link>
//             </div>

//             {/* IMAGE */}
//             <div className="w-full md:w-[45%] flex justify-center">
//               <img
//                 src={slides[current].image}
//                 alt="Banner"
//                 className="
//                   max-h-[300px] md:max-h-[420px]
//                   w-auto
//                   object-contain
//                   drop-shadow-lg
//                 "
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* DOTS */}
//         <div className="flex justify-center gap-2 mt-6">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === current
//                   ? "w-6 bg-[#7a3e2e]"
//                   : "w-2 bg-[#7a3e2e]/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // HERO IMAGES
// import modelBanner from "@/assets/hero/model-banner-square1.jpg"; // NEW IMAGE
// import necklacesBanner from "@/assets/hero/necklaces-banner.jpg";
// import earringsBanner from "@/assets/hero/earrings-banner.jpg";
// import banglesBanner from "@/assets/hero/bangles-banner.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "Elegance You Can Wear",
//     subtitle: "Adorn Yourself with Timeless Beauty",
//     image: modelBanner,
//     link: "/collections",
//   },
//   {
//     id: 2,
//     title: "Exquisite Necklaces",
//     subtitle: "Temple & Traditional Designs",
//     image: necklacesBanner,
//     link: "/category/necklaces",
//   },
//   {
//     id: 3,
//     title: "Traditional Earrings",
//     subtitle: "Jhumkas & Chandbalis",
//     image: earringsBanner,
//     link: "/category/earrings",
//   },
//   {
//     id: 4,
//     title: "Elegant Bangles",
//     subtitle: "Handcrafted Temple Designs",
//     image: banglesBanner,
//     link: "/category/bangles",
//   },
// ];

// export function HeroCarousel() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="bg-[#f8efe7] py-6 md:py-12">
//       <div className="container mx-auto px-4">

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
//           >
//             {/* TEXT */}
//             <div className="max-w-lg text-left">
//               <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4b2e2b] mb-3">
//                 {slides[current].title}
//               </h2>

//               <p className="text-base md:text-lg text-[#6b3f3a] mb-5">
//                 {slides[current].subtitle}
//               </p>

//               <Link to={slides[current].link}>
//                 <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded shadow">
//                   Shop Now
//                 </Button>
//               </Link>
//             </div>

//             {/* IMAGE */}
//             <div className="w-full md:w-[45%] flex justify-center">
//               <img
//                 src={slides[current].image}
//                 alt="Banner"
//                 className="
//                   max-h-[300px] md:max-h-[420px]
//                   w-auto
//                   object-contain
//                   drop-shadow-lg
//                 "
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* DOTS */}
//         <div className="flex justify-center gap-2 mt-6">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === current
//                   ? "w-6 bg-[#7a3e2e]"
//                   : "w-2 bg-[#7a3e2e]/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import axios from "axios";

// DEFAULT FALLBACK BANNERS (your current ones)
import modelBanner from "@/assets/hero/model-banner-square1.jpg";
import necklacesBanner from "@/assets/hero/necklaces-banner.jpg";
import earringsBanner from "@/assets/hero/earrings-banner.jpg";
import banglesBanner from "@/assets/hero/bangles-banner.jpg";

const DEFAULT_SLIDES = [
  {
    id: 1,
    title: "Elegance You Can Wear",
    subtitle: "Adorn Yourself with Timeless Beauty",
    image: modelBanner,
    link: "/collections",
  },
  {
    id: 2,
    title: "Exquisite Necklaces",
    subtitle: "Temple & Traditional Designs",
    image: necklacesBanner,
    link: "/category/necklaces",
  },
  {
    id: 3,
    title: "Traditional Earrings",
    subtitle: "Jhumkas & Chandbalis",
    image: earringsBanner,
    link: "/category/earrings",
  },
  {
    id: 4,
    title: "Elegant Bangles",
    subtitle: "Handcrafted Temple Designs",
    image: banglesBanner,
    link: "/category/bangles",
  },
];

export function HeroCarousel() {
  const [slides, setSlides] = useState<any[]>(DEFAULT_SLIDES);
  const [current, setCurrent] = useState(0);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  // Fetch banners from backend
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/auth/banners/`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setSlides(res.data);
          setCurrent(0);
        }
      })
      .catch(() => {});
  }, []);

  // Auto slide
  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  return (
    <section className="bg-[#f8efe7] py-6 md:py-12">
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-6"
          >
            {/* TEXT */}
            <div className="max-w-lg text-left">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#4b2e2b] mb-3">
                {slides[current].title}
              </h2>

              <p className="text-base md:text-lg text-[#6b3f3a] mb-5">
                {slides[current].subtitle}
              </p>

              <Link to={slides[current].link}>
                <Button className="bg-[#7a3e2e] hover:bg-[#5f2f24] text-white px-7 py-4 rounded shadow">
                  Shop Now
                </Button>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="w-full md:w-[45%] flex justify-center">
              <img
                src={slides[current].image}
                alt="Banner"
                className="max-h-[300px] md:max-h-[420px] w-auto object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-[#7a3e2e]" : "w-2 bg-[#7a3e2e]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
