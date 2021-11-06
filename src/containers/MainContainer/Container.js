import styled from "styled-components";

export const SContainer = styled.div`
  padding: 0 ${(props) => props.theme.spacing};
  max-width: ${(props) => props.theme.containerWidth};
  margin: 0 auto;
  height: 100%;
`;
