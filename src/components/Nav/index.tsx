import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const activeClassName = "text-gray-400";
const activeStyleCallBack = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${activeClassName} mb-4 md:mb-0` : "mb-4 md:mb-0"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${activeClassName} mb-4 md:mb-0` : "mb-4 md:mb-0"
        }
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${activeClassName} mb-4 md:mb-0` : "mb-4 md:mb-0"
        }
        to="/cart"
      >
        Cart
      </NavLink>
      <FaShoppingCart className="mb-4 md:mb-0 text-white text-xl" />
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-1/3 flex justify-end px-4">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <FaTimes /> : <FaBars />}{" "}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col w-full md:hidden items-center ">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
