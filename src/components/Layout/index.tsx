import React from "react";
import { LayoutProps } from "./types";
import { StyledLayoutContainer, StyledLayoutContent, StyledLayoutLogo } from "./styles";
import Logo from "../Logo";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <StyledLayoutContainer>
        <StyledLayoutLogo>
        <Logo />
        </StyledLayoutLogo>
        <StyledLayoutContent>{children}</StyledLayoutContent>
      </StyledLayoutContainer>
    </>
  );
};

export default Layout;
