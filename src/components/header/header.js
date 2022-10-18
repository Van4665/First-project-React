import React from "react";
import Nav from "../nav/nav";
import './header.sass' 

const Header = () => {
   return (
      <div className="container">
      <header className="header">
         <img src="images/logo.svg" alt="" className="logo" />
         <Nav />
         <img src="images/menu.svg" alt="" className="menu-" />
      </header>
      </div>
   )
}
export default Header