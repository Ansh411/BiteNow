import RestaurantCard, { withBadges } from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurantData from "../hooks/useRestaurantData.js";
import useOnlineStatus from "../hooks/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useContext } from "react";

const Body = () => {
  const {
    listOfRestaurants,
    filterRestaurant,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRated,
  } = useRestaurantData();

  const RestaurantCardWithBadges = withBadges(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-20 text-red-600 font-extrabold text-2xl tracking-wide animate-pulse">
        Looks like you're offline! Please check your connection.
      </h1>
    );

  // ---------------- Hero Section ----------------
  const HeroSection = () => {
    return (
      <div className="w-full bg-linear-to-r from-amber-600 via-yello-500 to-red-500 text-white py-20 rounded-3xl shadow-xl">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Tasty. Delicious. Delivered.
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Your trusted online store for best food delivered at your door.
          </p>

          <Link to="/offers">
            <button className="mt-8 px-6 py-3 cursor-pointer bg-white text-orange-700 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition">
              Shop Now →
            </button>
          </Link>
        </div>
      </div>
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50 min-h-screen px-5 py-6">

      {/* HERO SECTION */}
      <HeroSection />

      {/* Main Content Section */}
      <div className="max-w-full mx-auto px-6 py-12">

        {/* ---------- Search + Filter ---------- */}
        {/* <div className="rounded-3xl p-8 shadow-lg mt-12"> */}
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 mb-5">
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <input
                type="text"
                data-testid = "searchInput"
                className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm bg-white focus:ring-4 focus:ring-orange-300/60 focus:outline-none transition w-full sm:w-72 placeholder-gray-500"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button
                onClick={searchRestaurants}
                className="px-5 py-2 rounded-xl bg-linear-to-r from-amber-600 via-yello-500 to-red-500 hover:bg-orange-700 cursor-pointer text-white font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
              >
                Search
              </button>
            </div>

            <button
              onClick={filterTopRated}
              className="px-6 py-2 rounded-xl bg-linear-to-r from-teal-500 to-cyan-600 hover:bg-teal-700 cursor-pointer text-white font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all"
            >
              Top Rated Restaurants 😎👌
            </button>
          </div>
        

        {/* ---------- Restaurant Cards Grid ---------- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mt-12">
          {filterRestaurant.map((restaurant) => (
            <Link
              data-testid = "resCard"
              key={restaurant.info?.id}
              to={"/restaurants/" + restaurant.info.id}
              className="group"
            >
              <RestaurantCardWithBadges resData={restaurant} />
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Body;
