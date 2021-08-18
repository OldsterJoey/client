import React, {useState, useEffect} from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {getWish, updateWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'


function useQuery() {
	return new URLSearchParams(useLocation().search);
  }
  
export default function UpdateWish(props) {
	let query = useQuery();
	// Setting up initial state
	const initialFormState = {
		wish: {
			name: '',
		},
		child_id: query.get('child_id')
	  }
	console.log(initialFormState)

	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const  {dispatch} = useGlobalState()


	useEffect(() => {
		if(id) {
			getWish(id)
			.then((wish) => {
				setFormState({
					wish: wish,
					name: wish.name})
		})
        .catch((error) => console.log(error));

	}},[id])
	console.log(formState)
	const childId = initialFormState.child_id
	// const wishlistId = wish.wish_list_id

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}


	function handleClick(event) {
		event.preventDefault()
		console.log(formState.child_id)

		if(id) {
			updateWish( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateWish', data: {id: id, ...formState}})
<<<<<<< HEAD
				history.push(`/wishlist/${wishlistId}`)
=======
				history.push(`/child/${childId}`)
>>>>>>> main
			})
		}
	}
	return (

		<div>
			<Label>Wish:</Label>
				<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
				<Button onClick={handleClick}>Update Wishes</Button>

		</div>

	)
}
