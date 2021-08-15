import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import WishesDetails from './WishDetails'


function useQuery() {
	return new URLSearchParams(useLocation().search);
  }

export default function NewWishes() {
	let query = useQuery();

	const initialFormState = {
		wishes: [
			{
			firstname: '',
			wish_list_id: query.get("wish_list_id")
			},
			{
				secondname: '',
				wish_list_id: query.get("wish_list_id")
			},
			{
				thirdname: '',
				wish_list_id: query.get("wish_list_id")
			}

		]
	}

	console.log(query)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
	const {wishes} = store
	const id = initialFormState.wish_list_id



	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		createWishlist({...formState})
		.then((wish) => {
		
			dispatch({type: 'addWish', data: wish})
			history.push(`/wishlist/${id}`)
		})
		.catch((error) => console.log(error))

	}
	console.log("rendering New Wishes")
	return (
		<form className = "wishNew">
			<Label>Wishes:</Label>
			{wishes.map((wish, index) => (
				<BigTextInput key={index}
				placeholder="First Wish"
					index={index}
					wish={wish}
					type='text' 
					name='name' 
					value={formState.firstname} 
					onChange={handleChange}></BigTextInput>

				))}
					<Button onClick={handleClick}>Update Wishes</Button>
		</form>
	)
}