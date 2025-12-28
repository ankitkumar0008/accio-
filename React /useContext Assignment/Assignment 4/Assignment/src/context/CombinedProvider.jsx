import React from 'react'
import LayoutProvider from './LayoutProvider'
import FontProvider from './FontProvider'

const CombinedProvider = ({children}) => {
  return (
    <LayoutProvider>
        <FontProvider>{children}</FontProvider>
    </LayoutProvider>
  )
}

export default CombinedProvider
