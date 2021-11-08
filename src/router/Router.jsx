import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cocktail from "../views/Cocktail";
import Home from "../views/Home";
import Browse from "../components/Browse";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drink/:slug' element={<Cocktail />}/>
        <Route path='/browse/' element={<Browse />}/>
        <Route path='/browse/?b=:slug' element={<Browse />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
