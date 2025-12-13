import { useEffect, useState } from "react";
function Assignment12() {
  let [input, setinput] = useState("");
  let [info, setinfo] = useState([]);
  useEffect(() => {
    if (input.length > 3) {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${input}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setinfo(data);
        });
    }
  }, [input]);
  return (
    <>
      <h1>
        ✅ Assignment 12 — Fetch on Search Input (with Conditional Effect)
      </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      ></input>
      {input.length < 3 ? (
        <p>Type at least 3 characters…</p>
      ) : (
        <ul>
          {info.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Assignment12;
