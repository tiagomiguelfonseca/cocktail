import styled from "styled-components";

export const Nav = styled.nav`
  top: 0;
  position: sticky;
  height: ${(props) => props.theme.navHeight};
  background: transparent;
  max-width: 1196px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

export const NavBarItems = styled.ul`
  font-size: 12px;
  line-height: 14px;
  font-weight: bold;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li + li {
    margin-left: 45px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  font-family: "Somatic Rounded";
  font-size: 27px;
  letter-spacing: 1.6px;
  color: ${(props) => props.theme.colours.blue};
  a:hover {
    text-decoration: none;
  }
  a:link {
    color: ${(props) => props.theme.colours.oxfordLogo};
  }
`;

export const SubNavBarItems = styled(NavBarItems)`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.8px;
  justify-content: center;
  margin-top: 28px;
  text-transform: capitalize;
  a:hover {
    text-decoration-color: ${(props) => props.theme.colours.capePalliser};
    text-decoration-style: solid;
    text-decoration-thickness: 5px;
    text-underline-offset: 5px;
  }
`;

export const Badge = styled.span`
background-color: red;
    border-radius: 10px;
    color: rgb(255,255,255);
    padding: 3px 7px;
`;
