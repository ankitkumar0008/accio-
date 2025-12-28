import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
const products = Array.from({length:10},(_,i)=>({
    id:i,
    name:`Product ${i}`
}));

const Practice3 = () => {
    const [search,setSearch] = useState("");
    const [temp,settemp] = useState(false);
    const filteredProduct = useMemo(()=>{
        return products.filter(product=>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
    },[search])
  return (
    <div>
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='search'/>
        {temp?<p>True</p>:<p>False</p>}
        <button onClick={()=>settemp(!temp)}>Toggle state</button>
        <ul>
            {filteredProduct.map((product)=>{
            return <li key={product.id}>{product.name}</li>
        })}
        </ul>
      
    </div>
  )
}

export default Practice3
