import AllMenuBar from "./AllMenuBar";
import toast from "../assets/toast.jpg";
import salad from "../assets/salad.jpg";
import shrimp from "../assets/shrimp.jpg";
import diff from "../assets/Diff.svg";
import cook from "../assets/cook-duration.svg";
import steps from "../assets/steps.svg";
import calories from "../assets/calories.svg";
import carbs from "../assets/carbs.svg";
import fats from "../assets/fats.svg";
import protiens from "../assets/protiens.svg";

const MealList = () => {
  return (
    <>
      <h2 className="mt-[3%] myfont font-[600] text-[20px] text-[#343C6A] ml-[1%]">
        All Menu
      </h2>
      <AllMenuBar />
      <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px] ">
        {/* Image */}
        <img
          src={toast}
          alt="Avocado Toast"
          className="w-[152px] h-[104px] rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-1 ">
            <span className="bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-1 rounded w-[72px] h-[22px]">
              Breakfast
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={diff} className="w-[20px] h-[20px]" />
              Easy
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={cook} className="w-[20px] h-[20px]" />
              15 min
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={steps} className="w-[20px] h-[20px]" />5 steps
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">
            Avocado Toast with Poached Egg
          </h2>

          {/* Nutrition */}
          <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
            <div className="flex items-center gap-1 px-2">
              <img src={calories} className="w-4 h-4" alt="calories" />
              320 kcal
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={carbs} className="w-4 h-4" alt="carbs" />
              30g carbs
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={protiens} className="w-4 h-4" alt="protein" />
              14g protein
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={fats} className="w-4 h-4" alt="fats" />
              18g fats
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-2">
          {/* Health Score */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Health Score:</span>{" "}
            9/10
            <div className="flex mt-1 space-x-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-4 rounded-full ${
                    i < 9 ? "bg-blue-400" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="bg-gray-400 text-white px-4 py-1 rounded-lg text-sm font-medium">
            Add to favourites
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px]">
        {/* Image */}
        <img
          src={shrimp}
          alt="Avocado Toast"
          className="w-[152px] h-[104px] rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="bg-[#F44C4C] text-[#343C6A] text-xs font-semibold px-2 py-1 rounded w-[72px] h-[22px]">
              Lunch
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={diff} className="w-[20px] h-[20px]" />
              Medium
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={cook} className="w-[20px] h-[20px]" />
              30 min
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={steps} className="w-[20px] h-[20px]" />8 steps
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">
            Grilled Shrimp Tacos with Mango Salsa
          </h2>

          {/* Nutrition */}
          <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
            <div className="flex items-center gap-1 px-2">
              <img src={calories} className="w-4 h-4" alt="calories" />
              400 kcal
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={carbs} className="w-4 h-4" alt="carbs" />
              45g carbs
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={protiens} className="w-4 h-4" alt="protein" />
              28g protein
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={fats} className="w-4 h-4" alt="fats" />
              12g fats
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-2">
          {/* Health Score */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Health Score:</span>{" "}
            8/10
            <div className="flex mt-1 space-x-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-4 rounded-full ${
                    i < 8 ? "bg-blue-400" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="bg-gray-400 text-white px-4 py-1 rounded-lg text-sm font-medium">
            Add to favourites
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px]">
        {/* Image */}
        <img
          src={salad}
          alt="Avocado Toast"
          className="w-[152px] h-[104px] rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="bg-[#8676FE] text-blue-700 text-xs font-semibold px-2 py-1 rounded w-[72px] h-[22px]">
              Dinner
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={diff} className="w-[20px] h-[20px]" />
              Medium
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={cook} className="w-[20px] h-[20px]" />1 hour
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={steps} className="w-[20px] h-[20px]" />
              25 steps
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">
            Baked Chicken Breast with Quinoa and Kale
          </h2>

          {/* Nutrition */}
          <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
            <div className="flex items-center gap-1 px-2">
              <img src={calories} className="w-4 h-4" alt="calories" />
              480 kcal
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={carbs} className="w-4 h-4" alt="carbs" />
              50g carbs
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={protiens} className="w-4 h-4" alt="protein" />
              40g protein
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={fats} className="w-4 h-4" alt="fats" />
              15g fats
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-2">
          {/* Health Score */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Health Score:</span>{" "}
            9/10
            <div className="flex mt-1 space-x-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-4 rounded-full ${
                    i < 9 ? "bg-blue-400" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#2682C0] text-white px-4 py-1 rounded-lg text-sm font-medium">
            Add to favourites
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white shadow rounded-xl p-4 space-x-4 w-full max-w-5xl m-[10px]">
        {/* Image */}
        <img
          src={salad}
          alt="Avocado Toast"
          className="w-[152px] h-[104px] rounded-lg object-cover"
        />

        {/* Details */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-1">
            <span className="bg-[#FFA257] text-blue-700 text-xs font-semibold px-2 py-1 rounded w-[72px] h-[22px]">
              Snack
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={diff} className="w-[20px] h-[22px] " />
              Easy
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={cook} className="w-[20px] h-[20px]" />
              45 min
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-8 py-1 rounded flex flex-row">
              <img src={steps} className="w-[20px] h-[20px]" />
              18 steps
            </span>
          </div>

          {/* Title */}
          <h2 className="text-lg font-bold text-gray-800">salad</h2>

          {/* Nutrition */}
          <div className="mt-2 flex items-center text-sm text-gray-700 divide-x divide-orange-300">
            <div className="flex items-center gap-1 px-2">
              <img src={calories} className="w-4 h-4" alt="calories" />
              280 kcal
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={carbs} className="w-4 h-4" alt="carbs" />
              38g carbs
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={protiens} className="w-4 h-4" alt="protein" />
              10g protein
            </div>
            <div className="flex items-center gap-1 px-2">
              <img src={fats} className="w-4 h-4" alt="fats" />
              7g fats
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-2">
          {/* Health Score */}
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">Health Score:</span>{" "}
            5/10
            <div className="flex mt-1 space-x-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-4 rounded-full ${
                    i < 5 ? "bg-blue-400" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#2682C0] text-white px-4 py-1 rounded-lg text-sm font-medium">
            Add to favourites
          </button>
        </div>
      </div>
    </>
  );
};
export default MealList;
