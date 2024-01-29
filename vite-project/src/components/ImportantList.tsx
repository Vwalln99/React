import ListItem from "./ListItem";

export default function ImportantList(){ 
    let animals:string[]=["Lion", "Puma", "Horse", "Snake", "Elephant"];
    const logAnimalName=(name:string)=>{
        console.log(name);
    };
    return(
        <>
            {animals.length===0 ?(
                <div>No Animals to show</div>
            ):(
                <ul>
                {animals.map((animal)=>{
                    return (<ListItem 
                            key={animal}
                        animalName={animal}
                        handleClick={logAnimalName}
                        />
                    ); 
                })}
            </ul>
            )} 
        </>
     );
}