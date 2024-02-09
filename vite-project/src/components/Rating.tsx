import { JSX, useCallback, useContext } from "react";
import {StarBorder, Star} from "@mui/icons-material";
import { IMovie } from "../ts/interfaces/global-interfaces";
import MovieContext from "../ts/interfaces/MovieContext";
import style from "./css/Rating.module.css";

interface Props{
    item:IMovie;
}

export default function Rating({item}:Props):JSX.Element[]{
    const [, setMovies] = useContext(MovieContext);

    const handleRating = useCallback(
        (id:number, rating:number): void =>{
        setMovies((prevMovie: IMovie[]) => {
            return prevMovie.filter((movie) =>{
                if (movie.id === id) movie.rating = rating;
                return movie;
            });
        });
    },
    [setMovies]
    );

    const ratings:JSX.Element[]=[];
    for(let i=0; i<5; i++){
        ratings.push(
            <div
               key={i}
               className={style.rating}
               onClick={() => handleRating(item.id, i+1)}
               onMouseOver={()=> handleRating(item.id, i+1)}>
                {item.rating > i ? <Star/> : <StarBorder/>} {/*wenn es mehr als 0 stern hat wird  stern gefüllt, sonst nur sternborder */}
            </div>
        );
    }
    return ratings;
}