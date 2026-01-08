import { useEffect, useState } from "react";
import {
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  SWIGGY_MENU_API_URL,
} from "../utils/constants.js";

export default function useRestaurantMenu(resId) {
  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  async function fetchMenu() {
    try {
      const response = await fetch(SWIGGY_MENU_API_URL + resId);
      const json = await response.json();
      const cards = json?.data?.cards || [];

      // ------------------
      //  Extract restaurant info
      // ------------------
      const restaurantInfo =
        cards
          .map((x) => x.card?.card)
          .find((x) => x?.["@type"] === RESTAURANT_TYPE_KEY) || null;

      setRestaurant(restaurantInfo?.info || null);

      // ------------------
      //  Extract ALL menu categories (Recommended, Popular, Biryanis, etc.)
      // ------------------
      const regularCards =
        cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const extractedCategories = regularCards
        .map((c) => c.card?.card)
        .filter((c) => c?.["@type"] === MENU_ITEM_TYPE_KEY) // only categories
        .map((category) => ({
          title: category.title,
          itemCards:
            category.itemCards?.map((i) => i.card?.info).filter(Boolean) || [],
        }));

      setCategories(extractedCategories);
    } catch (err) {
      console.error("Menu Loading Error:", err);
      setRestaurant(null);
      setCategories([]);
    }
  }

  return { restaurant, categories };
}

