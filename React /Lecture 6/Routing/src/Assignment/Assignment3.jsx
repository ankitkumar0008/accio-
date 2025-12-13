import { Link } from "react-router-dom";

function Assignment3(){
    const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];
    return(
        <>
        <ul>
        {movies.map((e)=>{
            return <li key={e.id}><Link to={`/movie/${e.id}`}>{e.title}</Link></li>
        })}
        </ul>
        </>
    )
}
export default Assignment3;