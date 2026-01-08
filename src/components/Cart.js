import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../store/cartSlice.js";
import { ITEM_IMG_CDN_URL } from "../utils/constants.js";
import { Plus, Minus } from "lucide-react";
import EmptyCart from "./EmptyCart.js";
import { Link } from "react-router-dom";
import { DEFAULT_FOOD_IMG } from "../utils/constants.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) return <EmptyCart />;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.price / 100 || item.defaultPrice / 100) * item.qty,
    0
  );
  const gst = subtotal * 0.05;
  const handling = subtotal * 0.02;
  const total = subtotal + gst + handling;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Your Cart</h1>

      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT: Cart Items */}
        <div className="md:w-8/12 space-y-6">
          {cartItems.map((item) => (
            <div
              data-testid = "CartPageItems"
              key={item.uniqueId}
              className="flex items-center gap-6 p-5 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              {/* Image (fixed) */}
              <div className="shrink-0 relative w-30">
                <img
                  src={item.imageId ? ITEM_IMG_CDN_URL + item.imageId : DEFAULT_FOOD_IMG}
                  alt={item.name}
                  className="w-30 h-28 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Details (flexible middle column) */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{item.name}</h2>

                {item.description && (
                  <p className="text-gray-600 text-sm mt-2 whitespace-normal break-words">
                    {item.description}
                  </p>
                )}

                <p className="text-lg font-bold text-gray-700 mt-3">
                  ₹ {(item.price / 100 || item.defaultPrice / 100) * item.qty}
                </p>
              </div>

              {/* Counter on right of image */}
              <div className="flex flex-row items-center justify-center gap-1">
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="bg-gray-100 font-bold text-red-500 px-2 py-1 rounded-full cursor-pointer hover:bg-red-100 transition"
                >
                  <Minus size={18} />
                </button>
                <span className="font-semibold px-2">{item.qty}</span>
                <button
                  onClick={() => dispatch(addItem(item))}
                  className="bg-gray-100 font-bold text-green-500 px-2 py-1 rounded-full cursor-pointer hover:bg-green-100 transition"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
          ))}

          <button onClick={() => dispatch(clearCart())}  
            className="mt-4 px-8 py-3 bg-gray-800 text-white cursor-pointer rounded-lg font-medium shadow hover:bg-black transition w-fit"
          >
            Clear Cart
          </button>
        </div>

        {/* RIGHT: Summary */}
        <div className="md:w-4/12">
          <div className="p-8 bg-white border border-gray-200 shadow-md rounded-2xl sticky top-28">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>₹ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>GST (5%)</span>
                <span>₹ {gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Handling Charge (2%)</span>
                <span>₹ {handling.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-2xl text-gray-900">
                <span>Total</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/success">
            <button onClick={() => dispatch(clearCart())}
             className="mt-8 w-full py-4 cursor-pointer bg-linear-to-r from-amber-600 via-yello-500 to-red-500 text-white rounded-xl font-semibold text-xl hover:bg-orange-600 transition shadow-md">
              Complete Order
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
