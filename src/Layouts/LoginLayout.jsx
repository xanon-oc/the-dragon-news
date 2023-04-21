import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar.jsx/NavigationBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;
