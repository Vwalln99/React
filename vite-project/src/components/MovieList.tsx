import"../MovieList.css";
import MovieListItem from "./MovieListItem";
import { useState, useEffect } from "react";
import { IMovie } from "../ts/interfaces/global-interfaces";


export default function MovieList(){
    const [movies, setMovies]=useState<IMovie[]>([]);
    const [err, setErr] = useState<Error | null>(null);

    useEffect(() => {
        const connect = async() =>{
            try{
                const data = await fetch("http://localhost:5000/movies");
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
    
    {
        if(err !== null){
            return <div>{err?.message}</div>;
        } else{
            return(
                <div className="container">
                    {" "}
                  {movies.map((movie):JSX.Element => {
                    return (
                        <MovieListItem 
                            key={movie.id}
                            movie={movie}
                            onRating={handleRating}
                        />
                    );
                })}  
            </div>
            );
        }
    }

}
