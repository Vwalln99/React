interface Props{
    animalName:string;
    handleClick:(name:string)=>void;
}

export default function ListItem({animalName, handleClick}:Props){

    return <li onClick={()=>handleClick(animalName)}>{animalName}</li>;
}