import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponents from './componets/HomeComponets';
import LoginComponents from './componets/authentications/LoginComonets';
import RegisterComponents from './componets/authentications/RegisterComponets';
import NavbarComponents from './componets/header/NavbarComponets';
import CreatePost from './componets/postCreations/CreatePost';
const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponents />
        <Routes>
          <Route path="/home" element={<HomeComponents />} />
          <Route path="/" element={<LoginComponents />} />
          <Route path="/register" element={<RegisterComponents />} />
          <Route path="/create" element={<CreatePost />} />
          {/* Add the NotFound route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
