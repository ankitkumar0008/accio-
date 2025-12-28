import React from 'react'
import { useContext } from 'react'
import CombinedProvider from '../context/CombinedProvider'
import { SortContext } from '../context/SortContext'
import { ViewContext } from '../context/ViewContext'

const FilterPanel = () => {
  const { order, toggleOrder } = useContext(SortContext);
  const { viewmode, toggleView } = useContext(ViewContext);
  return (
    <div>
      <p>order:{order}</p>
      <button onClick={toggleOrder}>Change Order</button>
      <p>viewmode : {viewmode}</p>
      <button onClick={toggleView}>Change View</button>
    </div>
  )
}

export default FilterPanel
