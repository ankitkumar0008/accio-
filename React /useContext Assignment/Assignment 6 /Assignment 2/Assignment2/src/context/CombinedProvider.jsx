import React from 'react'
import SortProvider from './SortProvider'
import ViewProvider from './ViewProvider'

const CombinedProvider = ({children}) => {
  return (
    
        <SortProvider>
            <ViewProvider>{children}</ViewProvider>
        </SortProvider>
  )
}

export default CombinedProvider
