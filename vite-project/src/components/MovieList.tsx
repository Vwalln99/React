import { useState } from "react";
import MovieListItem from "./MovieListItem";
import { IMovie, MovieInput } from "../ts/interfaces/global-interfaces";
import useMovies from "./UseMovies";
import {Container, Grid, TextField, Fab} from "@mui/material"
import DeleteDialog from "./DeleteDialog";
import Add from "@mui/icons-material/Add"
import FormEdit from "./FormEdit";

    export default function MovieList(){
        const [movies, err, handleDelete, handleSubmit] = useMovies();
        const [filter, setFilter] = useState("");
        const [deleteDialog, setDeleteDialog] = useState<{
            open:boolean;
            movie?: IMovie;
        }>({ open:false });

        const [formDialog, setFormDialog] = useState<{
            open:boolean;
            edited?:boolean;
            movie?: IMovie;
        }>({ open:false });

        const handleEditDialog = (open:boolean, movie: IMovie) =>{
            if(open){
                setFormDialog({open:true, movie});
            } else {
                setFormDialog({open:false, movie: undefined});
            }
        };

        const handleDialog =(open: boolean, movie: IMovie) =>{
            if (open){
                setDeleteDialog({open:true, movie});
            } else{
                setDeleteDialog({open: false, movie: undefined});
            }
        }
    
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
                    onDialog={handleDialog}
                    onEdit={handleEditDialog}
                    />
                    );
                })} 
                </Grid> 
                <DeleteDialog
                    title="Delete Element"
                    text={`Do you really want to delete the movie "${deleteDialog.movie?.title}"`}
                    open={deleteDialog.open}
                    onConfirm={(isConfirmed) =>{
                        if (isConfirmed && deleteDialog.movie){
                            (handleDelete as (movie:IMovie) => Promise<void>)(
                                deleteDialog.movie
                            );
                        }
                        setDeleteDialog({open: false, movie: undefined});
                    }}
                >

                </DeleteDialog>
                <FormEdit
                    onSave={(movie:MovieInput) =>{
                        setFormDialog({open:false, movie:undefined, edited:true});
                        (handleSubmit as (movie:MovieInput, edited:boolean)=> Promise<void>)(movie, formDialog.edited!);
                    }}
                    open={formDialog.open}
                    onClose={() => setFormDialog({open:false, movie:undefined})}
                    movie={formDialog.movie}
                />
                <Fab color="primary"
                onClick = {() => setFormDialog({open:true, movie:undefined, edited:false})}
                    sx={{ position:"fixed",
                    right:"50%",
                    bottom:"10%",
                    transform: "translateX(-50%)",}}
                >
                    <Add/>
                </Fab>
            </Container>
            );
        }
    }

}
