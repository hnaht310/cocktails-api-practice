import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// const drinkData = await fetchDrinks(baseURL)
console.log(window.location.search);
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const drinkData = await fetchDrinks(
  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
);
displayDrink(drinkData);
