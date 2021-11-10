import React, { Fragment } from "react";
import CocktailCard from "../CocktailCard";
import { CustomFlexContainer } from "./style";
import ComponentForEmptyList from '../ComponentForEmptyList/index';

const CocktailSection = ({ cocktailCardProps, sliceI, sliceF, isLoading, isError, data, title }) => {

  if (data == null || undefined ) {
    return <ComponentForEmptyList />
   } else

  //  if (error) {
  //   return "server error"
  //  } 
   
   return (
    <Fragment>
    {title}
      <CustomFlexContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error while fetching posts</div>
        ) : (
          data
            .slice(sliceI, sliceF)
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
