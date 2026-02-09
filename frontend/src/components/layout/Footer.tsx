// import { Link } from 'react-router-dom';
// import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// export function Footer() {
//   return (
//     <footer className="bg-secondary/50 border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="space-y-4">
//             <h2 className="text-2xl font-heading font-semibold text-primary">
//               Thrisheka <span className="text-foreground">Jewels</span>
//             </h2>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Exquisite handcrafted South Indian jewellery that celebrates tradition and elegance.
//             </p>
//             {/* Social Media */}
//             <div className="flex gap-3 pt-2">
//               <a
//                 href="https://instagram.com/thrishekajewels"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>
//               <a
//                 href="https://wa.me/917411716118"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
//               >
//                 <MessageCircle className="h-5 w-5 text-green-600 hover:text-white" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
//             <ul className="space-y-2">
//               {['Home', 'Collections', 'About Us', 'Contact'].map((link) => (
//                 <li key={link}>
//                   <Link
//                     to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
//                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
//                 <div>
//                   <p>8105840438</p>
//                   <p>7411716118</p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
//                 <span>tuglaksuma@gmail.com</span>
//               </li>
//               <li className="flex items-start gap-3 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
//                 <span>
//                   Ramanjinaya Nagar, Behind Indian Bank,<br />
//                   Belgal Cross, Ballari, Karnataka
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Business Hours & WhatsApp */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Business Hours</h3>
//             <div className="flex items-start gap-3 text-sm text-muted-foreground">
//               <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
//               <div>
//                 <p className="font-medium text-foreground">Monday – Saturday</p>
//                 <p>11:00 AM – 10:00 PM</p>
//                 <p className="mt-2 font-medium text-foreground">Sunday</p>
//                 <p>Holiday</p>
//               </div>
//             </div>
            
//             {/* WhatsApp CTA */}
//             <div className="pt-2">
//               <a
//                 href="https://wa.me/917411716118"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                   <MessageCircle className="h-4 w-4 mr-2" />
//                   Chat with Us
//                 </Button>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Thrisheka Jewels. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm text-muted-foreground">
//             <Link to="/privacy" className="hover:text-primary transition-colors">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="hover:text-primary transition-colors">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Instagram,
//   MessageCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// export function Footer() {
//   return (
//     <footer className="bg-secondary/50 border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="Thrisheka Jewels Logo"
//                 className="h-12 w-12 object-contain"
//               />
//               <h2 className="text-2xl font-heading font-semibold text-primary">
//                 Thrisheka <span className="text-foreground">Jewels</span>
//               </h2>
//             </div>

//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Exquisite handcrafted South Indian jewellery that celebrates
//               tradition and elegance.
//             </p>

//             {/* Social */}
//             <div className="flex gap-3 pt-2">
//               <a
//                 href="https://instagram.com/thrishekajewels"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://wa.me/917411716118"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
//               >
//                 <MessageCircle className="h-5 w-5 text-green-600" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Home", "Collections", "About Us", "Contact"].map((link) => (
//                 <li key={link}>
//                   <Link
//                     to={
//                       link === "Home"
//                         ? "/"
//                         : `/${link.toLowerCase().replace(" ", "-")}`
//                     }
//                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4 text-primary" />
//                 <div>
//                   <p>8105840438</p>
//                   <p>7411716118</p>
//                 </div>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4 text-primary" />
//                 <span>tuglaksuma@gmail.com</span>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 text-primary" />
//                 <span>
//                   Ramanjinaya Nagar, Behind Indian Bank,
//                   <br />
//                   Belgal Cross, Ballari, Karnataka
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Hours */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">
//               Business Hours
//             </h3>

//             <div className="flex gap-3 text-sm text-muted-foreground">
//               <Clock className="h-4 w-4 text-primary" />
//               <div>
//                 <p className="font-medium text-foreground">
//                   Monday – Saturday
//                 </p>
//                 <p>11:00 AM – 10:00 PM</p>
//                 <p className="mt-2 font-medium text-foreground">Sunday</p>
//                 <p>Holiday</p>
//               </div>
//             </div>

//             <a
//               href="https://wa.me/917411716118"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                 <MessageCircle className="h-4 w-4 mr-2" />
//                 Chat with Us
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Thrisheka Jewels. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm text-muted-foreground">
//             <Link to="/privacy" className="hover:text-primary">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="hover:text-primary">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Instagram,
//   MessageCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// export function Footer() {
//   return (
//     <footer className="bg-secondary/50 border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <img
//                 src={logo}
//                 alt="Thrisheka Jewels Logo"
//                 className="h-20 w-20 object-contain drop-shadow-lg"
//               />
//               <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-primary drop-shadow">
//                 Thrisheka <span className="text-foreground">Jewels</span>
//               </h2>
//             </div>

//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Exquisite handcrafted South Indian jewellery that celebrates
//               tradition and elegance.
//             </p>

//             {/* Social */}
//             <div className="flex gap-3 pt-2">
//               <a
//                 href="https://instagram.com/thrishekajewels"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://wa.me/917411716118"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
//               >
//                 <MessageCircle className="h-5 w-5 text-green-600" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Home", "Collections", "About Us", "Contact"].map((link) => (
//                 <li key={link}>
//                   <Link
//                     to={
//                       link === "Home"
//                         ? "/"
//                         : `/${link.toLowerCase().replace(" ", "-")}`
//                     }
//                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4 text-primary" />
//                 <div>
//                   <p>8105840438</p>
//                   <p>7411716118</p>
//                 </div>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4 text-primary" />
//                 <span>tuglaksuma@gmail.com</span>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 text-primary" />
//                 <span>
//                   Ramanjinaya Nagar, Behind Indian Bank,
//                   <br />
//                   Belgal Cross, Ballari, Karnataka
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Hours */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">
//               Business Hours
//             </h3>

