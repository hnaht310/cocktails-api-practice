const fetchDrinks = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.drinks;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDrinks;
