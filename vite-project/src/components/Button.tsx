interface Props{
    text:string;
    handleClick:(alert:string)=>void;
}

export default function Button({text, handleClick}: Props){

    return <button onClick={()=>handleClick(text)}>{text}</button>
}

