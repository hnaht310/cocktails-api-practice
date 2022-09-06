import getElement from './getElement.js';
import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';

const form = getElement('.search-form');
const input = getElement('[name="drink"]');

input.addEventListener('keyup', async (e) => {
  console.log(e.target.value);
  const value = e.target.value;
  if (!value) return;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  const drinksData = await fetchDrinks(url);
  // console.log(drinksData);
  displayDrinks(drinksData);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
