import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import ThemeProvider from "./context/ThemeProvider";

import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  );
}
export default App;
