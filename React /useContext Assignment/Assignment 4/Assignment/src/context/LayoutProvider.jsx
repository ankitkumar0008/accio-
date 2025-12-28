import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { LayoutContext } from './LayoutContext';

const LayoutProvider = ({children}) => {
    const[layout,setLayout] = useState("grid");
    function changeState(){
        if(layout=="grid"){
            setLayout("list");
        }else{
            setLayout("grid");
        }
    }
  return (
    <LayoutContext.Provider value={{layout,changeState}}>{children}</LayoutContext.Provider>
  )
}

export default LayoutProvider
