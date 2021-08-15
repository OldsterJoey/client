import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {deleteWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import {Link} from 'react-router-dom'

export default function WishesDetails(props) {

	const {dispatch} = useGlobalState()
	const {id} = useParams()
	const {wishlist} = props
	console.log(props)

	const wishes=wishlist.wishes
	let history = useHistory()

	if (wishes.length === 0) return (
	<div>
		<p>No wishes have been saved yet</p>
		<Link to={`/wishes/new?wish_list_id=${id}`}>Create Wishes</Link>
	</div>
	)	
	console.log(wishes)

    // const wishes = wishlist && wishlist.wishes //review

    const wish = wishes.find(wish => wish.id === parseInt(id))

	function handleDelete() {
		deleteWish(wish.id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWish', data: id})
			history.push(`/wishlist/${id}}`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
		})
	}

    return (
        <div>
			<p>Wishes are:</p>
			{wishes.map((wish, index) => {
				return(
					<>
            			<p>{wish.name}</p>
			            <Panel key={index}>
							<Button onClick={() => history.push(`/wish/update/${wish.id}`)}>Update Wishes</Button>
							<Button onClick={handleDelete}>Delete Wish</Button>
						</Panel>
					</>
				)
			})}

        </div>
    )
}