import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider } from './components/Context/index'
import Nav from './components/Navbar/index'
import Home from './pages/Home/index'
import Contact from './pages/Contact/index'
import Profile from './pages/Profile/index'

function App() {
  return (
    <UserProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/user/:id' component={Profile} />
        </Switch>
      </Router>
    </UserProvider>
  )
}

export default App
