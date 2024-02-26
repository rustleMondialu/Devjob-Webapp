import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import oval from "src/Oval.svg";
import { useParams } from "react-router-dom";
import "./Cards-description.scss";

import data from "../../data.json";

function CardsDescription() {
  let { id } = useParams();
  const cditem = data.find((element) => element.id === parseInt(id));

  console.log(cditem, id, data);
  return (
    <>
      <Navbar />
      <div className="flex_container">
        <div className="topbar">
          <img src={cditem.logo} alt="" />
          <div className="__minicontainer">
            <div className="__company">{cditem.company}</div>
            <div className="__website">{cditem.website}</div>
            <div className="__country">{cditem.location}</div>
          </div>
          <button className="third-btn">
            <Link to={cditem.website}>Company Site</Link>
          </button>
        </div>
        <div className="descriptionbar">
          <div> </div>
          <div className="topdetails">
            <div className="topingdetails">
              <div>{cditem.postedAt}</div>
              <img src={oval}></img>
              <div>{cditem.contract}</div>
            </div>
            <div>{cditem.position}</div>
            <div>{cditem.location}</div>
            <button>Apply now</button>
          </div>
          <p>{cditem.description}</p>
          <div className="requirements">
            <h1>Requirements</h1>
            <p>{cditem.requirements.content}</p>
            <ul className="requirement_item">
              {cditem.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="role">
            <h1>What Will You Do</h1>
            <p>{cditem.role.content}</p>
            <ul className="role_item">
              {cditem.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottombar">
          <div>
            <h1></h1>
            <p>So Digital Inc.</p>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsDescription;
