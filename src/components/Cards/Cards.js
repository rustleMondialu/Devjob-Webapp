import { useEffect } from "react";
import "./Cards.scss";
import oval from "src/Oval.svg";
import { useNavigate } from "react-router-dom";

function Cards({ carditem }) {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <div className="item-logo">
        <img src={process.env.PUBLIC_URL + carditem.logo} />
      </div>
      <div className="description-container">
        <div className="mini-container">
          <div className="posted-at">{carditem.postedAt}</div>
          <div className="oval">
            <img src={oval} />
          </div>

          <div className="contract">{carditem.contract}</div>
        </div>

        <div
          className="position"
          onClick={() => {
            navigate(`/cardsdescription/${carditem.id}`);
          }}
        >
          {carditem.position}
        </div>

        <div className="company">{carditem.company}</div>
        <div className="location">{carditem.location}</div>
      </div>
    </div>
  );
}

export default Cards;
