import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
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
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to={
                {
                  pathname: '/about',
                  state: {
                    from: 'root'
                  }
                }
              }>About</NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/user/john/doe">User</NavLink>
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
