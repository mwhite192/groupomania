import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Logo} from './Components/Logo/Logo';
import {AuthForms} from './Components/AuthForms/AuthForms';
import {Footer} from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <AuthForms />
      <Footer />
    </div>
  );
}

export default App;

