
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getWishlist, deleteWishlist} from '../services/wishlistServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'

export default function WishlistDetails() {
	const [wishlist,setWishlist] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
    const {loggedInUser} = store

    useEffect(() => {
		getWishlist(id)
		.then((wishlist) => setWishlist(wishlist))
		.catch((error) => console.log(error))
	},[id])

    if(!wishlist) return null

	function handleDelete() {
		deleteWishlist(id)
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push('/child/:id')
		})
	}
	return (
		<div>
			<p>Name: {wishlist.name}</p>			
			<p>Wishes: 
                {wishlist.wishes} </p>
                <Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
				
		</div>
	)
}