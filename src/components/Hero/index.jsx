import React from "react";
import LeftImage from "../../assets/images/cocktail_left.png";
import RightImage from "../../assets/images/cocktail_right.png";
import { FlexContainer } from "../../containers/Layout/styles";
import { Canon } from "../Typography";
import { AsideImages, CustomFlexContainer, CustomMainContainer, CustomMainTrafalgar } from "./style";

export default function Hero() {
  return (
    <CustomMainContainer>
      <FlexContainer>
        <AsideImages src={LeftImage} alt='' />
        <CustomFlexContainer>
          <Canon>Welcome to TheCocktailDB</Canon>
          <CustomMainTrafalgar>
            An open, crowd-sourced database of drinks and cocktails from around
            the world. We also offer a{" "}
            <a href='https://www.thecocktaildb.com/api.php'>free JSON API</a>{" "}
            for anyone wanting to use it. If you like the site, please consider
            supporting us on Patreon by clicking the link below...
          </CustomMainTrafalgar>
        </CustomFlexContainer>

        <AsideImages src={RightImage} alt='' />
      </FlexContainer>
    </CustomMainContainer>
  );
}
