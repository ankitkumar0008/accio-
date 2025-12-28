import React from 'react'
import { useContext } from 'react'
import CombinedProvider from '../context/CombinedProvider'

const FilterPanel = () => {
    const{order,setOrder,viewmode,toggleView} = useContext(CombinedProvider);
  return (
    <div>
      <p>order:{order}</p>
      <button onClick={setOrder}>Change Order</button>
      <p>viewmode : {viewmode}</p>
      <button onClick={toggleView}>Change View</button>
    </div>
  )
}

export default FilterPanel
