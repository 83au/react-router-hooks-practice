import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: '/about',
                  state: {
                    from: 'root'
                  }
                }
              }>About</Link>
            </li>
            <li>
              <Link to="/user/john/doe">User</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/user/:firstname/:lastname">
              <User />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
