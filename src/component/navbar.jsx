import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        BootStrap
        <span className="badge badge-pill bg-secondary ">{totalCounters} </span>
      </a>
    </nav>
  );
};

export default NavBar;
