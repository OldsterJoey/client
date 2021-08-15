import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {getWish, updateWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'

export default function UpdateWish() {
	const initialFormState = {
		name: '',
		wish_list_id: ''    
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {store, dispatch} = useGlobalState()
	const {wishes, wishlists} = store;

	useEffect(() => {
		if(id) {
			getWish(id)
			.then((wish) => {
                const wishlist = wishlists.find((wishlist) => wishlist.id === wish.wish_list_id)
				setFormState({
					name: wish.name,
                    wish_list_id: wishlist.id
				})

			})
            .catch((error) => console.log(error));
	}},[id, wishlists])

	const wish = wishes.find((wish) => wish.id = parseInt(id))
	// const wishlistId = wish.wish_list_id

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateWish( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateWish', data: {id: id, ...formState}})
				history.push(`/child/${id}`)
			})
		}
	}
	return (

		<div key={wish.index}>
			<Label>Wish:</Label>
			<BigTextInput key={wish.id} type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>Update Wishes</Button>

		</div>
	)
}