//             <div className="flex gap-3 text-sm text-muted-foreground">
//               <Clock className="h-4 w-4 text-primary" />
//               <div>
//                 <p className="font-medium text-foreground">
//                   Monday – Saturday
//                 </p>
//                 <p>11:00 AM – 10:00 PM</p>
//                 <p className="mt-2 font-medium text-foreground">Sunday</p>
//                 <p>Holiday</p>
//               </div>
//             </div>

//             <a
//               href="https://wa.me/917411716118"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                 <MessageCircle className="h-4 w-4 mr-2" />
//                 Chat with Us
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Thrisheka Jewels. All rights reserved.
//           </p>
//           <div className="flex gap-6 text-sm text-muted-foreground">
//             <Link to="/privacy" className="hover:text-primary">
//               Privacy Policy
//             </Link>
//             <Link to="/terms" className="hover:text-primary">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { Link } from "react-router-dom";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Instagram,
//   MessageCircle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// export function Footer() {
//   return (
//     <footer className="bg-secondary/50 border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-4">
//               <img
//                 src={logo}
//                 alt="Thrisheka Jewels Logo"
//                 className="h-20 w-20 object-contain drop-shadow-lg"
//               />
//               <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-primary drop-shadow">
//                 Thrisheka <span className="text-foreground">Jewels</span>
//               </h2>
//             </div>

//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Exquisite handcrafted South Indian jewellery that celebrates
//               tradition and elegance.
//             </p>

//             {/* Social */}
//             <div className="flex gap-3 pt-2">
//               <a
//                 href="https://instagram.com/thrishekajewels"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
//               >
//                 <Instagram className="h-5 w-5" />
//               </a>

//               <a
//                 href="https://wa.me/917411716118"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
//               >
//                 <MessageCircle className="h-5 w-5 text-green-600" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/collections" className="text-muted-foreground hover:text-primary text-sm">
//                   Collections
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
//             <ul className="space-y-3">
//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Phone className="h-4 w-4 text-primary" />
//                 <div>
//                   <p>8105840438</p>
//                   <p>7411716118</p>
//                 </div>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <Mail className="h-4 w-4 text-primary" />
//                 <span>tuglaksuma@gmail.com</span>
//               </li>

//               <li className="flex gap-3 text-sm text-muted-foreground">
//                 <MapPin className="h-4 w-4 text-primary" />
//                 <span>
//                   Ramanjinaya Nagar, Behind Indian Bank,
//                   <br />
//                   Belgal Cross, Ballari, Karnataka
//                 </span>
//               </li>
//             </ul>
//           </div>

//           {/* Business Hours */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-heading font-semibold">
//               Business Hours
//             </h3>

//             <div className="flex gap-3 text-sm text-muted-foreground">
//               <Clock className="h-4 w-4 text-primary" />
//               <div>
//                 <p className="font-medium text-foreground">
//                   Monday – Saturday
//                 </p>
//                 <p>11:00 AM – 10:00 PM</p>
//                 <p className="mt-2 font-medium text-foreground">Sunday</p>
//                 <p>Holiday</p>
//               </div>
//             </div>

//             <a
//               href="https://wa.me/917411716118"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                 <MessageCircle className="h-4 w-4 mr-2" />
//                 Chat with Us
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Bottom Legal Links */}
//         <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-sm text-muted-foreground">
//             © {new Date().getFullYear()} Thrisheka Jewels. All rights reserved.
//           </p>

//           <div className="flex gap-6 text-sm text-muted-foreground">
//             <Link to="/privacy-policy" className="hover:text-primary">
//               Privacy Policy
//             </Link>
//             <Link to="/terms-and-conditions" className="hover:text-primary">
//               Terms & Conditions
//             </Link>
//             <Link to="/refund-policy" className="hover:text-primary">
//               Refund / Cancellation Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Thrisheka Jewels Logo"
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
              <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-primary drop-shadow">
                Thrisheka <span className="text-foreground">Jewels</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Exquisite handcrafted South Indian jewellery that celebrates
              tradition and elegance.
            </p>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/thrishekajewels"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://wa.me/917411716118"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-green-600/10 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-green-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-muted-foreground hover:text-primary text-sm">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p>8105840438</p>
                  <p>7411716118</p>
                </div>
              </li>

              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>tuglaksuma@gmail.com</span>
              </li>

              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>
                  Ramanjinaya Nagar, Behind Indian Bank,
                  <br />
                  Belgal Cross, Ballari, Karnataka
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold">
              Business Hours
            </h3>

            <div className="flex gap-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <p className="font-medium text-foreground">
                  Monday – Saturday
                </p>
                <p>11:00 AM – 10:00 PM</p>
                <p className="mt-2 font-medium text-foreground">Sunday</p>
                <p>Holiday</p>
              </div>
            </div>

            <a
              href="https://wa.me/917411716118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat with Us
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thrisheka Jewels. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-primary">
              Refund / Cancellation Policy
            </Link>
            <Link to="/shipping-policy" className="hover:text-primary">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
