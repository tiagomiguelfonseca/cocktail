import React from "react";
import CocktailSection from "../components/CocktailSection";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Layout from "../containers/Layout";
import { MainContainer } from "../containers/Layout/styles";
import { useQuery } from "react-query";
import { fetchCocktailsKey } from '../utils/Query/queryKeys';
import { fetchCocktails } from '../services/fetchPosts.service';

export default function Home(sliceI, sliceF) {

    const { isLoading, isError, data } = useQuery(
      fetchCocktailsKey,
      fetchCocktails
    );

  return (
    <Layout>
      <MainContainer>
        <Hero />
        <Search />
        <CocktailSection sliceI="0" sliceF="8" isLoading={isLoading} isError={isError} data={data}/>
      </MainContainer>
    </Layout>
  );
}
