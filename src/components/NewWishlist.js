import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createWishlist, getWishlist, updateWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewWishlist() {
	const initialFormState = {
		name: '',
        child_profile_id: 4    
    }
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {children} = store;

	useEffect(() => {
		if(id) {
			getWishlist(id)
			.then((wishlist) => {
				console.log(wishlist)
                const child = children.find((child) => child.id === wishlist.child_profile_id)
				setFormState({
					name: wishlist.name,
                    child_profile_id: child.id
				})

			})
            .catch((error) => console.log(error));
	

	}},[id])

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
				history.push(`/wishlist/${id}`)
			})
		}
		else {
			createWishlist({...formState})
			.then((wishlist) => {
		
				dispatch({type: 'addWishlist', data: wishlist})
				history.push(`/wishlist/${id}`)
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>

			<Label>Wishlist:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
