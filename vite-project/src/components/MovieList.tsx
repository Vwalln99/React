import { useState } from "react";
import MovieListItem from "./MovieListItem";
import { IMovie } from "../ts/interfaces/global-interfaces";
import useMovies from "./UseMovies";
import {Container, Grid} from "@mui/material"
import { TextField } from "@mui/material";

    export default function MovieList(){
        const [movies, err, handleDelete] = useMovies();
        const [filter, setFilter] = useState("");
    
    {
        if(err !== null){
            return <Container>{(err as Error).message}</Container>;
        } else{
            return(
                <Container sx ={{backgroundColor:"#ebebeb", p:10}}>
                   <TextField 
                   id="filter-input"
                   label="Filter list"
                   variant="outlined"
                   sx={{mb:3}}
                   value={filter}
                   onChange={(e) => {
                    setFilter(e.target.value)
                   }}/>
                    <Grid container spacing={2}>
                    {" "}
                    {(movies as IMovie[])
                        .filter((movie:IMovie) => {
                            return movie.title.toLowerCase().includes(filter.toLowerCase())
                    })
                    .map((movie:IMovie):JSX.Element => {
                    return (
                    <MovieListItem 
                    key={movie.id} 
                    movie={movie}
                    onDelete={handleDelete as (movie:IMovie) => Promise<void>}
                    />
                    );
                })} 
                </Grid> 
            </Container>
            );
        }
    }

}
