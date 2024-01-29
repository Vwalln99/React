import"../MovieList.css";
import MovieListItem from "./MovieListItem";

const movies=[
    {
    id:1,
    title: "Killers of the Flower Moon",
    director: "Martin Scorcese",
    runtime: 3.26,
    rating: 5,
    },
    {
        id:2,
        title: "Asteroid City",
        director: "Wes Anderson",
        runtime: 1.45,
        rating: 4,
    },
    {
        id:3,
        title: "The Whale",
        director: "Darren Aronofsky",
        runtime: 4.57,
        rating: 5,
    },
];

export default function MovieList(){
    return(
        <div className="container">
          {movies.map((movie):JSX.Element=>{
            return <MovieListItem key={movie.id} movie={movie}/>;
          })}  

        </div>
    );
}