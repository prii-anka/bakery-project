import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";
import { CreditCard, Truck, User } from "lucide-react";

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface PaymentDetails {
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

export function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"details" | "payment">("details");
  const [processing, setProcessing] = useState(false);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">(
    "delivery"
  );

  if (items.length === 0) {
    navigate("/shop");
    return null;
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create order data
    const orderData = {
      orderNumber: `BBM${Date.now()}`,
      customer: customerDetails,
      payment: {
        lastFour: paymentDetails.cardNumber.slice(-4),
        method: "Credit Card",
      },
      items: items,
      deliveryMethod,
      subtotal: getTotalPrice(),
      tax: getTotalPrice() * 0.08,
      total: getTotalPrice() * 1.08,
      date: new Date().toISOString(),
    };

    // Store in sessionStorage for confirmation page
    sessionStorage.setItem("lastOrder", JSON.stringify(orderData));

    // Clear cart and navigate to confirmation
    clearCart();
    navigate("/order-confirmation");
  };

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.08;
  const deliveryFee = deliveryMethod === "delivery" ? 5.0 : 0;
  const total = subtotal + tax + deliveryFee;

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Checkout
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div
              className={`flex items-center ${
                step === "details" ? "text-white" : "text-white/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step === "details" ? "bg-white text-[#95461a]" : "bg-white/30"
                }`}
              >
                1
              </div>
              <span>Details</span>
            </div>
            <div className="flex-1 h-0.5 bg-white/30"></div>
            <div
              className={`flex items-center ${
                step === "payment" ? "text-white" : "text-white/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  step === "payment" ? "bg-white text-[#95461a]" : "bg-white/30"
                }`}
              >
                2
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2">
              {step === "details" ? (
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <User className="text-[#95461a]" size={28} />
                    <h2 className="text-3xl text-[#95461a]">Your Details</h2>
                  </div>

                  {/* Delivery Method */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 text-[#2e211b]">
                      Delivery Method
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("delivery")}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          deliveryMethod === "delivery"
                            ? "border-[#95461a] bg-[#95461a]/5"
                            : "border-[#2e211b]/20 hover:border-[#95461a]/50"
                        }`}
                      >
                        <Truck className="mx-auto mb-2 text-[#95461a]" size={24} />
                        <div className="text-center">
                          <div className="text-[#2e211b]">Delivery</div>
                          <div className="text-sm text-[#2e211b]/60">$5.00</div>
                        </div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryMethod("pickup")}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          deliveryMethod === "pickup"
                            ? "border-[#95461a] bg-[#95461a]/5"
                            : "border-[#2e211b]/20 hover:border-[#95461a]/50"
                        }`}
                      >
                        <div className="w-6 h-6 mx-auto mb-2 text-[#95461a]">
                          🏪
                        </div>
                        <div className="text-center">
                          <div className="text-[#2e211b]">Pickup</div>
                          <div className="text-sm text-[#2e211b]/60">Free</div>
                        </div>
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleDetailsSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block mb-2 text-[#2e211b]">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerDetails.firstName}
                          onChange={(e) =>
                            setCustomerDetails({
                              ...customerDetails,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-[#2e211b]">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerDetails.lastName}
                          onChange={(e) =>
                            setCustomerDetails({
                              ...customerDetails,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-[#2e211b]">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={customerDetails.email}
                        onChange={(e) =>
                          setCustomerDetails({
                            ...customerDetails,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-[#2e211b]">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerDetails.phone}
                        onChange={(e) =>
                          setCustomerDetails({
                            ...customerDetails,
                            phone: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                      />
                    </div>

                    {deliveryMethod === "delivery" && (
                      <>
                        <div className="mb-4">
                          <label className="block mb-2 text-[#2e211b]">
                            Street Address *
                          </label>
                          <input
                            type="text"
                            required
                            value={customerDetails.address}
                            onChange={(e) =>
                              setCustomerDetails({
                                ...customerDetails,
                                address: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <label className="block mb-2 text-[#2e211b]">
                              City *
                            </label>
                            <input
                              type="text"
                              required
                              value={customerDetails.city}
                              onChange={(e) =>
                                setCustomerDetails({
                                  ...customerDetails,
                                  city: e.target.value,
                                })
                              }
                              className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                            />
                          </div>
                          <div>
                            <label className="block mb-2 text-[#2e211b]">
                              State *
                            </label>
                            <input
                              type="text"
                              required
                              value={customerDetails.state}
                              onChange={(e) =>
                                setCustomerDetails({
                                  ...customerDetails,
                                  state: e.target.value,
                                })
                              }
                              className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block mb-2 text-[#2e211b]">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            required
                            value={customerDetails.zip}
                            onChange={(e) =>
                              setCustomerDetails({
                                ...customerDetails,
                                zip: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                          />
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="text-[#95461a]" size={28} />
                    <h2 className="text-3xl text-[#95461a]">Payment Details</h2>
                  </div>

                  <form onSubmit={handlePaymentSubmit}>
                    <div className="mb-4">
                      <label className="block mb-2 text-[#2e211b]">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={paymentDetails.cardNumber}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, "");
                          const formatted = value
                            .match(/.{1,4}/g)
                            ?.join(" ") || value;
                          setPaymentDetails({
                            ...paymentDetails,
                            cardNumber: formatted,
                          });
                        }}
                        className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block mb-2 text-[#2e211b]">
                        Cardholder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={paymentDetails.cardName}
                        onChange={(e) =>
                          setPaymentDetails({
                            ...paymentDetails,
                            cardName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div>
                        <label className="block mb-2 text-[#2e211b]">
                          Month *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM"
                          maxLength={2}
                          value={paymentDetails.expiryMonth}
                          onChange={(e) =>
                            setPaymentDetails({
                              ...paymentDetails,
                              expiryMonth: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-[#2e211b]">
                          Year *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="YY"
                          maxLength={2}
                          value={paymentDetails.expiryYear}
                          onChange={(e) =>
                            setPaymentDetails({
                              ...paymentDetails,
                              expiryYear: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-[#2e211b]">
                          CVV *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          maxLength={3}
                          value={paymentDetails.cvv}
                          onChange={(e) =>
                            setPaymentDetails({
                              ...paymentDetails,
                              cvv: e.target.value,
                            })
                          }
                          className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("details")}
                        className="flex-1 bg-white border-2 border-[#95461a] text-[#95461a] hover:bg-[#f5ede3] px-8 py-3 rounded-full transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={processing}
                        className="flex-1 bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors disabled:opacity-50"
                      >
                        {processing ? "Processing..." : "Complete Order"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-lg sticky top-24">
                <h2 className="text-2xl mb-6 text-[#95461a]">Order Summary</h2>
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[#2e211b]">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="text-[#2e211b]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#2e211b]/20 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#2e211b]/70">Subtotal</span>
                    <span className="text-[#2e211b]">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2e211b]/70">Tax (8%)</span>
                    <span className="text-[#2e211b]">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#2e211b]/70">
                      {deliveryMethod === "delivery" ? "Delivery" : "Pickup"}
                    </span>
                    <span className="text-[#2e211b]">
                      ${deliveryFee.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t border-[#2e211b]/20 pt-3">
                    <div className="flex justify-between text-xl">
                      <span className="text-[#2e211b]">Total</span>
                      <span className="text-[#95461a]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
