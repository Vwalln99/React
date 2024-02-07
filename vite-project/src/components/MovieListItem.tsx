import Rating from "./Rating";
import { IMovie } from "../ts/interfaces/global-interfaces";



interface Props{
   movie:IMovie;
}

export default function MovieListItem({movie}:Props){
    const classNames=["movie-card"];
    if(movie.rating===5){
        classNames.push("five-star");
    }
    return(
        <div className={classNames.join(" ")}>
            <h2>Title:{movie.title}</h2>
            <h5>Director: {movie.director}</h5>
            <span>Runtime: {movie.runtime}</span>
            <div><Rating item= {movie}/></div>

        </div>
    );
}