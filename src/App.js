import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthForms} from './Components/AuthForms/AuthForms';
import {Footer} from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthForms />
      <Footer />
    </div>
  );
}

export default App;

