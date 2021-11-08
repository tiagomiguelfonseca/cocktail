import React from "react";
import { Link } from "react-router-dom";
import { Container, CustomParagon } from "./style";

export default function BrowseLinks({ title }) {
  return (
    <Container>
      {title}
      <CustomParagon>
        <Link to='/browse/a'>A</Link>  /<Link to='/browse/b'>B</Link>  /
        <Link to='/browse/c'>C</Link>  /<Link to='/browse/d'>D</Link>  /
        <Link to='/browse/e'>E</Link>  /<Link to='/browse/f'>F</Link>  /
        <Link to='/browse/g'>G</Link>  /<Link to='/browse/h'>H</Link>  /
        <Link to='/browse/i'>I</Link>  /<Link to='/browse/j'>J</Link>  /
        <Link to='/browse/k'>K</Link>  /<Link to='/browse/l'>L</Link>  /
        <Link to='/browse/m'>M</Link>  /<Link to='/browse/n'>N</Link>  /
        <Link to='/browse/o'>O</Link>  /<Link to='/browse/p'>P</Link>  /
        <Link to='/browse/q'>Q</Link>  /<Link to='/browse/r'>R</Link>  /
        <Link to='/browse/s'>S</Link>  /<Link to='/browse/t'>T</Link>  /
        <Link to='/browse/u'>U</Link>  /<Link to='/browse/v'>V</Link>  /
        <Link to='/browse/W'>W</Link>  /<Link to='/browse/x'>X</Link>  /
        <Link to='/browse/x'>Y</Link>  /<Link to='/browse/z'>Z</Link>  /
      </CustomParagon>
    </Container>
  );
}
