import MovieList from "./components/MovieList"
import MoviesProvider from "./components/MoviesProvider";
import"./App.css";
//import styled from "@emotion/styled";
import FormEdit from "./components/FormEdit";
import { Typography } from "@mui/material";

interface IStyle{
  padding:string;
  margin:string;
}

/*const StyledDiv = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.color || "#62ED26"};
`;
const Button =styled("button")`
  color: #000;
  padding: 10px;
  background-color: #f0e259;
  border: 1px solid black;
  border-radius: 5px;
  &:hover{
    color: #fff;
    background-color: #f08e59;
  }
`;
*/
function App() {
  const style:IStyle ={
    padding: "1rem",
    margin:"1rem",
  };
  return (
    <>
    
    <div style={style}>
    <Typography
    variant="h3"
    component="h1"
    sx={{textAlign:"center", mt:3, mb:3}}>
      Movie List
    </Typography>
      <MoviesProvider>
          <MovieList />
      </MoviesProvider>
    </div>
    <FormEdit onSave={(movie)=> console.log(movie)}/>
    {/*<StyledDiv color="coral">
      <Button> Click me</Button>
  </StyledDiv>*/}

    </>
  
)}

export default App;
