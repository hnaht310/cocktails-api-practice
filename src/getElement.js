const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (!element) {
    return 'No such element exists.';
  }
  return element;
};

export default getElement;
