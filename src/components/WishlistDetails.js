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
	const {wishlist} = props
console.log(props)
	let history = useHistory()

	if (!wishlist) return (
	<div>
		<p>No wishlist has been saved yet</p>
		<Link to={`/wishlist/new?child_profile_id=${id}`}>Create Wishlist</Link>
	</div>
	)
	function handleDelete() {
		deleteWishlist(wishlist.id)
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/main`) 
		})
	}
	// const wishes = wishlist.wishes
	// console.log(wishes)

	return (
		<div>
			<p>Wishlist: {wishlist.name}</p>


			<Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>	

			<WishDetails wishlist={wishlist} wishlistId={wishlist.id} wishes={wishlist.wishes}/>

		</div>

	)
}