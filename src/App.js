import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import data from "./data.json";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import "./App.scss";

import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import CardsDescription from "./components/Cards-description/CardsDescription";

function App() {
  const [devData, setDevData] = useState(data);
  const [visibleCardsCount, setVisibleCardsCount] = useState(12);

  useEffect(() => {
    console.log("data", data);
  }, []);
  const handleLoadMore = () => {
    setVisibleCardsCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <Navbar />

      <Searchbar />
      <div className="app-dashboard-container">
        {devData.map((arrayitem, index) => {
          if (index < visibleCardsCount) {
            return <Cards key={arrayitem.id} carditem={arrayitem} />;
          }
          return null;
        })}
      </div>
      <button className="first-btn" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
}

export default App;
