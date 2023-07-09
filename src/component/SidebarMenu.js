import React, { useState } from "react";
import "../App.css";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function SidebarMenu({ route }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="menu-container">
    <div className="menu">
      <div className="menu-item">
        <div className="icon">{route.icon}</div>
        <div className="link-text">{route.name}</div>
      </div>
      <div className="arrow">{ isOpen ? <FaAngleDown  onClick={toggle}/>:<FaAngleRight onClick={toggle}/> }</div>
      </div>
      {isOpen && route.subRoutes.map((route, index) => {
        return (
          <NavLink
            key={index}
            to={route.path}
            activeClassName='active'
            className="sub-link"
          >
            <div className="icon">{route.icon}</div>
            <div className="link-text">{route.name}</div>
          </NavLink>
        );
      })}
   
    </div>
  );
}

export default SidebarMenu;
