// import { motion } from 'framer-motion';

// const announcements = [
//   '✨ New Arrivals Every Week!',
//   '💎 925 Sterling Silver Guaranteed',
//   '🚚 Free Shipping on Orders Above ₹2000',
//   '🎁 Special Discounts for First-Time Buyers',
//   '📞 WhatsApp Support: +91 7794941645',
// ];

// export function AnnouncementBar() {
//   return (
//     <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden">
//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{
//           x: ['0%', '-50%'],
//         }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: 'loop',
//             duration: 20,
//             ease: 'linear',
//           },
//         }}
//       >
//         {/* Double the announcements for seamless loop */}
//         {[...announcements, ...announcements].map((text, index) => (
//           <span
//             key={index}
//             className="mx-8 text-sm font-medium"
//           >
//             {text}
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementBar() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (res.data && res.data.length > 0) {
//           const texts = res.data.map((item: any) => item.title || item.message);
//           setAnnouncements(texts);
//         }
//       })
//       .catch(() => {
//         // keep default if API fails
//       });
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden">
//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 20,
//             ease: "linear",
//           },
//         }}
//       >
//         {[...announcements, ...announcements].map((text, index) => (
//           <span key={index} className="mx-8 text-sm font-medium">
//             {text}
//           </span>
//         ))}
//       </motion.div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementSlider() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
//   const [current, setCurrent] = useState(0);

//   // Fetch from backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (res.data?.length) {
//           const texts = res.data.map((a: any) => a.title || a.message);
//           setAnnouncements(texts);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % announcements.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, [announcements]);

//   return (
//     <div className="relative w-full bg-primary text-primary-foreground overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {announcements.map((text, idx) => (
//           <div
//             key={idx}
//             className="min-w-full py-2 flex items-center justify-center text-sm font-medium"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementSlider() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           const texts = res.data.map((a: any) => a.title || a.message);
//           setAnnouncements(texts);
//           setCurrent(0);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   useEffect(() => {
//     if (!announcements || announcements.length === 0) return;

//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % announcements.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, [announcements]);

//   if (!announcements || announcements.length === 0) return null;

//   return (
//     <div className="relative w-full bg-primary text-primary-foreground overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {announcements.map((text, idx) => (
//           <div
//             key={idx}
//             className="min-w-full py-2 flex items-center justify-center text-sm font-medium"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementBar() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
//   const [current, setCurrent] = useState(0);

//   // Fetch from backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           const texts = res.data.map((a: any) => a.title || a.message);
//           setAnnouncements(texts);
//           setCurrent(0);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     if (!announcements || announcements.length === 0) return;

//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % announcements.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, [announcements]);

//   if (!announcements || announcements.length === 0) return null;

//   return (
//     <div className="relative w-full bg-primary text-primary-foreground overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {announcements.map((text, idx) => (
//           <div
//             key={idx}
//             className="min-w-full py-2 flex items-center justify-center text-sm font-medium"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementBar() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (res.data?.length) {
//           const texts = res.data.map((a: any) => a.title || a.message);
//           setAnnouncements(texts);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   return (
//     <div className="relative w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground overflow-hidden">
//       <div className="animate-marquee whitespace-nowrap flex items-center py-2">
//         {[...announcements, ...announcements].map((text, idx) => (
//           <span
//             key={idx}
//             className="mx-10 text-sm font-semibold tracking-wide"
//           >
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementBar() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
//   const [current, setCurrent] = useState(0);

//   // Fetch announcements from backend
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           const texts = res.data.map((a: any) => a.title || a.message);
//           setAnnouncements(texts);
//           setCurrent(0);
//         }
//       })
//       .catch(() => {
//         // keep defaults
//       });
//   }, []);

//   // Auto slide
//   useEffect(() => {
//     if (!announcements || announcements.length === 0) return;

//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % announcements.length);
//     }, 3500);

//     return () => clearInterval(timer);
//   }, [announcements]);

//   if (!announcements || announcements.length === 0) return null;

//   return (
//     <div className="relative w-full bg-primary text-primary-foreground overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {announcements.map((text, idx) => (
//           <div
//             key={idx}
//             className="min-w-full py-2 flex items-center justify-center text-sm font-medium"
//           >
//             {text}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import { useEffect, useRef, useState } from "react";
// import axios from "axios";

// const DEFAULT_ANNOUNCEMENTS = [
//   "✨ New Arrivals Every Week!",
//   "💎 925 Sterling Silver Guaranteed",
//   "🚚 Free Shipping on Orders Above ₹2000",
//   "🎁 Special Discounts for First-Time Buyers",
//   "📞 WhatsApp Support: +91 7794941645",
// ];

// export function AnnouncementBar() {
//   const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const x = useRef(0);

//   // Load from API
//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => {
//         if (Array.isArray(res.data) && res.data.length > 0) {
//           setAnnouncements(res.data.map((i: any) => i.title || i.message));
//         }
//       })
//       .catch(() => {
//         console.log("Using default announcements");
//       });
//   }, []);

//   // Continuous scroll
//   useEffect(() => {
//     let frameId: number;

//     const animate = () => {
//       if (!trackRef.current) return;

//       const speed = 0.6; // 🔧 change for faster/slower
//       x.current -= speed;

//       const width = trackRef.current.scrollWidth / 2;

//       if (Math.abs(x.current) >= width) {
//         x.current = 0;
//       }

//       trackRef.current.style.transform = `translateX(${x.current}px)`;
//       frameId = requestAnimationFrame(animate);
//     };

//     frameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frameId);
//   }, [announcements]);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden">
//       <div ref={trackRef} className="flex whitespace-nowrap">
//         {[...announcements, ...announcements].map((text, index) => (
//           <span key={index} className="mx-10 text-sm font-semibold tracking-wide">
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";
import axios from "axios";

const DEFAULT_ANNOUNCEMENTS = [
  "✨ New Arrivals Every Week!",
  "💎 925 Sterling Silver Guaranteed",
  "🚚 Free Shipping on Orders Above ₹2000",
  "🎁 Special Discounts for First-Time Buyers",
  "📞 WhatsApp Support: +91 7794941645",
];

export function AnnouncementBar() {
  const [announcements, setAnnouncements] = useState<string[]>(DEFAULT_ANNOUNCEMENTS);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  // Fetch from Django API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/auth/announcements/")
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setAnnouncements(res.data.map((item: any) => item.title || item.message));
        }
      })
      .catch(() => {
        console.log("Using default announcements");
      });
  }, []);

  // Continuous ticker animation
  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!trackRef.current) return;

      const speed = 0.6; // 🔧 change for faster/slower
      x.current -= speed;

      const width = trackRef.current.scrollWidth / 2;

      if (Math.abs(x.current) >= width) {
        x.current = 0;
      }

      trackRef.current.style.transform = `translateX(${x.current}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [announcements]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden">
      <div ref={trackRef} className="flex whitespace-nowrap">
        {[...announcements, ...announcements].map((text, index) => (
          <span key={index} className="mx-10 text-sm font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
