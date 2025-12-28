import React from 'react'
import SortProvider from './SortProvider'
import ViewProvider from './ViewProvider'

const CombinedProvider = ({children}) => {
  return (
    <CombinedProvider>
        <SortProvider>
            <ViewProvider>{children}</ViewProvider>
        </SortProvider>
    </CombinedProvider>
  )
}

export default CombinedProvider
