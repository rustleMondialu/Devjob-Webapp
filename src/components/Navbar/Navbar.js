import "./Navbar.scss";
import devjobs from "../../devjobs.svg";
import Darktheme from "../DarkTheme/Darktheme";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <img src={devjobs} />
      <div className="toggle-container">
        <div>
          <Darktheme />
          <div
            onClick={() => {
              navigate("Login&Sign-up");
            }}
          >
            Login&Sign-up
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
