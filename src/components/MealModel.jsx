import React from "react";
import dif from "../assets/Diff.svg";
import hb from "../assets/HB.svg";
import pot from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";
const MealModal = ({ meal, isOpen, onClose, handleAdd }) => {
  if (!isOpen || !meal) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="w-[1126px] h-[816px] bg-[#edf3f7] rounded-xl flex flex-col lg:flex-row p-6 gap-6 shadow-xl">
  
      {/* Image & Left Section */}
      <div className="relative lg:w-[400px]">
        <img
          src={meal.image}
          alt={meal.name}
          className="rounded-xl object-cover w-full h-[381px]"
        />
        
        
  
        {/* Ingredients */}
        <h3 className="mt-6 font-bold text-[#343C6A] text-lg">Gradients</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1 text-sm text-gray-700">
          {meal.gradients.map((item, idx) => (
            <span key={idx}>• {item}</span>
          ))}
        </div>
  
        {/* Steps */}
        <h3 className="mt-6 font-bold text-[#343C6A] text-lg">Steps</h3>
        <ol className="mt-2 text-sm text-gray-800 list-decimal list-inside space-y-1">
          {meal.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
  
      {/* Details Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-[#343C6A] leading-snug max-w-[70%]">
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
        <div className="mt-8 flex flex-wrap items-center gap-2 text-sm ">
          <span className="bg-[#F44C4C] text-white px-3 py-1 rounded-md font-semibold">
            {meal.meal}
          </span>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center gap-3">
            <img src={dif} alt="Difficulty" className="w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className="text-sm font-semibold text-[#343C6A]">
                {meal.difficulty.charAt(0).toUpperCase() + meal.difficulty.slice(1)}
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-3">
            <img src={hb} alt="Health Score" className="w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500">Health Score</p>
              <p className="text-sm font-semibold text-[#343C6A]">
                {meal.healthScore}/10
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-3">
            <img src={pot} alt="Cook Duration" className="w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500">Cook Duration</p>
              <p className="text-sm font-semibold text-[#343C6A]">
                {meal.duration}
              </p>
            </div>
          </div>
  
          <div className="flex items-center gap-3">
            <img src={steps} alt="Steps" className="w-5 h-5" />
            <div>
              <p className="text-xs text-gray-500">Total Steps</p>
              <p className="text-sm font-semibold text-[#343C6A]">
                {meal.steps.length} Steps
              </p>
            </div>
          </div>
        </div>
        {/* Add to Favourites Button Over Image */}
        <button
          className=" mt-30    bg-[#2682C0] text-white px-4 py-2 rounded-md font-medium"
          onClick={() => handleAdd(meal)}
        >
          Add to favourites
        </button>
  
        {/* Nutrition Info */}
        <div className="mt-8 grid grid-cols-2 grid-rows-2 w-[650px] h-[120px] gap-4 text-center text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-red-400">
                    <img src={calories} alt="Calories" className="w-5 h-5" />
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-100 myfont">Calories</p>
                      <p className="text-sm font-semibold text-white myfont">
                        {meal.calories} Kcal
                      </p>
                    </div>
                  </div>
        
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#8676FE]">
                    <img src={carbs} alt="Carbs" className="w-5 h-5" />
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-100 myfont">Carbs</p>
                      <p className="text-sm font-semibold text-white myfont">
                        {meal.carbs}g carbs
                      </p>
                    </div>
                  </div>
        
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#76B2DB]">
                    <img src={protiens} alt="Protein" className="w-5 h-5" />
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-100 myfont">Protein</p>
                      <p className="text-sm font-semibold text-white myfont">
                        {meal.protein}g protein
                      </p>
                    </div>
                  </div>
        
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FFA257]">
                    <img src={fats} alt="Fats" className="w-5 h-5" />
                    <div className="flex flex-col">
                      <p className="text-xs text-gray-100 myfont">Fats</p>
                      <p className="text-sm font-semibold text-white myfont">
                        {meal.fats}g fats
                      </p>
                    </div>
                  </div>
                </div>
  
        {/* Print Button */}
        <button className="mt-auto self-end bg-[#2682C0] text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <span>🖨️</span> print meal data
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default MealModal;