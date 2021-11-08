import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "../views/Cocktail";
import Home from "../views/Home";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink/:slug' element={<Cocktail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
