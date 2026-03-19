import { Product } from "../context/CartContext";

export const products: Product[] = [
  // Breakfast Pastries
  {
    id: "croissant-butter",
    name: "Butter Croissant",
    category: "Breakfast Pastries",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudHMlMjBwYXN0cmllc3xlbnwxfHx8fDE3NzM4NDA4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Flaky, buttery perfection with a golden, crispy exterior",
  },
  {
    id: "croissant-chocolate",
    name: "Chocolate Croissant",
    category: "Breakfast Pastries",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudHMlMjBwYXN0cmllc3xlbnwxfHx8fDE3NzM4NDA4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic croissant filled with rich dark chocolate",
  },
  {
    id: "croissant-almond",
    name: "Almond Croissant",
    category: "Breakfast Pastries",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1737700087841-f2bc25eb0b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudHMlMjBwYXN0cmllc3xlbnwxfHx8fDE3NzM4NDA4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Filled with almond cream and topped with sliced almonds",
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "Breakfast Pastries",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Soft, fluffy, and generously topped with cream cheese frosting",
  },
  {
    id: "muffin-blueberry",
    name: "Blueberry Muffin",
    category: "Breakfast Pastries",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Packed with fresh blueberries and topped with sugar",
  },
  {
    id: "muffin-banana",
    name: "Banana Nut Muffin",
    category: "Breakfast Pastries",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Moist banana muffin with walnuts",
  },

  // Artisan Breads
  {
    id: "sourdough",
    name: "Sourdough Loaf",
    category: "Artisan Breads",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic sourdough with a crispy crust and tangy flavor",
  },
  {
    id: "whole-wheat",
    name: "Whole Wheat",
    category: "Artisan Breads",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Hearty whole wheat bread, perfect for sandwiches",
  },
  {
    id: "multigrain",
    name: "Multigrain",
    category: "Artisan Breads",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Loaded with seeds and grains for extra nutrition",
  },
  {
    id: "baguette",
    name: "Baguette",
    category: "Artisan Breads",
    price: 5.0,
    image: "https://images.unsplash.com/photo-1770739539572-768dbff28152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBkaXNwbGF5fGVufDF8fHx8MTc3Mzc3MTY0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Traditional French baguette with a crispy crust",
  },

  // Sweet Treats
  {
    id: "cookie-chocolate",
    name: "Chocolate Chip Cookie",
    category: "Sweet Treats",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic cookie loaded with chocolate chips",
  },
  {
    id: "cookie-oatmeal",
    name: "Oatmeal Raisin Cookie",
    category: "Sweet Treats",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Chewy oatmeal cookie with plump raisins",
  },
  {
    id: "brownie",
    name: "Brownie",
    category: "Sweet Treats",
    price: 4.0,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Rich, fudgy chocolate brownie",
  },
  {
    id: "lemon-bar",
    name: "Lemon Bar",
    category: "Sweet Treats",
    price: 4.25,
    image: "https://images.unsplash.com/photo-1649308401368-a68b77116605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwc3dlZXQlMjBidW5zfGVufDF8fHx8MTc3Mzg1OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Tangy lemon filling on a buttery shortbread crust",
  },

  // Specialty Items
  {
    id: "quiche",
    name: "Quiche Slice",
    category: "Specialty Items",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1772758632382-ec45d8b4347e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlciUyMGtuZWFkaW5nJTIwZG91Z2h8ZW58MXx8fHwxNzczNzkyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Savory quiche with seasonal vegetables and cheese",
  },
  {
    id: "croissant-savory",
    name: "Savory Croissant",
    category: "Specialty Items",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1772758632382-ec45d8b4347e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlciUyMGtuZWFkaW5nJTIwZG91Z2h8ZW58MXx8fHwxNzczNzkyOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Croissant filled with ham and swiss cheese",
  },
];
