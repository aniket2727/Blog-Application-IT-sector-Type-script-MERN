import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponents from './componets/HomeComponets';
import LoginComponents from './componets/authentications/LoginComonets';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<HomeComponents/>}/>
        <Route path="/login"  element={<LoginComponents/>}/>
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
