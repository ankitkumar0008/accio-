import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Greetings() {
  let { language, toggle } = useContext(LanguageContext);
  return (
    <div>
      {language==="en"?(<h1>Hello</h1>):(<h1>Hola</h1>)}
      <button onClick={toggle}>Toggle Language</button>
    </div>
  );
}

export default Greetings;
