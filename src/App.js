import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Select from './views/Select';
import Pokemon from './views/Pokemon';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element= {<Home />}></Route>
            <Route path='/Select' element= {<Select />}></Route>
            <Route  path='/Select/:name' element= {<Pokemon />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
