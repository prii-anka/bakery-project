import { useCart } from "../context/CartContext";
import { Link } from "react-router";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export function Cart() {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#f5ede3] py-20">
        <ShoppingBag size={64} className="text-[#95461a]/30 mb-4" />
        <h2 className="text-3xl mb-4 text-[#2e211b]">Your cart is empty</h2>
        <p className="text-[#2e211b]/70 mb-8">
          Add some delicious items to get started!
        </p>
        <Link
          to="/shop"
          className="bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-6xl md:text-7xl mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Cart
          </h1>
          <p className="text-xl">Review your order before checkout</p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 shadow-lg flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl mb-1 text-[#95461a]">{item.name}</h3>
                    <p className="text-sm text-[#2e211b]/60 mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-[#2e211b]/20 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-2 hover:bg-[#f5ede3] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-[#f5ede3] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-xl text-[#95461a]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl mb-6 text-[#95461a]">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#2e211b]/70">Subtotal</span>
                    <span className="text-[#2e211b]">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2e211b]/70">Tax (8%)</span>
                    <span className="text-[#2e211b]">
                      ${(getTotalPrice() * 0.08).toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-[#2e211b]/20 pt-3">
                    <div className="flex justify-between text-xl">
                      <span className="text-[#2e211b]">Total</span>
                      <span className="text-[#95461a]">
                        ${(getTotalPrice() * 1.08).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full bg-[#95461a] hover:bg-[#bc8326] text-white text-center px-8 py-3 rounded-full transition-colors mb-3"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  to="/shop"
                  className="block w-full bg-white border-2 border-[#95461a] text-[#95461a] hover:bg-[#f5ede3] text-center px-8 py-3 rounded-full transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
