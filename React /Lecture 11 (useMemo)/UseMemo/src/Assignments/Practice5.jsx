import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

const size = [1, 2, 3, 4, 5, 6, 7, 8];
function calculate(arr) {
    console.log("calculating file stat")
    let total = arr.reduce((agg, curr) => {
        
         return agg += curr;
    }, 0);
    return total;
}
function maximum (arr){
    return Math.max(...arr);
}

const Practice5 = () => {
    
    const[inst,setinst] = useState(false);
    const total = useMemo(()=>{
        return calculate(size);

    },[])
    const max = useMemo(()=>{
        return maximum(size);
    },[])
    
    return (
        <div>
            <h1>File statistics</h1>
            <p>Total size :{total}</p>
            <p>Maximum size : {max}</p>
            {inst && <p>This is an instruction</p>}
            <button onClick={()=>{setinst(!inst)}}>Show instruction</button>
        </div>
    )
}

export default Practice5
