import React from "react";
import NavBar from "../../components/NavBar";
import { LayoutWrapper } from "./styles";

function Layout({children}) {
  return (
    <div>
      <LayoutWrapper>
        <NavBar />
        {children}
      </LayoutWrapper>
</div>
  );
}

export default Layout;
