import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
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
          <NavLink
            to="hoc"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            HOC
          </NavLink>

          <NavLink
            to="users"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Users
          </NavLink>
          <NavLink
            to="display-image"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Display Image
          </NavLink>
        </div>
      </>
    );
  }
}

export default Navigation;
