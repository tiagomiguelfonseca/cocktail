import styled from "styled-components";

export const Headline1 = styled.h1`
  font-size: 48px;
  line-height: 58px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Headline2 = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-weight: bold;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.logo};
`;

export const Headline3 = styled.h3`
  font-size: 32px;
  line-height: 39px;
  font-weight: bold;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.colours.oxford};
`;

export const Headline4 = styled.h4`
  font-size: 28px;
  line-height: 34px;
  font-weight: bold;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.colours.oxford};
`;

export const Headline5 = styled.h5`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.colours.oxford};
`;

export const Headline6 = styled.h6`
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.colours.oxford};
`;

export const Headline7 = styled.h5`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Headlinebody1 = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Headlinebody2 = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Headlinebody3 = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Headlinep = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const Reviews = styled.p`
  font-size: 10px;
  line-height: 24px;
  color: ${(props) => props.theme.colours.oxfordBlue};
  font-family: ${(props) => props.theme.fontFamilies.heading};
`;

export const LayoutWrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
`;