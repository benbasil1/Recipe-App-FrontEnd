import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import Recipesearch from './components/Recipesearch';
import AllRecipe from './components/AllRecipe';

function App() {
  return (
    <div >
     <AddRecipe/>
     <Recipesearch/>
      <AllRecipe/>
    </div>
  );
}

export default App;
