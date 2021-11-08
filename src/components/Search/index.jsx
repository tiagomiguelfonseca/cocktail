import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { FetchSingleCocktail } from "../../services/fetchPosts.service";
import { fetchSingleCocktailKey } from "../../utils/Query/queryKeys";
import CocktailSection from "../CocktailSection/";
import CountBar from "../CountBar";
import { GreatPrimer } from "../Typography";
import { Box, CustomBiSearch, CustomRow, Input, Form} from "./style";
import { useNavigate } from "react-router";

export default function Search() {
  const [queryKey, setQueryKey] = useState("");

  const navigate = useNavigate();

  return (
    <Fragment>
      <CustomRow>
        <Box>
          <Form onSubmit={(e) => navigate(`/results/${queryKey}`)}>
          <Link to={`/results/${queryKey}`}><CustomBiSearch /></Link>
            <Input
              value={queryKey}
              type='text'
              placeholder='Search for a Cocktail ...'
              name='query'
              onChange={(e) => setQueryKey(e.target.value)}
            />
          </Form>
        </Box>
        <CountBar />
      </CustomRow>
    </Fragment>
  );
}
