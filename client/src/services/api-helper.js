import axios from 'axios';
import { api } from './auth'


const drinkRecipeURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const foodRecipeURL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

export const fetchFood = async () => {
  const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
  console.log(resp.data.meals[0].strMeal)
  console.log(resp.data.meals[0].strMealThumb)
  return resp.data.meals[0]
}

export const fetchDrink = async () => {
  const resp = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  return resp.data.drinks[0]
}
//for later use - to get the recipe right away ( Front end)
export const getFoodRecipe = async (id) => {
  const resp = await axios.get(`${foodRecipeURL}${id}`);
  console.log(resp.data.meals[0])
  return resp.data.meals[0].strInstructions
}
export const getDrinkRecipe = async (id) => {
  const resp = await axios.get(`${drinkRecipeURL}${id}`);
  console.log(resp.data.drinks[0])
  return resp.data.drinks[0].strInstructions
}

