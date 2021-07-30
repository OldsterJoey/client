import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Panel,Label, Input, Button} from './Styled'
import {signUp} from '../services/authServices'
import {useGlobalState} from '../utils/stateContext'

export default function SignUp() {
	const initialFormState = {
		username: '', 
		email: '', 
		password: '', 
		password_confirmation: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	let history = useHistory()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleRegister(event) {
		event.preventDefault()
		signUp(formState)
		.then((user) => {
			dispatch({type: 'setLoggedInUser', data: user.username})
			history.push('/jokes')
		})
	}
	return (
		<>
		<Panel>
			<Label>Username:</Label>
			<Input type="text" name='username' value={formState.username} onChange={handleChange}></Input>
			<Label>Email:</Label>
			<Input type='email' name='email' value={formState.email} onChange={handleChange}></Input>
		</Panel>
		<Panel>
			<Label>Password:</Label>
			<Input type='password' name='password' value={formState.password} onChange={handleChange}></Input>
			<Label>Password Confirmation:</Label>
			<Input type='password' name='password_confirmation' value={formState.password_confirmation} onChange={handleChange}></Input>
			<Button onClick={handleRegister}>Sign Up</Button>
		</Panel>
		</>
	)
}