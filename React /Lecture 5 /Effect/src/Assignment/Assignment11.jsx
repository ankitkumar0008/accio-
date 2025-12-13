import { useState, useEffect } from "react";

function Assignment11() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    if (age > 0 && salary > 0) {
      console.log("Both age and salary changed! ", age, salary);
    }
  }, [age, salary]);

  return (
    <>
      <h1>✅ Assignment 11 — Run effect only when BOTH values change at least once</h1>

      <input
        type="number"
        placeholder="Enter Age"
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Enter Salary"
        onChange={(e) => setSalary(Number(e.target.value))}
      />

      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
    </>
  );
}

export default Assignment11;
