import React from 'react';
import {Login} from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
// import {Home} from './Pages/Home/Home';
// import { Profile } from './Pages/Profile/Profile';
// import { EditProfile } from './Pages/EditProfile/EditProfile';
// import {SignUpForms} from './Components/SignUpForms/SignUpForms';
// import {AuthForms} from './Components/AuthForms/AuthForms';
// import {Footer} from './Components/Footer/Footer';
import './App.scss';

function App() {
  // declares the showRegister state variable and its corresponding setter function
  const [showRegister, setShowRegister] = React.useState(false);
  // declares the currentPage state variable and its corresponding setter function
  const [currentPage, setCurrentPage] = React.useState(showRegister ? 'register':'login');


  return (
    <div className="App">
      {currentPage === 'login' && <Login setShowRegister = {setShowRegister} setCurrentPage = {setCurrentPage} />}
      {currentPage === 'register' && <Register setShowRegister = {setShowRegister} setCurrentPage = {setCurrentPage} />}
      {/* {currentPage === 'home' && <Home setHome = {setHome} setCurrentPage = {setCurrentPage}/>} */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <EditProfile /> */}
      {/* {currentPage === 'home' && <Home />}
      {currentPage === 'auth' && (<AuthForms setAuthenticated = {setAuthenticated} setCurrentPage = {setCurrentPage} />)} */}
      {/* {!user && (<SignUpForms setUser = {setUser} />)} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

