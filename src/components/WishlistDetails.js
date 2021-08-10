
import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {getWishlist, deleteWishlist} from '../services/wishlistServices'

import {Button, Panel} from './Styled'
import {useGlobalState} from '../utils/stateContext'

export default function WishlistDetails({history}) {
	const [wishlist,setWishlist] = useState(null)
	const {id} = useParams()
	const {store,dispatch} = useGlobalState()
    const {loggedInUser} = store

    useEffect(() => {
		getWishlist(id)
		.then((wishlist) => setWishlist(wishlist))
		.catch((error) => console.log(error))
	},[id])

    if(!wishlist) return (
        <div>
            {child.name}
            <p>No wishlist has been saved yet</p>
            <button>Add a wishlist</button>
        </div>)



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
			<p>Wishes:</p>
                <Panel>
					<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
				
		</div>
	)
}