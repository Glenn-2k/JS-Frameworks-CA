import logoImage from "../assets/logowhite.png";

const Logo = () => {
  return (
    <div>
      <img src={logoImage} className="h-16 w-auto m-4" alt="logo image" />
    </div>
  );
};

export default Logo;
