import React from "react";
import DynamicComponent from "../../utils/DynamicComponent";
import { theme } from "../../utils/Theme";

const {
  canon,
  trafalgar,
  paragon,
  greatPrimer,
  doublePica,
  bodyCopy,
  pica,
  code,
  navy
} = theme.textStyles;

export const Canon = props => (
  <DynamicComponent {...canon} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Navy = props => (
  <DynamicComponent {...navy} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Trafalgar = props => (
  <DynamicComponent {...trafalgar} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Paragon = props => (
  <DynamicComponent {...paragon} {...props}>
    {props.children}
  </DynamicComponent>
);

export const GreatPrimer = props => (
  <DynamicComponent {...greatPrimer} {...props}>
    {props.children}
  </DynamicComponent>
);

export const DoublePica = props => (
  <DynamicComponent {...doublePica} {...props}>
    {props.children}
  </DynamicComponent>
);

export const BodyCopy = props => (
  <DynamicComponent {...bodyCopy} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Pica = props => (
  <DynamicComponent {...pica} {...props}>
    {props.children}
  </DynamicComponent>
);

export const Code = props => (
  <DynamicComponent {...code} {...props}>
    {props.children}
  </DynamicComponent>
);
