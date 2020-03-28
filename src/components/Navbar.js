import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../assets/logo.svg";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-info navbar-expand-lg">
    <div className="navbar-brand">
        <img src={logo} alt="logo" className="logo"/>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">Главная</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">Информация</NavLink>
      </li>
    </ul>
  </nav>
);
