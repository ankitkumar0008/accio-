import { useState, useEffect } from "react";

function Assignment13() {
  let [count, setCount] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id); 
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  return (
    <>
      <h1>✅ Assignment 13 — Auto-Counter with Cleanup</h1>
      <p>count: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

export default Assignment13;
