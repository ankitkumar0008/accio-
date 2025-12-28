import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Practice2 = () => {
  const visitCount = useRef(0);
  const timespent = useRef(null);
  useEffect(() => {
    timespent.current = Date.now();
    visitCount.current++;
    
    return () => {
      const end = Date.now();
      console.log("total time spent :", end - timespent.current);
      console.log("total vist",visitCount.current);
   
    };
  }, []);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Practice2;
