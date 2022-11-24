import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
 return(
  
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  

  
  </BrowserRouter>
  
 )
  
}

export default App;