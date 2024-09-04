import React from 'react';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Home from './pages/Home';
import Userpage from './pages/Userpage';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Sigin from './pages/Sigin';
import Logout from './pages/Logout'

export default function App(){
    
      return(
        <nav>
         <BrowserRouter>
             
        <Routes>
          <Route path='/Home'element={<Home/>}/>
           <Route path='/Menu'element={<Menu/>}/>
          <Route path='/Userpage'element={<Userpage/>}/>
          <Route path='/Login'element={<Login/>}/>
          <Route path='/Logout'element={<Logout/>}/>
          <Route path='/'element={<Sigin/>}/>
        </Routes>
        </BrowserRouter>
        </nav> 
);
   

}



