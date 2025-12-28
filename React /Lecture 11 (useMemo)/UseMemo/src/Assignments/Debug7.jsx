import { useMemo, useState } from "react";
const data = [10, 20, 30, 40];
function Debug7() {
  const [show, setShow] = useState(false);

  

  const total = useMemo(() => {
    console.log("Calculating total");
    return data.reduce((a, b) => a + b, 0);
  }, [data]);

  return (
    <div>
      <h2>Total: {total}</h2>

      <button onClick={() => setShow(!show)}>
        Toggle
      </button>
    </div>
  );
}

export default Debug7;
