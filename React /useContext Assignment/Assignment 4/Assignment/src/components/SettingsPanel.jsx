import React from 'react'
import { useContext } from 'react'
import CombinedProvider from '../context/CombinedProvider'

const SettingsPanel = () => {
    const {font,increase,layout,changeState} = useContext(CombinedProvider)
  return (
    <div>
      <h1>font size {font}</h1>
      <button onClick={increase}>Increse</button>
      <h1>layout:{layout}</h1>
      <button onClick={changeState}>Change</button>
    </div>
  )
}

export default SettingsPanel
