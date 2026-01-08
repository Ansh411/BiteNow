const Offers = () => {
  const offers = [
    {
      title: "50% Off on All Pizzas 🍕",
      description: "Order any pizza and get flat 50% off. Limited time offer!",
      validity: "Valid until 10th Dec 2025",
      bg: "from-rose-600 to-yellow-500",
    },
    {
      title: "Buy 1 Get 1 Free Burgers 🍔",
      description: "Enjoy double the taste! BOGO offer on all burgers.",
      validity: "Valid until 15th Dec 2025",
      bg: "from-teal-600 to-lime-500",
    },
    {
      title: "20% Cashback on Groceries 🛒",
      description: "Get instant 20% cashback on your grocery orders.",
      validity: "Valid until 31st Dec 2025",
      bg: "from-blue-700 to-cyan-400",
    },
    {
      title: "Free Dessert on Orders Above ₹500 🍰",
      description: "Indulge in a free dessert on orders above ₹500.",
      validity: "Valid until 20th Dec 2025",
      bg: "from-pink-500 to-fuchsia-700",
    },
    {
      title: "Flat 30% Off on Beverages 🥤",
      description: "Quench your thirst with refreshing drinks at 30% off.",
      validity: "Valid until 18th Dec 2025",
      bg: "from-slate-700 to-gray-400",
    },
    {
      title: "Free Delivery on Orders Above ₹300 🚚",
      description: "Enjoy free delivery when you order above ₹300.",
      validity: "Valid until 31st Dec 2025",
      bg: "from-purple-800 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white py-16 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        Current <span className="text-orange-600">Offers</span>
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Don’t miss out on these amazing deals! Grab your favourite meals at discounted prices now.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${offer.bg} text-white rounded-2xl p-6 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
            <p className="text-gray-100 mb-4">{offer.description}</p>
            <span className="text-sm bg-white/30 px-3 py-1 rounded-full">{offer.validity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
