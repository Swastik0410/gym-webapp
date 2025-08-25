import axios from "axios";

const API_URL = "https://api.api-ninjas.com/v1/exercises";
const API_KEY = import.meta.env.VITE_API_NINJAS_KEY;

export async function fetchExercises(query = "") {
  try {
    const response = await axios.get(API_URL, {
      headers: { "X-Api-Key": API_KEY },
      params: { name: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
}
