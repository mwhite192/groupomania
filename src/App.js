import React from 'react';
import {SignUpForms} from './Components/SignUpForms/SignUpForms';
import {AuthForms} from './Components/AuthForms/AuthForms';
import {Footer} from './Components/Footer/Footer';
import './App.scss';

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(false);
  return (
    <div className="App">
      {!authenticated && (<AuthForms setAuthenticated = {setAuthenticated} />)}
      {!user && (<SignUpForms setUser = {setUser} />)}
      <Footer />
    </div>
  );
}

export default App;

