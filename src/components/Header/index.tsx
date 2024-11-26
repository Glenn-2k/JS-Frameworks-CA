import logo from "../../assets/logowhite.png";

const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav className="flex justify-between">
        <img src={logo} className="h-16 w-auto m-4" alt="logo image" />
        <div className="Cart">Cart here</div>
      </nav>
    </header>
  );
};

export default Header;
