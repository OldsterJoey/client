import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {getWishlist, updateWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'

export default function UpdateWishlist(props) {
	const initialFormState = {
		name: '',
		child_profile_id: useParams().id  
	}

	console.log(props)
	const {child} = props
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {children} = store;

	// const child = children.find((wish) => wish.id = parseInt(id))


	useEffect(() => {
		if(id) {
			getWishlist(id)
			.then((wishlist) => {
				setFormState({
					wishlist: wishlist,
					name: wishlist.name,
				})
			})
            .catch((error) => console.log(error));
	}},[id, children])


	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		console.log(formState.wishlist.child_profile_id)
		if(id) {
			updateWishlist( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateWishlist', data: {id: id, ...formState}})
				history.push(`/child/${formState.wishlist.child_profile_id}`)
			})
		}
	}
	console.log("rendering Update Wishlist")

	return (
		<div>

			<Label>Wishlist:</Label>
			<BigTextInput type='text' name='name' value={formState.name} onChange={handleChange}></BigTextInput>
			<Button onClick={handleClick}>Update</Button>
		</div>
	)
}
