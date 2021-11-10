import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import BrowseLinks from "../../components/BrowseLinks";
import CocktailSection from "../../components/CocktailSection";
import { Canon } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { FetchByLetter } from "../../services/fetchPosts.service";
import { FetchByLetterKey } from "../../utils/Query/queryKeys";
import { CustomMaincontainer } from "./style";

export default function Browse() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const b = searchParams.get("b")

  const { isLoading, isError, data } = useQuery(
    [FetchByLetterKey, b],
    FetchByLetter
  );

  return (
    <Layout>
      <CustomMaincontainer>
        <Canon>Browse Cocktails</Canon>
        {/* {data == null ? (
          <GreatPrimer>No Cocktails Found</GreatPrimer>
        ) : ( */}
          <CocktailSection
            data={data}
            isLoading={isLoading}
            isError={isError}
          />
        {/* )
        } */}
        <BrowseLinks />
      </CustomMaincontainer>
    </Layout>
  );
}
