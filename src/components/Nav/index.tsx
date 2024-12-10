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
      <NavLink
        className={({ isActive }) => getNavLinkClass(isActive)}
        to="/cart"
        onClick={closeMenu}
      >
        <CartIcon />
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="w-1/3 flex justify-end px-4">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks closeMenu={() => {}} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}{" "}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col w-full md:hidden items-center ">
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </>
  );
};

export default Nav;
