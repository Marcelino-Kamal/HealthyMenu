import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import dif from "../assets/Diff.svg";
import hb from "../assets/HB.svg";
import pot from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";
import larr from "../assets/leftarr.svg";
import rarr from "../assets/rarr.svg";
import MealModal from "./MealModel";

const FeaturedMeal = ({ data, handleAdd }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const card = (mealx) => (
    <SwiperSlide>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6  bg-white rounded-xl p-4 shadow-md w-full ">
        {/* Image Section */}
        <div
          className="w-full md:w-[35%] rounded-xl overflow-hidden"
          onClick={() => {
            setSelectedMeal(mealx);
            setIsModalOpen(true);
          }}
        >
          <img
            src={mealx.image}
            alt={mealx.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between w-full md:w-[45%]">
          <div className="flex flex-col gap-3">
            <h3 className="myfont font-semibold text-base md:text-lg text-[#343C6A]">
              {mealx.name}
            </h3>
            <div
              className={`rounded-full myfont font-bold w-max px-3 py-1 text-[#343C6A] text-sm
              ${mealx.meal === "breakfast" ? "bg-[#76B2DB]" : ""}
              ${mealx.meal === "lunch" ? "bg-[#F44C4C]" : ""}
              ${mealx.meal === "snacks" ? "bg-[#FFA257]" : ""}
              ${mealx.meal === "dinner" ? "bg-[#8676FE]" : ""}
              `}
            >
              {mealx.meal.charAt(0).toUpperCase() + mealx.meal.slice(1)}
            </div>
            {/* Meal Details section */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <img src={dif} alt="Difficulty" className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 myfont">Difficulty</p>
                  <p className="text-sm font-semibold text-[#343C6A] myfont">
                    {mealx.difficulty.charAt(0).toUpperCase() +
                      mealx.difficulty.slice(1)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src={hb} alt="Health Score" className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 myfont">Health Score</p>
                  <p className="text-sm font-semibold text-[#343C6A] myfont">
                    {mealx.healthScore}/10
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src={pot} alt="Cook Duration" className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 myfont">Cook Duration</p>
                  <p className="text-sm font-semibold text-[#343C6A] myfont">
                    {mealx.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src={steps} alt="Steps" className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 myfont">Total Steps</p>
                  <p className="text-sm font-semibold text-[#343C6A] myfont">
                    {mealx.steps.length} Steps
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => handleAdd(mealx)}
            className="bg-[#2682C0] text-white font-medium myfont text-sm mt-4 py-2 px-6 rounded-full w-full"
          >
            Add to favourites
          </button>
        </div>

        {/* Nutrition Section */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 w-full md:w-[20%]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-red-400">
            <img src={calories} alt="Calories" className="w-5 h-5" />
            <div className="flex flex-col">
              <p className="text-xs text-gray-100 myfont">Calories</p>
              <p className="text-sm font-semibold text-white myfont">
                {mealx.calories} Kcal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#8676FE]">
            <img src={carbs} alt="Carbs" className="w-5 h-5" />
            <div className="flex flex-col">
              <p className="text-xs text-gray-100 myfont">Carbs</p>
              <p className="text-sm font-semibold text-white myfont">
                {mealx.carbs}g carbs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#76B2DB]">
            <img src={protiens} alt="Protein" className="w-5 h-5" />
            <div className="flex flex-col">
              <p className="text-xs text-gray-100 myfont">Protein</p>
              <p className="text-sm font-semibold text-white myfont">
                {mealx.protein}g protein
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#FFA257]">
            <img src={fats} alt="Fats" className="w-5 h-5" />
            <div className="flex flex-col">
              <p className="text-xs text-gray-100 myfont">Fats</p>
              <p className="text-sm font-semibold text-white myfont">
                {mealx.fats}g fats
              </p>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
  return (
    <div className="p-4 flex flex-col items-start">
      <div className="flex items-center mb-1 ml-2 md:ml-4">
        <h2 className="myfont font-semibold text-lg md:text-xl text-[#343C6A] mr-2">
          Featured Meals
        </h2>
        {/* Button Wrapper */}
        <div className="ml-[780px]">
          {/* Prev Button */}
          <button className="hover:bg-blue-500 rounded-4xl" id="custom-prev">
            <img src={larr} className="w-6 h-6" alt="Prev arrow" />
          </button>
          {/*Next Button */}
          <button className="hover:bg-blue-500 rounded-4xl" id="custom-next">
            <img src={rarr} className="w-6 h-6" alt="Next arrow" />
          </button>
        </div>
      </div>
      <div className="max-w-5xl ">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: "#custom-next",
            prevEl: "#custom-prev",
          }}
          className="max-w-5xl bg-white rounded-xl p-4 shadow-md"
        >
          {data.map((mealx) => card(mealx))}
        </Swiper>
        <MealModal
          meal={selectedMeal}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
};

export default FeaturedMeal;
