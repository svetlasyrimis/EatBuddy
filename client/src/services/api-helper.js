import axios from 'axios';

export const fetchMeal = async () => {
  const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
  console.log(resp.data.meals[0].strMeal)
  console.log(resp.data.meals[0].strMealThumb)
  return resp.data.meals[0]
}

export const fetchDrink = async () => {
  const resp = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  return resp.data.drinks[0]
}