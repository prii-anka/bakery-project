import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-6xl md:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Visit Us
          </h1>
          <p className="text-xl">
            We'd love to see you at our bakery
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl mb-8 text-[#95461a]">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <MapPin className="text-[#95461a] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="mb-1">Location</h3>
                    <p className="text-[#2e211b]/70">
                      123 Bakery Lane<br />
                      Sweet Town, ST 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#95461a] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="mb-1">Phone</h3>
                    <p className="text-[#2e211b]/70">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-[#95461a] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-[#2e211b]/70">hello@bakerbymaker.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#95461a] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="mb-1">Hours</h3>
                    <p className="text-[#2e211b]/70">
                      Monday - Friday: 7am - 7pm<br />
                      Saturday - Sunday: 8am - 6pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl mb-4 text-[#95461a]">Special Orders</h3>
                <p className="text-[#2e211b]/70 mb-4">
                  Planning a special event? We'd love to help make it memorable with 
                  custom cakes, pastries, and more. Call us or stop by to discuss 
                  your needs!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl mb-6 text-[#95461a]">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#2e211b]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-[#2e211b]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#2e211b]">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-[#2e211b]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-[#2e211b]/20 rounded-lg focus:outline-none focus:border-[#95461a]"
                    placeholder="Tell us about your special order or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#95461a] hover:bg-[#bc8326] text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Checkered Pattern */}
      <div className="h-16 flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-[#9eb4b7]' : 'bg-[#f5ede3]'}`}
          ></div>
        ))}
      </div>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#9eb4b7] h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-xl">Map Location</p>
              <p className="text-sm opacity-80 mt-2">123 Bakery Lane, Sweet Town</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
