import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
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
		console.log(wishId)
		deleteWish(wishId)
		.then(() => {
			dispatch({type: 'deleteWish', data: wishId})
			history.push(`/child/${childId}}`) 
		})
	}


    return (
        <div>
			<p>Wishes are:</p>
			{wishes.map((wish, index) => {
				return(
					<>
							<ol>
								<li key={index} wish={wish}>
								<p>{wish.name}</p>
								<Panel>
									<Button onClick={() => history.push(`/wish/update/${wish.id}`)}>Update Wish</Button>
									<Button onClick={() => handleDelete(wish.id)}>Delete Wish</Button>

								</Panel>
								</li>
							</ol>
					</>
				)
			})}
			<Link to={`/wishes/new?wish_list_id=${wishlistId}&child_id=${childId}`}>Add New Wish</Link>

        </div>
    )
}