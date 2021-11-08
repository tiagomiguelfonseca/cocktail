import React from "react";
import { FetchByLetter } from "../../services/fetchPosts.service";
import { FetchByLetterKey } from "../../utils/Query/queryKeys";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import CocktailSection from "../CocktailSection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Browse(queryKey) {
  const [useKey, setUseKey] = useState("a");
  let [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery(
    [FetchByLetterKey, useKey],
    FetchByLetter
  );

console.log(navigate)
  return (
    <div>
      <Link to={`${location.pathname}a`}>A</Link>/ <button >B</button> / <Link to={`${location.pathname}?b=c`}>C</Link> / D / E / F / G / H
      / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z
      <CocktailSection data={data} isLoading={isLoading} isError={isError}/>
    </div>
  );
}
