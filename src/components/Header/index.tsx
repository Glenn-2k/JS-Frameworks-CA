import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-[20] mx-auto w-full flex justify-between items-center ">
      <Logo />
      <Nav />
      <FaShoppingCart className="text-white text-xl m-4" />
    </header>
  );
};

export default Header;
