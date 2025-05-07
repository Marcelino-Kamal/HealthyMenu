import React from "react";

const MealModal = ({ meal, isOpen, onClose }) => {
  if (!isOpen || !meal) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold myfont text-[#343C6A] mb-4">
          {meal.name}
        </h2>
        <img src={meal.image} alt={meal.title} className="w-full h-40 object-cover rounded-lg mb-4" />
        <p className="text-sm text-gray-600 mb-2">Health Score: {meal.healthScore}/10</p>
        <p className="text-sm text-gray-600 mb-2">Difficulty: {meal.difficulty}</p>
        <p className="text-sm text-gray-600 mb-2">Time: {meal.duration}</p>
        <button onClick={onClose} className="mt-4 bg-[#2682C0] text-white py-2 px-4 rounded-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default MealModal;
