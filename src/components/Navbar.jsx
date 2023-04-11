import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        backgroundColor: "rgb(216,231,243)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavLink to="/" style={{ marginRight: "2rem" }}>
        Home Page
      </NavLink>
      <NavLink to="/add">Add Product Page</NavLink>
    </div>
  );
}

export default Navbar;
