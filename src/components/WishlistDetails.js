import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {deleteWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'
import WishDetails from'./WishDetails'

export default function WishlistDetails(props) {

	const {dispatch} = useGlobalState()
	const {id} = useParams()
	const {childId} = props
	console.log(props)
	let history = useHistory()

	const {wishlist} = props

	// const wishlist = child.wish_list
	if (!wishlist) return (
	<div>
		<p>No wishlist has been saved yet</p>
		<Link to={`/wishlist/new?child_profile_id=${childId}`}>Create Wishlist</Link>
	</div>
	)
	const wishlistId = wishlist.id
	console.log(wishlistId)
	const wishlistChildId = wishlist.child_profile_id


	function handleDelete() {
		deleteWishlist(wishlist.id)
		.then(() => {
			dispatch({type: 'deleteWishlist', data: wishlist.id})

			// history.push(`/child/${id}`) 
		}).finally(() => history.push(`/child/${id}`) )
	}
	// const wishes = wishlist.wishes
	// console.log(wishes)


	return (
		<div>
			<p>Wishlist: {wishlist.name}</p>
			<Panel>
					<Button onClick={() => history.push(`/wishlist/update/${wishlistId}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>	

			<WishDetails wishlist={wishlist} wishlistId={wishlist.id} wishes={wishlist.wishes}/>

		</div>

	)
}
