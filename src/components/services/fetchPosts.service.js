import axios from "axios";

/**
 * @desc fetch a list of posts
 */
export const fetchCocktails = async () => {
  const res = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  return res?.data.drinks;
};

export const FetchSingleCocktail = async ({ queryKey }) => {
  const [_key, strDrink] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );
  return res?.data.drinks;
};
