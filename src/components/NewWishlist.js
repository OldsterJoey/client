import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {getWishlist,createWishlist, updateWishlist} from '../services/wishlistsServices'
import {getWish, createWish, updateWish} from '../services/wishesServices'

import {useGlobalState} from '../utils/stateContext'
import { getWishes } from '../services/wishesServices'

export default function WishlistDetails() {
	const initialFormState = {
		name:  "",
		wishes: [
			{
				id: '',
				name: '',
			},
			{
				id:'',
				name: '',
			},
			{
				id:'',
				name: ''
			}
		]
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {store, dispatch} = useGlobalState()
    const {wishes} = store
    console.log(wishes)

	useEffect(() => {
		if(id) {
			getWishlist(id, wishes)
			.then((wishlist) => {
				console.log(wishlist)
				setFormState({
					wishlist_id: wishlist.id,
					name: wishlist.name, 
					wishes: wishlist.wishes 
				})
			})
		}
	},[id, wishes])


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
				dispatch({type: 'updateWish', data: {id: id, ...setFormState(wishes)}})
				history.push(`/wishlist/${id}`)
			})
		}
		else {
			createWishlist({...formState})
			.then((wishlist) => {
				dispatch({type: 'createWishlist', data: wishlist})
				history.push(`/wishlist/${id}`)
			})
			.catch((error) => console.log(error))
		}
	}

	return (
		<div>
			<div>
			<Label>Wishlist:</Label>
				<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
	
			</div>
		
			<Label>Wishes:</Label>
			{wishes.map((wish, index) => {
				return(
					<ol>
						<BigTextInput key={index} type='text' name='name' value={wish.name} onChange={handleChange}></BigTextInput>
					</ol>
				)
				// return <li key={subIndex}>{subWishes.name}</li>
			})}

			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}