import MovieList from "./components/MovieList";
import ImportantList from "./components/ImportantList";
import Button from "./components/Button";

function App() {


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
  </>
  );
}

export default App;
