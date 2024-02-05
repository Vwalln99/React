import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import { IMovie } from "../ts/interfaces/global-interfaces";


export default function MovieListContainer(){
    const [movies, setMovies]=useState<IMovie[]>([]);
    const [err, setErr] = useState<Error | null>(null);
    
   useEffect(() => {
    
    const options = {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    };
        const connect = async() =>{
            try{
                const data = await fetch('http://localhost:5000/movies', options);
                if (!data.ok){
                    throw new Error("Couldn't connect to server!");
                }
                setMovies((await data.json()) as IMovie[]);
            } catch (error){
                setErr(error as Error);
            }
        };
        connect();
    }, []);

    const handleRating=(id:number, rating: number):void =>{
        setMovies((prevMovie) => {
            return prevMovie.filter((movie) =>{
                if(movie.id===id) movie.rating=rating;
                return movie;
            });
        });
    };
    return <MovieList movies={movies} err={err} handleRating={handleRating} />
}