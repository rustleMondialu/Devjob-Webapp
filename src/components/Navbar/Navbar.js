import "./Navbar.scss";
import devjobs from "../../devjobs.svg";

function Navbar() {
  return (
    <div className="navbar-container">
      <img src={devjobs} />
    </div>
  );
}

export default Navbar;
