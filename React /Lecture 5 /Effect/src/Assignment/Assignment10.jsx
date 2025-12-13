import { useState, useEffect } from "react";

function Assignment10() {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    console.log("Selected:", selected);
  }, [selected]); 

  return (
    <>
      <h1>📝 Assignment 10 — Effect runs when the selected option changes</h1>

      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="">-- Select Option --</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>

      <p>Selected Value: {selected}</p>
    </>
  );
}

export default Assignment10;
