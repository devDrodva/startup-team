import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import './App.css';

function App() {

  return (
    <UserProvider >
      <Router>
        <Nav />
        <div className="wrapper">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:id" component={Profile} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
