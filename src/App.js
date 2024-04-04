
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Navbar from './component/Navbar';
import SingleRecipe from './pages/SingleRecipe';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login  />}/>
          <Route path='/Signin' element={<Signin  /> }/>
          <Route path='/Recipe' element={<SingleRecipe  /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
