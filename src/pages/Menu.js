import React from "react";
import { NavMenu,NavLink } from "../AppComponent";
import "../App.css"
export const Menu = () => {
  return (
    <NavMenu>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="pokemon">Pokemon</NavLink>
      <NavLink to="function1">Function1</NavLink>
      <NavLink to="function2">Function2</NavLink>
      <NavLink to="function3">Function3</NavLink>
    </NavMenu>
  );
};
