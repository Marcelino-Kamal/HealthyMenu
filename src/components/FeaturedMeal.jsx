import React from "react";
import fimg from "../assets/food.png";
import dif from "../assets/Diff.svg";
import hb from "../assets/HB.svg";
import pot from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";
import arrows from "../assets/arrows.svg"

const nutritionStats = [
  { img: calories, label: "Calories", value: "450 kcal", bg: "bg-red-400" },
  { img: carbs, label: "Carbs", value: "40 gr", bg: "bg-[#8676FE]" },
  { img: protiens, label: "Proteins", value: "35 gr", bg: "bg-[#76B2DB]" },
  { img: fats, label: "Fats", value: "12 gr", bg: "bg-[#FFA257]" }
];

const mealDetails = [
  { img: dif, label: "Difficulty", value: "Medium" },
  { img: hb, label: "Health Score", value: "85/100" },
  { img: pot, label: "Cook Duration", value: "10 minutes" },
  { img: steps, label: "Total Steps", value: "4 steps" }
];

const FeaturedMeal = () => {
  return (
    <div className="p-4">
     <div className="flex items-center mb-1 ml-2 md:ml-4">
  <h2 className="myfont font-semibold text-lg md:text-xl text-[#343C6A] mr-2">
    Featured Meals
  </h2>
  <img src={arrows} className="w-15 h-15 ml-[780px]" alt="arrow icon" />
</div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-5xl bg-white rounded-xl p-4 shadow-md ml-2 md:ml-4">
        {/* Image Section */}
        <div className="w-full md:w-[35%] rounded-xl overflow-hidden">
          <img src={fimg} alt="Food" className="w-full h-full object-cover object-center" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full md:w-[45%]">
          <div className="flex flex-col gap-3">
            <h3 className="myfont font-semibold text-base md:text-lg text-[#343C6A]">
              Grilled Turkey Breast with Steamed Asparagus and Brown Rice
            </h3>
            <div className="bg-red-400 rounded-full myfont font-bold w-max px-3 py-1 text-[#343C6A] text-sm">
              Lunch
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {mealDetails.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <img src={item.img} alt={item.label} className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500 myfont">{item.label}</p>
                    <p className="text-sm font-semibold text-[#343C6A] myfont">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
          onClick={() => handleAdd(meal)}
          className="bg-[#2682C0] text-white font-medium myfont text-sm mt-4 py-2 px-6 rounded-full w-full">
            Add to favourites
          </button>
        </div>

        {/* Nutrition Section */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-[20%]">
          {nutritionStats.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg ${item.bg}`}>
              <img src={item.img} alt={item.label} className="w-5 h-5" />
              <div className="flex flex-col">
                <p className="text-xs text-gray-100 myfont">{item.label}</p>
                <p className="text-sm font-semibold text-white myfont">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMeal;