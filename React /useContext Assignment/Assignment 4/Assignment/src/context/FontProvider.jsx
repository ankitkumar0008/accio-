import React from 'react'
import { useState } from 'react'
import { FontContext } from './FontContext';

const FontProvider = (children) => {
    const [font,setFont] = useState(12);
    function increase (){
        setFont((prev)=>prev+2);
    }
  return (
    <FontContext.Provider value={{font,increase}}>{children}</FontContext.Provider>
  )
}

export default FontProvider
