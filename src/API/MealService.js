
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/meals', 
});

// Function to fetch all meals
export const fetchMeals = async (jwtToken) => {
  try {
    
    const response = await api.get('/', {
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
