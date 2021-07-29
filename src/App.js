import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  )
}

export default App;
