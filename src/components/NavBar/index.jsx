import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook_icon.png";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter_icon.png";
import { CustomFlexContainer, Logo, Nav, NavBarItem, NavBarItems } from "./style";
import { CustomNavy } from "./style";

export default function NavBar(props) {
  return (
    <Nav >
      <NavBarItems>
        <CustomFlexContainer>
          <Logo>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </Logo>
        </CustomFlexContainer>
        <CustomFlexContainer>
          <NavBarItem active>
            <Link to='/'>
              <CustomNavy>Home</CustomNavy>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to='https://www.thecocktaildb.com/api.php'>
              <CustomNavy>API</CustomNavy>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to='/browse'>
              <CustomNavy>Browse by Letter</CustomNavy>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <img src={facebook} alt='' />
          </NavBarItem>
          <NavBarItem>
            <img src={twitter} alt='' />
          </NavBarItem>
          <NavBarItem>
          </NavBarItem>
        </CustomFlexContainer>
      </NavBarItems>
    </Nav>
  );
}
