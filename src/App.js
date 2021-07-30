import './App.css';
import Home from './pages/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';

import React,{useState, useReducer, useEffect} from 'react';
import {StateContext} from './utils/stateContext'




function App() {

  const initialState = {
		wishes: [],
		loggedInUser: null,
		auth: {token: null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
  return (
    <div>
      <StateContext.Provider value={{store,dispatch}}>
        <Router>
          <Switch>
            <Route path="/signin" component={SignIn} exact/>
            <Route path="/" component={Home} exact/>
          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
