import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeComponents from './componets/HomeComponets';
import LoginComponents from './componets/authentications/LoginComonets';
import RegisterComponents from './componets/authentications/RegisterComponets';
import NavbarComponents from './componets/header/NavbarComponets';
import CreatePost from './componets/postCreations/CreatePost';    // create post
import AccountComponets from './componets/header/AccountComponets';    // add more info about user
import UserProfile from './componets/searchuserprofile/Searchuserprofile';   //user profile name aboout etc 

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
          <Route path="/handle" element={<AccountComponets/>} />  
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
