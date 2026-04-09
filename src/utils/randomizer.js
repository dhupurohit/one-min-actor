export const getRandomItem = (arr, lastItem = null) => {
  if (arr.length === 0) return null;

  let newItem;
  do {
    newItem = arr[Math.floor(Math.random() * arr.length)];
  } while (arr.length > 1 && newItem === lastItem);

  return newItem;
};