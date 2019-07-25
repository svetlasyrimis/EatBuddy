import axios from 'axios';

export const fetchFood = async () => {
  const resp = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
  console.log(resp.data.meals[0].strMeal)
  console.log(resp.data.meals[0].strMealThumb)
  console.log(resp)
  return resp.data.meals[0]
}

export const fetchDrink = async () => {
  const resp = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  console.log(resp.data.drinks)
  return resp.data.drinks[0]

}

export const fetchMealId = async (id) => {
  const resp = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  return resp.data.meals[0]

}
export const fetchDrinkId = async (id) => {
  const resp = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

  return resp.data.drinks[0]
}
