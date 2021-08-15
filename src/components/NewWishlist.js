import React, {useState, useEffect} from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createWishlist, getWishlist, updateWishlist} from '../services/wishlistsServices'
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
	// let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {children} = store;
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
			<Button onClick={handleClick}>
				{/* {id ? 'Update' : 'Create'} */}
	Create Wishlist
				</Button>
		</div>
	)
}
