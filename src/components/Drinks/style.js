import styled from "styled-components";

export const FlexContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  &:img {
    max-width: 20%;
  }
`;

export const ImageContainer = styled.img`
    max-width: 20%;
  
`;