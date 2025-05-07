// mealService.js
import axios from 'axios';

// Create an Axios instance with your API base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api/meals', // Change this to your actual API base URL
});

// Function to fetch all meals
export const fetchMeals = async (jwtToken) => {
  try {
    // Make the GET request with JWT token in Authorization header
    const response = await api.get('/', {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data.meals; // Assuming the response has a 'meals' property
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};
