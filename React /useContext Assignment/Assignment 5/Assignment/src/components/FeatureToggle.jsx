import React from 'react'
import { useContext } from 'react'
import { FeatureContext } from '../context/FeatureContext'

const FeatureToggle = () => {
    const {toggleFeature} = useContext(FeatureContext);
  return (
    <div>
      <button onClick={toggleFeature}>ON/OFF</button>
    </div>
  )
}

export default FeatureToggle
