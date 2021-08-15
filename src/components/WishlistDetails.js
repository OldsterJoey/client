import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {LineWrapper,Button, BtnWrapper, Btn} from './Styled'
import {deleteWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'
import WishDetails from'./WishDetails'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
		<ListGroup variant="flush">
			<ListGroup.Item>Wishlist:</ListGroup.Item>
			<LineWrapper>
				<ListGroup.Item>Name: {wishlist.name}
				<ButtonGroup aria-label="">
					<BtnWrapper>
						<Btn onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist Name</Btn>
					</BtnWrapper>

					<BtnWrapper>
						<Btn onClick={handleDelete}>Delete Wishlist Name</Btn>
					</BtnWrapper>
				</ButtonGroup>
				</ListGroup.Item>
			</LineWrapper>
		
			<WishDetails wishlist={wishlist} wishlistId={wishlist.id} wishes={wishlist.wishes}/>
		</ListGroup>

		

	)
}