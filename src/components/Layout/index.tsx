import React from "react";
import { LayoutProps } from "./types";
import { StyledLayoutContainer } from "./styled";

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default Layout;
