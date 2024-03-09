import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import data from "./data.json";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import "./App.scss";
import "../src/components/Searchbar/Searchbar.scss";
import searchIcon from "../src/search-icon.svg";
import locationIcon from "../src/location-icon.svg";

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CardsDescription from "./components/Cards-description/CardsDescription";

function App() {
  const [devData, setDevData] = useState(data);
  const [visibleCardsCount, setVisibleCardsCount] = useState(12);
  const [location, setLocation] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [fullTimeFilter, setFullTimeFilter] = useState(false);
  const submit = () => {
    console.log("search", location, titleFilter, fullTimeFilter);
    const filteredData = data.filter((item) => {
      let passesLocationFilter =
        location === "" || item.location.includes(location);
      let passesTitleFilter =
        titleFilter === "" ||
        item.company.toLowerCase().includes(titleFilter.toLowerCase());
      let passesFullTimeFilter = !fullTimeFilter || item.fullTime;
      return passesLocationFilter && passesTitleFilter && passesFullTimeFilter;
    });
    setDevData(filteredData);
  };
  useEffect(() => {
    console.log("data", data);
  }, []);
  const handleLoadMore = () => {
    setVisibleCardsCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <Navbar />

      <div className="searchbar-container">
        <div className="icon-input">
          <img src={searchIcon} />
          <input
            placeholder="Filter by title,companies,expertise..."
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          ></input>
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
          <div className="fulltime">
            <input
              type="checkbox"
              id="fto"
              onChange={(e) => setFullTimeFilter(e.target.checked)}
            />
            <label className="labeled" htmlFor="fto">
              Full Time Only
            </label>
          </div>
        </div>
        <div className="searchbar-btn">
          <button onClick={submit} className="first-btn">
            Search
          </button>
        </div>
      </div>
      <div className="app-dashboard-container">
        {devData.map((arrayitem, index) => {
          if (index < visibleCardsCount) {
            return <Cards key={arrayitem.id} carditem={arrayitem} />;
          }
          return null;
        })}
      </div>
      <div className="buttonstyle">
        <button className="first-btn" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </>
  );
}

export default App;
