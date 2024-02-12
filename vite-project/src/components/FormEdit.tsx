import { useEffect} from "react";
import {  MovieInput } from "../ts/interfaces/global-interfaces";
import {useForm}  from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import movieShema from "../ts/interfaces/validationShema";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

interface Props {
    open:boolean;
    onSave: (movie: MovieInput) => void;
    onClose: (onConfirm:boolean) => void;
    movie?: MovieInput;

}



export default function FormEdit({ open, onSave, onClose,
    movie={title:"", director: "", runtime:0} }: Props): JSX.Element {
    const {register, handleSubmit, reset, 
        formState:{errors}} = 
        useForm<MovieInput>
        ({defaultValues: movie, resolver: yupResolver(movieShema)});

    useEffect(() => {
        if (movie.id ) reset(movie);
    }, [movie, reset]);
    

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle id="form-dialog-title">
            {movie.id ? "Edit Movie": "Add new Movie"}
            </DialogTitle>
            <form onSubmit={handleSubmit(onSave)}>
                <DialogContent>
                    <div>
                        <TextField
                        {...register("title")}
                        error={!!errors.title}
                        label="Title"
                        />
                        {errors.title && <div>{errors.title.message}</div>}
                    </div>
                    <div>
                        <TextField
                        {...register("director")}
                        error={!!errors.director}
                        label="Director"
                        />
                        {errors.director && <div>{errors.director.message}</div>}
                    </div>
                    <div>
                        <TextField
                        {...register("runtime")}
                        error={!!errors.runtime}
                        label="Runtime"
                        />
                        {errors.runtime && <div>{errors.runtime.message}</div>}
                    </div>
                    <DialogActions>
                        <Button color="primary" type="submit">
                            Save
                        </Button>
                        <Button color="secondary" onClick={() => onClose(false)}>
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    );
}
