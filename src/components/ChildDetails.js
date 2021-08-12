
import React,{ useState,useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {getChild} from '../services/childrenServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {deleteWishlist} from '../services/wishlistsServices'
import { getWishlist } from '../services/wishlistsServices'
import {getWish} from '../services/wishesServices'


export default function ChildDetails() {
	const [child,setChild] = useState(null)
	const [wishlist, setWishlist] = useState(null)
	const [wish, setWish] = useState(null)

	const {id} = useParams()
	let history = useHistory()
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
		<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Add Wishlist</Button>
        </div>)

	if (!wish) {
	return (
	<div>
		{wishlist.name}
		<p>No wishes have been saved yet</p>
		<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
	</div>
	)}
	function handleDelete() {
		deleteWishlist(id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/child/${id}`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
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
                <Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>
		</div>
	)
}