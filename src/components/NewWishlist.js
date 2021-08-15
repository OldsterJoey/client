import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'


function useQuery() {
	return new URLSearchParams(useLocation().search);
  }

export default function NewWishlist() {
	let query = useQuery();

	const initialFormState = {
		name: '',
		child_profile_id: query.get("child_profile_id")
    
	}
	console.log(query)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {dispatch} = useGlobalState()
	const id = initialFormState.child_profile_id



	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		createWishlist({...formState})
		.then((wishlist) => {
			debugger
			dispatch({type: 'addWishlist', data: wishlist})
			history.push(`/child/${id}`)
		})
		.catch((error) => console.log(error))

	}
	console.log("rendering New Wishlist")
	return (
		<div>

			<Label>Wishlist:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>Create Wishlist</Button>
		</div>
	)
}
