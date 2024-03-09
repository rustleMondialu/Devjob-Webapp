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
          <div className="mini_container">
            <div className="__company">
              <h1>{cditem.company}</h1>
            </div>
            <div className="__website">{cditem.website}</div>
          </div>
          <div className="butonstyle">
            <button className="second-btn">
              <Link to={cditem.website}>Company Site</Link>
            </button>
          </div>
        </div>
        <div className="descriptionbar">
          <div className="topdetails">
            <div className="flexercontainer">
              <div className="topingdetails">
                <div>{cditem.postedAt}</div>
                <img src={oval}></img>
                <div>{cditem.contract}</div>
              </div>
              <div>
                <h2>{cditem.position}</h2>
              </div>
              <div className="country">{cditem.location}</div>
            </div>
            <div className="buttonstyling">
              <button className="first-btn">Apply now</button>
            </div>
          </div>
          <p className="job_description">{cditem.description}</p>
          <div className="requirements">
            <h3>Requirements</h3>
            <p className="requirements_content">
              {cditem.requirements.content}
            </p>
            <ul className="requirement_item">
              {cditem.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="role">
            <h3>What Will You Do</h3>
            <p className="role_content">{cditem.role.content}</p>
            <ol className="role_item">
              {cditem.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bottombar">
          <div className="bottombarchild">
            <h2>{cditem.position}</h2>
            <p>So Digital Inc.</p>
          </div>
          <button className="first-btn">Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default CardsDescription;
