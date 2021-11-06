import { createGlobalStyle } from "styled-components";
// import ProximaNovaWoof from "../../assets/fonts/ProximaNova.woff";
// import ProximaNovaWoof2 from "../../assets/fonts/ProximaNova.woff";
// import ProximaNovaOTF from "../../assets/fonts/SomaticRounded.otf";
// import SomaticRounded from "../../assets/fonts/SomaticRounded.otf";

const colours = {
  capePalliser: "#A67744",
  capePalliserHover: "#9A6B39",
  beige: "#F7F5E6",
  alabasterr: "#F7F7F7",
  athensGray: "#EEF2F4",
  silverRust: "#C6B9B6",
  oxfordBlue: "#354E57",
  oxfordBlueHover: "#2B434B",
  como: "#547665",
  mischka: "#D7CCDD",
  rangitoto: "#2E2E22",
  punch: "#DE3B35",
  blue: "#0014FF",
  white: "#FFFFFF",
  colorWrapper: "#E0e4e7",
  oxfordLogo: "#293D45",
  colorBody: "#FAFAFA",
  colorGreyDisable: "#B9C1C4",
  colorDisabled: "#E4ECEF",
};

const fontFamilies = {
  heading: "Proxima Nova, Helvetica, Arial, sans-serif",
  body: "PT Serif, Helvetica, Arial, sans-serif",
  code: "Roboto Mono, monospace",
  logo: "Somatic Rounded, Helvetica, Arial, sans-serif",
};

// eslint-disable-next-line import/no-anonymous-default-export
export const theme = {
  fontSizes: [12, 14, 18, 28, 32, 40, 48],
  breakpoints: ["319px", "599px"],
  containerWidth: "1088px",
  spacing: "1rem",
  navHeight: "180px",
  colours: {
    ...colours,
  },
  fontFamilies: {
    ...fontFamilies,
  },
};

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Proxima Nova';
  src: url(${"ProximaNovaWoof"}) format('woff'),
}


body {
  font-family: "Proxima Nova", sans-serif;
  font-size: 16px;
  line-height: 24px;
  background-color: ${(props) => props.theme.colours.colorWrapper};
  margin: 0 auto;
  height: 100%;
}

a:link, a:visited {
  color: ${(props) => props.theme.colours.oxfordBlue};
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

* {
  box-sizing: border-box
}

ul {
 margin: 0; 
padding: 0;
}
`;
export default GlobalStyle;
