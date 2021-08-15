import './App.css';
import React,{useReducer, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import stateReducer from './utils/stateReducer';
import {StateContext} from './utils/stateContext';
import Home from './pages/index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';
// import Navbar from './componenets/Navbar';
import ChildDetails from'./components/ChildDetails';
import WishlistDetails from './components/WishlistDetails';
import NewChild from './components/NewChild';
// import {userPics} from './utils/userPics'
import Admin from './pages/admin-board';
import NewWishlist from './components/NewWishlist';
import NewWish from './components/NewWish';
import WishDetails from './components/WishDetails';
import {getChildren} from './services/childrenServices';
import {getWishlists} from './services/wishlistsServices';
import {getWishes} from './services/wishesServices';
import UpdateWishlist from './components/UpdateWishlist'

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
          {/* <Navbar /> */}
          <Switch>            
            <Route path="/" component={Home} exact/>
            <Route exact path="/main" component={Main}></Route>
            <Route exact path="/child/:id" component={ChildDetails}></Route>
            <Route exact path="/children/new" component={NewChild}></Route>
            <Route exact path="/child/update/:id" component={NewChild}></Route>
            <Route exact path="/wishlist/new" component={NewWishlist}></Route>
            <Route exact path="/wishlist/update/:id" component={UpdateWishlist}></Route>
            <Route exact path="/wishlist/:id" component={WishlistDetails}></Route>
            <Route exact path="/wish/:id" component={WishDetails}></Route>
            <Route exact path="/wish/new" component={NewWish}></Route>
            <Route exact path="/wish/update/:id" component={NewWish}></Route>
            <Route exact path="/admin-board" component={Admin}></Route>
            <Route path="/sign_in" component={SignIn}></Route>
            <Route path="/sign_up" component={SignUp}></Route>
          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
