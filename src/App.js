import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Logo} from './Components/Logo/Logo';
import {CredForms} from './Components/CredForms/CredForms';
import {AppFooter} from './Components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <Logo />
      <CredForms />
      <AppFooter />
    </div>
  );
}

export default App;

