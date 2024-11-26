import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="w-1/3">
      <div className="flex justify-between">
        <NavLinks />
      </div>
      <div>
        <button onClick={toggleNavbar}>
          {isOpen ? <FaBars /> : <FaTimes />}{" "}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
