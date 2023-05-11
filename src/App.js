import React from 'react';
import './App.scss';
import {AuthForms} from './Components/AuthForms/AuthForms';
import {Footer} from './Components/Footer/Footer';

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  return (
    <div className="App">
      {!authenticated && (<AuthForms setAuthenticated = {setAuthenticated} />)}
      <Footer />
    </div>
  );
}

export default App;

