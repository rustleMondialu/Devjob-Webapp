import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import data from "./data.json";
import { useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import "./App.scss";

function App() {
  const [devData, setDevData] = useState(data);

  useEffect(() => {
    console.log("data", data);
  }, []);

  return (
    <>
      <Navbar />
      <Searchbar />
      <div className="app-dashboard-container">
        {devData.map((item) => {
          return <Cards key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
