import React, {Fragment}from "react";
import { useQuery } from "react-query";
import { fetchCocktails } from "../../services/fetchPosts.service";
import { fetchCocktailsKey } from "../../utils/Query/queryKeys";
import CocktailCard from "../CocktailCard";
import { CustomFlexContainer } from "./style";
import { GreatPrimer } from "../Typography";

const CocktailSection = ({ cocktailCardProps }) => {
  const { isLoading, isError, data } = useQuery(
    fetchCocktailsKey,
    fetchCocktails
  );

  return (
    <Fragment>
      <GreatPrimer style={{textAlign: "center"}}>Popular Drinks</GreatPrimer>
      <CustomFlexContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error while fetching posts</div>
        ) : (
          data
            .slice(0, 8)
            .map((value) => (
              <CocktailCard
                cocktail={value}
                key={value.idDrink}
                {...cocktailCardProps}
              />
            ))
        )}
      </CustomFlexContainer>
    </Fragment>
  );
};

export default CocktailSection;
