import { useEffect, useState } from "react";
function Assignment3(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title=`count is ${count}`;
    })

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
export default Assignment3;