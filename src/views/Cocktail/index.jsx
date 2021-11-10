import React, { useState, Fragment } from "react";
import { useQuery } from "react-query";
import {
  createSearchParams, Link, useSearchParams
} from "react-router-dom";
import ArrowLeft from "../../assets/images/Arrow-Left.png";
import pixabay from "../../assets/images/pixabay-logo.png";
import { BodyCopy, GreatPrimer } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { MainContainer } from "../../containers/Layout/styles";
import { FetchSingleCocktailById } from "../../services/fetchPosts.service";
import { FetchSingleCocktailByIdKey } from "../../utils/Query/queryKeys";
import {
  CustomFlexContainer,
  CustomSection,
  FlexColumn,
  FlexRow,
  GridRow, ImageBack, ImageContainer, ImageIngredient, Tag
} from "./style";
import useDebounce from "../../utils/hooks/useDebounce"
import toast from 'react-hot-toast'

export default function Cocktail(queryKey) {  
  const [searchParams] = useSearchParams(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const d = searchParams.get("d");

  const { isLoading, isError, isSuccess, refetch, remove, data, error } = useQuery(
    [FetchSingleCocktailByIdKey, d],
    FetchSingleCocktailById,   {useErrorBoundary: (error) => error.response?.status >= 500}, {onError: (error) =>

  //     toast.error(`Something went wrong: ${error.message}`)}
  // );{onError: (error) =>

  //     toast.error(`Something went wrong: ${error.message}`)}

  

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
    <Layout>
      <MainContainer>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>An error while fetching posts</div>
        ) : (
          data.map((value, index) => {
            return (
              <Fragment key={value}>
                <CustomFlexContainer >
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
                    <Link to={-1}>
                      <ImageBack src={ArrowLeft} alt='back' />
                    </Link>
                  </FlexColumn>
                  <FlexColumn>
                    <GreatPrimer>Ingredients</GreatPrimer>
                    <GridRow>
                      {[...Array(15).keys()].map((i, index) => {
                        return (
                          <Link  key={i}
                            to={`/ingredient?${appendSearchParams({
                              i:
                                value[`strIngredient${i + 1}`] &&
                                value[`strIngredient${i + 1}`],
                            })}`}
                          >
                          {value[`strIngredient${i + 1}`] && value[`strIngredient${i + 1}`] !== null &&
                            <ImageIngredient
                              src={`https://www.thecocktaildb.com/images/ingredients/${
                                value[`strIngredient${i + 1}`] &&
                                value[`strIngredient${i + 1}`]
                              }-Medium.png`}
                              alt=''
                            />}
                            <p>
                              {value[`strMeasure${i + 1}`] &&
                                value[`strMeasure${i + 1}`]}
                              {value[`strIngredient${i + 1}`] &&
                                value[`strIngredient${i + 1}`]}
                            </p>
                          </Link>
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
