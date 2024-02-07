import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponents from './componets/HomeComponets';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home"  element={<HomeComponents/>}/>
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
