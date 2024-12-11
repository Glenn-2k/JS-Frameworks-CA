import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "../CartIcon";

const activeClassName = "text-gray-400 mb-4 md:mb-0";
const getNavLinkClass = (isActive: boolean) =>
  isActive ? `${activeClassName} mb-4 md:mb-0` : "mb-4 md:mb-0";

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => getNavLinkClass(isActive)}
        to="/"
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => getNavLinkClass(isActive)}
        to="/contact"
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="flex items-center">
      {/* Desktop Navigation */}
      <nav className="w-full flex justify-end px-4">
        <div className="hidden w-full md:flex justify-between items-center">
          <NavLink to="/cart" className="mr-4">
            <CartIcon />
          </NavLink>
          <div className="flex space-x-4">
            <NavLinks closeMenu={() => {}} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <NavLink to="/cart" className="mr-4">
            <CartIcon />
          </NavLink>
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 shadow-md py-4 md:hidden z-50">
          <div className="flex flex-col items-center">
            <NavLinks closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
