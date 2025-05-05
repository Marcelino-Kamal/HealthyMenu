const AllMenuBar = ({ setChooseTag,selectedTag,setSortOption }) => {
  return (
    <>
      <div className="flex items-center justify-between bg-[#edf3f7] p-2 rounded-xl w-[64%]">
        {/* Filter Tabs */}
        <div className="flex items-center bg-white rounded-full px-5 py-1 space-x-10">
          <button
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              selectedTag === "All"
                ? "bg-blue-600 text-white"
                : "text-[#1e2a53] hover:bg-blue-100"
            }`}
            onClick={() => setChooseTag("All")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              selectedTag === "Breakfast"
                ? "bg-blue-600 text-white"
                : "text-[#1e2a53] hover:bg-blue-100"
            }`}
            onClick={() => setChooseTag("Breakfast")}
          >
            Breakfast
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              selectedTag === "Lunch"
                ? "bg-blue-600 text-white"
                : "text-[#1e2a53] hover:bg-blue-100"
            }`}
            onClick={() => setChooseTag("Lunch")}
          >
            Lunch
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              selectedTag === "Snack"
                ? "bg-blue-600 text-white"
                : "text-[#1e2a53] hover:bg-blue-100"
            }`}
            onClick={() => setChooseTag("Snack")}
          >
            Snack
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              selectedTag === "Dinner"
                ? "bg-blue-600 text-white"
                : "text-[#1e2a53] hover:bg-blue-100"
            }`}
            onClick={() => setChooseTag("Dinner")}
          >
            Dinner
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="bg-white border border-gray-300 text-sm rounded-md px-3 py-1 text-gray-700 focus:outline-none" onChange={(e) => setSortOption(e.target.value)}>
            <option value="calories">Calories</option>
            <option value="protein">Protein</option>
            <option value="carbs">Carbs</option>
            <option value="fats">Fats</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default AllMenuBar;
