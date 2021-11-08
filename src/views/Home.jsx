import React from "react";
import CocktailSection from "../components/CocktailSection";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Layout from "../containers/Layout";
import { MainContainer } from "../containers/Layout/styles";

export default function Home() {

  return (
    <Layout>
      <MainContainer>
        <Hero />
        <Search />
        <CocktailSection />
      </MainContainer>
    </Layout>
  );
}
