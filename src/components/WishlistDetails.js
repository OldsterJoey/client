import React  from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {deleteWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'

export default function WishlistDetails() {
	const {store,dispatch} = useGlobalState()
    const {wishlists} = store
	const {id} = useParams()
	console.log(wishlists)

	const wishlist = wishlists.find(wishlist => wishlist.id === parseInt(id))
	console.log(wishlist)
	let history = useHistory()

	const wishes = wishlist && wishlist.wishes 

	if (!wishes) {
	return (
	<div>
		{wishlist.name}
		<p>No wishes have been saved yet</p>
		<Button onClick={() => history.push(`/wishlist/update/${wishlist.id}`)}>Update Wishlist</Button>
	</div>
	)}
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