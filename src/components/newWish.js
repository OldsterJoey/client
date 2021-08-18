import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {Container, Form, FormWrap, FormLabel, FormContent, FormInput, FormHeading, Button, FormButton} from './Styled'
import {createWish} from '../services/wishesServices'
import {useGlobalState} from '../utils/stateContext'
import ChildrenNavbar from '../components/Navbar/ChildrenNavbar'


function useQuery() {
	return new URLSearchParams(useLocation().search);
  }

export default function NewWish() {
	let query = useQuery();
	console.log(query)

	const initialFormState = {
			name: '',
			wish_list_id: query.get("wish_list_id"),
			child_id: query.get('child_id')
	}

	console.log(query)
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	const {dispatch} = useGlobalState()
	const id = initialFormState.wish_list_id
	const childId = initialFormState.child_id



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
			history.push(`/child/${childId}`)
		})
		.catch((error) => console.log(error))

	}
	console.log("rendering New Wish")
	return (
	<Container>
		<ChildrenNavbar />
		<FormWrap>
			<FormContent>
				<Form className='wishForm'>
				<FormHeading>Tell us what you wish for!</FormHeading>

					<FormLabel>Wish:</FormLabel>
					<FormInput key={id} type='text' name='name' value={formState.name} onChange={handleChange}></FormInput>
					<Button style={{width: '140px'}}onClick={handleClick}>Create a new Wish</Button>
				</Form>
			</FormContent>
		</FormWrap>
	</Container>
	)
}