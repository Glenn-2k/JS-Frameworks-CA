import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};

export default Nav;
