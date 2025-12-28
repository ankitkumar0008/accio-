import React from 'react'
import { useState } from 'react'
import { CounterContext } from './CounterContext';

const CounterProvider = ({children}) => {
    const[count,setCount] = useState(0);
    function increase(){
        setCount((prev)=>prev+1);
    }
    function decrease(){
        setCount((prev)=>prev-1);
    }
  return (
    <CounterContext.Provider value={{count, increase,decrease}}>{children}</CounterContext.Provider>
  )
}

export default CounterProvider
