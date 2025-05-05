import { useState } from "react";
import FeaturedMealCard from "../components/FeaturedMeal";
import Header from "../components/Header";
import MealList from "../components/MealList";
import toast from "../assets/toast.jpg";
import salad from "../assets/salad.jpg";
import shrimp from "../assets/shrimp.jpg";
import AllMenuBar from "../components/AllMenuBar";

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

const HealthyMenuPage = () => {
    const [selectedTag,setChooseTag] = useState("All");
    const [sortOption , setSortOption] = useState("calories");
  return (
    <>
      <Header></Header>
      <FeaturedMealCard />
      <h2 className="mt-[1%] myfont font-[600] text-[20px] text-[#343C6A] ml-[1%]">
        All Menu
      </h2>
      <AllMenuBar setChooseTag = {setChooseTag} selectedTag={selectedTag} setSortOption={setSortOption}  />
      <MealList data={meals} selectedTag={selectedTag} sortOption={sortOption}></MealList>
    </>
  );
};

export default HealthyMenuPage;
