const FavBar = ({ setfavChooseTag, favselectedTag, setfavSortOption }) => {
  return (
    <div className="flex-col items-center justify-between bg-[#edf3f7] rounded-xl w-full">
      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2 ml-[40%]">
        <span className="text-sm text-gray-500">Sort by:</span>
        <select
          className="bg-white border border-gray-300 text-sm myfont text-[12px] font-semibold px-3 py-1 text-[#343C6A] focus:outline-none  rounded-[8px]"
          onChange={(e) => setfavSortOption(e.target.value)}
        >
          <option value="" >Difficulty</option>
          <option value="easy">Easy &rarr; Hard  </option>
          <option value="hard">Hard &rarr; Easy</option>
        </select>
      </div>
      {/* Filter Tabs */}
      <div className="flex items-center bg-white rounded-full px-5 py-1 space-x-10 justify-between">
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            favselectedTag === "All"
              ? "bg-blue-600 text-white"
              : "text-[#1e2a53] hover:bg-blue-100"
          }`}
          onClick={() => setfavChooseTag("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            favselectedTag === "breakfast"
              ? "bg-blue-600 text-white"
              : "text-[#1e2a53] hover:bg-blue-100"
          }`}
          onClick={() => setfavChooseTag("breakfast")}
        >
          Breakfast
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            favselectedTag === "lunch"
              ? "bg-blue-600 text-white"
              : "text-[#1e2a53] hover:bg-blue-100"
          }`}
          onClick={() => setfavChooseTag("lunch")}
        >
          Lunch
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            favselectedTag === "snacks"
              ? "bg-blue-600 text-white"
              : "text-[#1e2a53] hover:bg-blue-100"
          }`}
          onClick={() => setfavChooseTag("snacks")}
        >
          Snack
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm font-semibold ${
            favselectedTag === "dinner"
              ? "bg-blue-600 text-white"
              : "text-[#1e2a53] hover:bg-blue-100"
          }`}
          onClick={() => setfavChooseTag("dinner")}
        >
          Dinner
        </button>
      </div>

      
    </div>
  );
};
export default FavBar;
