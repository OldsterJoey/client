import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'


function useQuery() {
	return new URLSearchParams(useLocation().search);
  }

export default function NewWish() {
	let query = useQuery();
	console.log(query)

	const initialFormState = {
			name: '',
			wish_list_id: query.get("wish_list_id")
	}

	console.log(query)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {dispatch} = useGlobalState()
	const wishlistId = initialFormState.wish_list_id



	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		createWish({...formState})
		.then((wish) => {
			dispatch({type: 'addWish', data: wish})
			history.push(`/wishlist/${wishlistId}`)
		})
		.catch((error) => console.log(error))

	}
	console.log("rendering New Wish")
	return (
		<form className = "wishNew">
			<Label>Wish:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>Create a new Wish</Button>
		</form>
	)
}