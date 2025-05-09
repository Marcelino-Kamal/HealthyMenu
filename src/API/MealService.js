import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// =============================
// Meals
// =============================
export const fetchMeals = async (jwtToken) => {
  try {
    const response = await api.get('/meals', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};
export const FetchAMeal = async(mealId,jwtToken) =>{
  try {
    const response = await api.get(`/meals/${mealId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching meal:', error);
    throw error;
  }
};

// =============================
// Favorite Meals for Current User
// =============================

// GET all favorite meals
export const getFavorites = async (jwtToken) => {
  try {
    const response = await api.get('/users/current/fav', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data.favMeals; 
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};

// POST a new favorite meal
export const addFavorite = async (mealId, jwtToken) => {
  try {
    await api.post(
      `/users/current/fav/${mealId}`,
      {}, 
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
  } catch (error) {
    console.error("Error adding favorite:", error.response?.data || error);
    throw error;
  }
};

// DELETE a favorite meal
export const deleteFavorite = async (mealId, jwtToken) => {
  try {
    const response = await api.delete(`/users/current/fav/${mealId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting favorite:', error);
    throw error;
  }
};
