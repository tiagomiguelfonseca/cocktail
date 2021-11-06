import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Cocktail from "../views/Cocktail";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' component={Home} />
        <Route exact path='/cocktail' component={Cocktail}/>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
