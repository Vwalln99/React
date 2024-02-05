import {StarBorder, Star} from "@mui/icons-material";
import { IMovie } from "../ts/interfaces/global-interfaces";

interface Props{
    item:IMovie;
    onRating:(id:number, rating: number) =>void;

}

export default function Rating({item, onRating}:Props){
    const ratings:JSX.Element[]=[];
    for(let i=0; i<5; i++){
        ratings.push(
            <div
               style={{display: "inline-block"}}
               key={i}
               className="rating-btn"
               onMouseOver={()=> onRating(item.id, i+1)}>
                {item.rating > i ? <Star/> : <StarBorder/>} {/*wenn es mehr als 0 stern hat wird  stern gefüllt, sonst nur sternborder */}
            </div>
        );
    }
    return ratings;
}