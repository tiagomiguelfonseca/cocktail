import React from "react";
import { Link } from "react-router-dom";
import { GreatPrimer } from "../Typography";
import { CustomFlexContainer, ImageContainer } from "./style";

export default function CocktailCard({ cocktail }) {
  const { idDrink, strDrink, strDrinkThumb } = cocktail;
  return (
    <CustomFlexContainer>
      <Link to={`/drink/${idDrink}`}>
        <ImageContainer src={strDrinkThumb} alt={strDrink} />
      <GreatPrimer>{strDrink}</GreatPrimer></Link>
    </CustomFlexContainer>
  );
}
