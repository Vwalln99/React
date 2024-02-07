import MovieList from "./MovieList";
import { useState, useEffect, useContext } from "react";
import { IMovie } from "../ts/interfaces/global-interfaces";
import MovieContext from "../ts/interfaces/MovieContext";


export default function MovieListContainer(){
    const [movies, setMovies]=useContext(MovieContext);
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
}