const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center pt-32 md:pt-48 px-4 text-center gap-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-48 h-48 mx-auto"
      />
      <h2 className="text-3xl font-bold text-gray-700">Your cart is empty</h2>
      <p className="text-gray-500 text-lg">Add items to your cart to see them here.</p>
    </div>
  );
};

export default EmptyCart;
