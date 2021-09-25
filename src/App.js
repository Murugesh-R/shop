import Nav from './components/Nav';
import './styles/index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <Nav />
      <main className="py-3">
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signup} />
      </main>
    </Router> 
  );
}

export default App;
