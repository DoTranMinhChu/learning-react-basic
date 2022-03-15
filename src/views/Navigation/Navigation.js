import React from "react";
import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <Link to="/">Main</Link>
          <Link to="home">Home</Link>
          <Link to="todo-app">Todo App</Link>
          <Link to="about">About</Link>
        </div>
        {/* Uncomand and try code V.5 */}
        {/* <div className="topnav">
          <NavLink to="/" activeClass="active">Main</NavLink>
          <NavLink to="home" activeClass="active">Home</NavLink>
          <NavLink to="todo-app" activeClass="active">Todo App</NavLink>
          <NavLink to="about" activeClass="active">About</NavLink>
        </div> */}

        {/* Uncomand and try code V.6 */}
        {/* <div className="topnav">
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Main
          </NavLink>
          <NavLink
            to="/home"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="todo-app"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Todo App
          </NavLink>
          <NavLink
            to="about"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            About
          </NavLink>
        </div> */}
      </>
    );
  }
}

export default Navigation;
