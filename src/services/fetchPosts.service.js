/* eslint-disable no-unused-vars */
import axios from "axios";

/**
 * @desc fetch a list of ...
 */
export const fetchCocktails = async () => {
  const {
    data: { drinks },
  } = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
  );
  return drinks;
};

export const FetchSingleCocktail = async ({ queryKey }) => {
  const [_key, strDrink] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`
  );
  return drinks;
};

export const FetchSingleCocktailById = async ({ queryKey }) => {
  const [_key, idDrink] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );
  return drinks;
};

export const FetchIngredients = async ({ queryKey }) => {
  const [_key, strIngredient] = queryKey;
  const {
    data: { ingredients },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${strIngredient}`
  );
  return ingredients;
};

export const FetchAll = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/list.php?${query}=list`
  );
  return drinks;
};

export const FetchByLetter = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`
  );
  return drinks;
};

export const FetchCocktailByName = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );
  return drinks;
};

export const FetchCocktailByIngredient = async ({ queryKey }) => {
  const [_key, query] = queryKey;
  const {
    data: { drinks },
  } = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
  );
  return drinks;
};
