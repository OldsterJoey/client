import React  from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Button} from './Styled'
import {getWish, createWish, updateWish, deleteWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'

export default function WishDetails() {
	const {store,dispatch} = useGlobalState()
    const {wishes} = store
	const {id} = useParams()
	console.log(wishes)

    const wish = wishes.find(wish => wish.id === parseInt(id))
	console.log(wish)
	let history = useHistory()

    // const wishes = wishlist && wishlist.wishes //review

    // if(!wish) return null
    // return (
    //     <div>
    //         <Panel>
	// 			<Button onClick={() => history.push(`/wishlist/update/${id}`)}>Update Wishlist</Button>
	// 			<Button onClick={handleDelete}>Delete Wishlist</Button>
	// 		</Panel>
    //     </div>
    // )
}