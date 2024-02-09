
import { useState, useEffect, useContext } from "react";
import { IMovie } from "../ts/interfaces/global-interfaces";
import MovieContext from "../ts/interfaces/MovieContext";


export default function useMovies(){
    const [movies, setMovies]=useContext(MovieContext);
    const [err, setErr] = useState<Error | null>(null);
    
   useEffect(() => {
    
    const options = {
        method:"GET",
        headers: {"Content-Type": "application/json"},
    };
        (async() =>{
            try{
                const data = await fetch('http://localhost:5000/movies', options);
                setMovies((await data.json()) as IMovie[]);
            } catch (error){
                setErr(error as Error);
            }
        })();
    }, [setMovies]);

    async function handleDelete(movie:IMovie){
        const options ={
            method:"Delete",
        };
        const res = await fetch (`http://localhost:5000/movies/${movie.id}`, options);
        if(res.ok){
            setMovies((prevMovie) =>
            prevMovie.filter((prevMovie) =>prevMovie.id !== movie.id)
            );
        }
    }

    return [movies, err, handleDelete];
}