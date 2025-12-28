import React from 'react'
import { useState } from 'react'
import { FeatureContext } from './FeatureContext';
const FeatureProvider = ({children}) => {
    let[isAdvanced,setAdvance] = useState(false);
    function toggleFeature(){
        if(isAdvanced===false){
            setAdvance(true);
        }else{
            setAdvance(false)
        }
    }
  return (
    <FeatureContext.Provider value = {{isAdvanced,toggleFeature}}>{children}</FeatureContext.Provider>
  )
}

export default FeatureProvider
