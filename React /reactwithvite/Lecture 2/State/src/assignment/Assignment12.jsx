import { useState } from "react";

function Assignment12() {
  const [fontSize, setFontSize] = useState(16); // default value

  function handleChange(e) {
    setFontSize(e.target.value);
  }

  return (
    <>
      <h1>Assignment 12 — Font Size Slider</h1>

      <input
        type="range"
        min="10"
        max="48"
        value={fontSize}
        onChange={handleChange}
      />

      <p style={{ fontSize: `${fontSize}px`, marginTop: "20px" }}>
        Live Preview Text
      </p>

      <p>Current Font Size: {fontSize}px</p>
    </>
  );
}

export default Assignment12;
