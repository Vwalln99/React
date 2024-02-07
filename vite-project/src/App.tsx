import MovieList from "./components/MovieList"
import MoviesProvider from "./components/MoviesProvider";
import"./App.css";

interface IStyle{
  padding:string;
  margin:string;
}

function App() {
  const style:IStyle ={
    padding: "1rem",
    margin:"1rem",
  };
  return (
    
    <div style={style}>
      <h1 style={{textAlign:"center"}}>Movie List</h1>
      <MoviesProvider>
          <MovieList />
      </MoviesProvider>
    </div>

  
  
)}

export default App;
