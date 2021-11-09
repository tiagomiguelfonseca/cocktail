import React from "react";
import { Link } from "react-router-dom";
import { Container, CustomParagon } from "./style";

export default function BrowseLinks({ title }) {
  
  const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

  return (
    <Container>
      {title}
      {alphabet.map((value) => {
        return (
          <CustomParagon>
            <Link to={`/browse/${value}`}>{value} / </Link>
          </CustomParagon>
        );
      })}
    </Container>
  );
}