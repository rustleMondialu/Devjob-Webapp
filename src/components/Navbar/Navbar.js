import "./Navbar.scss";
import devjobs from "../../devjobs.svg";
import Darktheme from "../DarkTheme/Darktheme";
import Authentication from "../Authentication/Authentication";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="flexing">
        <img
          onClick={() => {
            navigate("/", { replace: true });
          }}
          src={devjobs}
        />
      </div>
      <div className="toggle-container">
        <Darktheme />
        <Authentication />
      </div>
    </div>
  );
}

export default Navbar;
