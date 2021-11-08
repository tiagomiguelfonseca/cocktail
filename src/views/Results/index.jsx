import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import BrowseLinks from "../../components/BrowseLinks";
import CocktailSection from "../../components/CocktailSection";
import { Canon, GreatPrimer } from "../../components/Typography";
import Layout from "../../containers/Layout";
import { MainContainer } from "../../containers/Layout/styles";
import { FetchCocktailByName } from "../../services/fetchPosts.service";
import { FetchCocktailByNameKey } from "../../utils/Query/queryKeys";


export default function Results() {
  const { slug } = useParams();

  const { isLoading, isError, data } = useQuery(
    [FetchCocktailByNameKey, slug],
    FetchCocktailByName
  );

  console.log(slug);
  return (
    <Layout>
      <MainContainer>
        {slug.length === 0 ? (
          ""
        ) : data !== null || undefined ? (
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
        ) : (
            <GreatPrimer style={{ textAlign: "center" }}>
              No Cocktails Found, try again
            </GreatPrimer>
        )}
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
