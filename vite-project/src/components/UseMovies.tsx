
import { useState, useEffect, useContext } from "react";
import { IMovie, MovieInput } from "../ts/interfaces/global-interfaces";
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

    async function handleAdd(movie:MovieInput, edited:boolean=true):Promise<void>{
        let method="POST";
        let url="http://localhost:5000/movies";
        if(edited){
            method="PUT";
            url += `/${movie.id}`;
            }else{
                movie.id=Math.random().toString(1000).replace("0.","");
            }

            const options={
            method,
            body: JSON.stringify(movie),
            headers:{"Content-Type": "application/json"}
            };

            const res = await fetch (url, options);
            const data = await res.json();
            if(edited){
                setMovies((prevMovies) =>
                    prevMovies?.map((prevMovie) => {
                        if(prevMovie.id === movie.id){
                            return data;
                        }
                        return prevMovie;
                    })
                );
            } else{
                setMovies((prevMovie) => [...prevMovie, data])
            }
        }

        return [movies, err, handleDelete, handleAdd];
    }

