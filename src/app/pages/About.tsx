export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-6xl md:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            About Us
          </h1>
          <p className="text-xl">
            Our Story, Our Passion, Our Promise
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1772758632382-ec45d8b4347e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlciUyMGtuZWFkaW5nJTIwZG91Z2h8ZW58MXx8fHwxNzczNzkyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Baker at work"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl mb-4 text-[#95461a]">Our Story</h2>
              <p className="text-[#2e211b]/80 mb-4">
                At Baker by Maker, we believe every loaf, pastry, croissant, and every donut matters. 
                We craft love. Passion becomes delicious. We care about you and yours.
              </p>
              <p className="text-[#2e211b]/80">
                Founded with a simple mission: to bring the warmth and joy of fresh-baked goods 
                to our community. Every morning, we wake up before the sun to ensure that when you 
                walk through our doors, you're greeted with the irresistible aroma of bread baking 
                and pastries fresh from the oven.
              </p>
            </div>
          </div>

          <div className="bg-[#f5ede3] rounded-lg p-8 mb-16">
            <h2 className="text-3xl mb-6 text-[#95461a] text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl mb-2 text-[#2e211b]">Quality</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  We use only the finest ingredients, sourced locally whenever possible
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-2 text-[#2e211b]">Passion</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  Every item is crafted with care by our dedicated team of bakers
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-2 text-[#2e211b]">Community</h3>
                <p className="text-[#2e211b]/70 text-sm">
                  We're proud to be a gathering place for neighbors and friends
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 
              className="text-5xl mb-6 text-[#95461a]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Bake with Love
            </h2>
            <p className="text-xl text-[#2e211b]/70">
              That's not just our motto—it's our promise to you
            </p>
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

      {/* Team Section */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4 text-[#2e211b]">Our Master Bakers</h2>
          <p className="text-xl mb-12 text-[#2e211b]/70 max-w-2xl mx-auto">
            Our team brings together decades of experience, traditional techniques, 
            and innovative approaches to create exceptional baked goods
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "Head Baker", experience: "25 years experience" },
              { role: "Pastry Chef", experience: "15 years experience" },
              { role: "Bread Specialist", experience: "20 years experience" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="w-24 h-24 bg-[#95461a] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl mb-2 text-[#95461a]">{member.role}</h3>
                <p className="text-[#2e211b]/70 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
