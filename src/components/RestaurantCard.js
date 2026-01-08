import { useContext } from "react";
import { RES_IMAGE_URL } from "../utils/constants.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      className="
        bg-white/90 backdrop-blur-xl 
        rounded-2xl shadow-lg border border-gray-200 
        overflow-hidden 
        transition-all duration-300 
        group-hover:shadow-2xl group-hover:-translate-y-2
      "
    >
      {/* Image */}
      <img
        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
        alt="res-img"
        src={RES_IMAGE_URL + resData.info.cloudinaryImageId}
      />

      {/* Card Body */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800 tracking-tight">
          {name}
        </h3>

        <h4 className="text-sm text-gray-500 line-clamp-1">
          {cuisines.join(", ")}
        </h4>

        <div className="flex justify-between items-center mt-3 text-sm font-medium">
          {/* Rating */}
          <span className="bg-emerald-600 text-white px-3 py-1 rounded-lg shadow flex items-center gap-1">
            {avgRating} <i className="fa-solid fa-star text-yellow-300"></i>
          </span>

          {/* Cost */}
          <span className="text-gray-700">{costForTwo}</span>

          {/* Delivery Time */}
          <span className="text-blue-600 font-semibold">
            {sla.slaString}
          </span>
        </div>
      </div>
    </div>
  );
};

//  Higher Order Component

//  input -> RestaurantCard => RestaurantCardUpdated

export const withBadges = (RestaurantCard) => {
  return function BadgeWrapper(props) {
    const info = props.resData?.info;

    const isVeg = info?.veg === true;
    const isBestSeller = info?.avgRating > 4.5;

    return (
      <div className="relative group">

        {/* EXTREME TOP-LEFT BADGE (Veg / Non-Veg) */}
        <span
          className={`
            absolute -top-2 -left-2 z-30 
            px-3 py-1 text-[10px] font-bold text-white rounded-md shadow-lg
            ${isVeg ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {isVeg ? "VEG" : "NON-VEG"}
        </span>

        {/* EXTREME TOP-RIGHT BADGE */}
        {isBestSeller && (
          <span
            className="
              absolute -top-2 -right-2 z-30 
              px-2 py-1 text-[15px] font-bold text-white
              bg-white rounded-full shadow-lg"
          >
            ❤️
          </span>
        )}

        {/* ORIGINAL CARD */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
