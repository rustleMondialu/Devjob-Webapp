import "./Searchbar.scss";
import searchIcon from "../../search-icon.svg";
import locationIcon from "../../location-icon.svg";
import { useState } from "react";

function Searchbar() {
  const [location, setLocation] = useState("");

  const submit = () => {
    console.log("search", location);
  };

  return (
    <div className="searchbar-container">
      <div className="icon-input">
        <img src={searchIcon} />
        <input placeholder="Filter by title,companies,expertise..."></input>
      </div>
      <div className="icon-input">
        <img src={locationIcon} />
        <input
          placeholder="Filter by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <input type="checkbox" id="fto" />
        <label htmlFor="fto">Full Time Only</label>
      </div>
      <button onClick={submit}>Search</button>
    </div>
  );
}

export default Searchbar;
