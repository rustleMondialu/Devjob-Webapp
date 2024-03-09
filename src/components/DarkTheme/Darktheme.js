import React, { useState, useEffect } from "react";
import sun from "src/icon-sun.svg";
import moon from "src/icon-moon.svg";
import "./darktheme.scss";
function ThemeChanger() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="changetheme_container">
        <div className="Sun">
          <img src={sun} />
        </div>
        <div className={`ThemeChanger ${theme}`}>
          <label className="toggle-button">
            <input type="checkbox" />
            <span onClick={toggleTheme} className="slider"></span>
          </label>
        </div>
        <div className="Moon">
          <img src={moon} />
        </div>
      </div>
    </>
  );
}
export default ThemeChanger;
