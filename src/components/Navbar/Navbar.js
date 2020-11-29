import React from "react";
import navStyles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={navStyles.navBar}>
      <nav className={navStyles.nav}>
        <h1 className={navStyles.logo}>MovieFind</h1>
      </nav>
    </div>
  );
}

export default Navbar;
