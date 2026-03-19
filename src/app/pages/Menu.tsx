export function Menu() {
  const menuCategories = [
    {
      name: "Breakfast Pastries",
      items: [
        { name: "Butter Croissant", price: "$4.50" },
        { name: "Chocolate Croissant", price: "$5.00" },
        { name: "Almond Croissant", price: "$5.50" },
        { name: "Cinnamon Roll", price: "$4.75" },
        { name: "Blueberry Muffin", price: "$3.75" },
        { name: "Banana Nut Muffin", price: "$3.75" },
      ],
    },
    {
      name: "Artisan Breads",
      items: [
        { name: "Sourdough Loaf", price: "$8.00" },
        { name: "Whole Wheat", price: "$7.50" },
        { name: "Multigrain", price: "$8.50" },
        { name: "Baguette", price: "$5.00" },
        { name: "Ciabatta", price: "$6.00" },
        { name: "Focaccia", price: "$7.00" },
      ],
    },
    {
      name: "Sweet Treats",
      items: [
        { name: "Chocolate Chip Cookie", price: "$2.50" },
        { name: "Oatmeal Raisin Cookie", price: "$2.50" },
        { name: "Brownie", price: "$4.00" },
        { name: "Lemon Bar", price: "$4.25" },
        { name: "Danish Pastry", price: "$4.50" },
        { name: "Scone", price: "$3.75" },
      ],
    },
    {
      name: "Specialty Items",
      items: [
        { name: "Quiche Slice", price: "$6.50" },
        { name: "Savory Croissant", price: "$6.00" },
        { name: "Pretzel Roll", price: "$3.50" },
        { name: "Challah Bread", price: "$9.00" },
        { name: "Pumpernickel", price: "$8.00" },
        { name: "Rye Bread", price: "$7.50" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#95461a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-6xl md:text-7xl mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Menu
          </h1>
          <p className="text-xl">
            Fresh Baked Daily with the Finest Ingredients
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 bg-[#f5ede3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <h2 
                  className="text-3xl mb-6 text-[#95461a] border-b-2 border-[#bc8326] pb-3"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-baseline">
                      <span className="text-[#2e211b]">{item.name}</span>
                      <span className="text-[#95461a] font-medium ml-2">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkered Pattern Divider */}
      <div className="h-16 flex">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-[#9eb4b7]' : 'bg-[#f5ede3]'}`}
          ></div>
        ))}
      </div>

      {/* Special Orders CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-[#2e211b]">Special Orders</h2>
          <p className="text-xl mb-8 text-[#2e211b]/70">
            Looking for something custom? We'd love to create something special for your event!
          </p>
          <a 
            href="/contact"
            className="inline-block bg-[#95461a] hover:bg-[#bc8326] text-white px-8 py-3 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
