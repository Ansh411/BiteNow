import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu.js";
import Loader from "./Loader.js";
import RestaurantHeader from "./RestaurantHeader.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { lazy, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, categories } = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(0);

  if (!restaurant) return <Loader/> ;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white px-4 py-10">
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      {/* ---------------- Restaurant Header ---------------- */}

      <RestaurantHeader restaurant={restaurant} />

      {/* ---------------- Divider ---------------- */}
      <div className="my-8 border-t border-gray-200"></div>

      {/* ---------------- Menu Title ---------------- */}
      <h2 className="text-2xl font-bold mb-4">Menu</h2>

      {/* ---------------- Categories with Accordion ---------------- */}

        <div className="space-y-4">
          {categories.map((cat , idx) => (
            <RestaurantCategory
            key={idx}
            category={cat}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


