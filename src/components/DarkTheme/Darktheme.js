import React, { useState, useEffect } from "react";
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
    <div className={`ThemeChanger ${theme}`}>
      <label className="toggle-button">
        <input type="checkbox" />
        <span onClick={toggleTheme} className="slider"></span>
      </label>
    </div>
  );
}
export default ThemeChanger;
