import React, { useState, Fragment } from "react";
import { useQuery } from "react-query";
import { fetchSingleCocktailKey } from "../../utils/Query/queryKeys";
import { FetchSingleCocktail } from "../services/fetchPosts.service";
import { FlexContainer, ImageContainer } from "./style";

const Drink = () => {
  // fetching the post with the id of 1
  const [queryKey, setQueryKey] = useState("");

  const { isLoading, isError, isSuccess, refetch, remove, data, error } =
    useQuery([fetchSingleCocktailKey, queryKey], FetchSingleCocktail);
  console.log(data);
  return (
    <div>
      <input type={queryKey} onChange={(e) => setQueryKey(e.target.value)} />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>No cocktails found</div>
      ) : (
          <FlexContainer>
            {data.map((post, index) => {
              return (
                <li key={post.idDrink}>
                  {post.strDrink}
                  <p key={index}>{post.strCategory}</p>
                  <p key={index}>{post.strInstructions}</p>
                  <ImageContainer src={post.strDrinkThumb} alt={post.strDrink} />
                </li>
              );
            })}
          </FlexContainer>
      )}
    </div>
  );
};
export default Drink;
