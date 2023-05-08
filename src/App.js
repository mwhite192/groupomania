import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Logo} from './Components/Logo/Logo';
import {CredForms} from './Components/CredForms/CredForms';
import {LogInButton} from './Components/LogInButton/LogInButton';
import {CreateAccountButton} from './Components/CreateAccountButton/CreateAccountButton';
import {AppFooter} from './Components/AppFooter/AppFooter';

function App() {
  return (
    <div className="App">
      <Logo />
      <CredForms />
      <LogInButton />
      <CreateAccountButton />
      <AppFooter />
    </div>
  );
}

export default App;

