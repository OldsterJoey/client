import React, {Fragment} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {deleteWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'
import WishDetails from'./WishDetails'

export default function WishlistDetails(props) {	
	const {dispatch} = useGlobalState()
	const {child, childId, wishlist} = props
	const {id} = useParams()
	let history = useHistory()
	console.log(props)


	function handleDelete() {
		deleteWishlist(wishlist.id)
		.then(() => {
			dispatch({type: 'deleteWishlist', data: wishlist.id})
			history.push(`/child/${childId}`);
			window.location.reload(true); 
		})
	}
	// const wishes = wishlist.wishes
	// console.log(wishes)

	return (
		<div>
			{wishlist ? 
			<>
			<div>
				<p>Wishlist: {wishlist.name}</p>

				<Panel>
					<Button onClick={() => history.push(`/wishlist/update/${wishlist.id}`)}>Update Wishlist</Button>
					<Button onClick={handleDelete}>Delete Wishlist</Button>
				</Panel>	

				<WishDetails   
				wishlist={wishlist} 
				childId={childId} 
				wishlistId={wishlist.id}
				wishes={wishlist.wishes}
				/>
			</div>

			</>
			:
			// <Fragment wishlist={wishlist} wishlistId={wishlist.id} child={child} childId={childId}>
			<div>
				<p>No wishlist has been saved yet</p>
				<Link to={`/wishlist/new?child_profile_id=${childId}`}>Create Wishlist</Link>
				</div>
		
			// </Fragment>
			}
		</div>

	)
}