import MovieList from "./components/MovieList";
import ImportantList from "./components/ImportantList";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const colors=["red", "green", "yellow"];
  const[backgroundColor, setBackgroundColor]=useState(colors[0]);

  return (
    <>
    <div>
      <h1>Movie List</h1>
      <MovieList/>
    </div>
    <div>
    <h1>Important List</h1>
    <ImportantList/>
  </div>
  <div>
        <h1>My React App</h1>
        <ul className="nav-menu"> {/*class*/}
      <li>Home</li>  {/*li ohne closing tag*/}
      <li>Contact</li>
      <li>About Us</li>
        </ul>
        <svg>
          <circle cx={25} cy={75} r={20} stroke='red' strokeWidth={3}/> {/*cx,cy="", stroke-width */}
        </svg>
        <form><input type="text"/></form>
        </div>
        
        <Button text="Click me" handleClick={() => alert("Button geklickt")}/>

        <div style={{backgroundColor, padding:"100px", margin:"10px"}}>
          {colors.map((color):JSX.Element =>{ {/*erstellt drei button die die hintergrundfarbe ändert anhand des arrays ganz oben (colors) */}
            return(
              <button key={color} onClick={()=> setBackgroundColor(color)}>
                {color}
              </button>
            );
          })}

        </div>


  </>
  );
}

export default App;
