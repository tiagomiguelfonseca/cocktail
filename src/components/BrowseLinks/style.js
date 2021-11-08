import styled from "styled-components";
import { Paragon } from "../Typography";

export const Container = styled.div``;

export const CustomParagon = styled(Paragon)`
  text-align: center;

  a + a {
    margin-left: 10px;
  }
`;