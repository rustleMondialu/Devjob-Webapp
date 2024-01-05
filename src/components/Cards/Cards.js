import { useEffect } from "react";
import "./Cards.scss";

function Cards({ item }) {
  return (
    <div className="cards-container">
      <div>
        <div>{item.postedAt}</div>
        <div>{item.contract}</div>
      </div>
      <div>{item.position}</div>
      <div>{item.company}</div>
      <div>{item.location}</div>
    </div>
  );
}

export default Cards;
