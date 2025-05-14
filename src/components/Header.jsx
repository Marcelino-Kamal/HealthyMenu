import { useState } from "react";
import icon from "../assets/meals icon.svg";
import search from "../assets/search.svg";
import MealModal from "./MealModel";

const Header = ({ data, handleAdd }) => {
  const [query, setQuery] = useState("");
  const [filteredMeal, setFilteredMeal] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const FindMeal = (value) => {
    setQuery(value)
    if (!value.trim()) {
      setFilteredMeal([]);
      return;
    }
    const res = data.filter((meal) =>
      meal.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMeal(res);
    
  };

  return (
    <div className="bg-[#edf3f7] p-4 flex justify-between items-center w-full ">
      {/* Header Title */}
      <div className="text-[#3a53f6] text-4xl font-bold  ">
        <h1 className="flex">
          Healthy Menu <img src={icon} />
        </h1>
      </div>

      {/* Search Bar */}
      <div className="relative  mt-[10px] ">
        <form  className="relative mt-[10px]">
          <img
            src={search}
            alt="Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />

          <input
            type="text"
            name="search"
            onChange={(e) => FindMeal(e.target.value)}
            placeholder="Search a meal..."
            className="pl-10 py-2 w-[500px] border border-gray-300 rounded-xl focus:outline-none bg-white"
          />
        </form>
        {/* Search output */}
        <div className=" max-h-[50px] overflow-y-auto space-y-2">
          {filteredMeal.map((meal) => (
            <div
              key={meal._id}
              className="p-2 border rounded  bg-white"
              onClick={() => {
                setSelectedMeal(meal);
                setIsModalOpen(true);
              }}
            >
              <h3 className="font-semibold">{meal.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <MealModal
      meal={selectedMeal}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      handleAdd={handleAdd}
    />
    </div>
  );
};

export default Header;
