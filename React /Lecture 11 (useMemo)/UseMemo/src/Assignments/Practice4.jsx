import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const LOG_TEXT = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;

function count(text) {
  let occurence = {
    w: 0,
    e: 0,
  };
  const words = text.trim().replaceAll("\n", " ").split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] == "ERROR") {
      occurence.e++;
    } else if (words[i] == "WARN") {
      occurence.w++;
    }
  }
  return occurence;
}
const Practice4 = () => {
    const[showTips,setShowTips] = useState(false);
  const appearance = useMemo(() => {
    return count(LOG_TEXT);
  });
  return (
    <div>
      <p>Error :{appearance.e}</p>
      <p>Warn : {appearance.w}</p>
      <button onClick={()=>setShowTips(!showTips)}>Show tips</button>
      {showTips&&<p>Fix the error logs first</p>}
    </div>
  );
};

export default Practice4;
