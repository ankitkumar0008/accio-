import React from 'react'
import { useState } from 'react'
import { SortContext } from './SortContext';

const SortProvider = ({children}) => {
    let[order,setOrder] = useState("ascending");
    function toggleOrder(){
        if(order ==="ascending"){
            setOrder("descending");
        }else{
            setOrder("ascending");
        }
    }
  return (
    <SortContext.Provider value = {{order,toggleOrder}}>{children}</SortContext.Provider>
  )
}

export default SortProvider
