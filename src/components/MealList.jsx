import { useState } from "react";
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

const meals = [
  {
    id: 1,
    title: "Avocado Toast with Poached Egg",
    img: toast,
    tag: "Breakfast",
    color: "bg-blue-200",
    difficulty: "Easy",
    time: "15 min",
    steps: "5 steps",
    nutrition: {
      calories: "320 kcal",
      carbs: "30g",
      protein: "14g",
      fats: "18g",
    },
    healthScore: 9,
  },
  {
    id: 2,
    title: "Grilled Shrimp Tacos with Mango Salsa",
    img: shrimp,
    tag: "Lunch",
    color: "bg-[#F44C4C]",
    difficulty: "Medium",
    time: "30 min",
    steps: "8 steps",
    nutrition: {
      calories: "400 kcal",
      carbs: "45g",
      protein: "28g",
      fats: "12g",
    },
    healthScore: 8,
  },
  {
    id: 3,
    title: "Baked Chicken Breast with Quinoa and Kale",
    img: salad,
    tag: "Dinner",
    color: "bg-[#8676FE]",
    difficulty: "Medium",
    time: "1 hour",
    steps: "25 steps",
    nutrition: {
      calories: "480 kcal",
      carbs: "50g",
      protein: "40g",
      fats: "15g",
    },
    healthScore: 9,
  },
  {
    id: 4,
    title: "Salad",
    img: salad,
    tag: "Snack",
    color: "bg-[#FFA257]",
    difficulty: "Easy",
    time: "45 min",
    steps: "18 steps",
    nutrition: {
      calories: "280 kcal",
      carbs: "38g",
      protein: "10g",
      fats: "7g",
    },
    healthScore: 5,
  },
];


const MealList = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAdd = (meal) => {
    if (!favourites.some((fav) => fav.id === meal.id)) {
      setFavourites([...favourites, meal]);
    }
  };

  const handleRemove = (id) => {
    setFavourites(favourites.filter((meal) => meal.id !== id));
  };

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
      <h2 className="mt-[1%] myfont font-[600] text-[20px] text-[#343C6A] ml-[1%]">
        All Menu
      </h2>
      <AllMenuBar />

      <div className="flex">
        <div className="flex-1">{meals.map((meal) => renderCard(meal))}</div>

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
