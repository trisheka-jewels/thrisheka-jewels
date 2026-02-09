// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const isDarkMode = document.documentElement.classList.contains('dark');
//     setIsDark(isDarkMode);
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   return (
//     <header
//       className={cn(
//         'fixed top-[36px] left-0 right-0 z-50 transition-all duration-300',
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
//           : 'bg-background/80 backdrop-blur-sm py-5'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         {/* Logo + Brand Name */}
//         <Link to="/" className="flex items-center gap-2 md:gap-3">
//           <img 
//             src={logo} 
//             alt="Thrisheka Jewels" 
//             className="h-8 md:h-10 w-auto object-contain"
//           />
//           <span className="text-lg md:text-2xl font-heading font-semibold text-primary">
//             Thrisheka <span className="text-foreground">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-primary relative py-2',
//                 location.pathname === link.href
//                   ? 'text-primary'
//                   : 'text-foreground/80'
//               )}
//             >
//               {link.name}
//               {location.pathname === link.href && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleTheme}
//             className="rounded-full"
//           >
//             {isDark ? (
//               <Sun className="h-5 w-5 text-primary" />
//             ) : (
//               <Moon className="h-5 w-5" />
//             )}
//           </Button>

//           {/* Cart */}
//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 <Link to="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
//                   <img 
//                     src={logo} 
//                     alt="Thrisheka Jewels" 
//                     className="h-7 w-auto object-contain"
//                   />
//                   <span className="text-lg font-heading font-semibold text-primary">
//                     Thrisheka <span className="text-foreground">Jewels</span>
//                   </span>
//                 </Link>
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       'text-lg font-medium transition-colors hover:text-primary',
//                       location.pathname === link.href
//                         ? 'text-primary'
//                         : 'text-foreground/80'
//                     )}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   return (
//     <header
//       className={cn(
//         'fixed top-[36px] left-0 right-0 z-50 transition-all duration-300',
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
//           : 'bg-background/80 backdrop-blur-sm py-5'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">

//         {/* LOGO + BRAND */}
//         <Link to="/" className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-12 md:h-16 w-auto object-contain drop-shadow-lg"
//           />
//           <span className="text-2xl md:text-4xl font-heading font-bold tracking-wide text-primary drop-shadow">
//             Thrisheka <span className="text-foreground">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-primary relative py-2',
//                 location.pathname === link.href
//                   ? 'text-primary'
//                   : 'text-foreground/80'
//               )}
//             >
//               {link.name}
//               {location.pathname === link.href && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
//             {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5" />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => setIsOpen(false)}>
//                   <img
//                     src={logo}
//                     alt="Thrisheka Jewels"
//                     className="h-12 w-auto object-contain"
//                   />
//                   <span className="text-xl font-heading font-bold text-primary">
//                     Thrisheka <span className="text-foreground">Jewels</span>
//                   </span>
//                 </Link>

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       'text-lg font-medium transition-colors hover:text-primary',
//                       location.pathname === link.href
//                         ? 'text-primary'
//                         : 'text-foreground/80'
//                     )}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   return (
//     <header
//       className={cn(
//         'sticky top-0 z-50 transition-all duration-300',
//         isScrolled
//           ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
//           : 'bg-transparent py-4'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">

//         {/* Brand */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-11 md:h-14 object-contain"
//           />
//           <span className="text-xl md:text-3xl font-heading font-bold tracking-wide text-[#b8860b]">
//             Thrisheka <span className="text-black">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition hover:text-[#b8860b]',
//                 location.pathname === link.href
//                   ? 'text-[#b8860b]'
//                   : 'text-black/80'
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={toggleTheme}>
//             {isDark ? <Sun /> : <Moon />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#b8860b] text-white text-xs flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="mt-8 space-y-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="block text-lg font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   return (
//     <header
//       className={cn(
//         // NOT fixed → pushes content down
//         'relative z-40 w-full transition-all duration-300',
//         isScrolled
//           ? 'bg-background shadow-md py-4'
//           : 'bg-background py-6'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">

//         {/* LOGO + BRAND */}
//         <Link to="/" className="flex items-center gap-5">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"
//           />
//           <span className="text-3xl md:text-5xl font-heading font-bold tracking-wide text-primary">
//             Thrisheka <span className="text-foreground">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-10">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-base font-medium transition-colors hover:text-primary',
//                 location.pathname === link.href
//                   ? 'text-primary'
//                   : 'text-foreground/80'
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" onClick={toggleTheme}>
//             {isDark ? <Sun /> : <Moon />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="text-lg font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//   };

//   return (
//     <header className="sticky top-[36px] z-40 bg-white shadow-sm">
//       {/* fixed height */}
//       <div className="h-[88px] container mx-auto px-4 flex items-center justify-between">

//         {/* Logo + Brand */}
//         <Link to="/" className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-16 w-auto object-contain"
//           />
//           <span className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-[#b8860b]">
//             Thrisheka <span className="text-black">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition hover:text-[#b8860b]',
//                 location.pathname === link.href
//                   ? 'text-[#b8860b]'
//                   : 'text-black/80'
//               )}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={toggleTheme}>
//             {isDark ? <Sun /> : <Moon />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#b8860b] text-white text-xs flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="mt-8 space-y-6">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className="block text-lg font-medium"
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   return (
//     <header
//       className={cn(
//         // make header push content (no overlap)
//         'sticky top-[36px] left-0 right-0 z-50 transition-all duration-300',
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
//           : 'bg-background/90 backdrop-blur-sm py-4'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">

//         {/* Logo + Brand Name (BIGGER) */}
//         <Link to="/" className="flex items-center gap-3 md:gap-4">
//           <img 
//             src={logo} 
//             alt="Thrisheka Jewels" 
//             className="h-12 md:h-14 w-auto object-contain"
//           />
//           <span className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-primary">
//             Thrisheka <span className="text-foreground">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-primary relative py-2',
//                 location.pathname === link.href
//                   ? 'text-primary'
//                   : 'text-foreground/80'
//               )}
//             >
//               {link.name}
//               {location.pathname === link.href && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-3">
//           {/* Theme Toggle */}
//           <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
//             {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5" />}
//           </Button>

//           {/* Cart */}
//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => setIsOpen(false)}>
//                   <img 
//                     src={logo} 
//                     alt="Thrisheka Jewels" 
//                     className="h-10 w-auto object-contain"
//                   />
//                   <span className="text-xl font-heading font-bold text-primary">
//                     Thrisheka <span className="text-foreground">Jewels</span>
//                   </span>
//                 </Link>
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       'text-lg font-medium transition-colors hover:text-primary',
//                       location.pathname === link.href
//                         ? 'text-primary'
//                         : 'text-foreground/80'
//                     )}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   return (
//     <header
//       className={cn(
//         'sticky top-[36px] left-0 right-0 z-50 transition-all duration-300 border-b border-border/40',
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-md shadow-sm'
//           : 'bg-white/85 backdrop-blur-sm'
//       )}
//     >
//       <div className="h-[84px] container mx-auto px-4 flex items-center justify-between">

//         {/* Logo + Brand */}
//         <Link to="/" className="flex items-center gap-4">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-14 md:h-16 w-auto object-contain drop-shadow-sm"
//           />
//           <span className="text-3xl md:text-4xl font-heading font-bold tracking-wide text-[#b8860b]">
//             Thrisheka <span className="text-black">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-[#b8860b] relative py-2',
//                 location.pathname === link.href
//                   ? 'text-[#b8860b]'
//                   : 'text-black/80'
//               )}
//             >
//               {link.name}
//               {location.pathname === link.href && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b8860b] rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
//             {isDark ? <Sun className="h-5 w-5 text-[#b8860b]" /> : <Moon className="h-5 w-5" />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#b8860b] text-white text-xs flex items-center justify-center font-medium">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>

//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => setIsOpen(false)}>
//                   <img
//                     src={logo}
//                     alt="Thrisheka Jewels"
//                     className="h-12 w-auto object-contain"
//                   />
//                   <span className="text-xl font-heading font-bold text-[#b8860b]">
//                     Thrisheka <span className="text-black">Jewels</span>
//                   </span>
//                 </Link>

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       'text-lg font-medium transition-colors hover:text-[#b8860b]',
//                       location.pathname === link.href
//                         ? 'text-[#b8860b]'
//                         : 'text-black/80'
//                     )}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useCart } from '@/hooks/useCart';
// import { cn } from '@/lib/utils';
// import logo from '@/assets/logo.png';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Collections', href: '/collections' },
//   { name: 'About Us', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const { itemCount } = useCart();

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const isDarkMode = document.documentElement.classList.contains('dark');
//     setIsDark(isDarkMode);
//   }, []);

//   const toggleTheme = () => {
//     const newIsDark = !isDark;
//     setIsDark(newIsDark);
//     document.documentElement.classList.toggle('dark', newIsDark);
//     localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   return (
//     <header
//       className={cn(
//         'fixed top-[36px] left-0 right-0 z-50 transition-all duration-300',
//         isScrolled
//           ? 'bg-background/95 backdrop-blur-md shadow-md py-3'
//           : 'bg-background/80 backdrop-blur-sm py-5'
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
        
//         {/* Logo + Brand */}
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src={logo}
//             alt="Thrisheka Jewels"
//             className="h-12 md:h-16 w-auto object-contain"
//           />
//           <span className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-primary">
//             Thrisheka <span className="text-foreground">Jewels</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className={cn(
//                 'text-sm font-medium transition-colors hover:text-primary relative py-2',
//                 location.pathname === link.href
//                   ? 'text-primary'
//                   : 'text-foreground/80'
//               )}
//             >
//               {link.name}
//               {location.pathname === link.href && (
//                 <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Right */}
//         <div className="flex items-center gap-3">
//           <Button variant="ghost" size="icon" onClick={toggleTheme}>
//             {isDark ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5" />}
//           </Button>

//           <Link to="/cart">
//             <Button variant="ghost" size="icon" className="relative rounded-full">
//               <ShoppingCart className="h-5 w-5" />
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
//                   {itemCount}
//                 </span>
//               )}
//             </Button>
//           </Link>

//           {/* Mobile */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon" className="rounded-full">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-72">
//               <div className="flex flex-col gap-6 mt-8">
//                 <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => setIsOpen(false)}>
//                   <img
//                     src={logo}
//                     alt="Thrisheka Jewels"
//                     className="h-12 w-auto object-contain"
//                   />
//                   <span className="text-2xl font-heading font-bold tracking-wide text-primary">
//                     Thrisheka <span className="text-foreground">Jewels</span>
//                   </span>
//                 </Link>

//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       'text-lg font-medium transition-colors hover:text-primary',
//                       location.pathname === link.href
//                         ? 'text-primary'
//                         : 'text-foreground/80'
//                     )}
//                   >
//                     {link.name}
//                   </Link>
//                 ))}
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <header
      className={cn(
        'fixed top-[36px] left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-2'
          : 'bg-background/80 backdrop-blur-sm py-3'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Thrisheka Jewels"
            className="h-10 md:h-14 w-auto object-contain"
          />
          <span className="text-xl md:text-2xl font-heading font-bold tracking-wide text-primary">
            Thrisheka <span className="text-foreground">Jewels</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-1',
                location.pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground/80'
              )}
            >
              {link.name}
              {location.pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <ShoppingCart className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-[10px] flex items-center justify-center font-medium">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-5 mt-8">
                <Link to="/" className="flex items-center gap-3 mb-4" onClick={() => setIsOpen(false)}>
                  <img
                    src={logo}
                    alt="Thrisheka Jewels"
                    className="h-12 w-auto object-contain"
                  />
                  <span className="text-xl font-heading font-bold text-primary">
                    Thrisheka <span className="text-foreground">Jewels</span>
                  </span>
                </Link>

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary',
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
