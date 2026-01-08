import { Link } from "react-router-dom";

// -------------------- HERO SECTION --------------------
const HeroSection = () => {
  return (
    <div className="w-full bg-linear-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-20 px-6 rounded-3xl shadow-xl">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Fresh. Organic. Delivered.
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Your trusted online store for fresh groceries delivered at your door.
        </p>

        <Link to="/offers">
        <button className="mt-8 px-6 py-3 cursor-pointer bg-white text-green-700 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
          Shop Now →
        </button>
        </Link>
      </div>
    </div>
  );
};

// -------------------- CATEGORY CARD --------------------
const CategoryCard = ({ title, img }) => {
  return (
    <div className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-4">
      <img
        src={img}
        alt={title}
        className="w-full h-44 object-contain rounded-lg"
      />
      <h3 className="mt-3 text-center text-lg font-semibold text-gray-800">
        {title}
      </h3>
    </div>
  );
};

// -------------------- PRODUCT CARD --------------------
const ProductCard = ({ name, price, img }) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer shadow-md hover:shadow-xl transition p-4 border hover:-translate-y-1">
      <img
        src={img}
        alt={name}
        className="w-full h-44 object-contain rounded-lg"
      />

      <div className="mt-4">
        <h4 className="text-lg font-bold text-gray-800">{name}</h4>
        <p className="text-green-600 font-semibold mt-1">₹{price}</p>

        <button className="mt-4 w-full py-2 cursor-pointer bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// -------------------- MAIN GROCERY PAGE --------------------
const Grocery = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      img: "https://i.ibb.co/mCX55rWP/Fruits-removebg-preview.png",
    },
    {
      title: "Organic Vegetables",
      img: "https://i.ibb.co/ccJB7gqk/Vegetables-removebg-preview.png",
    },
    {
      title: "Dairy Products",
      img: "https://i.ibb.co/8gbvFYdv/Dairy-removebg-preview.png",
    },
    {
      title: "Snacks & Beverages",
      img: "https://i.ibb.co/PGCjLc55/Snacks-removebg-preview.png",
    },
  ];

  const products = [
    {
      name: "Fresh Apples (1kg)",
      price: 120,
      img: "https://i.ibb.co/PKfcw5G/Apples-removebg-preview.png",
    },
    {
      name: "Organic Carrots (1kg)",
      price: 80,
      img: "https://i.ibb.co/G4T1PT3v/Carrots-removebg-preview.png",
    },
    {
      name: "Amul Milk (1L)",
      price: 60,
      img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/otx1jdphqy1gvdlwsddr",
    },
    {
      name: "Lays Chips",
      price: 20,
      img: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/8/1/928e74af-ca07-48c3-8dc2-519dc1d8738c_5468_1.png",
    },
  ];

  return (
    <div className="px-5 py-6 bg-gray-50 min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Categories */}
      <h2 className="mt-14 mb-6 text-3xl font-bold text-gray-800">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} title={cat.title} img={cat.img} />
        ))}
      </div>

      {/* Featured Products */}
      <h2 className="mt-14 mb-6 text-3xl font-bold text-gray-800">
        Featured Products
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, idx) => (
          <ProductCard key={idx} name={p.name} price={p.price} img={p.img} />
        ))}
      </div>
    </div>
  );
};

export default Grocery;
