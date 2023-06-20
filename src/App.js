// imports the React library and the App.scss file
import React from 'react';
import './App.scss';
// imports the react router, Login, Register, Home, Profile, and EditProfile pages
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { Home } from './Pages/Home/Home';
import { Profile } from './Pages/Profile/Profile';
import { EditProfile } from './Pages/EditProfile/EditProfile';

function App() {
  return (
    // sets up the frontend router and routers for each page
    <Router>
      <Routes>
        <Route exact path='/' Component={Login} /> 
        <Route exact path='/register' Component={Register}/>
        <Route exact path='/home' Component={Home}/>
        <Route exact path='/profile' Component={Profile}/>
        <Route exact path='/update' Component={EditProfile}/> 
      </Routes>
    </Router>
  );
}

export default App;
