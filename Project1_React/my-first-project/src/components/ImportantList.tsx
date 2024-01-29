export default function ImportantList(){ 
    let animals:string[]=["Lion", "Puma", "Horse", "Snake", "Elephant"];
    if (animals.length===0){
        return <div>No Animals to show</div>;
    }else{
        return(
            <ul>
                {animals.map((animal)=>{
                    return <li key={animal}>{animal}</li>; {/* Array wird hier nur gerendert wenn sich Daten darin befinden */}
                } )}
            </ul>
         );
    }
}