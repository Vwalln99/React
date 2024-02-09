import { useState, useEffect } from "react";
import { IMovie, MovieInput } from "../ts/interfaces/global-interfaces";

interface Props {
    movie: MovieInput;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function useFormEdit(onSave: (movie: MovieInput) => void, editMovie?: IMovie): Props {
    const [movie, setMovie] = useState<MovieInput>({
        title: "",
        director: "",
        runtime: 0,
    });

    useEffect(() => {
        if (editMovie) {
            setMovie(editMovie);
        }
    }, [editMovie]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSave(movie);
    };

    return { movie, handleChange, handleSubmit };
}
