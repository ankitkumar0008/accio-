import { useEffect, useState } from "react";

function Api(){
    let [query, setQuery] = useState("");
    let [result, setResult] = useState([]);

    useEffect(() => {
        if(!query){
            setResult([]);
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then(res => res.json())
        .then(data => setResult(data));
    }, [query]);
    
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <br />
            <ul>
                {result.map((u) => (
                    <li key={u.id}>{u.name} {u.email}</li>
                ))}
            </ul>
        </div>
    )
}
export default Api;