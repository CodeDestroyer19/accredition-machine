import React from "react";
import { grey } from "@material-ui/core/colors";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
