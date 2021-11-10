import React from "react";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import { GreatPrimer } from "../Typography";
import { CustomFlexContainer, ImageContainer } from "./style";

export default function CocktailCard({ cocktail }) {
  const { idDrink, strDrink, strDrinkThumb } = cocktail;
  const [searchParams] = useSearchParams();

  function appendSearchParams(obj) {
    const sp = createSearchParams(searchParams);
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach((v) => sp.append(key, v));
      } else if (value === undefined) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });
    return sp;
  }

  return (
    <CustomFlexContainer>
      <Link to={`/drink?${appendSearchParams({d: idDrink})}`}>
        <ImageContainer src={strDrinkThumb} alt={strDrink} />
      <GreatPrimer>{strDrink}</GreatPrimer></Link>
    </CustomFlexContainer>
  );
}
