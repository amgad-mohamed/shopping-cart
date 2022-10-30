import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav">
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        <NavLink to="/orders">Orders</NavLink>
      </div>
    </>
  );
}

export default Navbar;
