import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import BrowseLinks from "../../components/BrowseLinks";
import CocktailSection from "../../components/CocktailSection";
import { Canon, GreatPrimer } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { MainContainer } from "../../containers/Layout/styles";
import { FetchCocktailByName } from "../../services/fetchPosts.service";
import { FetchCocktailByNameKey } from "../../utils/Query/queryKeys";


export default function Results() {
  const [searchParams] = useSearchParams();

  const s = searchParams.get("s")

  const { isLoading, isError, data } = useQuery(
    [FetchCocktailByNameKey, s],
    FetchCocktailByName
  );
  return (
    <Layout>
      <MainContainer>
          <CocktailSection
            isLoading={isLoading}
            isError={isError}
            data={data}
            title={
              <Canon style={{ textAlign: "center" }}>
                Browse Cocktails
              </Canon>
            }
          />
        <BrowseLinks
          title={
            <GreatPrimer style={{ textAlign: "center" }}>
              Browse By name
            </GreatPrimer>
          }
        />
      </MainContainer>
    </Layout>
  );
}
