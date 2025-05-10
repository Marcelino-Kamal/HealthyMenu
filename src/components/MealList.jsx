import MealCard from "./MealCard";

const MealList = ({
  data,
  selectedTag,
  handleAdd,
  handleRemove,
  sortOption,
}) => {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          {(() => {
            const filteredMeals = [...data]
              .filter(
                (mealx) => selectedTag === "All" || mealx.meal === selectedTag
              )
              .sort((a, b) => b[sortOption] - a[sortOption]);

            return filteredMeals.length > 0 ? (
              filteredMeals.map((mealx) => (
                <MealCard
                  key={mealx._id}
                  mealx={mealx}
                  isFavourite={false}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                No meals available for this category.
              </p>
            );
          })()}
        </div>
      </div>
    </>
  );
};

export default MealList;
