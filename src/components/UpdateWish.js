import React, {useState, useEffect} from 'react'
import {useHistory, useParams, useLocation} from 'react-router-dom'
import {Container, Form, FormWrap, FormLabel, FormContent, FormInput, FormHeading, Button, FormButton} from './Styled'
import {getWish, updateWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import ChildrenNavbar from './Navbar/ParentNavbar'


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
				history.push(`/child/${childId}`)
			})
		}
	}
	return (

		<div>
			<Container>
				<ChildrenNavbar />
				<FormWrap>
					<FormContent>
						<Form>						
							<FormHeading>Changed your mind? No worries! Update your wish</FormHeading>
							<FormLabel>Wish:</FormLabel>
							<FormInput type='text' name='name' value={formState.name} onChange={handleChange}></FormInput>
							<Button style={{width: '120px'}}onClick={handleClick}>Update Wishes</Button>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>

		</div>

	)
}
