import { IMG_CDN_URL } from "../utils/constants";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-center">

        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="w-46 h-40 rounded-xl object-cover shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>

          <p className="text-gray-600">
            {restaurant.cuisines?.join(", ")}
          </p>

          <p className="mt-3 inline-block bg-gray-100 px-3 py-1 rounded-lg text-sm font-medium text-gray-700">
            ⭐ {restaurant.avgRating} • 🎯 {restaurant.costForTwoMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;