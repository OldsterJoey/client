import './App.css';
import React,{useState, useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'
import Home from './pages/index'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main'






function App() {

  const initialState = {
		loggedInUser: null,
		auth: {token: null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
  return (
    <div>
      <StateContext.Provider 
      value={{store,dispatch}}
      >
        <Router>
          <Switch>            
            <Route path="/" component={Home} exact/>
            <Route path="/sign_in" component={SignIn}></Route>
            <Route path="/sign_up" component={SignUp}></Route>
            <Route path="/main" component={Main}></Route>



          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
