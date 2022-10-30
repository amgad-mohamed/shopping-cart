import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" end>
          <i aria-hidden="true" className="home  icon"></i>
          Home
        </NavLink>{" "}
        <NavLink to="/orders">Orders</NavLink>
      </div>
    </>
  );
}

export default Navbar;
