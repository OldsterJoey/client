
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteWishlist} from '../services/wishlistsServices'
import { getWishlist } from '../services/wishlistsServices'
import {getWish, getWishes} from '../services/wishesServices'
import Wish from '../components/Wish'
import Child from '../components/Child'

export default function ChildDetails({history}) {
	const [child,setChild] = useState(null)
	const [wishlist, setWishlist] = useState(null)
	const [wish, setWish] = useState(null)

	const {id} = useParams()
	// let history = useHistory()
	const {store,dispatch} = useGlobalState()
    const {wishes} = store
	console.log(wishes)

    useEffect(() => {
		getChild(id)
		.then((child) => setChild(child))
		.catch((error) => console.log(error))
		getWishlist(id)
		.then((wishlist) => setWishlist(wishlist))
		.then(console.log(wishlist))
		.catch((error) => console.log(error))

		getWish(id)
		.then((wish) => setWish(wish))
		.catch((error) => console.log(error))


	},[id])
	console.log(id)

    if(!child) return null


    if(!wishlist) return (
        <div>
            {child.name}
            <p>No wishlist has been saved yet</p>
            <button>Add a wishlist</button>
        </div>)

	if (!wish) {
	return (
	<div>
		{wishlist.name}
		<p>No wishes have been saved yet</p>
		<button>Add wishes</button>
	</div>
	)}
	function handleDelete() {
		deleteWishlist(id)
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/child/${id}`)
		})
	}
	return (
		<div>
			<p>Name: {child.name}</p>			
			<p>Icon: </p>
			<p>Wishlist: {wishlist.name}</p>
			{wishes.map((wish) => {
				return(
					<li>{wish.name}</li>

				)
			})}
			{/* {loggedInUser && */}
                <Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>
			{/* } */}
		</div>
	)
}