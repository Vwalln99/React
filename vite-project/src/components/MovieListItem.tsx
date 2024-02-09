import Rating from "./Rating";
import { IMovie } from "../ts/interfaces/global-interfaces";
import{Card, CardContent, Grid, Typography, CardActions, IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";

interface Props{
   movie:IMovie;
   onDelete:(movie:IMovie) => Promise<void>;
}

export default function MovieListItem({movie, onDelete}:Props){
    return(
    <Grid item>
        <Card>
            <CardContent>
                <Typography component="h2" variant="h5">
                Title:{movie.title}
                </Typography>
                <Typography component="h5" variant="subtitle1" sx={{mb:1}}>
                Director:{movie.director}
                </Typography>
                <Typography component="span" variant="body1">
                Runtime:{movie.runtime}
                </Typography>
                <div><Rating item= {movie}/></div>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton color="primary" 
                aria-label="delete-movie"
                onClick={() => onDelete(movie)}>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    </Grid>
    );
}