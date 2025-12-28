import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageProvider({children}){
    const [language,setLanguage] = useState("en");
    function toggle(){
        setLanguage(language=="en"?"es":"en");
    }
    return(
        <LanguageContext.Provider value ={{language,toggle}}>{children}</LanguageContext.Provider>
    )
}