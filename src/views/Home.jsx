import React, {useState} from "react";
import CocktailSection from "../components/CocktailSection";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Layout from "../containers/Layout";
import { MainContainer } from "../containers/Layout/styles";
import { useQuery } from "react-query";
import { fetchCocktailsKey } from "../utils/Query/queryKeys";
import { fetchCocktails } from "../services/fetchPosts.service";
import { GreatPrimer } from "../components/Typography";
import BrowseLinks from "../components/BrowseLinks";

export default function Home(sliceI, sliceF) {
  // eslint-disable-next-line no-unused-vars
  const [useKey, setUseKey ] = useState("")
  const { isLoading, isError, data } = useQuery(
    [fetchCocktailsKey, useKey],
    fetchCocktails
  );

  return (
    <Layout>
      <MainContainer>
        <Hero />
        <Search />
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
