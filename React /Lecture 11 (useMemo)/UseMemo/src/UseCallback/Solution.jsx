import React, { useCallback, useState, memo } from "react";
import { useMemo } from "react";
const Child = memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child Button</button>;
});

const Solution = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Solution;
