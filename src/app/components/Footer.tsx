import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2e211b] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#bc8326] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Baker by Maker
            </h3>
            <p className="text-sm opacity-80">
              At Baker by Maker, we believe every loaf, 
              pastry, croissant, and every donut matters.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4">Hours</h4>
            <div className="text-sm opacity-80 space-y-2">
              <p>Monday - Friday: 7am - 7pm</p>
              <p>Saturday - Sunday: 8am - 6pm</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#bc8326] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#bc8326] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#bc8326] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
          © 2026 Baker by Maker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
