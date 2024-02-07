import { createContext, Dispatch, SetStateAction } from "react";
import { IMovie } from "./global-interfaces";

type MovieContextType = [IMovie[] | null, Dispatch<SetStateAction<IMovie[]>>];

const MovieContext = createContext<MovieContextType>([null, () => {}]);

export default MovieContext;
