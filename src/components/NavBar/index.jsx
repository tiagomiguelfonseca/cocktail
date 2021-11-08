import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/images/facebook_icon.png";
import logo from "../../assets/images/logo.png";
import twitter from "../../assets/images/twitter_icon.png";
import { Navy } from "../Typography";
import { CustomFlexContainer, Logo, Nav, NavBarItem, NavBarItems } from "./style";

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
              <Navy>Home</Navy>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to='https://www.thecocktaildb.com/api.php'>
              <Navy>API</Navy>
            </Link>
          </NavBarItem>
          <NavBarItem>
            <Link to='/browse'>
              <Navy>Browse by Letter</Navy>
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
