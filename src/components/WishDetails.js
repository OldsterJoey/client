import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button, Text,ContentWrapperWishes} from './Styled'
import {deleteWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'

export default function WishesDetails(props) {

	const {dispatch} = useGlobalState()
	const {id} = useParams()
	const {wishlist, wishlistId, wishes, childId} = props
	console.log(props)

	let history = useHistory()

	if (wishes.length === 0) return (
	<div>
		<p>No wishes have been saved yet</p>
		<Link to={`/wishes/new?wish_list_id=${wishlistId}&child_id=${childId}`}>Create Wishes</Link>
	</div>
	)	
	console.log(wishes)

    // const wishes = wishlist && wishlist.wishes //review

	function handleDelete(wishId) {
		console.log(childId)
		deleteWish(wishId)
		.then(() => {
			dispatch({type: 'deleteWish', data: wishId})
			history.push(`/child/${childId}`);
			window.location.reload(true); 
		})
		.catch((error) => console.log(error))

	}


    return (
        <div>
			<Text style={{paddingLeft: '25px' }}>Wishes are:</Text>
				<ContentWrapperWishes>

			{wishes.map((wish, index) => {
				return(
					<>
							<ul>
								<li key={index} wish={wish}>
								<Text>{wish.name}</Text>
								<Panel>
									<Button onClick={() => history.push(`/wish/update/${wish.id}?child_id=${childId}`)}>Update Wish</Button>
									<Button onClick={() => handleDelete(wish.id)}>Delete Wish</Button>
								</Panel>
								</li>
							</ul>

					</>
				)
			})}
						</ContentWrapperWishes>

			{
				wishes.length < 3 &&
				<Button style={{alignItem: 'center'}}onClick={() => history.push(`/wishes/new?wish_list_id=${wishlistId}&child_id=${childId}`)}>Add New Wish</Button>
			}


        </div>
    )
}