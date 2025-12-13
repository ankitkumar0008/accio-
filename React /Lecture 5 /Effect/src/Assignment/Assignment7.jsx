import { useEffect, useState } from "react";

function Assignment7() {
  let [text, setText] = useState();
  
  useEffect(() => {
    if (!text) {
      return;
    }else{
        console.log(text);
    }
  }, [text]);
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      
    </>
  );
}
export default Assignment7;
