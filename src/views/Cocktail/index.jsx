import React, { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import pixabay from "../../assets/images/pixabay-logo.png";
import { BodyCopy, GreatPrimer } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { MainContainer } from "../../containers/Layout/styles";
import { FetchSingleCocktailById } from "../../services/fetchPosts.service";
import { FetchSingleCocktailByIdKey } from "../../utils/Query/queryKeys";
import {
  CustomFlexContainer, CustomSection, FlexColumn,
  FlexRow,
  GridRow,
  ImageContainer,
  ImageIngredient,
  Tag
} from "./style";


export default function Cocktail(queryKey) {
  const { slug } = useParams();

  const { isLoading, isError, data } = useQuery(
    [FetchSingleCocktailByIdKey, slug],
    FetchSingleCocktailById
  );

  return (
    <Layout>
      <MainContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>An error while fetching posts</div>
        ) : (
          data.map((value, index) => {
            return (
              <Fragment>
                <CustomFlexContainer key={value.idDrink}>
                  <FlexColumn>
                    <GreatPrimer>{value.strDrink}</GreatPrimer>
                    <ImageContainer
                      src={value.strDrinkThumb}
                      alt={value.strDrink}
                    />
                    <span>
                      Image Source
                      <a href={value.strImageSource}>
                        <img src={pixabay} alt='' width='16' />
                        Creative Commons Pixabay
                      </a>
                    </span>
                    {value.strTags !== null && (
                      <FlexRow>
                        {value.strTags.split(",").map((v, index) => {
                          return <Tag key={index}>{v}</Tag>;
                        })}
                      </FlexRow>
                    )}
                  </FlexColumn>
                  <FlexColumn>
                    <GreatPrimer>Ingredients</GreatPrimer>
                    <GridRow>
                      {/* {Object.entries(value)
                        .filter(([key]) => key.includes("strMeasure"))
                        .map(strMeasure => strMeasure[1])} */}
                      {Object.entries(value)
                        .filter(([key]) => key.includes("strIngredient"))
                        .map((strIngredient) => {
                          return (
                            strIngredient[1] !== null && (
                              <div>
                                <ImageIngredient
                                  src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient[1]}-Medium.png`}
                                  alt=''
                                />
                                <p>{strIngredient[1]}</p>
                              </div>
                            )
                          );
                        })}
                    </GridRow>
                  </FlexColumn>
                </CustomFlexContainer>
                <CustomSection>
                <GreatPrimer>Instructions</GreatPrimer>
                  <BodyCopy key={index}>{value.strInstructions}</BodyCopy>
                </CustomSection>
              </Fragment>
            );
          })
        )}
      </MainContainer>
    </Layout>
  );
}
