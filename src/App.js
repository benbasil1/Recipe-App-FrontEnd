import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import Recipesearch from './components/Recipesearch';
import AllRecipe from './components/AllRecipe';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Nav from './components/Nav';


function App() {
  return (
    <div >
      <Nav/>
     <BrowserRouter>
     <Routes>

       <Route path='/' element={<AddRecipe/>}/>
       <Route path='/s' element={<Recipesearch/>}/>
       <Route  path='/a' element={<AllRecipe/>}/>
       

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
