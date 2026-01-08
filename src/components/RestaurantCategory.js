import ItemList from "./ItemList";

const RestaurantCategory = ({ category, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">

      {/* Accordion Header */}
      <button
        onClick={onToggle}
        className="cursor-pointer w-full flex justify-between items-center px-5 py-4 bg-gray-50 rounded-xl text-left text-lg font-semibold hover:bg-gray-100 transition"
      >
        <span>
          {category.title} ({category.itemCards.length})
        </span>

        <span
          className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      {/* Accordion Body */}
      {isOpen && (
        <div className="px-5 pb-4">
          <ItemList items={category.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;