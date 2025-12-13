import { useState, useEffect } from "react";

function Assignment14() {
  const [country, setCountry] = useState("India");

  

  return (
    <>
      <h1>✅ Assignment 14 — Props Change → UseEffect Trigger</h1>

      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Japan">Japan</option>
      </select>

      <Child country={country} />
    </>
  );
}

export default Assignment14;
function Child({ country }) {
    useEffect(() => {
      console.log(`Fetching data for ${country}...`);
    }, [country]);

    return <p>Country selected: {country}</p>;
  }
