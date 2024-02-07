import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponents from './componets/HomeComponets';
import LoginComponents from './componets/authentications/LoginComonets';
import RegisterComponents from './componets/authentications/RegisterComponets';
import NavbarComponents from './componets/header/NavbarComponets';
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarComponents/>
      <Routes>
        <Route path="/home"  element={<HomeComponents/>}/>
        <Route path="/login"  element={<LoginComponents/>}/>
        <Route path="/register"  element={<RegisterComponents/>}/>
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
