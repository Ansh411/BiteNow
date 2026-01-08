const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Help Center
          </h1>
          <p className="text-gray-600 mt-3">
            Find guidance, resolve issues & get answers instantly.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-4 focus:ring-orange-300 outline-none"
          />
        </div>

        {/* Help Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Account Issues",
              icon: "fa-user-circle",
              desc: "Update details, login issues, profile settings",
            },
            {
              title: "Ordering",
              icon: "fa-basket-shopping",
              desc: "Track orders, cancellations, payments",
            },
            {
              title: "Delivery",
              icon: "fa-truck-fast",
              desc: "Delivery delays, ETA, riders support",
            },
            {
              title: "Payments",
              icon: "fa-credit-card",
              desc: "Refunds, payment methods, transaction issues",
            },
            {
              title: "Grocery",
              icon: "fa-apple-whole",
              desc: "Fresh stock, quality, replacement issues",
            },
            {
              title: "Technical",
              icon: "fa-gear",
              desc: "App/website problems, errors, bugs",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="text-orange-500 text-3xl mb-3">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
