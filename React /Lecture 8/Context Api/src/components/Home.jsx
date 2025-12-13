import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Home() {
  let { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>current Theme :{theme}</h2>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}

export default Home;
