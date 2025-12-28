import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';
import { memo } from 'react'

const Toolbar = memo(({onSave, onExport, onPrint})=>{
    console.log("render child");
   return(
   <div>
    <button onClick={onSave}>Save</button>
    <button onClick={onExport}>Export</button>
    <button onClick={onPrint}>Print</button>
    </div>);
   
})
const Practice7 = () => {
    console.log("render parent");
    const[save,setsave]=useState(false);
    const[exp,setexport]= useState(false);
    const[print,setPrint] = useState(false);
    const[unrelated,setunrelated] = useState(false);
    const onSave = useCallback(()=>{
        return setsave(!save);
    },[save])
    const onExport = useCallback(()=>{
        return setexport(!exp);
    },[exp])
    const onPrint = useCallback(()=>{
        return setPrint(!print);
    },[print])
  return (
    <div>
        <button onClick={()=>setunrelated(!unrelated)}>Toggle unrelated</button>
        {unrelated && <p>message</p>}
      <Toolbar  onSave = {onSave} onExport={onExport} onPrint = {onPrint}></Toolbar>
    </div>
  )
}

export default Practice7
