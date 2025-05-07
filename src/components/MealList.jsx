import diff from "../assets/Diff.svg";
import cook from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";
import { useState } from "react";
import FavBar from "./FavBar";

const MealList = ({
  data,
  selectedTag,
  favourites,
  handleAdd,
  handleRemove,
  sortOption,
}) => {
  const [favSortOption, setfavSortOption] = useState("hard");
  const [favselectedTag, setfavChooseTag] = useState("All");
  const difficultyOrder = {
    easy: 1,
    medium: 2,
    hard: 3,
  };
  const renderCard = (mealx, isFavourite = false) => (
    <div
      key={mealx._id}
      className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px]"
    >
      <img
        src={mealx.image}
        alt={mealx.name}
        className="w-[152px] h-[104px] rounded-lg object-cover"
      />

      <div className="flex-1">
        <div className="flex flex-wrap gap-2 mb-1">
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-[6px] w-[53px] h-[22px]
                   ${mealx.meal === "breakfast" ? "bg-[#76B2DB]" : ""}
                   ${mealx.meal === "lunch" ? "bg-[#F44C4C]" : ""}
                   ${mealx.meal === "snacks" ? "bg-[#FFA257]" : ""}
                   ${mealx.meal === "dinner" ? "bg-[#8676FE]" : ""}
              `}
          >
            {mealx.meal.charAt(0).toUpperCase() + mealx.meal.slice(1)}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={diff} className="w-[20px] h-[20px]" />
            {mealx.difficulty.charAt(0).toUpperCase() +
              mealx.difficulty.slice(1)}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={cook} className="w-[20px] h-[20px]" />
            {mealx.duration}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={steps} className="w-[20px] h-[20px]" />
            {mealx.steps.length} Steps
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{mealx.name}</h2>

        <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
          <div className="flex items-center gap-1 px-2">
            <img src={calories} className="w-4 h-4" />
            {mealx.calories} Kcal
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={carbs} className="w-4 h-4" />
            {mealx.carbs}g carbs
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={protiens} className="w-4 h-4" />
            {mealx.protein}g protein
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={fats} className="w-4 h-4" />
            {mealx.fats}g fats
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Health Score:</span>{" "}
          {mealx.healthScore}/10
          <div className="flex mt-1 space-x-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-4 rounded-full ${
                  i < mealx.healthScore ? "bg-blue-400" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {isFavourite ? (
          <button
            onClick={() => handleRemove(mealx._id)}
            className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-medium"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => handleAdd(mealx)}
            className="bg-[#2682C0] text-white px-4 py-1 rounded-lg text-sm font-medium"
          >
            Add to favourites
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          {[...data]
            .filter(
              (mealx) => selectedTag === "All" || mealx.meal === selectedTag
            )
            .sort((a, b) => {
              return b[sortOption] - a[sortOption];
            })
            .map((mealx) => renderCard(mealx))}
        </div>

        <div className="w-[35%] max-w-[600px] bg-[#edf3f7] p-4">
          <h2 className="text-2xl font-bold text-[#343C6A] mb-4 text-center ">
            Favourite Meals
          </h2>
          {favourites.length > 0 ? (
            <>
              <FavBar
                setfavChooseTag={setfavChooseTag}
                favselectedTag={favselectedTag}
                setfavSortOption={setfavSortOption}
              />
              {[...favourites]
                .filter(
                  (mealx) =>
                    favselectedTag === "All" || mealx.meal === favselectedTag
                )
                .sort((a, b) => {
                  if (favSortOption === "easy") {
                    return (
                      difficultyOrder[a.difficulty] -
                      difficultyOrder[b.difficulty]
                    );
                  } else if (favSortOption === "hard") {
                    return (
                      difficultyOrder[b.difficulty] -
                      difficultyOrder[a.difficulty]
                    );
                  }
                })
                .map((mealx) => renderCard(mealx, true))}
            </>
          ) : (
            <p className="text-gray-500 text-center">No favourites yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MealList;
