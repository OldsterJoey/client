import React, {useEffect, useState}  from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {deleteWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import { getWishlist} from '../services/wishlistsServices'

export default function WishlistDetails() {
	const [wishlist,setWishlist] = useState(null)

	const {store,dispatch} = useGlobalState()
    const {wishlists, children} = store
	const {id} = useParams()

	// const child = children.find(child => child.id === parseInt(id))

	useEffect(() => {
		getWishlist(id)
		.then((wishlist) => setWishlist(wishlist))
		.catch((error) => console.log(error))
	},[id])

	// wishlists.find(wishlist => wishlist.id === parseInt(id))
	console.log(wishlist)
	let history = useHistory()

	// const wishes = wishlist && wishlist.wishes 

	if (!wishlist) return (
	<div>
		<p>No wishlist has been saved yet</p>
		<Button onClick={() => history.push(`/wishlist/new`)}>Create Wishlist</Button>
	</div>
	)
	function handleDelete() {
		deleteWishlist(id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/main`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
		})
	}

	return (
		<div>
			<p>Wishlist: {wishlist.name}</p>
			{/* {wishes.map((wish) => {
				return(
					<li>{wish.name}</li>

				)
			})} */}

			<Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>		
		</div>
	)
}

// import React,{ useState,useEffect} from 'react'
// import {useParams,useHistory} from 'react-router-dom'
// import {getWishlist} from '../services/wishlistsServices'
// import {useGlobalState} from '../utils/stateContext'
// import {deleteWishlist} from '../services/wishlistsServices'
// import {Button, Panel} from './Styled'
// import Child from './Child'

// export default function WishlistDetails() {
// 	const [wishlist,setWishlist] = useState(null)
// 	const {id} = useParams()
// 	let history = useHistory()
// 	const {store,dispatch} = useGlobalState()
// 	const {loggedInUser, children} = store


// 	useEffect(() => {
// 		getWishlist(id)
// 		.then((wishlist) => setWishlist(wishlist))
// 		.catch((error) => console.log(error))
// 	},[id])


// 	// useEffect(() => {
// 	// 	getWishlist(id)
// 	// 	.then((wishlist) => {
// 	// 		console.log(wishlist)
// 	// 		// const childWishlist = children.find((child => child.id === wishlist.child_profile_id))
// 	// 		setWishlist(wishlist)
// 	// 	})
// 	// 	.catch((error) => console.log(error))
// 	// },[id])

// 	// if (!wishlist) return (
// 	// 		<div>
// 	// 			<p>No wishlist has been saved yet</p>
// 	// 			<Button onClick={() => history.push(`/wishlist/new/`)}>Add Wishlist</Button>

// 	// 		</div>
// 	// 	  )
// 	function handleDelete() {
// 		deleteWishlist(id)
// 		.then(() => {
// 			dispatch({type: 'deleteWishlist', data: id})
// 			history.push('/main')
// 		})
// 	}
// 	return (
// 		<div>
// 			<p>Wishlist: {wishlist.name}</p>			

// 			{loggedInUser  &&
// 				<Panel>
// 					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update</Button>
// 					<Button onClick={handleDelete}>Delete</Button>
// 				</Panel>
// 			}
// 		</div>
// 	)
// }