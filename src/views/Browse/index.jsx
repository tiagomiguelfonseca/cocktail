import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import BrowseLinks from "../../components/BrowseLinks";
import CocktailSection from "../../components/CocktailSection";
import { Canon, GreatPrimer } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { FetchByLetter } from "../../services/fetchPosts.service";
import { FetchByLetterKey } from "../../utils/Query/queryKeys";
import { CustomMaincontainer } from "./style";

export default function Browse() {
  const { slug } = useParams();

  const { isLoading, isError, data } = useQuery(
    [FetchByLetterKey, slug],
    FetchByLetter
  );

  return (
    <Layout>
      <CustomMaincontainer>
        <Canon>Browse Cocktails</Canon>
        {data === undefined ? (
          <GreatPrimer>No Cocktails Found</GreatPrimer>
        ) : (
          <CocktailSection
            data={data}
            isLoading={isLoading}
            isError={isError}
          />
        )}
        <BrowseLinks />
      </CustomMaincontainer>
    </Layout>
  );
}
