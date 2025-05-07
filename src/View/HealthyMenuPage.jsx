import { useState, useEffect } from "react";
import FeaturedMealCard from "../components/FeaturedMeal";
import Header from "../components/Header";
import MealList from "../components/MealList";
import AllMenuBar from "../components/AllMenuBar";
import { fetchMeals } from "../API/MealService";

const HealthyMenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedTag, setChooseTag] = useState("All");
  const [sortOption, setSortOption] = useState("calories");
  const [error, setError] = useState(null);

  const jwtToken = import.meta.env.VITE_JWT_TOKEN;

  useEffect(() => {
    const getMeals = async () => {
      try {
        const mealsData = await fetchMeals(jwtToken);
        setMeals(mealsData);
      } catch (err) {
        setError("Failed to fetch meals");
        console.error("Error fetching meals:", err);
      }
    };

    getMeals();
  }, [jwtToken]); // The hook will run once when the component mounts

  const handleAdd = (meal) => {
    if (!favourites.some((fav) => fav._id === meal._id)) {
      setFavourites([...favourites, meal]);
    }
  };

  const handleRemove = (id) => {
    setFavourites(favourites.filter((meal) => meal._id !== id));
  };

  return (
    <div className="w-full">
      <Header></Header>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          <FeaturedMealCard
            data={meals}
            favourites={favourites}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
          <h2 className="mt-[1%] myfont font-[600] text-[20px] text-[#343C6A] ml-[1%]">
            All Menu
          </h2>
          <AllMenuBar
            setChooseTag={setChooseTag}
            selectedTag={selectedTag}
            setSortOption={setSortOption}
          />
          <MealList
            data={meals}
            selectedTag={selectedTag}
            sortOption={sortOption}
            favourites={favourites}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />
        </>
      )}
    </div>
  );
};

export default HealthyMenuPage;
