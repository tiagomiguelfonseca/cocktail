import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "../views/Cocktail";
import Home from "../views/Home";
import Browse from "../views/Browse";
import Results from "../views/Results";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink/:slug' element={<Cocktail />}/>
        <Route path='/browse/' element={<Browse />}/>
        <Route path='/browse/:slug' element={<Browse />}/>
        <Route path='/results/:slug' element={<Results />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
