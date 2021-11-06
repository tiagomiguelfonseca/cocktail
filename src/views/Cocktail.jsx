import React, { useState } from "react";
import Layout from "../containers/Layout";
import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import Drinks from "../components/Drinks";
import Idrinks from "../components/Drinks/iDrinks";
import Drink from "../components/Drinks/Drink";

export default function Cocktail() {
  return (
    <React.Fragment>
      {/* <Idrinks/> */}

      <Drink/>
    </React.Fragment>
  );
}
