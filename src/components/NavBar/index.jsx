import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { NavBarItems, FlexContainer, Logo, SubNavBarItems, Nav } from "./style";
 import { AppContext } from "../ContextProvider";

 export default function NavBar(props) {

  
  return (
      <Nav>
        <NavBarItems>
          <FlexContainer>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/consultation'>Consultation</Link>
            </li>
          </FlexContainer>
          <FlexContainer>
            <Logo>
              <Link to='/'>Sooth</Link>
            </Logo>
          </FlexContainer>
        </NavBarItems>
        <SubNavBarItems>
      </SubNavBarItems>
      </Nav>

  );
}
