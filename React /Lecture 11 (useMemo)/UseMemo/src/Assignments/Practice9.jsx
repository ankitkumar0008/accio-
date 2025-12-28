import React, { useState, useMemo, useCallback ,memo} from "react";

const ReportPanel = memo(({ summary, onRefresh }) => {
  console.log("🔁 ReportPanel rendered");

  return (
    <div>
      <h2>Report</h2>
      <p>Total: {summary.total}</p>
      <p>Count: {summary.count}</p>

      <button onClick={onRefresh}>Refresh Report</button>
    </div>
  );
});


const users = [1, 2, 3, 4];

function calculateTotal(arr) {
  return arr.reduce((ac, cr) => ac + cr, 0);
}

const Practice9 = () => {

  const [toggle, setToggle] = useState(false);


  const summary = useMemo(() => {
    console.log("🧮 summary recalculated");

    return {
      total: calculateTotal(users),
      count: users.length
    };
  }, []);


  const handleRefresh = useCallback(() => {
    console.log("🔄 Report refreshed");
  }, []);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>
        Toggle UI
      </button>

      <p>Toggle state: {toggle ? "ON" : "OFF"}</p>

      <ReportPanel
        summary={summary}
        onRefresh={handleRefresh}
      />
    </div>
  );
};

export default Practice9;
