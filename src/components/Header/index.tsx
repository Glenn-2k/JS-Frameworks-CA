import Logo from "../Logo";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-[20] mx-auto w-full flex justify-between items-center ">
      <Logo />
      <Nav />
      <div className="Cart">Cart here</div>
    </header>
  );
};

export default Header;
