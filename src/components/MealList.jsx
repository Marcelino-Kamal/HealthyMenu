import { useState } from "react";
import diff from "../assets/Diff.svg";
import cook from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";

const MealList = ({ data, selectedTag, sortOption ,favourites,handleAdd,handleRemove}) => {

  const renderCard = (meal, isFavourite = false) => (
    <div
      key={meal.id}
      className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px]"
    >
      <img
        src={meal.img}
        alt={meal.title}
        className="w-[152px] h-[104px] rounded-lg object-cover"
      />

      <div className="flex-1">
        <div className="flex flex-wrap gap-2 mb-1">
          <span
            className={`${meal.color} text-xs font-semibold px-2 py-1 rounded w-[72px] h-[22px]`}
          >
            {meal.tag}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={diff} className="w-[20px] h-[20px]" />
            {meal.difficulty}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={cook} className="w-[20px] h-[20px]" />
            {meal.time}
          </span>
          <span className="bg-gray-100 text-gray-600 text-xs font-medium px-4 py-1 rounded flex flex-row items-center gap-1">
            <img src={steps} className="w-[20px] h-[20px]" />
            {meal.steps}
          </span>
        </div>

        <h2 className="text-lg font-bold text-gray-800">{meal.title}</h2>

        <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
          <div className="flex items-center gap-1 px-2">
            <img src={calories} className="w-4 h-4" />
            {meal.nutrition.calories}
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={carbs} className="w-4 h-4" />
            {meal.nutrition.carbs}
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={protiens} className="w-4 h-4" />
            {meal.nutrition.protein}
          </div>
          <div className="flex items-center gap-1 px-2">
            <img src={fats} className="w-4 h-4" />
            {meal.nutrition.fats}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Health Score:</span>{" "}
          {meal.healthScore}/10
          <div className="flex mt-1 space-x-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-4 rounded-full ${
                  i < meal.healthScore ? "bg-blue-400" : "bg-gray-200"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {isFavourite ? (
          <button
            onClick={() => handleRemove(meal.id)}
            className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-medium"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() => handleAdd(meal)}
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
            .filter((meal) => selectedTag === "All" || meal.tag === selectedTag)
            .sort((a, b) => {
              const aVal = parseFloat(a.nutrition[sortOption.toLowerCase()]);
              const bVal = parseFloat(b.nutrition[sortOption.toLowerCase()]);
              return bVal - aVal;
            })
            .map((meal) => renderCard(meal))}
        </div>

        <div className="w-[35%] max-w-[600px] bg-[#edf3f7] p-4  h-full mt-[-600px] ">
          <h2 className="text-2xl font-bold text-[#343C6A] mb-4 text-center ">
            Favourite Meals
          </h2>
          {favourites.length > 0 ? (
            favourites.map((meal) => renderCard(meal, true))
          ) : (
            <p className="text-gray-500 text-center">No favourites yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MealList;
