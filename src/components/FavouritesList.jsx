import FavBar from "./FavBar";
import MealCard from "./MealCard";
import { useState } from "react";
const FavouriteList = ({ favourites, handleRemove }) => {
  const [favSortOption, setfavSortOption] = useState("hard");
  const [favselectedTag, setfavChooseTag] = useState("All");
  const difficultyOrder = {
    easy: 1,
    medium: 2,
    hard: 3,
  };

  return (
    <>
      <div className="w-full justify-center bg-[#edf3f7] p-4 ">
        <h2 className="text-2xl font-bold text-[#343C6A] mb-4 text-center  ">
          Favourite Meals
        </h2>
        {favourites.length > 0 ? (
          <>
            <FavBar
              setfavChooseTag={setfavChooseTag}
              favselectedTag={favselectedTag}
              setfavSortOption={setfavSortOption}
            />
            {(() => {
              const filteredFavourites = [...favourites]
                .filter(
                  (mealx) =>
                    favselectedTag === "All" || mealx.meal === favselectedTag
                )
                .sort((a, b) => {
                  if (favSortOption === "easy") {
                    return (
                      difficultyOrder[a.difficulty] -
                      difficultyOrder[b.difficulty]
                    );
                  } else if (favSortOption === "hard") {
                    return (
                      difficultyOrder[b.difficulty] -
                      difficultyOrder[a.difficulty]
                    );
                  } else {
                    return 0; // no sorting fallback
                  }
                });

              return filteredFavourites.length === 0 ? (
                <p className="text-gray-500 text-center">
                  No meals found in this category.
                </p>
              ) : (
                filteredFavourites.map((mealx) => (
                  <MealCard
                    key={mealx._id}
                    mealx={mealx}
                    isFavourite={true}
                    handleRemove={handleRemove}
                    handleAdd={null}
                  />
                ))
              );
            })()}
          </>
        ) : (
          <p className="text-gray-500 text-center ml-35">No favourites yet.</p>
        )}
      </div>
    </>
  );
};
export default FavouriteList;
