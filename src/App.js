import React from 'react';
// import {Home} from './Pages/Home/Home';
// import { Profile } from './Pages/Profile/Profile';
// import { EditProfile } from './Pages/EditProfile/EditProfile';
import { Register } from './Pages/Register/Register';
// import {SignUpForms} from './Components/SignUpForms/SignUpForms';
// import {AuthForms} from './Components/AuthForms/AuthForms';
// import {Footer} from './Components/Footer/Footer';
import './App.scss';

function App() {
  // const [authenticated, setAuthenticated] = React.useState(false);
  // const [user, setUser] = React.useState(false);
  // const [currentPage, setCurrentPage] = React.useState(authenticated ? 'home': 'auth');
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <EditProfile /> */}
      <Register />
      {/* {currentPage === 'home' && <Home />}
      {currentPage === 'auth' && (<AuthForms setAuthenticated = {setAuthenticated} setCurrentPage = {setCurrentPage} />)} */}
      {/* {!user && (<SignUpForms setUser = {setUser} />)} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

