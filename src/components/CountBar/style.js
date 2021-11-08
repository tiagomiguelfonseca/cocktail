import styled from "styled-components";
import { Row } from "../../containers/Layout/styles";

export const CustomRow = styled(Row)`
  *:first-child {
    margin-bottom: 10px;
  }
`;

export const ImageContainer = styled.img`
  width: 200px;
`;

export const ImageIcon = styled.img`
  width: auto;
  height: 20px;
  margin-top: 15px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0 10px 10px;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;
