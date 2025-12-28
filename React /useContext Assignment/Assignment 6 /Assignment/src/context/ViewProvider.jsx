import React from 'react'
import { ViewContext } from './ViewContext';

const ViewProvider = ({children}) => {
    let[viewmode,setViewMode] = useState("compact");
    function toggleView(){
        if(viewmode=="compact"){
            setViewMode("expanded")
        }else{
            setViewMode("compact");
        }
    }
  return (
    <ViewContext.Provider value={{viewmode,toggleView}}>{children}</ViewContext.Provider>
  )
}

export default ViewProvider
