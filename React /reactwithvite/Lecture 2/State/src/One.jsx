import { useState } from "react";

function One(){
    let [item, setitem] = useState([]);
    let [task, settask] = useState(["Task1", "Task2"]);
    let [form, setForm] = useState({name: "", age: ""});
    let[num, setNum] = useState(0)
    return(
        <div>
            <button onClick={()=> setitem([...item, item `${item.length+1}`])}>Add Items</button>
            <p>{item}</p>

            <button onClick={()=> settask(task.filter((task)=>task!=="Task1"))}>Remove Task</button>
            <p>{task}</p>

            <input type="text" placeholder="Name" onChange={(e)=> setForm({...form,name: e.target.value})} />
            <input type="text" placeholder="Age" onChange={(e)=> setForm({...form,age: e.target.value})} />

            <p>{form.name}-{form.age}</p>

            <button onClick={()=>setNum(Math.floor(Math.random()*100))}>Generate a Random Number</button>
            <p>{num}</p>
        </div>
    )
}

export default One;