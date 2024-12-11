import logoImage from "../assets/logowhite.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src={logoImage}
        className="h-16 w-auto m-4 cursor-pointer"
        alt="logo image"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;
