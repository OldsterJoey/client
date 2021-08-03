import './App.css';
import React,{useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import stateReducer from './utils/stateReducer';
import {StateContext} from './utils/stateContext';
import Home from './pages/index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Child from'./components/Child';
import {getChildren} from './services/childrenServices';
// import {getWishlists} from './services/wishlistsServices';


function App() {

  const initialState = {
    children: [],
    wishlists: [],
		loggedInUser: null,
		auth: {token: null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)

  useEffect(() => {
		getChildren()
		.then((children) => dispatch({type: 'setChildren', data: children}))
		.catch((error) => console.log(error))
	},[])

  // useEffect(() => {
	// 	getWishlists()
	// 	.then((wishlists) => dispatch({type: 'setWishlists', data: wishlists}))
	// 	.catch((error) => console.log(error))
	// },[])

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
            <Route path="/children/:id" component={Child}></Route>


          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
