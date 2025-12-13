import { useParams } from "react-router-dom";

function Movie(){
    let{id} = useParams();
    const movies = [
  { id: "tt101", title: "Inception", year: 2010 },
  { id: "tt102", title: "Avatar", year: 2009 },
  { id: "tt103", title: "Interstellar", year: 2014 },
];
    const movie = movies.find(m=>m.id==id);
    console.log(movie);
    return(
        <>
        <h1>{movie.title}</h1>
        <p>{movie.year}</p>
        </>
    )
}
export default Movie;