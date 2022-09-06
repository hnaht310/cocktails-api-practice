import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const section = getElement('.section-center');
const title = getElement('.title');

const displayDrinks = (data) => {
  hideLoading();
  console.log(data);
  if (!data) {
    title.textContent = 'No drinks matched your query';
    section.innerHTML = '';
    return;
  }
  // display list of drinks
  section.innerHTML = data
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html?id=${id}">
                <article class="cocktail" data-id=${id}>
                <img src=${image} alt=${name} />
                <h3>${name}</h3>
                </article>
            </a>`;
    })
    .join('');
  title.textContent = '';
};

export default displayDrinks;
