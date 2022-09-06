import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const drinkContainer = getElement('.single-drink');
const displayDrink = (data) => {
  hideLoading();
  console.log(data);
  const singleDrinkData = data[0];
  console.log(singleDrinkData);
  const {
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: desc,
  } = singleDrinkData;
  let ingredientsList = [
    singleDrinkData.strIngredient1,
    singleDrinkData.strIngredient2,
    singleDrinkData.strIngredient3,
    singleDrinkData.strIngredient4,
    singleDrinkData.strIngredient5,
    singleDrinkData.strIngredient6,
    singleDrinkData.strIngredient7,
  ];
  ingredientsList = ingredientsList
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join('');
  document.title = name.toLowerCase();
  drinkContainer.innerHTML = `<img src=${image} class="drink-img" />
                              <article class="drink-info">
                                <h2 class="drink-name">${name}</h2>
                                <p class="drink-desc">${desc}</p>
                                <ul class="drink-ingredients">${ingredientsList}</ul>
                                <a href="index.html" class="btn">all cocktails</a>
                             </article>`;
};

export default displayDrink;
