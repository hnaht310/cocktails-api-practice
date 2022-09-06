import fetchDrinks from './src/fetchDrinks.js';
import displayDrinks from './src/displayDrinks.js';
import './src/searchForm.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

// fetch drink data
const drinksData = await fetchDrinks(url);
// display drinks
displayDrinks(drinksData);
// window.addEventListener('load', () => {
//   displayDrinks(drinksData);
// });
