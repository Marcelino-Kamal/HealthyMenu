import React from "react";

const MealModal = ({ meal, isOpen, onClose, handleAdd }) => {
  if (!isOpen || !meal) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full flex flex-col lg:flex-row p-6 gap-6 shadow-xl">
        {/* Image Section */}
        <img
          src={meal.image}
          alt={meal.name}
          className="rounded-xl object-cover w-full lg:w-[350px] h-auto max-h-[400px]"
        />

        {/* Details Section */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl myfont font-bold text-[#343C6A] leading-snug max-w-[70%]">
              {meal.name}
            </h2>
            <button
              className="text-red-500 font-bold text-xl"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Metadata */}
          <div className="mt-3  flex-wrap items-center gap-2 text-sm grid grid-cols-2 grid-rows-2">
            <span className="bg-[#F44C4C] text-[#343C6A] px-3 py-1 rounded-md font-semibold myfont">
              {meal.meal}
            </span>
            <span className="text-gray-700">Difficulty: {meal.difficulty}</span>
            <span className="text-gray-700">Cook Duration: {meal.duration}</span>
            <span className="text-gray-700">Health Score: {meal.healthScore}/100</span>
            <span className="text-gray-700">Total Steps: {meal.steps.length}</span>
          </div>

          {/* Add to Favourites */}
          <button className="mt-4 bg-[#2682C0] text-white px-4 py-2 rounded-md font-medium w-fit" onClick={() => handleAdd(meal)}>
            Add to favourites
          </button>

          {/* Ingredients */}
          <h3 className="mt-6 font-bold text-[#343C6A] text-lg">gradients</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1 text-sm text-gray-700">
            {meal.gradients.map((item, idx) => (
              <span key={idx}>• {item}</span>
            ))}
          </div>

          {/* Nutrition Info */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            <div className="bg-red-400 text-white rounded-md py-2 font-semibold">
              {meal.calories} kcal
            </div>
            <div className="bg-purple-400 text-white rounded-md py-2 font-semibold">
              {meal.carbs}g Carbs
            </div>
            <div className="bg-blue-200 text-[#343C6A] rounded-md py-2 font-semibold">
              {meal.protein}g Protein
            </div>
            <div className="bg-orange-300 text-[#343C6A] rounded-md py-2 font-semibold">
              {meal.fats}g Fats
            </div>
          </div>

          {/* Steps */}
          <h3 className="mt-6 font-bold text-[#343C6A] text-lg">steps</h3>
          <ol className="mt-2 text-sm text-gray-800 list-decimal list-inside space-y-1">
            {meal.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>

          {/* Print Button */}
          <button className="mt-6 self-end bg-[#2682C0] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <span>🖨️</span> print meal data
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealModal;


