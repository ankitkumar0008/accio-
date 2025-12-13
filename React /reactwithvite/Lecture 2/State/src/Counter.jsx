import { useState } from "react";

function Counter() {

// let [count, setCount] = useState(0);

// let [name, setName] = useState("Guest");

let [show, setShow] = useState(false);

// let [text, setText] = useState("");

return (

<>

{/* <h2>Dashboard Counter</h2> */}

{/* <p>Current Count: {count}</p> */}

{/* <button onClick={() => setCount(count+1)}>Increase</button> */}

{/* <button onClick={() => setCount (count-1)}>Decrease</button> */}

{/* <p>{name}</p> */}

{/* <button onClick={() => setName("Jay")}>Change name</button> */}

<input type={show ? "text": "password"} />

<button onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>

{/* <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>

<p>You typed: {text}</p> */}

</>
)
}


export default Counter;
