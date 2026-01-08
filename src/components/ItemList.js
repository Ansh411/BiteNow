import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice.js";
import { ITEM_IMG_CDN_URL , DEFAULT_FOOD_IMG } from "../utils/constants.js";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [flyItem, setFlyItem] = useState(null);

  const handleAdd = (item) => {
    setFlyItem(item.id);
    dispatch(addItem(item));
    setTimeout(() => setFlyItem(null), 500);
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="flex flex-col gap-6">
      {items.map((item) => {
        const cartQty = cartItems.find((i) => i.id === item.id)?.qty || 0;

        return (
          <div
            data-testid = "foodItem"
            key={item.id}
            className="flex justify-between items-center border-b pb-6 gap-6 hover:shadow-lg transition rounded-xl p-4 bg-white relative"
          >
            {/* Left Details */}
            <div className="w-[65%]">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-900 font-bold mt-1">
                ₹ {item.price / 100 || item.defaultPrice / 100}
              </p>
              {item.description && (
                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              )}
            </div>

            {/* Image + Counter */}
            <div className="relative w-32 shrink-0">
              <img
                src={item.imageId ? ITEM_IMG_CDN_URL + item.imageId : DEFAULT_FOOD_IMG}
                className="w-32 h-32 rounded-xl object-cover shadow-lg"
              />

              {cartQty === 0 ? (
                <button
                  onClick={() => handleAdd(item)}
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-black font-semibold cursor-pointer px-4 py-1 rounded-2xl text-sm flex items-center justify-center transform transition-all hover:scale-105 
                    ${flyItem === item.id ? "animate-fly" : ""}`}
                >
                  Add <span className="ml-1 pb-[2.3px] text-green-400 text-xl font-bold">+</span>
                </button>
              ) : (
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-black flex items-center gap-2 px-3 py-1 rounded-full shadow-lg">
                  <button onClick={() => handleRemove(item)}>
                    <Minus size={18} className="text-red-500 hover:bg-red-100 pt-0.5 rounded-lg cursor-pointer" />
                  </button>
                  <span className="font-semibold">{cartQty}</span>
                  <button onClick={() => handleAdd(item)}>
                    <Plus size={18} className="text-green-500 hover:bg-green-100 pt-0.5 rounded-lg cursor-pointer" />
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
