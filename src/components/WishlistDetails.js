import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Panel,Label, Input, Button} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {getWishlist, updateWishlist, createWishlist} from '../services/wishlistsServices'

export default function WishlistDetails() {
	const initialFormState = {
		name: '',
		wishes: []
	}
	const [formState, setFormState] = useState(initialFormState)

	let history = useHistory()
	let {id} = useParams()

	const {dispatch} = useGlobalState()
	// const {wishlist, wishes} = store;

	useEffect(() => {
		if(id) {
			getWishlist(id)
			.then((wishlist) => {
				console.log(wishlist)
			})
			.catch((error) => console.log(error))

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
				history.push(`wishlist/update/${id}`)
			})
		}
		else {

			createWishlist({...formState})
			.then((wishlist) => {
		
				dispatch({type: 'addWishlist', data: wishlist})
				history.push('/child/:id')
			})
			.catch((error) => console.log(error))
		}
	}

	return (
		<>
		<Panel>
			<Label>Wishlist Name:</Label>
			<Input type="text" name='wishlistName' value={formState.name} onChange={handleChange}></Input>
			<Label>Wishes:</Label>
			<li>
				{/* Both wishlist and wishes have a component name - maybe we should define it differently to actuallly parse the data correctly */}
				<ol><Input type='text' name='wish' value={formState.name} onChange={handleChange}></Input></ol>
				<ol><Input type='text' name='wish' value={formState.name} onChange={handleChange}></Input></ol>
				<ol><Input type='text' name='wish' value={formState.name} onChange={handleChange}></Input></ol>
			</li>

		</Panel>
		<Button onClick={handleClick}>{id ? 'Update Wishlist' : 'Create Wishlist'}</Button>

		</>
	)
}