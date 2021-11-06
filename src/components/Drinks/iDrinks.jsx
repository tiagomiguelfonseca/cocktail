
import React from "react";
import { useQuery } from "react-query";
import { fetchCocktailsKey } from "../../utils/Query/queryKeys";
import { fetchCocktails } from "../services/fetchPosts.service";

const Idrinks = ({useKey}) => {
  const {  isLoading, isError, isSuccess, refetch, remove, data, error} = useQuery(fetchCocktailsKey, fetchCocktails);

return (
  <div>
    {isLoading ? (
      <div>Loading...</div>
    ) : isError ? (
      <div>An error while fetching posts</div>
    ) : (
      data?.map((post) => (
        <div key={post?.idDrink}>
          <div>{post?.strDrink}</div>
          <div>{post?.strInstructions}</div>
        </div>
      ))
    )}
  </div>
);
};
export default Idrinks;