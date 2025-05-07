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
          {[...data]
            .filter(
              (mealx) => selectedTag === "All" || mealx.meal === selectedTag
            )
            .sort((a, b) => {
              return b[sortOption] - a[sortOption];
            })
            .map((mealx) => 
            <MealCard
            key={mealx._id}
            mealx={mealx}
            isFavourite={false}
            handleAdd={handleAdd}
            handleRemove={handleRemove}
          />)}
        </div>
      </div>
    </>
  );
};

export default MealList;
