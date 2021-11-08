/* eslint-disable no-unused-vars */
import axios from "axios";

/**
 * @desc fetch a list of ...
 */
export const fetchCocktails = async () => {
  const res = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  return res.data.drinks;
};

export const FetchSingleCocktail = async ({ queryKey }) => {
  const [_key, strDrink] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );
  return res.data.drinks;
};

export const FetchSingleCocktailById = async ({ queryKey }) => {
  const [_key, idDrink] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );
  return res.data.drinks;
};

export const FetchIngredients = async ({ queryKey }) => {
  const [_key, strIngredient] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${strIngredient}`
  );
  return res.data.ingredients;
};

export const FetchAll = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?${query}=list`
  );
  return res.data.drinks;
};

export const FetchByLetter = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`
  );
  return res.data.drinks;
};




