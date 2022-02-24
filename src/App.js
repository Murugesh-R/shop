import Nav from './components/Nav';
import './styles/index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';

function App() {
  return (
    <Router>
      <Nav />
      <main className="py-3">
        <Route path="/" component={Home} exact/> 
        <Route path="/product/:id" component={Product} /> 
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart/:id?" component={Cart} />
      </main>
    </Router> 
  );
}

export default App;
