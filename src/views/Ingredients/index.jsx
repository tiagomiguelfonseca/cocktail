import React from "react";
import { useQueries } from "react-query";
import { useSearchParams } from "react-router-dom";
import CocktailSection from "../../components/CocktailSection";
import { Canon } from "../../components/Typography";
import Layout from "../../containers/Layout";
import {
  FetchCocktailByIngredient, FetchIngredients
} from "../../services/fetchPosts.service";
import {
  FetchCocktailByIngredientKey, fetchSingleIngredientKey
} from "../../utils/Query/queryKeys";
import { CustomMaincontainer, FlexCaontainer, FlexColumn } from "./style";

export default function Ingredient() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const i = searchParams.get("i");

  const queryResults = useQueries([
    { queryKey: [fetchSingleIngredientKey, i], queryFn: FetchIngredients },
    {
      queryKey: [FetchCocktailByIngredientKey, i],
      queryFn: FetchCocktailByIngredient,
    },
  ]);
  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);

  return (
    <Layout>
      <CustomMaincontainer>
        <FlexCaontainer>
          <FlexColumn>
            {isLoading
              ? "is Loading"
              : isError
              ? ""
              : queryResults[0]?.data?.map((v, index) => (
                  <div key={index}>
                    <Canon>{v.strIngredient}</Canon>
                    <img
                      src={`https://www.thecocktaildb.com/images/ingredients/${v.strIngredient}-Medium.png`}
                      alt=''
                    />
                  </div>
                ))}
          </FlexColumn>
          <FlexColumn>
            <CocktailSection
              data={queryResults[1]?.data}
              isLoading={isLoading}
              isError={isError}
              title={<Canon>Drinks</Canon>}
            />
          </FlexColumn>
        </FlexCaontainer>
      </CustomMaincontainer>
    </Layout>
  );
}
