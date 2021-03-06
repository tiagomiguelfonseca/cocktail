import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "../views/Cocktail";
import Home from "../views/Home";
import Browse from "../views/Browse";
import Results from "../views/Results";
import ComponentForEmptyList from "../components/ComponentForEmptyList";
import Ingredient from "../views/Ingredients";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink' element={<Cocktail />}/>
        <Route path='/browse' element={<Browse />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/ingredient' element={<Ingredient />}/>
        <Route path='/error' element={<ComponentForEmptyList />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
