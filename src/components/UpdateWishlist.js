import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {Container, FormHeading, FormWrap, Form, FormInput, FormLabel, FormContent, Button} from './Styled'
import {getWishlist, updateWishlist} from '../services/wishlistsServices'
import {useGlobalState} from '../utils/stateContext'
import ChildrenNavbar from '../components/Navbar/ChildrenNavbar'

export default function UpdateWishlist(props) {
	const initialFormState = {
		name: '',
		child_profile_id: useParams().id  
	}

	console.log(props)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {id} = useParams()
	const {dispatch} = useGlobalState()

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
	}},[id])


	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value		
		})
		
	}
	console.log(formState)
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
			<Container>
				<ChildrenNavbar />
				<FormWrap>
					<FormContent>
						<Form>						
							<FormHeading>Here you can update your wishlist:</FormHeading>

							<FormLabel>Wishlist:</FormLabel>
							<FormInput type='text' name='name' value={formState.name} onChange={handleChange}></FormInput>
							<Button style={{width: '170px'}}onClick={handleClick}>Update Wishlist Name</Button>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</div>
	)
}
