import { Link } from "react-router";
import { ChefHat, Clock, Heart } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 
            className="text-6xl md:text-8xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bake with Love
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Fresh Baked Daily • Artisan Quality • Made with Passion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop"
              className="inline-block bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors"
            >
              Order Online
            </Link>
            <Link 
              to="/menu"
              className="inline-block bg-white/90 hover:bg-white text-[#95461a] px-8 py-3 rounded-full transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>

        {/* Decorative Checkered Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 flex">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-[#9eb4b7]' : 'bg-[#f5ede3]'}`}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#95461a] text-white rounded-full mb-4">
                <Heart size={32} />
              </div>
              <h3 className="mb-2">Baked with Love</h3>
              <p className="text-[#2e211b]/70">
                Every item is crafted with care and the finest ingredients
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#bc8326] text-white rounded-full mb-4">
                <ChefHat size={32} />
              </div>
              <h3 className="mb-2">Master Bakers</h3>
              <p className="text-[#2e211b]/70">
                Our skilled team brings decades of baking expertise
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#95461a] text-white rounded-full mb-4">
                <Clock size={32} />
              </div>
              <h3 className="mb-2">Fresh Daily</h3>
              <p className="text-[#2e211b]/70">
                Everything is baked fresh every morning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-5xl text-center mb-12 text-[#95461a]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Specialties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cinnamon Rolls"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#95461a]">Cinnamon Rolls</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  Soft, fluffy, and generously topped with cream cheese frosting
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudHMlMjBwYXN0cmllc3xlbnwxfHx8fDE3NzM4NDA4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Croissants"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#95461a]">Butter Croissants</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  Flaky, buttery perfection with a golden, crispy exterior
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Artisan Bread"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#95461a]">Artisan Bread</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  Crusty sourdough and specialty loaves baked to perfection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-20 bg-[#95461a] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 
            className="text-6xl md:text-7xl mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            It's Baguetting Serious
          </h2>
          <p className="text-xl opacity-90">
            We take our craft seriously, but we never lose sight of the joy baking brings
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-[#2e211b]">Visit Us Today</h2>
          <p className="text-xl mb-8 text-[#2e211b]/70">
            Experience the warmth and aroma of fresh-baked goods
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors"
          >
            Find Our Location
          </Link>
        </div>
      </section>
    </div>
  );
}