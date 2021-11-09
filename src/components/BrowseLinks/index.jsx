import React from "react";
import { Link } from "react-router-dom";
import { Container, CustomParagon } from "./style";

export default function BrowseLinks({ title }) {
  const abc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

  return (
    <Container>
      {title}
      {abc.map((value) => {
        return (
          <CustomParagon>
            <Link to={`/browse/${value}`}>{value} / </Link>
          </CustomParagon>
        );
      })}
    </Container>
  );
}