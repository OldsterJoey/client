import './App.css';
import React,{useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import stateReducer from './utils/stateReducer';
import {StateContext} from './utils/stateContext';
import Home from './pages/index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
import ChildDetails from'./components/ChildDetails';
import {getChildren} from './services/childrenServices';
import NewChild from './components/NewChild'
// import {userPics} from './utils/userPics'
import Admin from './pages/admin-board'
import {getWishlists} from './services/wishlistsServices';
import {getWishes} from './services/wishesServices';


function App() {

  const initialState = {
    children: [],
    wishlists: [],
    wishes: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token: sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)

  useEffect(() => {
		getChildren()
		.then((children) => dispatch({type: 'setChildren', data: children}))
    .catch((error) => console.log(error))

    getWishlists()
		.then((wishlists) => dispatch({type: 'setWishlists', data: wishlists}))
		.catch((error) => console.log(error))

    getWishes()
		.then((wishes) => dispatch({type: 'setWishes', data: wishes}))
		.catch((error) => console.log(error))
	},[])

  return (
    <div>
      <StateContext.Provider 
        value={{store,dispatch}}>
        <Router>
          <Switch>            
            <Route path="/" component={Home} exact/>
            <Route path="/sign_in" component={SignIn}></Route>
            <Route path="/sign_up" component={SignUp}></Route>
            <Route path="/main" component={Main}></Route>
            <Route path="/child/:id" component={ChildDetails}></Route>
            <Route exact path="/children/new" component={NewChild}></Route>
            <Route exact path="/admin-board" component={Admin}></Route>

          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
