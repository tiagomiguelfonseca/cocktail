import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FetchSingleCocktail } from "../../services/fetchPosts.service";
import { fetchSingleCocktailKey } from "../../utils/Query/queryKeys";
import CountBar from "../CountBar";
import {
  Box,
  CustomBiSearch,
  CustomFlexContainer,
  CustomRow,
  ImageContainer,
  Input,
  List,
} from "./style";
import { GreatPrimer } from "../Typography";

export default function Search() {
  const [queryKey, setQueryKey] = useState("");

  const {
    isLoading: loadingCocktail,
    isError: errorCocktail,
    data: cocktail,
  } = useQuery([fetchSingleCocktailKey, queryKey], FetchSingleCocktail);

  return (
    <Fragment>
      <CustomRow>
        <Box>
          <Link to='/'>
            <CustomBiSearch>
              <button></button>
            </CustomBiSearch>
          </Link>
          <Input
            value={queryKey}
            type='text'
            placeholder='Search for a Cocktail ...'
            name='query'
            onChange={(e) => setQueryKey(e.target.value)}
          />
        </Box>
        <CountBar />
      </CustomRow>
      <CustomRow>
        {loadingCocktail ? (
          <div>Loading...</div>
        ) : errorCocktail ? (
          <div>No cocktails found</div>
        ) : (
          <CustomFlexContainer>
            {queryKey.length === 0
              ? ""
              : cocktail !== null
              ? cocktail.map((v) => {
                  return (
                    <Link to={`/drink/${v.idDrink}`}>
                      <List key={v.idDrink}>
                        <ImageContainer
                          src={v.strDrinkThumb}
                          alt={v.strDrink}
                        />
                        <GreatPrimer>{v.strDrink}</GreatPrimer>
                      </List>
                    </Link>
                  );
                })
              : "Cocktail not found"}
          </CustomFlexContainer>
        )}
      </CustomRow>
    </Fragment>
  );
}
