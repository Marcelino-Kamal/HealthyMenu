const AllMenuBar = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#edf3f7] p-2 rounded-xl w-[64%]">
        {/* Filter Tabs */}
        <div className="flex items-center bg-white rounded-full px-5 py-1 space-x-10">
          <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
            All
          </button>
          <button className="text-[#1e2a53] text-sm font-medium">
            Breakfast
          </button>
          <button className="text-[#1e2a53] text-sm font-medium">Lunch</button>
          <button className="text-[#1e2a53] text-sm font-medium">Snack</button>
          <button className="text-[#1e2a53] text-sm font-medium">Dinner</button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="bg-white border border-gray-300 text-sm rounded-md px-3 py-1 text-gray-700 focus:outline-none">
            <option>Calories</option>
            <option>Protein</option>
            <option>Carbs</option>
            <option>Fats</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default AllMenuBar;
