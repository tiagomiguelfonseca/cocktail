import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";


export default function Drinks({ queryKey }) {
    
  const { isLoading, error, data } = useQuery(
    queryKey,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //   if (true) {
      //     throw new Error("Test error");
      //   }
      return axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
        .then((res) => res.data.drinks);
    },
    {
      //   refetchOnWindowFocus: false,
        // staleTime: Infinity,
        cacheTime: 5000,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <React.Fragment>
      <ReactQueryDevtools />
      <ul style={{ columns: "4 auto" }}>
        {data.map((post, index) => {
          return <li key={index}>{post.strCategory}</li>;
        })}
      </ul>
      <br/>
      {data.isFetching ? "updating..." : null}
    </React.Fragment>
  );
}
