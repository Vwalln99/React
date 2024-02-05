import"../MovieList.css";
import MovieListItem from "./MovieListItem";
import { useState, useEffect } from "react";
import { IMovie } from "../ts/interfaces/global-interfaces";


export default function MovieList(){
    const [movies, setMovies]=useState<IMovie[]>([]);
    const [err, setErr] = useState<Error | null>(null);

    
    const handleRating=(id:number, rating: number):void =>{
        setMovies((prevMovie) => {
            return prevMovie.filter((movie) =>{
                if(movie.id===id) movie.rating=rating;
                return movie;
            });
        });
    };
    return(
        <div className="container">
          {movies.map((movie):JSX.Element=>{
            return <MovieListItem key={movie.id}
             movie={movie}
             onRating={handleRating}/>;
          })}  

        </div>
    );
}