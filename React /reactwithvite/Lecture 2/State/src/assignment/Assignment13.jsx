import { useState } from "react";

function Assignment13() {
  let [numbers, setNumbers] = useState([]);

  function addRandom() {
    
    let randomNum = Math.floor(Math.random() * 100) + 1;

    setNumbers((prev) => [...prev, randomNum]);
  }

  return (
    <>
      <h2>Random Number List</h2>

      <button onClick={addRandom}>Add Random Number</button>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
}

export default Assignment13;
