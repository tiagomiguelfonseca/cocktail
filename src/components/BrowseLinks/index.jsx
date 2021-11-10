import React from "react";
import { createSearchParams, Link, useSearchParams } from "react-router-dom";
import { Container, CustomParagon } from "./style";

export default function BrowseLinks({ title }) {
    // eslint-disable-next-line no-unused-vars
    const [searchParams, setSearchParams] = useSearchParams();

  const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

  function appendSearchParams(obj) {
    const sp = createSearchParams(searchParams);
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        sp.delete(key);
        value.forEach((v) => sp.append(key, v));
      } else if (value === undefined) {
        sp.delete(key);
      } else {
        sp.set(key, value);
      }
    });
    return sp;
  }

  return (
    <Container>
      {title}
      {alphabet.map((value, index) => {
        return (
          <CustomParagon key={index}>
            <Link to={`/browse?${appendSearchParams({b: value})}`}>{value} / </Link>
          </CustomParagon>
        );
      })}
    </Container>
  );
}