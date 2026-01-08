import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";


const useRestaurantData = () => {
    const [listOfRestaurants , setlistOfRestaurants] = useState([]);
    
    const[filterRestaurant , setfilterRestaurants] = useState([]);
    
    const[searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();

        const allCards = json?.data?.cards;
        let restaurants = [];

        for (const card of allCards) {
        const possible_restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (possible_restaurants) {
        restaurants = possible_restaurants;
        break;
      }
    }

    setlistOfRestaurants(restaurants);
    setfilterRestaurants(restaurants);

    };

    // Search Function
    const searchRestaurants = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterRestaurants(filtered);
  };

    // Top Rated Filter
    const filterTopRated = () => {
    const TopResList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.3
    );
    setfilterRestaurants(TopResList);
  };

  return {
    listOfRestaurants, filterRestaurant, searchText, setSearchText, searchRestaurants , filterTopRated
  }
};

export default useRestaurantData;