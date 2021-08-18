import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Container, Form, FormWrap, FormLabel, FormContent, FormInput, FormHeading, Button, FormButton} from './Styled'
import {createChild, getChild, updateChild} from '../services/childrenServices'
import {useGlobalState} from '../utils/stateContext'
import ChildrenNavbar from './Navbar/ParentNavbar'

export default function NewChild() {
	const initialFormState = {
		name: ''
	}
	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()

	useEffect(() => {
		if(id) {
			getChild(id)
			.then((child) => {
				console.log(child)
				setFormState({
					name: child.name
				})
			})
		}
	},[id])

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateChild( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateChild', data: {id: id, ...formState}})
				history.push(`/child/${id}`)
			})
			.catch((error) => console.log(error))
		}
		else {
			console.log(formState)
			createChild({...formState})
			
			.then((child) => {
				console.log(child)
				dispatch({type: 'addChild', data: child})
				history.push(`/main`)
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<div>
			<Container>
			<ChildrenNavbar />
				<FormWrap>
					<FormContent>
						<Form className='childNameForm' >
							<FormHeading>Here you can create or update your name:</FormHeading>
							<FormLabel>Child Name:</FormLabel>
							<FormInput type='text' name='name' value={formState.name} onChange={handleChange}></FormInput>
							<Button style={{width: '50px'}}onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
					</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</div>
	)
}
