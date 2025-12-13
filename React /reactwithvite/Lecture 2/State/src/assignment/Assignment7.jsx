import { useState } from "react";

function Assignment7() {
  let [fruit, setFruit] = useState([]);
  let [addFruit, setAddFruit] = useState("");
  

  function add() {
    if (addFruit.trim() === "") return;
    setFruit([...fruit, addFruit]);
    setAddFruit("");
  }

  function remove() {
    setFruit(fruit.slice(0, -1));
  }
  return (
    <>
      <h1>Assignment7</h1>
      <input
        type="text"
        value={addFruit}
        onChange={(e) => setAddFruit(e.target.value)}
      ></input>
      <button onClick={() => add()}>Add Fruit</button>
      <button onClick={() => remove()} disabled = {fruit.length === 0 }>Remove Fruit</button>
      <ul>
        {fruit.map((f,index)=>{
            return <li key={index}>{f}</li>
        })}
      </ul>
      
    </>
  );
}
export default Assignment7;
