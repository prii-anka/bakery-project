import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Plus, ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export function Shop() {
  const { addToCart, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [addedToCart, setAddedToCart] = useState<string | null>(null);

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 1000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1
                className="text-6xl md:text-7xl mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Order Online
              </h1>
              <p className="text-xl">Fresh baked goods delivered to your door</p>
            </div>
            <Link
              to="/cart"
              className="relative bg-[#bc8326] hover:bg-[#2e211b] px-6 py-3 rounded-full transition-colors flex items-center gap-2"
            >
              <ShoppingCart size={24} />
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-[#95461a] w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#2e211b]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-[#95461a] text-white"
                    : "bg-[#f5ede3] text-[#2e211b] hover:bg-[#bc8326] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-1 text-[#95461a]">{product.name}</h3>
                  <p className="text-sm text-[#2e211b]/60 mb-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#95461a]">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`p-2 rounded-full transition-colors ${
                        addedToCart === product.id
                          ? "bg-green-500 text-white"
                          : "bg-[#95461a] hover:bg-[#bc8326] text-white"
                      }`}
                      aria-label="Add to cart"
                    >
                      {addedToCart === product.id ? (
                        <span className="text-xs px-1">✓</span>
                      ) : (
                        <Plus size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
