import React from "react";
import styled from "styled-components";

import { theme } from "../../utils/Theme";

const Breakpoint = styled.span`
  padding: 2px 4px;
  background: ${theme.colours.citrineWhite};

  &:after {
    content: "A";

    @media screen and (min-width: ${theme.breakpoints[0]}) {
      content: "B";
    }
    @media screen and (min-width: ${theme.breakpoints[1]}) {
      content: "C";
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <Breakpoint>Breakpoint: </Breakpoint>;
