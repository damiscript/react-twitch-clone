import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";

const BrowserVersion = () => {
  return (
    <div className="browser">
      <Header />
      <div className="mt-12 min-content-height flex space-x-8">
        <SideNav />
        <div className="flex-grow">Browser View</div>
      </div>
    </div>
  );
};
export default BrowserVersion;
