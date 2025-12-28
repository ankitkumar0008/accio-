import React from 'react'
import { useContext } from 'react'
import { FeatureContext } from '../context/FeatureContext'

const FeatureStatus = () => {
    const{isAdvanced} = useContext(FeatureContext)
  return (
    <div>
      {isAdvanced ? <p>Advanced Mode Enabled</p>:<p>Basic Mode Enabled</p>}
    </div>
  )
}

export default FeatureStatus
