import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { CheckCircle, Download, Mail } from "lucide-react";

interface Order {
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  payment: {
    lastFour: string;
    method: string;
  };
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  deliveryMethod: "delivery" | "pickup";
  subtotal: number;
  tax: number;
  total: number;
  date: string;
}

export function OrderConfirmation() {
  const [order, setOrder] = useState<Order | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = sessionStorage.getItem("lastOrder");
    if (!orderData) {
      navigate("/shop");
      return;
    }

    const parsedOrder = JSON.parse(orderData);
    setOrder(parsedOrder);
  }, [navigate]);

  if (!order) {
    return null;
  }

  const estimatedTime =
    order.deliveryMethod === "delivery" ? "45-60 minutes" : "20-30 minutes";

  return (
    <div className="min-h-screen bg-[#f5ede3]">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full mb-6">
              <CheckCircle size={48} />
            </div>
            <h1
              className="text-5xl md:text-6xl mb-4 text-[#95461a]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Order Confirmed!
            </h1>
            <p className="text-xl text-[#2e211b]/70 mb-2">
              Thank you for your order, {order.customer.firstName}!
            </p>
            <p className="text-lg text-[#2e211b]/60">
              Order Number: <span className="text-[#95461a]">{order.orderNumber}</span>
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <div className="flex justify-between items-start mb-6 pb-6 border-b border-[#2e211b]/10">
              <div>
                <h2 className="text-2xl mb-2 text-[#95461a]">Order Details</h2>
                <p className="text-[#2e211b]/70">
                  {new Date(order.date).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="text-right">
                <div className="inline-block bg-[#95461a]/10 text-[#95461a] px-4 py-2 rounded-full">
                  {order.deliveryMethod === "delivery" ? "Delivery" : "Pickup"}
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="mb-6">
              <h3 className="text-xl mb-4 text-[#2e211b]">Items</h3>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span className="text-[#2e211b]">
                      {item.name} <span className="text-[#2e211b]/60">x {item.quantity}</span>
                    </span>
                    <span className="text-[#2e211b]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-[#2e211b]/10 pt-4 space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-[#2e211b]/70">Subtotal</span>
                <span className="text-[#2e211b]">${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2e211b]/70">Tax</span>
                <span className="text-[#2e211b]">${order.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#2e211b]/70">
                  {order.deliveryMethod === "delivery" ? "Delivery Fee" : "Pickup"}
                </span>
                <span className="text-[#2e211b]">
                  ${order.deliveryMethod === "delivery" ? "5.00" : "0.00"}
                </span>
              </div>
              <div className="border-t border-[#2e211b]/10 pt-3">
                <div className="flex justify-between text-xl">
                  <span className="text-[#2e211b]">Total Paid</span>
                  <span className="text-[#95461a]">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer & Payment Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#2e211b]/10 pt-6">
              <div>
                <h3 className="text-lg mb-3 text-[#95461a]">Contact Information</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-[#2e211b]">{order.customer.email}</p>
                  <p className="text-[#2e211b]">{order.customer.phone}</p>
                </div>
              </div>

              {order.deliveryMethod === "delivery" && order.customer.address && (
                <div>
                  <h3 className="text-lg mb-3 text-[#95461a]">Delivery Address</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-[#2e211b]">{order.customer.address}</p>
                    <p className="text-[#2e211b]">
                      {order.customer.city}, {order.customer.state} {order.customer.zip}
                    </p>
                  </div>
                </div>
              )}

              {order.deliveryMethod === "pickup" && (
                <div>
                  <h3 className="text-lg mb-3 text-[#95461a]">Pickup Location</h3>
                  <div className="space-y-1 text-sm">
                    <p className="text-[#2e211b]">Baker by Maker</p>
                    <p className="text-[#2e211b]">123 Bakery Lane</p>
                    <p className="text-[#2e211b]">Sweet Town, ST 12345</p>
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-lg mb-3 text-[#95461a]">Payment Method</h3>
                <p className="text-sm text-[#2e211b]">
                  {order.payment.method} ending in {order.payment.lastFour}
                </p>
              </div>
            </div>
          </div>

          {/* Estimated Time */}
          <div className="bg-[#95461a] text-white rounded-lg p-8 text-center mb-8">
            <h3 className="text-2xl mb-2">
              Estimated {order.deliveryMethod === "delivery" ? "Delivery" : "Pickup"} Time
            </h3>
            <p className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              {estimatedTime}
            </p>
            <p className="text-sm opacity-80 mt-2">
              You'll receive a confirmation email shortly
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="flex-1 bg-white border-2 border-[#95461a] text-[#95461a] hover:bg-[#f5ede3] px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
              <Download size={20} />
              <span>Download Receipt</span>
            </button>
            <button className="flex-1 bg-white border-2 border-[#95461a] text-[#95461a] hover:bg-[#f5ede3] px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2">
              <Mail size={20} />
              <span>Email Receipt</span>
            </button>
          </div>

          {/* Checkered Pattern */}
          <div className="h-16 flex mb-8 rounded-lg overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 ${i % 2 === 0 ? "bg-[#9eb4b7]" : "bg-white"}`}
              ></div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              to="/shop"
              className="inline-block bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors mr-4"
            >
              Continue Shopping
            </Link>
            <Link
              to="/"
              className="inline-block bg-white border-2 border-[#95461a] text-[#95461a] hover:bg-[#f5ede3] px-8 py-3 rounded-full transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
