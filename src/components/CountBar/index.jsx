/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";
import { useQueries } from "react-query";
import Drinks from "../../assets/images/cocktail-logo.png";
import Image2 from "../../assets/images/image2.png";
import Lime from "../../assets/images/ingredient-logo.png";
import { FetchAll, fetchCocktails } from "../../services/fetchPosts.service";
import {
  FetchAllKey, fetchSingleCocktailKey
} from "../../utils/Query/queryKeys";
import { Trafalgar } from "../Typography";
import { ImageIcon, Span } from "./style";

export default function CountBar(type) {
  const [ingredient, setIngredient] = useState("i");
  const [categories, setCategories] = useState("c");
  const [glasses, setGlasses] = useState("g");
  const [alcoholic, setalcoholic] = useState("a");
  const [cocktail, setCocktail] = useState("cocktail");

  const queryResults = useQueries([
    { queryKey: [FetchAllKey, ingredient], queryFn: FetchAll },

    { queryKey: [fetchSingleCocktailKey, cocktail], queryFn: fetchCocktails },

    { queryKey: [FetchAllKey, categories], queryFn: FetchAll },

    { queryKey: [FetchAllKey, glasses], queryFn: FetchAll },

    { queryKey: [FetchAllKey, alcoholic], queryFn: FetchAll },
  ]);
  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>No cocktails found</div>
      ) : (
        queryResults.data !== null && (
          <Span>
            <ImageIcon src={Drinks} alt='' />
            <Trafalgar>Total Drinks: {queryResults[1].data.length}</Trafalgar>
            <ImageIcon src={Lime} alt='' />
            <Trafalgar>
              Total Categories: {queryResults[2].data.length}
            </Trafalgar>
            <ImageIcon src={Image2} alt='' />
            <Trafalgar>Total Glasses: {queryResults[3].data.length}</Trafalgar>
            <ImageIcon src={Lime} alt='' />
            <Trafalgar>
              Total Alcoholic: {queryResults[4].data.length}
            </Trafalgar>
          </Span>
        )
      )}
    </Fragment>
  );
}
