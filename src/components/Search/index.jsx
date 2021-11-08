import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FetchSingleCocktail } from "../../services/fetchPosts.service";
import { fetchSingleCocktailKey } from "../../utils/Query/queryKeys";
import CocktailSection from "../CocktailSection/";
import CountBar from "../CountBar";
import { GreatPrimer } from "../Typography";
import {
  Box,
  CustomBiSearch, CustomRow, Input
} from "./style";

export default function Search() {
  const [queryKey, setQueryKey] = useState("");

  const { isLoading, isError, data } = useQuery(
    [fetchSingleCocktailKey, queryKey],
    FetchSingleCocktail
  );
  return (
    <Fragment>
      <CustomRow>
        <Box>
          <Link to='/'>
            <CustomBiSearch />
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
      {queryKey.length === 0 ? (
        ""
      ) : data !== null || undefined ? (
        <CocktailSection
          sliceI='0'
          sliceF='8'
          isLoading={isLoading}
          isError={isError}
          data={data}
          title={
            <GreatPrimer style={{ textAlign: "center" }}>
              Popular Drinks
            </GreatPrimer>
          }
        />
      ) : (
        "No Cocktails Found"
      )}
    </Fragment>
  );
}
