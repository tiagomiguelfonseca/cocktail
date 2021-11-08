import { FlexContainer } from "../../containers/Layout/styles";
import styled from 'styled-components';
import { MainContainer } from "../../containers/Layout/styles";
import { Trafalgar } from "../Typography";

export const CustomFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  text-align: center;
`;

export const AsideImages = styled.img`
  max-width: 20%;
`;

export const CustomMainContainer = styled(MainContainer)`
  padding-top: 40px
`;

export const CustomMainTrafalgar = styled(Trafalgar)`
  font-weight: bold;
`;