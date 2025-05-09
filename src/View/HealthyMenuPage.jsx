import { useState, useEffect } from "react";
import FeaturedMealCard from "../components/FeaturedMeal";
import Header from "../components/Header";
import MealList from "../components/MealList";
import AllMenuBar from "../components/AllMenuBar";
import { fetchMeals,getFavorites,deleteFavorite,addFavorite } from "../API/MealService";
import FavouriteList from "../components/FavouritesList";

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
  }, [jwtToken]); 
  useEffect(() => {
    const getFavMeals = async () => {
      try {
        const mealsData = await getFavorites(jwtToken);
        setFavourites(mealsData);
      } catch (err) {
        setError("Failed to fetch meals");
        console.error("Error fetching meals:", err);
      }
    };

    getFavMeals();
  }, [jwtToken]);

  const handleAdd = async(meal) => {
    try{
      if (!favourites.some((fav) => fav._id === meal._id)) {
        await addFavorite(meal._id,jwtToken)
        setFavourites([...favourites, meal]);
      }
    }catch{
        console.log("failed to add");
    }
  };

  const handleRemove = async(id) => {
      try{
       await deleteFavorite(id,jwtToken)
       setFavourites(favourites.filter((meal) => meal._id !== id));
      }catch{
        console.log("failed to delete")
      }
  };

  return (
    <>
      <div className="flex">
        {/* 1st Section */}
        <div className="w-full">
          <Header data={meals} handleAdd={handleAdd}/>
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <>
              <FeaturedMealCard data={meals} handleAdd={handleAdd} />
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
        </div >
          {/* 2nd Section */}
          <div className="w-full">
          <FavouriteList
           favourites={favourites}
           handleRemove={handleRemove}
          />
          </div>
          
      </div>
    </>
  );
};

export default HealthyMenuPage;
