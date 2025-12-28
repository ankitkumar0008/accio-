import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
const CounterControls = () => {
    const {increase,decrease} = useContext(CounterContext)
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default CounterControls
