import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {getWishlist,createWishlist, updateWishlist} from '../services/wishlistsServices'
import {getWish,createWish, updateWish} from '../services/wishlistsServices'

import {useGlobalState} from '../utils/stateContext'

export default function WishlistDetails() {
	const initialFormState = {
		name:  "",
		wishes: []
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()
    console.log()

	useEffect(() => {
		if(id) {
			getWishlist(id)
			.then((wishlist) => {
				console.log(wishlist)
				setFormState({
					wishlist_id: wishlist.id,
					name: wishlist.name, 
					wishes: wishlist.wishes
				})
			})
		}
	},[id])


	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateWishlist( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateWishlist', data: {id: id, ...formState}})
				dispatch({type: 'updateWish', data: {id: id, ...formState}})
				history.push(`/wishlist/${id}`)
			})
		}
		else {
			createWishlist({...formState})
			.then((child) => {
				dispatch({type: 'createWishlist', data: child})
				history.push(`/wishlist/${id}`)
			})
			.catch((error) => console.log(error))
		}
	}

	// function handleClickWishes(event) {
	// 	event.preventDefault()
	// 	if(id) {
	// 		updateWish( {id: id, ...formState})
	// 		.then(() => {
	// 			dispatch({type: 'updateWish', data: {id: id, ...formState}})
	// 			history.push(`/child/${id}`)
	// 		})
	// 	}
	// 	else {
	// 		createWish({...formState})
	// 		.then((child) => {
	// 			dispatch({type: 'createWish', data: child})
	// 			history.push(`/child/${id}`)
	// 		})
	// 		.catch((error) => console.log(error))
	// 	}
	// }
	return (
		<div>
			<Label>Wishlist:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>

			<Label>Wishes:</Label>

			<BigTextInput type='text' name='wishName1' value={formState.wishName1} onChange={handleChange}></BigTextInput>
			<BigTextInput type='text' name='wishName2' value={formState.wishName2} onChange={handleChange}></BigTextInput>
			<BigTextInput type='text' name='wishName3' value={formState.wishName3} onChange={handleChange}></BigTextInput>

			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}