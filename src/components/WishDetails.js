import React, {useState, useEffect}  from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {getWish, createWish, updateWish, deleteWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import {deleteWishlist, 
	getWishlist
} from '../services/wishlistsServices'

export default function WishDetails(child) {
    // const [wishlist,setWishlist] = useState(null)

	const {store,dispatch} = useGlobalState()
    const {wishes} = store
	const {id} = useParams()
	console.log(wishes)

    // wishlist.find(wishlist => wishlist.child_profile_id === child.id)
    // console.log(wishlist)
	// useEffect(() => {
	// 	getWishlist(id)
	// 	.then((wishlist) => setWishlist(wishlist))
	// 	.catch((error) => console.log(error))
	// },[id])

    const wish = wishes.find(wish => wish.id === parseInt(id))
	console.log(wish)
	let history = useHistory()

	function handleDelete() {
		deleteWish(id)
		// deleteWishes(wishlist[wishes]) - is this the right way to delete the dependent wishes?
		.then(() => {
			dispatch({type: 'deleteWishlist', data: id})
			history.push(`/main`) 
			// not sure if that is the right way to get back to the child who used to have that wishlist
		})
	}
    // const wishes = wishlist && wishlist.wishes //review

    // if(!wish) return null
    return (
        <div>
            <p>{wish.name}</p>
            <Panel>
				<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wish</Button>
				<Button onClick={handleDelete}>Delete Wish</Button>
			</Panel>
        </div>
    )
}