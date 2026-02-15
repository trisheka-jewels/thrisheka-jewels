// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ProductCard } from "@/components/product/ProductCard";
// import {
//   products as LOCAL_PRODUCTS,
//   categories as LOCAL_CATEGORIES,
// } from "@/data/products";
// import { cn } from "@/lib/utils";

// interface Category {
//   id?: number;
//   name: string;
//   slug: string;
// }

// interface Product {
//   id: string | number;
//   name: string;
//   price: number;
//   image: string;
//   category__slug?: string;
//   category: string;
// }

// export default function Collections() {
//   const [categories, setCategories] = useState<Category[]>([
//     { slug: "all", name: "All" },
//     ...LOCAL_CATEGORIES,
//   ]);

//   const [products, setProducts] = useState<Product[]>(LOCAL_PRODUCTS);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
//   // Fetch categories
//   useEffect(() => {
//     fetch(`${API_BASE_URL}/api/auth/categories/`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setCategories([{ slug: "all", name: "All" }, ...data]);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   // Fetch all products
//   useEffect(() => {
//     fetch(`${API_BASE_URL}/api/auth/featured-products/`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setProducts(data);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter(
//           (p) =>
//             p.category__slug === activeCategory ||
//             p.category === activeCategory,
//         );

//   return (
//     <div className="container mx-auto px-4 pb-16">
//       {/* Page Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-10"
//       >
//         <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
//           All Collections
//         </h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           Explore our complete range of handcrafted South Indian jewellery
//         </p>
//       </motion.div>

//       {/* Filter Tabs */}
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4, delay: 0.2 }}
//         className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10"
//       >
//         {categories.map((category) => (
//           <button
//             key={category.slug}
//             onClick={() => setActiveCategory(category.slug)}
//             className={cn(
//               "px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
//               activeCategory === category.slug
//                 ? "bg-primary text-primary-foreground shadow-md"
//                 : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//             )}
//           >
//             {category.name}
//           </button>
//         ))}
//       </motion.div>

//       {/* Products Grid */}
//       <motion.div
//         layout
//         className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//       >
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </motion.div>

//       {filteredProducts.length === 0 && (
//         <div className="text-center py-16">
//           <p className="text-muted-foreground">
//             No products found in this category.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// pages/Collections.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import {
  products as LOCAL_PRODUCTS,
  categories as LOCAL_CATEGORIES,
} from "@/data/products";
import { cn } from "@/lib/utils";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Category {
  id?: number;
  name: string;
  slug: string;
}

interface Product {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  discount_price?: number | null;
  is_out_of_stock?: boolean;
  image: string;
  images?: string[];
  category__slug?: string;
  category: string;
}

export default function Collections() {
  const [categories, setCategories] = useState<Category[]>([
    { slug: "all", name: "All" },
    ...LOCAL_CATEGORIES,
  ]);

  const [products, setProducts] = useState<Product[]>(LOCAL_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<"all" | "low" | "mid" | "high">("all");
  const [availability, setAvailability] = useState<"all" | "in-stock" | "out-of-stock">("all");
  const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high" | "name">("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch categories
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/auth/categories/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategories([{ slug: "all", name: "All" }, ...data]);
        }
      })
      .catch(() => {});
  }, []);

  // Fetch all products
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/auth/featured-products/`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(() => {});
  }, []);

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = products;

    // Category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (p) =>
          p.category__slug === activeCategory || p.category === activeCategory
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query)
      );
    }

    // Price range filter
    if (priceRange !== "all") {
      filtered = filtered.filter((p) => {
        const price = p.discount_price || p.price;
        if (priceRange === "low") return price < 5000;
        if (priceRange === "mid") return price >= 5000 && price < 20000;
        if (priceRange === "high") return price >= 20000;
        return true;
      });
    }

    // Availability filter
    if (availability !== "all") {
      filtered = filtered.filter((p) =>
        availability === "in-stock" ? !p.is_out_of_stock : p.is_out_of_stock
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      filtered = [...filtered].sort(
        (a, b) =>
          (a.discount_price || a.price) - (b.discount_price || b.price)
      );
    } else if (sortBy === "price-high") {
      filtered = [...filtered].sort(
        (a, b) =>
          (b.discount_price || b.price) - (a.discount_price || a.price)
      );
    } else if (sortBy === "name") {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const clearFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setPriceRange("all");
    setAvailability("all");
    setSortBy("default");
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                activeCategory === category.slug
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">
          Price Range
        </h3>
        <div className="space-y-2">
          {[
            { value: "all", label: "All Prices" },
            { value: "low", label: "Under ₹5,000" },
            { value: "mid", label: "₹5,000 - ₹20,000" },
            { value: "high", label: "Above ₹20,000" },
          ].map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="priceRange"
                value={range.value}
                checked={priceRange === range.value}
                onChange={(e) => setPriceRange(e.target.value as any)}
                className="w-4 h-4"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">
          Availability
        </h3>
        <div className="space-y-2">
          {[
            { value: "all", label: "All Products" },
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" },
          ].map((avail) => (
            <label
              key={avail.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="availability"
                value={avail.value}
                checked={availability === avail.value}
                onChange={(e) => setAvailability(e.target.value as any)}
                className="w-4 h-4"
              />
              <span className="text-sm">{avail.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div>
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="w-full px-3 py-2 rounded-md border bg-background text-sm"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Clear Filters */}
      <Button
        onClick={clearFilters}
        variant="outline"
        className="w-full"
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-4">
          All Collections
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our complete range of handcrafted South Indian jewellery
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="max-w-2xl mx-auto mb-8"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search for jewellery..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 md:py-4 rounded-full border-2 border-muted focus:border-primary outline-none transition-colors text-sm md:text-base bg-background shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </motion.div>

      <div className="flex gap-6">
        {/* Desktop Filters Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:block w-64 flex-shrink-0"
        >
          <div className="sticky top-4 bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-semibold text-lg">Filters</h2>
              <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            </div>
            <FilterContent />
          </div>
        </motion.aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Button & Results Count */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>
            <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Results Count */}
          <div className="hidden lg:block mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${priceRange}-${availability}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No products found matching your criteria.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
